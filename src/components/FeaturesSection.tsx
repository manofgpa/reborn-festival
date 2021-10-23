import React from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Card from "./Card";

function FeaturesSection() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const data = [
    {
      name: "Bebidas",
      slug: "Open bar",
      image: "/images/bebidas.jpg",
      description: `A noite toda de diversos drinks contendo Gin, Vodka, Champanhe, Redbull, Refri e
              água!`,
    },
    {
      name: "Comidas",
      slug: "Open food",
      image:
        "https://www.buffettulipas.com.br/wp-content/uploads/2021/02/Finger-foods-sao-uma-boa-opcao-para-casamentos.jpg",
      description:
        "Deliciosas comidinhas preparadas com todo amor para uma virada de ano sensacional.",
    },
    {
      name: "Vibe",
      slug: "Open vibe",
      image:
        "https://images.squarespace-cdn.com/content/v1/5702d87ba3360c0321df9b42/1563234193886-2WSWPFEM5QLC6650X3GK/ideas-for-surprise-birthday-party-for-best-friend.jpg?format=2500w",
      description:
        "Venha preparado para uma virada de ano épica com muito amor e muita vibe! ",
    },
  ];

  return (
    <Box bgColor="yellow.800" py={[8, 12]} mt="8" px={2}>
      <Box align="center">
        <Text
          as="h2"
          fontWeight="bold"
          fontSize={["3xl", "4xl"]}
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
          EXPERIÊNCIAS
          <Text as="p" fontSize={["xl", "2xl"]} fontWeight="300">
            Para deixar o ano novo ainda mais incrível.
          </Text>
        </Text>
      </Box>
      <Flex
        direction={isWideVersion ? "row" : "column"}
        w="100%"
        // maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        align="center"
        justify="center"
      >
        <Card data={data} />
      </Flex>
    </Box>
  );
}

export default FeaturesSection;
