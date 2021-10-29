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
  quantity: yup
    .number()
    .min(1, "Mínimo 1 ingresso.")
    .max(4, "Máximo 4 ingressos por CPF.")
    .required("Este campo é obrigatório."),
});

type User = {
  first_name: string;
  last_name: string;
  quantity: number;
  email_confirmation: string;
  email: string;
  telephone: string;
  cpf: string;
};

export const Form = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: User) => {
    await checkout(data);
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
      mt={[32, 0]}
      pb={[4, 0]}
    >
      <Image src={"/images/logo.png"} my={2} />
      <Box bgColor="yellow.600" py={[8, 12]} borderRadius={["0", "24"]}>
        <Text fontSize={["3xl", "4xl"]} color="gray.50">
          Dados do Comprador
        </Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <SimpleGrid columns={2} spacing={6} minChildWidth={"240px"} m={4}>
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
          <Box>
            <Text m="2" align="center">
              Quantidade de ingressos
            </Text>
            <Controller
              control={control}
              {...register("quantity", {
                required: "Este campo é obrigatório",
                maxLength: 20,
              })}
              render={({ field: { ref, ...restField } }) => (
                <NumberInput {...restField}>
                  <HStack maxW="320px">
                    <NumberDecrementStepper
                      bgColor="gray.500"
                      _hover={{ bg: "red.700" }}
                      transition={"ease-in 0.2s"}
                      p={3}
                      borderRadius={6}
                      border="none"
                    />
                    <NumberInputField ref={ref} name={restField.name} />
                    <NumberIncrementStepper
                      bgColor="gray.500"
                      _hover={{ bg: "green.700" }}
                      transition={"ease-in 0.2s"}
                      p={3}
                      borderRadius={6}
                      border="none"
                    />
                  </HStack>
                </NumberInput>
              )}
            />
            <Text fontSize={14} color="red.500" align="center">
              {errors.quantity?.message}
            </Text>
          </Box>
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
