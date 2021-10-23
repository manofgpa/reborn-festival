import React from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { VerticalTimeline } from "./VerticalTimeline";

export const LineupSection = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const djs = [
    {
      name: "Mano",
      genres: "Tech house / Techno",
      setTime: "16:00 - 17:30",
      description:
        "Sua personalidade musical possui influências de house e tech house,  permeando vertentes do techno de forma sutil e envolvente.",
      image:
        "https://scontent.fuba2-1.fna.fbcdn.net/v/t1.6435-9/117276143_3129931930375593_8094487904896293071_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGdV4sJ7vj8A4aETurB2jP6TlRd2F-F6Y5OVF3YX4XpjmayL2Gf4z6Ntvm96czP2_HtcI40e0244Dnljhmj_rLt&_nc_ohc=tv4fyTfJfKoAX8gxEPj&tn=OeDYb1pbYGmFyee-&_nc_ht=scontent.fuba2-1.fna&oh=0b2444298c3902279402c6410ac8ebdb&oe=61995D05",
    },
    {
      name: "Djenko",
      genres: "Bass Music / Desande",
      setTime: "17:30 - 19:00",
      description:
        "Edison Borges, nome original do artista, é dono de uma sonoridade peculiar; uma mistura bem sucedida entre techno, EDM e deep brasileiro, que tem o grave como forte característica. Ao utilizar elementos de diferentes estilos, sua música representa toda a miscigenação do país, traduzindo-se num som tipicamente brasileiro.",
      image: "/images/djs/edman-superman.jpg",
    },
    {
      name: "Jama",
      genres: "EDM",
      setTime: "19:00 - 21:30",
      description:
        "Com vibe dançante, Jama carrega originalidade: o mix perfeito entre as nuances do grave potente, característica marcante do artista, com experimentações inovadoras através dos vocais debochados do funk carioca e o salseiro mexicano que une tudo como uma deliciosa guacamole.",
      image:
        "https://pps.whatsapp.net/v/t61.24694-24/68846493_2508886475871757_5009782830536851456_n.jpg?ccb=11-4&oh=eb3431c344c3513e52a0223d91e11965&oe=61770BE5",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "21:30 - 23:00",
      description: "Quem será?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxOZpooA0_k640_FB3z8rZG9QUkG1XsYJ-T1com8ChptJdx5UwL6-OqjzGvhtqO9i7QU&usqp=CAU",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "21:30 - 23:00",
      description: "Quem será?",
      image:
        "https://www.seekpng.com/png/small/49-497487_unknown-clipart-man-silhouette-female-silhouette-question-mark.png",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "21:30 - 23:00",
      description: "Quem será?",
      image:
        "https://t3.ftcdn.net/jpg/00/57/04/58/360_F_57045887_HHJml6DJVxNBMqMeDqVJ0ZQDnotp5rGD.jpg",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "21:30 - 23:00",
      description: "Quem será?",
      image:
        "https://www.seekpng.com/png/small/49-497487_unknown-clipart-man-silhouette-female-silhouette-question-mark.png",
    },
  ];

  return (
    <Box bgGradient="linear(to-b, #000000, #24241F)">
      <Box align="center" mt="8">
        <Text
          as="h2"
          fontWeight="bold"
          fontSize={["3xl", "4xl"]}
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
          O LINEUP
        </Text>
      </Box>
      <Box>
        <Flex
          direction={isWideVersion ? "row" : "column"}
          w="100%"
          align="center"
          justify="center"
          mb={12}
          px={2}
        >
          <Text
            fontWeight="bold"
            fontSize={["3xl", "4xl"]}
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
            my={12}
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "20%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "yellow.600",
              zIndex: 0,
            }}
          >
            REBORN STAGE
          </Text>
        </Flex>
        <Box>
          <VerticalTimeline djs={djs} />
        </Box>
        <Flex
          direction={isWideVersion ? "row" : "column"}
          w="100%"
          align="center"
          justify="center"
          mb={12}
          px={2}
        >
          <Text
            fontWeight="bold"
            fontSize={["3xl", "4xl"]}
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
            my={12}
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "20%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "yellow.600",
              zIndex: 0,
            }}
          >
            SUNLIGHT STAGE
          </Text>
        </Flex>
        <Box>
          <VerticalTimeline djs={djs} />
        </Box>
      </Box>
    </Box>
  );
};
