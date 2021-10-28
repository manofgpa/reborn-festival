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

    console.log(userRef);
  } catch (error) {
    console.log(error);
  }

  // const subscription = await stripe.subscriptions.retrieve(paymentIntent);

  // const subscriptionData = {
  //   id: subscription.id,
  //   userId: userRef,
  //   status: subscription.status,
  //   price_id: subscription.items.data[0].price.id,
  // };

  // if (createAction) {
  //   await fauna.query(
  //     q.Create(q.Collection("subscriptions"), { data: subscriptionData })
  //   );
  // } else {
  //   await fauna.query(
  //     q.Replace(
  //       q.Select(
  //         "ref",
  //         q.Get(q.Match(q.Index("subscription_by_id"), paymentIntent))
  //       ),
  //       { data: subscriptionData }
  //     )
  //   );
  // }
}
