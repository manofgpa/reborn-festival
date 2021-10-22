import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Card from "../components/Card";

export const PartySection = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Box align="center" mt="8">
        <Text
          as="h2"
          fontWeight="bold"
          fontSize={["3xl", "4xl"]}
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
          A FESTA
        </Text>
      </Box>
      <Flex
        direction={isWideVersion ? "row" : "column"}
        w="100%"
        align="center"
        justify="center"
      >
        <Text>
          Teremos 2 palcos, 15 DJs, musica de todos os gostos. Horario das 17h
          as 11h.
        </Text>
      </Flex>
    </Box>
  );
};
