import { NextApiRequest, NextApiResponse } from "next";
import { api } from "services/api";
import { Readable } from "stream";
import Stripe from "stripe";
import { stripe } from "../../services/stripe";
import { managePurchase } from "./_lib/managePurchase";

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.updated",
  "customer.subscription.deleted",
  "customer.created",
]);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const secret = req.headers["stripe-signature"];

    let event: Stripe.Event;

    try {
      if (secret) {
        event = stripe.webhooks.constructEvent(
          buf,
          secret,
          process.env.STRIPE_WEBHOOK_SECRET
            ? process.env.STRIPE_WEBHOOK_SECRET
            : ""
        );

        const { type } = event;

        if (relevantEvents.has(type)) {
          try {
            switch (type) {
              case "checkout.session.completed":
                const checkoutSession = event.data
                  .object as Stripe.Checkout.Session;
                if (checkoutSession.customer) {
                  await managePurchase(checkoutSession.customer.toString());
                }
                break;
              // case "customer.created":
              // try {
              //   api.post("/telegram_push", {
              //     message: `Usuário '${{checkoutSession.email}}' Cadastrado`,
              //     json: checkoutSession,
              //   });
              // } catch (error) {
              //   console.log(error);
              // }
              // break;
              default:
                throw new Error("Unhandled event");
            }
          } catch (err) {
            return res.json({ error: "Webhook handler failed" });
          }
        }
      }
    } catch (err: any) {
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
