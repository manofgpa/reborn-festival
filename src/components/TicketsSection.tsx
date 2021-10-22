import { Flex, VStack, useBreakpointValue, Button } from "@chakra-ui/react";
import { CountdownSection } from "./CountdownSection";

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
          <Button
            colorScheme="green"
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "#8a561b" }}
            w={["250px", "500px"]}
            p={[8, 12]}
          >
            GARANTA SEU INGRESSO
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};
