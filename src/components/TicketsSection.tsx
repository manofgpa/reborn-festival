import {
  Flex,
  VStack,
  useBreakpointValue,
  Button,
  Text,
} from "@chakra-ui/react";
import { CountdownSection } from "./CountdownSection";
import Link from "next/link";

export const TicketsSection = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      bgImage={`linear-gradient(rgba(152, 151, 129, 0.3),rgba(0, 0, 0, 0)),
        url(/images/tomorrowland2.jpg)`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Flex
          direction="column"
          align="center"
          bgColor="gray.900"
          rounded={"xl"}
          p={[6, 8]}
        >
          <CountdownSection />
          <Link href="/comprar">
            <Button
              colorScheme="green"
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "yellow.600" }}
              w={["250px", "500px"]}
              fontSize={["14px", "20px"]}
              fontWeight="bold"
              p={[8, 12]}
            >
              GARANTA SEU INGRESSO
            </Button>
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
};
