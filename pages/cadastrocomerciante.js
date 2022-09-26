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

export default function register() {
    return (
        <Flex>
            <Flex
            bgColor="#0ACF83"
            flexDirection="column"
            align="center"
            gap="12"
            w="full"
            h="100vh"
            justifyContent="center">
                <Link href="/cadastrovendedor">
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
                    left="4">
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
            <FormControl
            isRequired
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column">
                <Flex
                gap="8"
                flexDirection="column"
                w="xs"
                alignItems="center"
                justifyContent="center">

                    <Text fontSize="4xl"><strong>Sobre o dono do mercado:</strong></Text>

                    <Input
                    variant="flushed"
                    borderColor="#9FA2B4"
                    color="#9FA2B4"
                    placeholder="Nome Completo"/>

                    <Input
                    type="email"
                    variant="flushed"
                    borderColor="#9FA2B4"
                    color="#9FA2B4"
                    placeholder="Email"/>

                    <Input
                    type="tel"
                    variant="flushed"
                    borderColor="#9FA2B4"
                    color="#9FA2B4"
                    placeholder="Celular (com DDD)"/>

                    <Input
                    variant="flushed"
                    borderColor="#9FA2B4"
                    color="#9FA2B4"
                    placeholder="CPF"/>

                    <Input
                    variant="flushed"
                    borderColor="#9FA2B4"
                    color="#9FA2B4"
                    placeholder="RG"/>

                    <Input
                    variant="flushed"
                    borderColor="#9FA2B4"
                    color="#9FA2B4"
                    placeholder="Órgão Emissor"/>

                    <Button
                    _active={{ bg: "#0ACF83", opacity: 0.8 }}
                    _hover={{ bg: "#0ACF83", opacity: 0.8 }}
                    bgColor="#0ACF83"
                    w="xs"
                    h="10"
                    borderRadius="2xl"
                    boxShadow="md">
                        Continuar
                    </Button>
                </Flex>
            </FormControl>
        </Flex>
    );
}