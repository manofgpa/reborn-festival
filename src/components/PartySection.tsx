import React from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Card from "../components/Card";

function PartySection() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const data = [
    {
      name: "Bebidas",
      slug: "Open bar",
      image: "/images/bebidas.jpg",
      description: `OPEN BAR A NOITE TODA de Gin, Vodka, Champanhe, Redbull, Refri e
              agua! Alem disso, teremos diversos drinks preparados especialmente
              pelo nosso barman Pedro.`,
    },
    {
      name: "Comidas",
      slug: "Open food",
      image:
        "https://www.buffettulipas.com.br/wp-content/uploads/2021/02/Finger-foods-sao-uma-boa-opcao-para-casamentos.jpg",
      description: "Open de comida a noite inteira",
    },
  ];

  return (
    <Flex
      direction={isWideVersion ? "column" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      mt={4}
      m="0 auto"
      align="center"
    >
      <Text as="h2" fontWeight="bold" fontSize="4xl" align="center" m="12">
        A FESTA
      </Text>
      <Card data={data} />
    </Flex>
  );
}

export default PartySection;
