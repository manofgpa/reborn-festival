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
} from "@chakra-ui/react";
import { useState } from "react";
import Confetti from "../components/Confetti";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";
import { query as q } from "faunadb";
import { fauna } from "../services/fauna";

// TODO adicionar inputs demais participantes
// TODO completar pagina sucesso com dados da compra e dos convidados.
// TODO trocar status pagamento true faunadb
// TODO particles not showing on vercel deploy
export default function Success() {
  const [confettiQuantity, setConfettiQuantity] = useState(200);
  const [isConfettiRunning, setIsConfettiRunning] = useState(true);

  const handleMoreConfetti = () => {
    setConfettiQuantity(confettiQuantity + 200);
  };

  const handleConfettiState = () => {
    setIsConfettiRunning(!isConfettiRunning);
  };

  return (
    <>
      <Box h="100vh">
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
          mt={[32, 0]}
          pb={[4, 0]}
        >
          <Image src={"/images/logo.png"} my={2} />
          <Box bgColor="yellow.600" py={[8, 12]} borderRadius={["0", "24"]}>
            <Text fontSize={["3xl", "4xl"]} color="gray.50">
              PRESENÇA CONFIRMADA
            </Text>
          </Box>
          <Text fontSize={"4xl"}></Text>

          <Box mt={2}>
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
    </>
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

  const customerId = cookies["rebornfestival.customer_id"];

  return {
    props: {},
  };
};
