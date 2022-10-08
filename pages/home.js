import React from "react";
import { Avatar, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { Footer } from "../components/Footer";

export const HomePage = () => {
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
      <Flex flexDirection="column" gap="8">
        <Link href="/login">
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
        </Link>
        <Link href="/cadastro">
          <Button
            borderRadius="2xl"
            w="xs"
            h="10"
            _active={{ bg: "#0ACF83", opacity: 0.8 }}
            _hover={{ bg: "#0ACF83", opacity: 0.8 }}
            bgColor="#0ACF83"
            boxShadow="md"
          >
            Cadastro
          </Button>
        </Link>
      </Flex>
      <Footer />
    </Flex>
  );
};
