import {
  Button,
  Flex,
  FormControl,
  Icon,
  Img,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { BiBarcodeReader } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { apiClient } from "../utils/api";
import Router from "next/router";
import { LoginContext } from "../contexts/LoginContext";
export const cadastroprodutos = () => {
  const { handleSubmit, register } = useForm();
  const [value, setValue] = useState("1");
  const { marketInfo } = useContext(LoginContext);
  console.log(marketInfo, "wow");
  const sendLoginForm = async (loginForm) => {
    try {
      console.log(loginForm);
      const res = await apiClient.post("product", {
        params: {
          ...loginForm,
          location: marketInfo.location,
          neighborhood: marketInfo.neighborhood,
          marketId: marketInfo.id,
        },
      });
      setUserInfo(res.data);
      if (!res.data) {
        console.error(res);
      } else Router.push("produtos");
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  return (
    <Flex bg="white" direction="column" h="100vh">
      <Flex direction="column" w="100vw" px="18px" py="35px">
        <Flex bg="#0ACF83" pl="31px" py="12px" borderTopRadius="10px">
          <Text color="#3F3F3F" fontWeight="bold" fontSize="20px">
            INÍCIO
          </Text>
        </Flex>
        <Flex bg="#0E9662" py="20px" pl="31px">
          <Text color="#3F3F3F" fontWeight="extrabold" fontSize="30px">
            MERCADO PRAZERES
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" align="center">
        <Text color="#3F3F3F" fontWeight="bold" fontSize="40px">
          O que você está anunciando?
        </Text>
        <Flex px="10px">
          <Flex w="40vw">
            <form onSubmit={handleSubmit(sendLoginForm)}>
              <FormControl>
                <Flex direction="column" gap="15px">
                  <Text color="black" fontWeight="bold" fontSize="24px">
                    Nome do Produto
                  </Text>
                  <Input
                    bg="#EFEFEF"
                    borderColor="black"
                    color="#686868"
                    fontWeight="bold"
                    {...register("name")}
                  />
                  <Text color="black" fontWeight="bold" fontSize="24px">
                    Código de Barras
                  </Text>
                  <Flex>
                    <Input
                      bg="#EFEFEF"
                      borderColor="black"
                      color="#686868"
                      fontWeight="bold"
                    />
                    <Button>
                      <Icon
                        as={BiBarcodeReader}
                        color="black"
                        boxSize="24px"
                      ></Icon>
                    </Button>
                  </Flex>
                  <Text
                    color="black"
                    fontWeight="bold"
                    fontSize="24px"
                    {...register("description")}
                  >
                    Descrição
                  </Text>
                  <Input
                    bg="#EFEFEF"
                    borderColor="black"
                    color="#686868"
                    fontWeight="bold"
                  />
                  <Flex gap="20px">
                    <Text color="black" fontWeight="bold" fontSize="24px">
                      Preço
                    </Text>
                    <Input
                      bg="#EFEFEF"
                      borderColor="black"
                      color="#686868"
                      fontWeight="bold"
                      {...register("price")}
                    />
                    <Text color="black" fontWeight="bold" fontSize="24px">
                      Tipo do Produto
                    </Text>
                    <Select
                      placeholder="Selecione "
                      borderColor="black"
                      bg="#EFEFEF"
                      color="black"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                  <Flex gap="15px" align="center">
                    <Text color="black" fontWeight="bold" fontSize="24px">
                      Próximo de Vencer?
                    </Text>
                    <RadioGroup onChange={setValue} value={value}>
                      <Stack direction="row">
                        <Radio value="1" bg="#EFEFEF" borderColor="black">
                          <Text color="black">Sim</Text>
                        </Radio>
                        <Radio value="2" bg="#EFEFEF" borderColor="black">
                          <Text color="black">Não</Text>
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </Flex>
                  <Text color="black" fontWeight="bold" fontSize="24px">
                    Data de Validade
                  </Text>
                  <Input
                    bg="#EFEFEF"
                    borderColor="black"
                    color="#686868"
                    fontWeight="bold"
                  />
                </Flex>
              </FormControl>
            </form>
          </Flex>
          <Flex
            w="50vw"
            justify="center"
            direction="column"
            align="center"
            gap="50px"
          >
            <Img src="image12.png" maxH="350px" maxW="350px" />
            <Flex gap="20px">
              <Button color="Black">
                <Flex direction="column" align="center">
                  <Icon as={BsImage} boxSize="30px" />
                  Upload
                </Flex>
              </Button>
              <Button color="Black">
                <Flex direction="column" align="center">
                  <Icon as={AiFillCamera} boxSize="30px" />
                  Câmera
                </Flex>
              </Button>
            </Flex>
            <Flex gap="40px">
              <Button bg="#0ACF83" px="47px">
                Continuar
              </Button>
              <NextLink href="">
                <Text color="#3F3F3F" fontSize="20px" fontWeight="bold">
                  SAIR
                </Text>
              </NextLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default cadastroprodutos;
