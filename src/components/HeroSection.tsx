import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export const HeroSection = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/images/audience.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            REBORN FESTIVAL
          </Text>
          <Button
            bg={"gray.900"}
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "gray.700" }}
          >
            Show me more
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
};
