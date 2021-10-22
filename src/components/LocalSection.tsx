import React from "react";

import { AiFillInfoCircle } from "react-icons/ai";
import { SiGooglestreetview } from "react-icons/si";
import { Box, Flex, Text, useBreakpointValue, Icon } from "@chakra-ui/react";

import { Carousel } from "./Carousel";

export const LocalSection = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      w={"full"}
      h={"80vh"}
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.5)),
        url(/images/local-dark.jpg)`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      p={2}
    >
      <Box align="center" mt="8">
        <Text
          as="h2"
          fontWeight="bold"
          fontSize={["3xl", "4xl"]}
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
          O LOCAL
        </Text>
      </Box>
      <Flex
        direction={isWideVersion ? "row" : "column"}
        w="100%"
        align="center"
        mt={14}
        justify="space-evenly"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          // justify="space-between"
          maxWidth={600}
        >
          <Box>
            <Text fontSize={["2xl", "4xl"]}>Casa Abreu</Text>
          </Box>
          <Box align="left" fontSize={["md", "xl"]}>
            <Text lineHeight={6}>
              Sitio de eventos localizada na Freguesia, com 13 mil m2, campo de
              futebol, quadra de volei, salão de festas, piscina e salão de
              jogos.
            </Text>
            <Text mt={4}>
              <Icon as={SiGooglestreetview} fontSize={20} mr={0.25} />
              Endereco: Rua Agrolândia, 266
            </Text>
            <Text mt={4}>
              <Icon as={AiFillInfoCircle} fontSize={20} mr={0.25} />
              Teremos estacionamento gratuito no local!
            </Text>
          </Box>
        </Flex>
        <Flex mt={8} w={["100%", "50%"]}>
          <Carousel />
        </Flex>
      </Flex>
    </Box>
  );
};
