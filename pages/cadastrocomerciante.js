import React from "react";
import {
  Avatar,
  Flex,
  Button,
  FormControl,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Router from "next/router";

export default function register() {
  const { handleSubmit, register } = useForm();

  const sendComercialForm = (comercialForm) => {
    Router.push({
      pathname: "cadastrocomercial",
      query: comercialForm,
    });
  };
  return (
    <Flex>
      <Flex
        bgColor="#0ACF83"
        flexDirection="column"
        align="center"
        gap="12"
        w="50vw"
        h="100vh"
        justifyContent="center"
      >
        <Link href="/">
          <Button
            _active={{ bg: "#0ACF83", opacity: 0.8 }}
            _hover={{ bg: "#0ACF83", opacity: 0.8 }}
            color="#FFFFFF"
            bgColor="#0ACF83"
            w="xs"
            h="10"
            align="left"
            justifyContent="left"
            fontSize="2xl"
            position="absolute"
            top="4"
            left="4"
          >
            Voltar
          </Button>
        </Link>
        <Avatar
          w="80"
          h="80"
          name="Segun Adebayo"
          bgColor="white"
          src="https://www.cin.ufpe.br/~imprensa/marcacinpng/SC"
          boxShadow="md"
        />
      </Flex>
      <Flex
        w="50vw"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <form onSubmit={handleSubmit(sendComercialForm)}>
          <FormControl
            isRequired
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Flex
              gap="8"
              flexDirection="column"
              w="xs"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="4xl">
                <strong>Sobre o dono do mercado:</strong>
              </Text>
              <Flex direction="column" w="320px">
                <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                  Nome
                </Text>
                <Input
                  variant="flushed"
                  borderColor="#9FA2B4"
                  color="#9FA2B4"
                  placeholder="Nome Completo"
                  {...register("Nome")}
                />
              </Flex>
              <Flex direction="column" w="320px">
                <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                  Email
                </Text>
                <Input
                  type="email"
                  variant="flushed"
                  borderColor="#9FA2B4"
                  color="#9FA2B4"
                  placeholder="Email"
                  {...register("Email")}
                />
              </Flex>
              <Flex direction="column" w="320px">
                <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                  Celular
                </Text>
                <Input
                  type="tel"
                  variant="flushed"
                  borderColor="#9FA2B4"
                  color="#9FA2B4"
                  placeholder="Celular (com DDD)"
                  {...register("Celular")}
                />
              </Flex>
              <Flex direction="column" w="320px">
                <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                  CPF
                </Text>
                <Input
                  variant="flushed"
                  borderColor="#9FA2B4"
                  color="#9FA2B4"
                  placeholder="CPF"
                  {...register("CPF")}
                />
              </Flex>
              <Flex direction="column" w="320px">
                <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                  RG
                </Text>
                <Input
                  variant="flushed"
                  borderColor="#9FA2B4"
                  color="#9FA2B4"
                  placeholder="RG"
                  {...register("RG")}
                />
              </Flex>
              <Flex direction="column" w="320px">
                <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                  Órgão Emissor
                </Text>
                <Input
                  variant="flushed"
                  borderColor="#9FA2B4"
                  color="#9FA2B4"
                  placeholder="Órgão Emissor"
                  {...register("orgemissor")}
                />
              </Flex>
              <Flex direction="column" w="320px">
                <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                  Senha
                </Text>
                <Input
                  variant="flushed"
                  borderColor="#9FA2B4"
                  color="#9FA2B4"
                  placeholder="Senha"
                  type="password"
                  {...register("password")}
                />
              </Flex>
              <Button
                _active={{ bg: "#0ACF83", opacity: 0.8 }}
                _hover={{ bg: "#0ACF83", opacity: 0.8 }}
                bgColor="#0ACF83"
                w="xs"
                h="10"
                borderRadius="2xl"
                boxShadow="md"
                type="submit"
              >
                Continuar
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
}
