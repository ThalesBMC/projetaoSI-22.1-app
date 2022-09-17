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
  Checkbox,
  Heading,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function login() {
  return (
    <Flex bgColor="#e9e9e9" flexDirection="column" h="100vh">
      <Flex
        bgColor="#0ACF83"
        w="full"
        h="20"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft="4"
        paddingRight="4"
        borderBottomRightRadius="3rem"
      >
        <CloseIcon w="6" h="6" />
        <Heading fontSize="2xl" mr="8">
          Nome do site
        </Heading>
      </Flex>

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
      <Flex as="footer" mt="8">
        <Divider zIndex="99" bgColor="#A259FF" opacity="1" h="10px" />
      </Flex>
    </Flex>
  );
}
