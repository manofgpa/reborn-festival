import { query as q } from "faunadb";
import { api } from "services/api";

import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

interface User {
  ref: () => string;
  data: {
    sessionId: string;
    stripe_customer_id: string;
    first_name: string;
    last_name: string;
    telephone_number: string;
    email: string;
    cpf: string;
    participants_names: string[];
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

    // api.post("https://www.rebornfestival.com.br/api/telegram_push", {
    //   message: `${user.data.first_name} ${
    //     user.data.last_name
    //   } finalizou a compra de ${
    //     paymentData.quantity
    //   } ingressos. Valor total da compra: ${new Intl.NumberFormat("pt-BR", {
    //     style: "currency",
    //     currency: "BRL",
    //   }).format(paymentData.amount_total / 100)}.`,
    //   json: {
    //     convidados: user.data.participants_names,
    //   },
    // });
  } catch (error) {
    console.log(error);
  }
}
