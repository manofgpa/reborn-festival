import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getStripeJs } from "services/stripe-js";
import { api } from "services/api";

const schema = yup.object({
  first_name: yup.string().required("Este campo é obrigatório."),
  last_name: yup.string().required("Este campo é obrigatório."),
  telephone_number: yup
    .string()
    .matches(
      /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g,
      "Nũmero de celular não é válido."
    )
    .required("Este campo é obrigatório."),
  cpf: yup
    .string()
    .matches(
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g,
      "CPF não é válido."
    )
    .required("Este campo é obrigatório."),
  email: yup
    .string()
    .email("Deve ser um e-mail válido.")
    .required("Este campo é obrigatório."),
  email_confirmation: yup
    .string()
    .oneOf([null, yup.ref("email")], "Os e-mails devem ser iguais, seu frito.")
    .required("Este campo é obrigatório."),
});

export const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    alert(JSON.stringify(data, null, 2));

    try {
      const response = await api.post("/buy");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error);
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
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <SimpleGrid columns={2} spacing={6}>
            <Box>
              <FormLabel htmlFor="first_name">Nome</FormLabel>
              <Input
                id="first_name"
                {...register("first_name", {
                  required: "Este campo é obrigatório",
                  maxLength: 20,
                })}
              />
              <Text fontSize={14} color="red.500" align="left">
                {errors.first_name?.message}
              </Text>
            </Box>
            <Box>
              <FormLabel htmlFor="last_name">Sobrenome</FormLabel>
              <Input
                id="last_name"
                {...register("last_name", {
                  required: "Este campo é obrigatório",
                  maxLength: 20,
                })}
              />
              <Text fontSize={14} color="red.500" align="left">
                {errors.last_name?.message}
              </Text>
            </Box>
            <Box>
              <FormLabel htmlFor="telephone_number">Telefone</FormLabel>
              <Input
                as={InputMask}
                mask="(**) *****-****"
                maskChar={null}
                id="telephone_number"
                type="text"
                {...register("telephone_number", {
                  required: "Este campo é obrigatório",
                  maxLength: 20,
                })}
              />
              <Text fontSize={14} color="red.500" align="left">
                {errors.telephone_number?.message}
              </Text>
            </Box>
            <Box>
              <FormLabel htmlFor="cpf">CPF</FormLabel>
              <Input
                as={InputMask}
                mask="***.***.***-**"
                maskChar={null}
                id="cpf"
                type="text"
                {...register("cpf", {
                  required: "Este campo é obrigatório",
                  maxLength: 20,
                })}
              />
              <Text fontSize={14} color="red.500" align="left">
                {errors.cpf?.message}
              </Text>
            </Box>
            <Box>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Este campo é obrigatório",
                  maxLength: 20,
                })}
              />
              <Text fontSize={14} color="red.500" align="left">
                {errors.email?.message}
              </Text>
            </Box>
            <Box>
              <FormLabel htmlFor="email_confirmation">
                Confirmação do E-mail
              </FormLabel>
              <Input
                id="email_confirmation"
                type="email"
                {...register("email_confirmation", {
                  required: "Este campo é obrigatório",
                  maxLength: 20,
                })}
              />
              <Text fontSize={14} color="red.500" align="left">
                {errors.email_confirmation?.message}
              </Text>
            </Box>
          </SimpleGrid>
          <FormErrorMessage>{errors.name && errors.message}</FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
