// @ts-nocheck

import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { checkout } from "contexts/CookiesContext";
import { api } from "services/api";

type User = {
  first_name: string;
  last_name: string;
  quantity: number;
  email_confirmation: string;
  email: string;
  telephone_number: string;
  cpf: string;
  participants_names: [];
};

export const InvitedNames = ({ quantity, userData }) => {
  const inputsArray = Array.from(Array(quantity));

  const schema = yup.object({
    invited1: yup.string().required("Este campo é obrigatório."),
  });

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // TODO switch to webhook customer.created
  const onSubmit = async (data: User) => {
    try {
      // api.post("https://www.rebornfestival.com.br/api/telegram_push", {
      //   message: `${userData.first_name} ${userData.last_name} começou a compra de ${userData.quantity} ingressos.`,
      //   json: {
      //     nome: `${userData.first_name} ${userData.last_name}`,
      //     email: userData.email,
      //     telefone: userData.telephone_number,
      //     quantidade_ingressos: userData.quantity,
      //   },
      // });
      const participants_names = Object.values(data);

      await checkout({ ...userData, participants_names });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      maxWidth={600}
      align="center"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      w="100%"
    >
      <Image src={"/images/logo.png"} my={2} />
      <Box bgColor="yellow.600" py={[8, 12]} borderRadius={["0", "24"]}>
        <Text fontSize={["3xl", "4xl"]} color="gray.50">
          Dados dos Participantes
        </Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <SimpleGrid columns={2} spacing={6} minChildWidth={"240px"} m={4}>
            {inputsArray.map((input, index) => (
              <Box key={index}>
                <FormLabel htmlFor={`invited${index + 1}`}>
                  Nome completo ingresso {index + 1}
                </FormLabel>
                <Input
                  {...register(`invited${index + 1}`, {
                    required: "Este campo é obrigatório",
                    maxLength: 20,
                  })}
                />
                <Text fontSize={14} color="red.500" align="left">
                  {errors.invited1?.message}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
          <FormErrorMessage>{errors.name && errors.message}</FormErrorMessage>
        </FormControl>
        <Button
          mt={8}
          p={6}
          colorScheme="green"
          isLoading={isSubmitting}
          type="submit"
        >
          Ir para o Pagamento
        </Button>
      </form>
    </Box>
  );
};
