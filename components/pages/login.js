import React from "react";
import {
  Avatar,
  Flex,
  Button,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer";

export default function login() {
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

      <FormControl
        isRequired
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
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
          />

          <Input
            variant="flushed"
            borderColor="#9FA2B4"
            color="#9FA2B4"
            placeholder="Senha"
          />
        </Flex>
      </FormControl>
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
          Login
        </Button>
        <Text color="#0ACF83">Esqueci minha senha</Text>
      </Flex>
      <Footer />
    </Flex>
  );
}
