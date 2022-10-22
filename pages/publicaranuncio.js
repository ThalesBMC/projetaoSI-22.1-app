import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { LoginContext } from "../contexts/LoginContext";

import { apiClient } from "../utils/api";
export const publicaranuncio = () => {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState({});
  const { marketInfo } = useContext(LoginContext);
  useEffect(() => {
    if (router.query) {
      console.log(router.query);
      setProductInfo(router.query);
    }
  }, [router]);

  const sendLoginForm = async () => {
    try {
      console.log([productInfo.option]);

      const res = await apiClient.post("product", {
        ...productInfo,
        price: parseInt(productInfo.price),
        quantity: 1,
        marketId: marketInfo.id,
        categoryNames: [productInfo.option],
      });

      if (!res.data) {
        console.error(res);
      } else Router.push("inicialmercado");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Flex bg="white" h="100vh">
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
        <Flex align="center" direction={"column"}>
          <Text color="#3F3F3F" fontSize="30px" fontWeight="bold">
            Você deseja publicar este anúncio?
          </Text>
          <Text color="#616161" fontSize="25px">
            {productInfo.name}
          </Text>
          <Flex bg="#EFEFEF" justify="end" align="end" w="600px">
            <Img src={productInfo.imageUrl} w="400px" h="400px" p="4" />
            <Flex
              align="center"
              justify="center"
              borderRadius="full"
              bg="#D9D9D9"
              w="110px"
              h="110px"
              m="20px"
            >
              <Text color="black">{marketInfo.name}</Text>
            </Flex>
          </Flex>
          <Flex bg="#0ACF83" h="120px" w="600px" borderRightRadius="20px">
            <Flex
              bg="#D1AEFF"
              py="10px"
              h="100px"
              minW="250px"
              borderBottomEndRadius="80px"
            >
              <Text color="#525252" fontWeight="bold" ml="10px">
                R$
              </Text>
              <Flex w="100%" justify="center">
                <Text fontSize="56px" color="#525252" fontWeight="bold">
                  {productInfo.price}
                </Text>
              </Flex>
            </Flex>
            <Text color="#525252">Descrição: {productInfo.description}</Text>
          </Flex>
          <Flex gap="30px" mt="30px">
            <Link href="/cadastroprodutos">
              <Button bg="#FF7262" px="100px" py="30px">
                Voltar
              </Button>
            </Link>
            <Button bg="#0ACF83" px="100px" py="30px" onClick={sendLoginForm}>
              Publicar
            </Button>
          </Flex>
        </Flex>
        <Flex w="100%" justify="end">
          <Button color="#3F3F3F">SAIR</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default publicaranuncio;
