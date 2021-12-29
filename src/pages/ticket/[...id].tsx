import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { GetServerSideProps } from "next";

import { query as q } from "faunadb";
import { fauna } from "services/fauna";
import { TicketFailResult } from "components/TicketFailResult";
import { TicketSuccessResult } from "components/TicketSuccessResult";
import { TicketUsedResult } from "components/TicketUsedResult";
import { api } from "services/api";

interface TicketValidatorProps {
  error: boolean;
  message: string;
  user: string;
}

interface UserTicket {
  ref: string;
  data: {
    participant_name: string;
    verified: boolean;
  };
}

const TicketValidator = ({ error, message, user }: TicketValidatorProps) => {
  return (
    <Box position="relative" h="100vh">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform=" translate(-50%, -50%);"
        pb={20}
        align="center"
        w="100%"
      >
        <Image src={"/images/logo.png"} />
        <Text
          as="h1"
          color={"white"}
          fontWeight={700}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          REBORN FESTIVAL
        </Text>
        {!error && <TicketSuccessResult user={user} />}
        {message === "Ticket already validated" && (
          <TicketUsedResult user={user} />
        )}
        {message === "Invalid ticket" && <TicketFailResult />}
      </Box>
    </Box>
  );
};

export default TicketValidator;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let user = null;

  if (query.id) {
    const uuid = query.id[0];

    const uuidRegex =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

    if (!uuid || !uuid.match(uuidRegex)) {
      return {
        props: {
          error: true,
          message: "Invalid ticket",
        },
      };
    }

    try {
      const response = await fauna.query<UserTicket>(
        q.Get(q.Match(q.Index("user_by_uuid"), uuid))
      );

      user = response.data.participant_name;

      if (response.data.verified) {
        try {
          // api.post("http://localhost:3000/api/telegram_push", {
          await api.post("https://rebornfestival.com.br/api/telegram_push", {
            message: `Nome: ${user}. Ingresso já foi validado.`,
          });
        } catch (error) {
          console.log(error);
        }

        return {
          props: {
            error: true,
            message: "Ticket already validated",
            user,
          },
        };
      }

      await fauna.query(q.Update(response.ref, { data: { verified: true } }));
    } catch (error) {
      console.log(error);
    }
  }

  try {
    await api.post("https://www.rebornfestival.com.br/api/telegram_push", {
      message: `${user} está entrando no evento!`,
    });
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      error: false,
      message: "User found",
      user,
    },
  };
};
