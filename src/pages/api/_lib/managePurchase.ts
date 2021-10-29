import { query as q } from "faunadb";

import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

interface User {
  ref: () => string;
  data: {
    sessionId: string;
    stripe_customer_id: string;
  };
}

export async function managePurchase(paymentIntent = "", customerId: string) {
  try {
    const user = await fauna.query<User>(
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    );

    // const payment = await stripe.paymentIntents.retrieve(paymentIntent);
    const checkout = await stripe.checkout.sessions.listLineItems(
      user.data.sessionId
    );

    const paymentData = {
      stripe_customer_id: user.data.stripe_customer_id,
      payment_id: checkout.data[0].id,
      description: checkout.data[0].description,
      amount_total: checkout.data[0].amount_total,
      price_id: checkout.data[0].price?.id,
      product_id: checkout.data[0].price?.product,
      quantity: checkout.data[0].quantity,
    };

    await fauna.query(
      q.Create(q.Collection("purchases"), { data: paymentData })
    );
  } catch (error) {
    console.log(error);
  }
}
