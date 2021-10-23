import React from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { VerticalTimeline } from "./VerticalTimeline";

export const LineupSection = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const rebornStage = [
    {
      name: "Mano",
      genres: "Tech house / Techno",
      setTime: "?? : ?? - ?? : ??",
      description:
        "Sua personalidade musical possui influências de house e tech house,  permeando vertentes do techno de forma sutil e envolvente.",
      image: "/images/djs/mano.png",
    },
    {
      name: "Djenko",
      genres: "Bass Music / Desande",
      setTime: "?? : ?? - ?? : ??",
      description:
        "Edison Borges, nome original do artista, é dono de uma sonoridade peculiar; uma mistura bem sucedida entre techno, EDM e deep brasileiro, que tem o grave como forte característica. Ao utilizar elementos de diferentes estilos, sua música representa toda a miscigenação do país, traduzindo-se num som tipicamente brasileiro.",
      image: "/images/djs/edman-superman.jpg",
    },
    {
      name: "Jama",
      genres: "Mexican Lifestyle",
      setTime: "?? : ?? - ?? : ??",
      description:
        "Com vibe dançante, Jama carrega originalidade: o mix perfeito entre as nuances do grave potente, característica marcante do artista, com experimentações inovadoras através dos vocais debochados do funk carioca e o salseiro mexicano que une tudo como uma deliciosa guacamole.",
      image:
        "https://pps.whatsapp.net/v/t61.24694-24/68846493_2508886475871757_5009782830536851456_n.jpg?ccb=11-4&oh=eb3431c344c3513e52a0223d91e11965&oe=61770BE5",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxOZpooA0_k640_FB3z8rZG9QUkG1XsYJ-T1com8ChptJdx5UwL6-OqjzGvhtqO9i7QU&usqp=CAU",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://www.seekpng.com/png/small/49-497487_unknown-clipart-man-silhouette-female-silhouette-question-mark.png",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://t3.ftcdn.net/jpg/00/57/04/58/360_F_57045887_HHJml6DJVxNBMqMeDqVJ0ZQDnotp5rGD.jpg",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image: "/images/anom/anom1.jpg",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oZn_ujpLbqEt8CVFMIcAA1rUzD4Al3NI8ZhnNqGxMWfT3kqPcugUSSDFeynM1pni5sw&usqp=CAU",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://www.seekpng.com/png/small/49-497487_unknown-clipart-man-silhouette-female-silhouette-question-mark.png",
    },
  ];

  const sunLightStage = [
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxOZpooA0_k640_FB3z8rZG9QUkG1XsYJ-T1com8ChptJdx5UwL6-OqjzGvhtqO9i7QU&usqp=CAU",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://www.seekpng.com/png/small/49-497487_unknown-clipart-man-silhouette-female-silhouette-question-mark.png",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://t3.ftcdn.net/jpg/00/57/04/58/360_F_57045887_HHJml6DJVxNBMqMeDqVJ0ZQDnotp5rGD.jpg",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image: "/images/anom/anom1.jpg",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oZn_ujpLbqEt8CVFMIcAA1rUzD4Al3NI8ZhnNqGxMWfT3kqPcugUSSDFeynM1pni5sw&usqp=CAU",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://www.seekpng.com/png/small/49-497487_unknown-clipart-man-silhouette-female-silhouette-question-mark.png",
    },
    {
      name: "TBA",
      genres: "",
      setTime: "?? : ?? - ?? : ??",
      description: "Quem será o(a) próximo(a) convocado(a)?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotl1upBUYkxMlVSxjzzQy1Crbdfw2vnzw1A&usqp=CAU",
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
          <VerticalTimeline djs={rebornStage} />
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
          <VerticalTimeline djs={sunLightStage} />
        </Box>
      </Box>
    </Box>
  );
};
