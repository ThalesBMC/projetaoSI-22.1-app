import React, { useState, useContext } from "react";
import {
  Avatar,
  Flex,
  Button,
  FormControl,
  Input,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { useForm } from "react-hook-form";
import { apiClient } from "../utils/api";
import Router from "next/router";
import { LoginContext } from "../contexts/LoginContext";

export default function login() {
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState();
  const { setUserInfo } = useContext(LoginContext);

  const sendLoginForm = async (loginForm) => {
    try {
      console.log(loginForm);
      const res = await apiClient.get("client/login", { params: loginForm });
      console.log(res.data, "pqqq");
      setUserInfo(res.data);
      if (!res.data) {
        console.log("usuario não encontrado");
      } else Router.push("produtos");
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  return (
    <Flex
      flexDirection="column"
      align="center"
      gap="12"
      w="full"
      h="100vh"
      justifyContent="center"
      bgColor="#e9e9e9"
    >
      <Avatar
        w="48"
        h="48"
        name="Segun Adebayo"
        bgColor="white"
        src="https://www.cin.ufpe.br/~imprensa/marcacinpng/SC"
        boxShadow="md"
      />
      <form onSubmit={handleSubmit(sendLoginForm)}>
        <FormControl
          isRequired
          display="flex"
          justifyContent="center"
          alignItems="center"
          isInvalid={error}
        >
          <Flex direction="column" gap="8">
            <Flex
              gap="8"
              flexDirection="column"
              w="xs"
              alignItems="center"
              justifyContent="center"
            >
              <Input
                variant="flushed"
                borderColor="#9FA2B4"
                color="#9FA2B4"
                placeholder="Email"
                {...register("email")}
              />

              <Input
                variant="flushed"
                borderColor="#9FA2B4"
                color="#9FA2B4"
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
              <FormErrorMessage>Sua senha está incorreta</FormErrorMessage>
            </Flex>

            <Flex flexDirection="column" align="center" gap="6">
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
                Login
              </Button>
              <Text color="#0ACF83">Esqueci minha senha</Text>
            </Flex>
          </Flex>
        </FormControl>
      </form>
      <Footer />
    </Flex>
  );
}
