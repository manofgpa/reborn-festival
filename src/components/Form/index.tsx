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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    first_name: yup.string().required("Este campo é obrigatório."),
    last_name: yup.string().required("Este campo é obrigatório."),
    email: yup
      .string()
      .email("Deve ser um e-mail válido.")
      .required("Este campo é obrigatório."),
    email_confirmation: yup
      .string()
      .oneOf(
        [null, yup.ref("email")],
        "Os e-mails devem ser iguais, seu frito."
      ),
  })
  .required();

export const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Box maxWidth={600} m="0 auto" align="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <SimpleGrid columns={2} spacing={4}>
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
