/* eslint-disable */
import { useEffect, useState } from "react";

import {
  Container,
  SimpleGrid,
  Text,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

export const CountdownSection = () => {
  const eventDate = "12/31/2021";

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(eventDate) - +new Date();
    let timeLeft: any = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <Container maxW={["xl", "7xl"]}>
      <Box align="center">
        <Text
          as="h2"
          color="gray.50"
          fontWeight="bold"
          fontSize={["2xl", "6xl"]}
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
          SAVE THE DATE
        </Text>

        <Text fontSize={["2xl", "6xl"]} mt={2} as="mark">
          31/12/2021
        </Text>
        <Box color="gray.50" my={8}>
          {timeLeft ? (
            <SimpleGrid
              columns={4}
              spacingX={["10px", "20px"]}
              spacingY={["5px", "20px"]}
              fontSize={[18, 60]}
            >
              <Box height={["20px", "80px"]} justify={"center"}>
                <Text>{timeLeft?.days}</Text>
              </Box>
              <Box height={["20px", "80px"]}>{timeLeft?.hours}</Box>
              <Box height={["20px", "80px"]}>{timeLeft?.minutes}</Box>
              <Box height={["20px", "80px"]}>{timeLeft?.seconds}</Box>
              <Box height={["20px", "80px"]}>Dias</Box>
              <Box height={["20px", "80px"]}>Horas</Box>
              <Box height={["20px", "80px"]}>
                {isWideVersion ? "Minutos" : "Min"}
              </Box>
              <Box height={["20px", "80px"]}>
                {isWideVersion ? "Segundos" : "Seg"}
              </Box>
            </SimpleGrid>
          ) : (
            <span>Time's up!</span>
          )}
        </Box>
      </Box>
    </Container>
  );
};
