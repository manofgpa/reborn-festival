import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

interface TicketSuccessResultProps {
  user: string;
}

export const TicketSuccessResult = ({ user }: TicketSuccessResultProps) => {
  return (
    <Box textAlign="center" py={10} px={6} bgColor="yellow.500" mt={4}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Entrada liberada!
      </Heading>
      <Text>
        <Text as="span" fontWeight="bold">
          {user}
        </Text>
        , seja bem-vindo(a) ao Reborn Festival!
      </Text>
    </Box>
  );
};
