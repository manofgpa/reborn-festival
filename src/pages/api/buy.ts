import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      // payment_method_types: ['card'],
      // customer: {},
      billing_address_collection: "required",
      line_items: [{ price: "price_1JpGnGGbooMTXZjSzzhiPhc1", quantity: 1 }],
      mode: "payment",
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
