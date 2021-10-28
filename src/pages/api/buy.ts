import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from "services/fauna";
import { stripe } from "../../services/stripe";
import { query as q } from "faunadb";

type User = {
  ref: {
    id: string;
  };
  data: {
    stripe_customer_id: string;
  };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { first_name, last_name, email, cpf, telephone, quantity } =
        req.body.data;

      const stripeCustomer = await stripe.customers.create({
        email,
      });

      let customerId = stripeCustomer.id;

      console.log("usuario criado no stripe, id => ", customerId);

      const data = {
        stripe_customer_id: customerId,
        first_name,
        last_name,
        telephone,
        email,
        cpf,
        quantity,
        paid: false,
      };

      await fauna.query(q.Create(q.Collection("users"), { data }));

      console.log("usuario criado no fauna");

      const stripeCheckoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        locale: "pt-BR",
        billing_address_collection: "auto",
        customer: customerId,
        line_items: [
          {
            price: process.env.STRIPE_TEST_PRICE,
            quantity,
            adjustable_quantity: {
              enabled: true,
            },
          },
        ],
        mode: "payment",
        allow_promotion_codes: true,
        success_url: process.env.STRIPE_SUCCESS_URL,
        cancel_url: process.env.STRIPE_CANCEL_URL,
      });

      return res.status(200).json({
        sessionId: stripeCheckoutSession.id,
        customer: stripeCheckoutSession.customer,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
