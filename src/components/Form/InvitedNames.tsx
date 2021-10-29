// @ts-nocheck

import { useForm, Controller } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  SimpleGrid,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInput,
  HStack,
  Image,
} from "@chakra-ui/react";

import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { checkout } from "contexts/CookiesContext";
import { useState } from "react";

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

  const onSubmit = async (data: User) => {
    const participants_names = Object.values(data);

    await checkout({ ...userData, participants_names });
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
