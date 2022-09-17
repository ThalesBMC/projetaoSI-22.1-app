import React from "react";
import {
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
  Avatar,
  Flex,
  Button,
  Divider,
  FormControl,
  Input,
  FormLabel,
  Text,
} from "@chakra-ui/react";

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
      <Divider
        zIndex="99"
        bgColor="#A259FF"
        opacity="1"
        position="absolute"
        bottom="0"
        h="10px"
      />
    </Flex>
  );
}
