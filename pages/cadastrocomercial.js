import { Flex, Button, Text, Input, Icon, FormControl } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { apiClient } from "../utils/api";
import Link from "next/link";

export const cadastrocomercial = (props) => {
  const router = useRouter();
  const [comercianteInfo, setComercianteInfo] = useState(undefined);
  const { handleSubmit, register } = useForm();
  useEffect(() => {
    if (router.query) {
      setComercianteInfo(router.query);
    }
  }, [router]);
  const sendComercialForm = async (comercialForm) => {
    console.log(comercianteInfo, "salveeee");
    const form = {
      username: comercialForm.NomeMercado,
      password: comercianteInfo.password.toString(),
      name: comercialForm.NomeMercado,
      ownerName: comercianteInfo.Nome,
      email: comercianteInfo.Email,
      neighborhood: comercialForm.Bairro,
      adNumber: comercialForm.Numero,
      location: comercialForm.Cidade + ", " + comercialForm.Estado,
      cep: comercialForm.CEP.toString(),
    };
    console.log(form, "why");
    // const formProduct = {
    //   name: "'asdasd'",
    //   description: "description",
    //   imageUrl: "Url",
    //   categoryIds: 123,
    // };
    // const form = {
    //   username: "'asdasd'",
    //   password: " '12345'",
    //   name: "'asdasd'",
    //   ownerName: "'hehexd'",
    //   email: "'iejiej@suahduas.com'",
    //   neighborhood: "'bairro'",
    //   adNumber: 123,
    //   location: "'here'",
    //   cep: "'35160250' ",
    // };
    const res = await apiClient.post("market", form);
    console.log(res);
    Router.push("loginvendedor");
  };
  return (
    <Flex bg="white" align={"center"} direction="column" gap="4">
      <Flex
        mt="4"
        w="md"
        h="70px"
        bg="green.400"
        borderRadius={"lg"}
        align="center"
        justify="center"
      >
        <Text>Sobre o mercado</Text>
      </Flex>
      <Flex
        h="full"
        w="100%"
        bg="green.100"
        direction="column"
        align={"center"}
        gap="2"
        borderRadius={"lg"}
        pb="4"
      >
        <form onSubmit={handleSubmit(sendComercialForm)}>
          <FormControl isRequired>
            <Flex direction="column" w="400px">
              <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                Razão Social
              </Text>
              <Input
                bg="white"
                borderColor="gray"
                color="gray"
                {...register("Razão Social")}
              />
            </Flex>
            <Flex direction="column" w="400px">
              <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                Nome do Mercado
              </Text>
              <Input
                bg="white"
                borderColor="gray"
                color="gray"
                {...register("NomeMercado")}
              />
            </Flex>
            <Flex direction="column" w="400px">
              <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                CEP
              </Text>
              <Flex align={"center"} gap="8">
                <Input
                  bg="white"
                  borderColor="gray"
                  color="gray"
                  {...register("CEP")}
                />
              </Flex>
            </Flex>
            <Flex direction="column" w="400px">
              <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                CNPJ
              </Text>
              <Input
                bg="white"
                borderColor="gray"
                color="gray"
                {...register("CNPJ")}
              />
            </Flex>
            <Flex direction="column" w="400px">
              <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                Telefone do Mercado
              </Text>
              <Input
                bg="white"
                borderColor="gray"
                color="gray"
                {...register("Telefone do Mercado")}
              />
            </Flex>
            <Flex direction="column" w="400px">
              <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                Número do endereço
              </Text>
              <Input
                bg="white"
                borderColor="gray"
                color="gray"
                {...register("Numero")}
              />
            </Flex>
            <Flex direction="column" w="400px">
              <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                Estado
              </Text>
              <Input
                bg="white"
                borderColor="gray"
                color="gray"
                {...register("Estado")}
              />
            </Flex>
            <Flex direction="column" w="400px">
              <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                Bairro
              </Text>
              <Input
                bg="white"
                borderColor="gray"
                color="gray"
                {...register("Bairro")}
              />
            </Flex>
            <Flex direction="column" w="400px">
              <Text fontSize={"12px"} fontWeight="bold" color="#686868">
                Cidade
              </Text>
              <Input
                bg="white"
                borderColor="gray"
                color="gray"
                {...register("Cidade")}
              />
            </Flex>
            <Flex justify={"space-between"} w="100%">
              <Link href="/cadastrocomerciante">
                <Button color="green">
                  <Icon as={FiArrowLeft} />
                  Voltar para os dados pessoais
                </Button>
              </Link>
              <Button bg="green" mr="10" type="submit">
                Cadastrar
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
};
export default cadastrocomercial;
