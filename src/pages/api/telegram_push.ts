import TelegramBot from "node-telegram-bot-api";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = process.env.TELEGRAM_API_KEY;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const bot = new TelegramBot(token, { polling: false });

  const { message, json } = req.body;
  // const { message } = req.body;

  try {
    bot.sendMessage(
      chatId,
      // message
      message + "\n\n<pre>" + JSON.stringify(json, null, 2) + "</pre>",
      {
        parse_mode: "html",
      }
    );
  } catch (err) {
    console.log(
      "Something went wrong when trying to send a Telegram notification",
      err
    );
  }
};

const ACTIONS = {
  NEW_USER: "🙋‍♂️new user",
  NEW_MONITOR: "🖥 new monitor",
  LATENCY: "👨‍💻 somebody has used the latency tool",
  NEW_STATUS_PAGE: "📈 new status page",
  NEW_SUBSCRIPTION: "💰💰💰 a user has subscribed!",
  NEW_PAYMENT: "🤑 a payment has processed",
  WEEKLY_REPORTS_SENDING: "✴️ Weekly reports are being sent",
  WEEKLY_REPORTS_SENT: "✅ Weekly reports have been sent",
  END_TRIAL_USERS: "✋ end of trial users today",
  TRIAL_USERS_SOON_END: "👀 users that end their trials in 3 days",
};
