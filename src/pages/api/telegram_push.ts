import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const token = process.env.TELEGRAM_API_KEY;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    res.setHeader("Access-Control-Allow-Origin", "*");

    if (token) {
      try {
        const { message } = req.body;

        const TELEGRAM_API = `http://api.telegram.org/bot${token}/sendMessage`;
        const text = encodeURIComponent(message);
        const url = `${TELEGRAM_API}?chat_id=${chatId}&text=${text}`;

        try {
          const response = axios.post(url, text);
          return res.status(200).json({
            error: false,
          });
        } catch (error) {
          console.log(error);
          res.status(500).end("Error");
        }
      } catch (err) {
        console.log(
          "Something went wrong when trying to send a Telegram notification",
          err
        );
      }
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
