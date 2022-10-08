import React, { useState } from "react";
import {
  Flex,
  Button,
  FormControl,
  Input,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { useForm } from "react-hook-form";
import { apiClient } from "../utils/api";
import Router from "next/router";

export default function login() {
  const [isChecked, setIsChecked] = useState(true);
  const { handleSubmit, register } = useForm();
  const sendRegisterForm = async (registerForm) => {
    try {
      console.log(registerForm, "salve");
      const data = await apiClient.post("client", registerForm);
      console.log(data);
      if (data.status) {
        Router.push("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex bgColor="#e9e9e9" flexDirection="column" h="100vh">
      <Header />
      <Flex
        flexDirection="column"
        alignItems="center"
        gap="12"
        w="full"
        h="100vh"
        mt="20"
      >
        <form onSubmit={handleSubmit(sendRegisterForm)}>
          <Flex
            w="xs"
            align="center"
            justifyContent="center"
            gap="6"
            flexDirection="column"
          >
            <FormControl isRequired>
              <FormLabel color="#686868">Nome Completo</FormLabel>
              <Input
                color="#686868"
                bgColor="white"
                placeholder="Nome Completo"
                {...register("name")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="#686868">Email</FormLabel>
              <Input
                color="#686868"
                bgColor="white"
                placeholder="Email"
                {...register("email")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="#686868">Senha</FormLabel>
              <Input
                color="#686868"
                bgColor="white"
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="#686868">Bairro</FormLabel>
              <Input
                color="#686868"
                bgColor="white"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="#686868">
                Como gostaria de ser chamado?
              </FormLabel>
              <Input
                color="#686868"
                bgColor="white"
                placeholder="Apelido"
                {...register("nickname")}
              />
              <Flex w="xs" alignItems="center" justifyContent="center" mt="6">
                <Checkbox
                  onChange={(e) => setIsChecked(e.target.checked)}
                  defaultChecked
                  colorScheme="whatsapp"
                  color="#686868"
                  {...register("receiveEmail")}
                >
                  Receber emails com promoções próximas de você
                </Checkbox>
              </Flex>
              <Flex flexDirection="column" align="center" mt="6">
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
                  Cadastrar
                </Button>
              </Flex>
            </FormControl>
          </Flex>
        </form>
      </Flex>
      <Footer />
    </Flex>
  );
}
