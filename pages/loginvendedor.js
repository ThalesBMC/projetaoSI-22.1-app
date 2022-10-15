import React, { useState } from "react";
import {
  Flex,
  Button,
  FormControl,
  Input,
  FormLabel,
  Image,
  Text,
  Avatar,
  Box,
  GridItem,
  Grid,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { apiClient } from "../utils/api";
import Router from "next/router";

export default function login() {
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState();

  const sendLoginForm = async (loginForm) => {
    try {
      console.log(loginForm);
      const res = await apiClient.get("market/login", { params: loginForm });
      console.log(res.data);
      if (!res.data) {
        console.log("usuario não encontrado");
      } else Router.push("inicialmercado");
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };
  return (
    <Flex bgColor="gray.100" flexDirection="column" h="100vh">
      <Grid
        templateAreas={`"header header"
                        "nav logo"
                        "nav info"`}
        gridTemplateRows={"200px 220px 220px"}
        gridTemplateColumns={"50% 50%"}
        h="80%"
        w="100%"
        fontWeight="bold"
      >
        <GridItem area={"header"} paddingLeft="-4">
          <Header area={"header"} />
        </GridItem>

        <GridItem pl="2" pr="2" area={"nav"}>
          <Flex
            flexDirection="column"
            h="100%"
            w="100%"
            justifyContent="center"
            alignItems="center"
            backgroundImage="https://www.agroportal.pt/wp-content/uploads/2021/03/compras.jpg"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius="8px"
          ></Flex>
        </GridItem>

        <GridItem pl="2" pr="2" area={"logo"} textAlign="center" mb="20">
          <Flex
            flexDirection="column"
            h="100%"
            w="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              w="48"
              h="48"
              name="Segun Adebayo"
              bgColor="white"
              src="https://www.cin.ufpe.br/~imprensa/marcacinpng/SC"
              boxShadow="md"
              justifyContent="center"
              alignItems="center"
              justifyItems="center"
              alignContent="center"
            />
          </Flex>
        </GridItem>

        <GridItem pl="2" pr="2" area={"info"} h="100%" mt="35px">
          <Flex h="100%" w="100%" flexDirection="row" justifyContent="center">
            <Flex
              h="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="left"
              w="auto"
              gap="15px"
            >
              <box>
                <Text fontSize="4xl">Parceiro Flyer!</Text>
                <Text fontSize="xl">Divulge suas promoções em um só lugar</Text>
              </box>

              <form w="380px" onSubmit={handleSubmit(sendLoginForm)}>
                <Flex flexDirection="column" gap="16" isInvalid={error}>
                  <FormControl isRequired>
                    <FormLabel color="#686868">E-mail</FormLabel>
                    <Input
                      color="#686868"
                      bgColor="white"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <FormLabel mt="25px" color="#686868">
                      Senha
                    </FormLabel>
                    <Input
                      color="#686868"
                      bgColor="white"
                      type="password"
                      placeholder="Senha"
                      {...register("password")}
                    />
                    <Button
                      _active={{ bg: "#0ACF83", opacity: 0.8 }}
                      _hover={{ bg: "#0ACF83", opacity: 0.8 }}
                      bgColor="#0ACF83"
                      w="100%"
                      h="10"
                      borderRadius="2xl"
                      boxShadow="md"
                      type="submit"
                      mt="8"
                    >
                      Login
                    </Button>
                  </FormControl>
                </Flex>
              </form>

              <box>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  mt="25px"
                >
                  <Text fontSize="sm">Ainda não tem cadastro?</Text>
                  <Link href={`cadastrocomerciante`}>
                    <Text fontSize="sm" color="#0ACF83">
                      Faça o seu cadastro agora!
                    </Text>
                  </Link>
                </Flex>
              </box>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>

      <Footer />
    </Flex>
  );
}
