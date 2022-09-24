import React from "react";
import { Flex, Avatar, Text, Button, Link, Image } from "@chakra-ui/react";
export default function confirmation() {
  return (
    <Flex
      bg="white"
      flexDirection="column"
      h="full"
      minH="100vh"
      w="full"
      align="center"
      justify="center"
      gap="6"
    >
      <Text color="black" fontWeight="bold" fontSize="48px">
        Sua oferta foi publicada!
      </Text>
      <Image src="./confirmation.png" w="450px" h="450px" />
      <Link href="/">
        <Button
          bgColor="#0ACf83"
          _active={{ opacity: 0.8 }}
          _hover={{ opacity: 0.8 }}
          w="310px"
          h="75px"
          fontWeight="bold"
          fontSize="32px"
        >
          Tela Inicial
        </Button>
      </Link>
      <Flex position="absolute" right="0" bottom="0" mr="12" mb="6">
        <Button color="#3F3F3F" fontWeight="extrabold" fontSize="32px">
          Sair
        </Button>
      </Flex>
    </Flex>
  );
}
