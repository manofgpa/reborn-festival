import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2021-10-27",
  appInfo: {
    name: "Reborn Festival",
    version: "0.1.0",
  },
});
