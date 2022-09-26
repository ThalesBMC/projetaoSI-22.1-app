import React from "react";
import { Flex, Avatar, Text, Button, Link, Image } from "@chakra-ui/react";
export default function inicialmercado() {
  return (
    <Flex bg="white" flexDirection="column" h="full" minH="100vh" w="full">
      <Flex mt="4" w="full" pl="4" pr="4" flexDirection="column">
        <Flex
          bgColor="#0ACf83"
          w="full"
          h="5.5rem"
          borderTopRightRadius="13px"
          borderTopLeftRadius="13px"
          color="#3F3F3F"
          fontWeight="bold"
          fontSize="32px"
          align="center"
        >
          <Text ml="4">INÍCIO</Text>
        </Flex>
        <Flex
          bgColor="#0E9662"
          w="full"
          h="7.4rem"
          borderBottomLeftRadius="13px"
          borderBottomRightRadius="13px"
          color="#3F3F3F"
          fontWeight="bold"
          fontSize="48px"
          align="center"
        >
          <Text ml="4"> MERCADO PRAZERES</Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Flex w="full" justify="space-around" mt="20">
          <Link href="/">
            <Button
              _active={{ opacity: 0.8 }}
              _hover={{ opacity: 0.8 }}
              bgColor="#D9D9D9"
              w="14.5rem"
              h="16rem"
              borderRadius="xl"
              align="center"
              justifyContent="center"
              flexDirection="column"
              boxSizing="100%"
            >
              <Image src="register.png" h="6.25rem" w="4.7rem" />
              <Text
                color="#3F3F3F"
                fontSize="24px"
                fontWeight="extrabold"
                mt="2"
                h="8"
              >
                CADASTRAR
                <br /> PROMOÇÃO
              </Text>
            </Button>
          </Link>
          <Link href="/">
            <Button
              _active={{ opacity: 0.8 }}
              _hover={{ opacity: 0.8 }}
              bgColor="#D9D9D9"
              w="14.5rem"
              h="16rem"
              borderRadius="xl"
              align="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Image src="register.png" h="6.25rem" w="4.7rem" />
              <Text
                color="#3F3F3F"
                fontSize="24px"
                fontWeight="extrabold"
                mt="2"
                h="8"
              >
                DASHBOARD
              </Text>
            </Button>{" "}
          </Link>
          <Link href="/">
            <Button
              _active={{ opacity: 0.8 }}
              _hover={{ opacity: 0.8 }}
              bgColor="#D9D9D9"
              w="14.5rem"
              h="16rem"
              borderRadius="xl"
              align="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Image src="register.png" h="6.25rem" w="4.7rem" />
              <Text
                color="#3F3F3F"
                fontSize="24px"
                fontWeight="extrabold"
                mt="2"
                h="8"
              >
                AVALIAÇÕES
              </Text>
            </Button>{" "}
          </Link>
          <Link href="/">
            <Button
              _active={{ opacity: 0.8 }}
              _hover={{ opacity: 0.8 }}
              bgColor="#D9D9D9"
              w="14.5rem"
              h="16rem"
              borderRadius="xl"
              align="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Image src="register.png" h="6.25rem" w="4.7rem" />
              <Text
                color="#3F3F3F"
                fontSize="24px"
                fontWeight="extrabold"
                textAlign="center"
                mt="2"
                h="8"
              >
                EDITAR <br />
                PRODUTOS
              </Text>
            </Button>{" "}
          </Link>
        </Flex>

        <Flex Flex w="full" justify="space-around" mt="20">
          <Link href="/">
            <Button
              _active={{ opacity: 0.8 }}
              _hover={{ opacity: 0.8 }}
              bgColor="#D9D9D9"
              w="14.5rem"
              h="16rem"
              borderRadius="xl"
              align="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Image src="register.png" h="6.25rem" w="4.7rem" />
              <Text
                color="#3F3F3F"
                fontSize="24px"
                fontWeight="extrabold"
                textAlign="center"
                mt="2"
                h="8"
              >
                INFORMAÇÕES <br />
                MERCADO
              </Text>
            </Button>{" "}
          </Link>{" "}
          <Link href="/">
            <Button
              _active={{ opacity: 0.8 }}
              _hover={{ opacity: 0.8 }}
              bgColor="#D9D9D9"
              w="14.5rem"
              h="16rem"
              borderRadius="xl"
              align="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Image src="register.png" h="6.25rem" w="4.7rem" />
              <Text
                color="#3F3F3F"
                fontSize="24px"
                fontWeight="extrabold"
                textAlign="center"
                mt="2"
                h="8"
              >
                INFORMAÇÕES
                <br />
                PERFIL
              </Text>
            </Button>{" "}
          </Link>
        </Flex>
      </Flex>
      <Flex position="absolute" right="0" bottom="0" mr="12" mb="6">
        <Button color="#3F3F3F" fontWeight="extrabold" fontSize="32px">
          Sair
        </Button>
      </Flex>
    </Flex>
  );
}
