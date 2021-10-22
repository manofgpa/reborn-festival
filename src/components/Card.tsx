import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

interface Card {
  name: string;
  slug: string;
  image: string;
  description: string;
}

interface CardProps {
  data: Card[];
}

export default function Card({ data }: CardProps) {
  return (
    <>
      {data.map((card) => (
        <Box
          role={"group"}
          p={6}
          mt={16}
          mx={8}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${card.image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={card.image}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.700"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {card.name}
            </Text>
            <Heading
              fontSize={"2xl"}
              color={"gray.900"}
              fontFamily={"body"}
              fontWeight={500}
            >
              {card.slug}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text color={"gray.600"}>{card.description}</Text>
            </Stack>
          </Stack>
        </Box>
      ))}
    </>
  );
}
