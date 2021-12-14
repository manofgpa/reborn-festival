import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import * as Scroll from "react-scroll";

import { ArrowDownIcon } from "@chakra-ui/icons";

export const HeroSection = () => {
  let scroller = Scroll.scroller;

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.545),rgba(0, 0, 0, 0.8)),
        url(/images/audience.jpg)`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      position="relative"
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Image src={"/images/logo.png"} />
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            as="h1"
            color={"white"}
            fontWeight={700}
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            REBORN FESTIVAL
          </Text>
          <Text
            color={"white"}
            align={"center"}
            fontWeight={400}
            lineHeight={1.6}
            fontSize={18}
          >
            Sabemos que o ano de 2021 foi desafiador para todos nós: mudanças,
            pandemia e tempos muito difíceis. Por isso, nada melhor do que
            começar esse novo ciclo de 2022 em grande estilo. O Reborn Réveillon
            Festival emergiu das cinzas para tornar essa virada de ano uma noite
            inesquecível para todos nós! Queremos MUITO você compartilhando esse
            (re)começo com a gente, então reserve seu lugar através do nosso
            lote especial - e exclusivo - para nossos amigos.
          </Text>

          <Flex direction="column" align="center">
            <Flex>
              <Button
                bg={"yellow.600"}
                rounded={"full"}
                color={"white"}
                p={8}
                w={"300px"}
                transition={"ease-in 0.2s"}
                _hover={{ bg: "#694316" }}
                onClick={() =>
                  scroller.scrollTo("theParty", {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                  })
                }
              >
                SAIBA MAIS
              </Button>
              {/* <Button
                bg={"gray.900"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "gray.700" }}
                onClick={() =>
                  scroller.scrollTo("theParty", {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                  })
                }
              >
                Comprar ingresso
              </Button> */}
            </Flex>

            <ArrowDownIcon color={"white"} w={8} h={8} mt="4" />
          </Flex>
        </Stack>
      </VStack>
    </Flex>
  );
};
