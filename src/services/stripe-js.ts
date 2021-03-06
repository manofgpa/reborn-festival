import { loadStripe } from "@stripe/stripe-js";

export const getStripeJs = async () => {
  if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_LIVE) {
    const stripeJs = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_LIVE
    );
    return stripeJs;
  }
};
