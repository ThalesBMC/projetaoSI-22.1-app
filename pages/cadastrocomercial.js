import { Flex, Button, Text, Input, Icon, FormControl } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { useForm } from "react-hook-form";

export const cadastrocomercial = () => {
  const { handleSubmit, register } = useForm();

  const sendComercialForm = (comercialForm) => {
    console.log(comercialForm);
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
          <FormControl>
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
                {...register("Nome do Mercado")}
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
              <Button color="green">
                <Icon as={FiArrowLeft} />
                Voltar para os dados pessoais
              </Button>
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
