import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";

import { ReactElement } from "react";
import { Element } from "react-scroll";

import * as Scroll from "react-scroll";

export const PartySection = () => {
  let scroll = Scroll.animateScroll;

  return (
    <Element name="theParty">
      <Container maxW={"5xl"} py={8}>
        <Box align="center">
          <Text
            as="h2"
            fontWeight="bold"
            fontSize={["3xl", "4xl"]}
            maxWidth={{
              base: "100vh",
              md: "130vh",
              lg: "130vh",
              xl: "130vh",
            }}
          >
            A FESTA
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={8}>
          <Stack spacing={4}>
            <Heading>Edição baile das máscaras.</Heading>
            <Text color={"gray.400"} fontSize={"lg"}>
              Como uma Fênix, O Reborn Festival renasce das cinzas após longo
              período sem bons eventos para proporcionar ao público uma
              experiência inesquecível de entretenimento. O Objetivo do evento é
              celebrar a (re)novação de mais um novo ciclo da nossa jornada
              nesse mundo e, principalmente, comemorar a superação desta fase
              tão difícil pela qual todos passamos. Somos muito mais que uma
              festa, somos a realização de um sonho que tem como objetivo poder
              compartilhar sentimentos, memórias, energias positivas e muuuuuita
              música boa com todos aqueles que amamos. Conectados através dessa
              experiência incrível, prezamos pelo amor, amizade, cumplicidade e,
              mais uma vez, permitir que os artistas participantes nos levem pra
              passear nas suas diferentes vibes. Nosso objetivo é juntar nossos
              amigos e celebrar essa data tão esperada e fornecer uma estrutura
              profissional, digna de grandes apresentações com muito, mas muito
              som, iluminação e entretenimento, localizados bem próximos de
              você, oferecendo uma experiência totalmente diferenciada. Contamos
              com você para renascer das cinzas conosco nessa linda e muito rica
              jornada. #TogetherWeReborn
            </Text>
            <Button
              bg={"yellow.600"}
              rounded={"full"}
              color={"white"}
              transition={"ease-in 0.2s"}
              _hover={{ bg: "#694316" }}
              p={[6, 8]}
              onClick={() =>
                scroll.scrollToBottom({
                  duration: 2500,
                  delay: 50,
                  smooth: true,
                })
              }
            >
              GARANTA SEU INGRESSO
            </Button>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://media.resources.festicket.com/www/magazine/BestEuro_L.jpg"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Element>
  );
};
