import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY_LIVE ? process.env.STRIPE_API_KEY_LIVE : "",
  {
    apiVersion: "2020-08-27",
    appInfo: {
      name: "Reborn Festival",
      version: "0.1.0",
    },
  }
);
