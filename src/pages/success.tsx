import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  Box,
} from "@chakra-ui/react";
import Confetti from "../components/Confetti";

// TODO adicionar inputs demais participantes
// TODO completar pagina sucesso com dados da compra e dos convidados.
// TODO trocar status pagamento true faunadb
// TODO particles not showing on vercel deploy
export default function Success() {
  return (
    <>
      <Box h="100vh">
        <Confetti />
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
        </Box>
      </Box>
    </>
  );
}
