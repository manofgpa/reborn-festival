import { Box, Heading, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

interface TicketUsedResultProps {
  user: string;
}

export const TicketUsedResult = ({ user }: TicketUsedResultProps) => {
  return (
    <Box textAlign="center" py={10} px={6} bgColor="yellow.500" mt={4}>
      <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Ingresso já escaneado!
      </Heading>
      <Text>
        Nome:{" "}
        <Text as="span" fontWeight="bold">
          {user}
        </Text>
      </Text>
      <Text>Favor entrar em contato com a produção.</Text>
    </Box>
  );
};
