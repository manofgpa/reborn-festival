import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from "services/fauna";
import { query as q } from "faunadb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { first_name, last_name, email, cpf, quantity } = req.body.data;

      const data = {
        first_name,
        last_name,
        email,
        cpf,
        quantity,
        paid: false,
      };

      await fauna.query(q.Create(q.Collection("users"), { data }));

      return res.send(`User ${data.first_name} ${data.last_name} created.`);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
