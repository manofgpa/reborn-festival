import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export const TicketFailResult = () => {
  return (
    <Box textAlign="center" py={10} px={6} bgColor="yellow.500" mt={4}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.500"}
          rounded={"50px"}
          w={"55px"}
          h={"55px"}
          textAlign="center"
        >
          <CloseIcon boxSize={"20px"} color={"white"} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Ingresso inválido!
      </Heading>
      <Text>Favor apresentar o e-mail de confirmação de compra.</Text>
    </Box>
  );
};
