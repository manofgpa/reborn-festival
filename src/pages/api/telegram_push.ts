import TelegramBot from "node-telegram-bot-api";
import("bluebird");

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const token = process.env.TELEGRAM_API_KEY;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    res.setHeader("Access-Control-Allow-Origin", "*");

    if (token) {
      const bot = new TelegramBot(token, { polling: false });
      const { message, json } = req.body;

      try {
        if (chatId) {
          bot.sendMessage(
            chatId,
            message + "\n\n<pre>" + JSON.stringify(json, null, 2) + "</pre>",
            {
              parse_mode: "HTML",
            }
          );
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
