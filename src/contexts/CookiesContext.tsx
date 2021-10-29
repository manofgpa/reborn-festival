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
};

export const checkout = async (data: User) => {
  try {
    const response = await api.post("/buy", { data });

    const { sessionId, customer } = response.data;

    const stripe = await getStripeJs();
    console.log(data);

    localStorage.setItem("first_name", data.first_name);
    localStorage.setItem("last_name", data.last_name);
    localStorage.setItem("cpf", data.cpf);
    localStorage.setItem("email", data.email);
    localStorage.setItem("telephone_number", data.telephone_number);
    localStorage.setItem("quantity", String(data.quantity));

    setCookie(undefined, "rebornfestival.customer_id", customer, {
      maxAge: 60 * 5, // 5 minutes
      path: "/",
    });
    setCookie(undefined, "rebornfestival.cpf", data.cpf, {
      maxAge: 60 * 5, // 5 minutes
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
