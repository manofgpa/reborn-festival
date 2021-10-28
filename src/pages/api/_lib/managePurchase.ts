import { query as q } from "faunadb";

import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

export async function managePurchase(
  paymentIntent: string,
  customerId: string,
  createAction = false
) {
  try {
    const userRef = await fauna.query(
      q.Select(
        "ref",
        q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
      )
    );

    const payment = await stripe.paymentIntents.retrieve(paymentIntent);

    const paymentData = {
      created_at: payment.created,
      id: payment.id,
      userId: userRef,
      status: payment.status,
      amount: payment.amount_received,
      quantity: payment.amount_received / 100 / 250,
    };

    await fauna.query(
      q.Create(q.Collection("purchases"), { data: paymentData })
    );
  } catch (error) {
    console.log(error);
  }
}
