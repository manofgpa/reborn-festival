import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  Box,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Confetti from "../components/Confetti";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";
import { query as q } from "faunadb";
import { fauna } from "../services/fauna";
import { stripe } from "services/stripe";

// TODO adicionar inputs demais participantes
// TODO completar pagina sucesso com dados dos convidados.

interface SuccessProps {
  amount_total: number;
  description: string;
  quantity: number;
}

export default function Success({
  amount_total,
  description,
  quantity,
}: SuccessProps) {
  const [confettiQuantity, setConfettiQuantity] = useState(200);
  const [isConfettiRunning, setIsConfettiRunning] = useState(true);
  const [localData, setLocalData] = useState({
    cpf: "",
    last_name: "",
    first_name: "",
    email: "",
  });

  const handleMoreConfetti = () => {
    setConfettiQuantity(confettiQuantity + 200);
  };

  const handleConfettiState = () => {
    setIsConfettiRunning(!isConfettiRunning);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = window.localStorage.getItem("RebornFestivalStorage");
      if (user) {
        setLocalData(JSON.parse(user));
      }
    }
  }, []);

  return (
    <Box h={["112vh", "100vh"]}>
      <Confetti
        confettiQuantity={confettiQuantity}
        isConfettiRunning={isConfettiRunning}
      />
      <Box
        maxWidth={600}
        align="center"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="100%"
        mt={[36, 0]}
        pb={[4, 0]}
      >
        <Box>
          <Image src={"/images/logo.png"} />
        </Box>
        <Box bgColor="yellow.600" py={[8, 12]} borderRadius={["0", "24"]}>
          <Text fontSize={["3xl", "4xl"]} color="gray.50">
            PRESENÇA CONFIRMADA!
          </Text>
        </Box>
        <Box mt={2}>
          <Text fontSize={"lg"}>
            {localData.first_name}, sua compra foi aprovada e sua presença no
            Reborn Festival está confirmada!
          </Text>
          <Image src={"/images/gifs/celebration-will-smith.gif"} mt={2} />
        </Box>
        <Box mx={2}>
          <Box align="left" my={4}>
            <Text fontSize={"xl"}>Resumo da compra</Text>
            <Text fontSize={"lg"} fontWeight="bold">
              {quantity} {quantity === 1 ? "ingresso" : "ingressos"}
            </Text>
            <Text mt={4}>
              Você receberá também uma confirmação no e-mail{" "}
              <Text as="span" fontWeight="bold">
                {localData.email}
              </Text>
            </Text>
          </Box>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="gray.100">Descrição</Th>
                <Th color="gray.100" align="center">
                  QTD
                </Th>
                <Th color="gray.100" isNumeric>
                  Vl Un
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{description}</Td>
                <Td>{quantity}</Td>
                <Td isNumeric>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(amount_total / 100 / quantity)}
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th isNumeric color="white" fontSize={16}>
                  TOTAL{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(amount_total / 100)}
                </Th>
              </Tr>
            </Tfoot>
          </Table>
          <Flex>
            <Box>
              <Text fontSize="lg" align="left" fontWeight="bold">
                Dados Pessoais
              </Text>
              <Box align="left" mt={1}>
                <Text>{`${localData.first_name} ${localData.last_name}`}</Text>
                <Text>{localData.email}</Text>
                <Text>CPF: {localData.cpf}</Text>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box my={4}>
          <HStack spacing={2} justify="center">
            <Button
              colorScheme={isConfettiRunning ? "red" : "green"}
              onClick={handleConfettiState}
            >
              {isConfettiRunning ? "Pausar confetti" : "Iniciar confetti"}
            </Button>
            <Button colorScheme="green" onClick={handleMoreConfetti}>
              Mais confetti
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (!cookies["rebornfestival.customer_id"]) {
    return {
      redirect: {
        destination: "/comprar",
        permanent: false,
      },
    };
  }

  // pegar session id do usuario

  const customerId = cookies["rebornfestival.customer_id"];
  const userRef = await fauna.query<{ sessionId: string }>(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );

  const purchase = await fauna.query<SuccessProps>(
    q.Select(
      "data",
      q.Get(q.Match(q.Index("purchase_by_stripe_customer_id"), customerId))
    )
  );

  const { amount_total, description, quantity } = purchase;

  return {
    props: {
      amount_total,
      description,
      quantity,
    },
  };
};
