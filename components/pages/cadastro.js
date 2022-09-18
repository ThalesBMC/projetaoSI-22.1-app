import React from "react";
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

export default function login() {
  return (
    <Flex bgColor="#e9e9e9" flexDirection="column" h="100vh">
      <Header />
      <Flex
        flexDirection="column"
        alignItems="center"
        gap="12"
        w="full"
        h="100vh"
        mt="6"
      >
        <form>
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
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="#686868">Email</FormLabel>
              <Input color="#686868" bgColor="white" placeholder="Email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="#686868">Senha</FormLabel>
              <Input
                color="#686868"
                bgColor="white"
                type="password"
                placeholder="Senha"
              />
            </FormControl>
            <FormControl>
              <FormLabel color="#686868">
                Como gostaria de ser chamado?
              </FormLabel>
              <Input color="#686868" bgColor="white" placeholder="Apelido" />
            </FormControl>
          </Flex>
        </form>
        <Flex w="xs" alignItems="center" justifyContent="center">
          <Checkbox defaultChecked colorScheme="whatsapp" color="#686868">
            Receber emails com promoções próximas de você
          </Checkbox>
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
          >
            Cadastrar
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
