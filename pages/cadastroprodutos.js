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
import { useState, useContext, useEffect } from "react";
import { BiBarcodeReader } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import NextLink from "next/link";
import { set, useForm } from "react-hook-form";
import { apiClient } from "../utils/api";
import Router from "next/router";
import { LoginContext } from "../contexts/LoginContext";
export const cadastroprodutos = () => {
  const { handleSubmit, register } = useForm();
  const [value, setValue] = useState("1");
  const [categories, setCategories] = useState([]);
  const [option, setOption] = useState("");
  const { marketInfo } = useContext(LoginContext);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const sendLoginForm = async (produtoForm) => {
    try {
      console.log(produtoForm, "wow");
      Router.push({
        pathname: "publicaranuncio",
        query: {
          ...produtoForm,
          imageUrl: image,
          option: option,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await apiClient.get("category");
        setCategories(res.data);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    };
    getCategories();
  }, []);

  // useEffect(() => {
  //   const getImage = async () => {
  //     try {
  //       const res = await apiClient.get("category", { name: name });
  //       setCategories(res.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getImage();
  // }, [name]);
  return (
    <Flex bg="white" direction="column" h="100vh">
      <form onSubmit={handleSubmit(sendLoginForm)}>
        <Flex direction="column" w="100vw" px="18px" py="35px">
          <Flex bg="#0ACF83" pl="31px" py="12px" borderTopRadius="10px">
            <Text color="#3F3F3F" fontWeight="bold" fontSize="20px">
              INÍCIO
            </Text>
          </Flex>
          <Flex bg="#0E9662" py="20px" pl="31px">
            <Text color="#3F3F3F" fontWeight="extrabold" fontSize="30px">
              {marketInfo.name}
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" align="center">
          <Text color="#3F3F3F" fontWeight="bold" fontSize="40px">
            O que você está anunciando?
          </Text>
          <FormControl>
            <Flex px="10px">
              <Flex w="40vw">
                <Flex direction="column" gap="15px">
                  <Text
                    color="black"
                    fontWeight="bold"
                    fontSize="24px"
                    onChange={(e) => setName(e.target.value)}
                  >
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
                  <Text color="black" fontWeight="bold" fontSize="24px">
                    Descrição
                  </Text>
                  <Input
                    bg="#EFEFEF"
                    borderColor="black"
                    color="#686868"
                    fontWeight="bold"
                    {...register("description")}
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
                      onChange={(e) => setOption(e.target.value)}
                    >
                      {categories[0] &&
                        Object.keys(categories).map((item) => (
                          <option
                            value={categories[item].name}
                            bgColor="#EFEFEF"
                          >
                            {categories[item].name}
                          </option>
                        ))}
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
              </Flex>
              <Flex
                w="50vw"
                justify="center"
                direction="column"
                align="center"
                gap="50px"
              >
                <Flex
                  borderRadius="xl"
                  bg="#EFEFEF"
                  minH="400px"
                  minW="400px"
                  align="center"
                  justify="center"
                >
                  <Img src={image} maxH="350px" maxW="350px" />
                </Flex>
                <Flex gap="20px">
                  <Button color="Black">
                    <Flex direction="column" align="center">
                      <Icon as={BsImage} boxSize="30px" />
                      <Input type="file" w="150px" />
                    </Flex>
                  </Button>
                  <Button color="Black">
                    <Flex direction="column" align="center">
                      <Icon as={AiFillCamera} boxSize="30px" />
                      Câmera
                    </Flex>
                  </Button>
                  <Button color="Black">
                    <Flex direction="column" align="center">
                      <Input
                        bg="#EFEFEF"
                        borderColor="black"
                        color="#686868"
                        fontWeight="bold"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                      URL
                    </Flex>
                  </Button>
                </Flex>

                <Flex gap="40px">
                  <Button bg="#0ACF83" px="47px" type="submit">
                    Continuar
                  </Button>
                  <NextLink href="/inicialmercado">
                    <Text color="#3F3F3F" fontSize="20px" fontWeight="bold">
                      SAIR
                    </Text>
                  </NextLink>
                </Flex>
              </Flex>
            </Flex>
          </FormControl>
        </Flex>
      </form>
    </Flex>
  );
};
export default cadastroprodutos;
