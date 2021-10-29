import { setCookie } from "nookies";
import { api } from "services/api";
import { getStripeJs } from "services/stripe-js";

type User = {
  first_name: string;
  last_name: string;
  quantity: number;
  email_confirmation: string;
  email: string;
  telephone_number: string;
  cpf: string;
  participants_names: [];
};

export const checkout = async (data: User) => {
  try {
    const response = await api.post("/buy", { data });

    const { sessionId, customer } = response.data;

    const stripe = await getStripeJs();

    localStorage.setItem("RebornFestivalStorage", JSON.stringify(data));

    setCookie(undefined, "rebornfestival.customer_id", customer, {
      maxAge: 60 * 5, // 5 minutes
      path: "/",
    });

    setCookie(undefined, "rebornfestival.cpf", data.cpf, {
      maxAge: 60 * 25, // 25 minutes TODO change time to 5 minutes
      path: "/",
    });

    if (stripe) {
      await stripe.redirectToCheckout({
        sessionId,
      });
    }
  } catch (error) {
    alert(error);
  }
};
