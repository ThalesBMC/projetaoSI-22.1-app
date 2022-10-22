import React from "react";
import { Flex, Box, Button, Avatar, Text, Image } from "@chakra-ui/react";

export const Banners = (item) => {
  //as constantes e variaveis abaixo, devem ser transformadas em useState. Até o momento eu não soube importar esse hook aqui.

  const productFoto =
    "https://static.significados.com.br/foto/verduras-e-legumes-fb.jpg";
  var descri = "Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing";
  const productPreco = "00,00";
  const usuarioImagem = "https://www.cin.ufpe.br/~imprensa/marcacinpng/SC";

  return (
    <Flex
      w="368px"
      h="231px"
      borderRadius="7px"
      flexDirection="column"
      alignItems="center"
      gap="8px"
      margin="3px"
      mt="4"
    >
      <Flex
        w="356px"
        h="118px"
        bg="gray.100"
        borderRadius="7px 7px 7px 0px"
        alignItems="end"
        justifyContent="end"
        padding="5px"
        backgroundImage={item.item.product.imageUrl}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        border="2px"
        borderColor="white"
        bgColor="white"
      >
        <Flex
          position="absolut"
          w="82px"
          h="82px"
          bg="gray.400"
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            w="74px"
            h="74px"
            src={"https://www.cin.ufpe.br/~imprensa/marcacinpng/SC"}
            bgColor="white"
            boxShadow="md"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          />
        </Flex>
      </Flex>

      <Flex
        bg="#0ACF83"
        w="356px"
        h="120px"
        borderRadius="7px"
        flexDirection="row"
      >
        <Flex flexDirection="column" gap="10px">
          <Flex
            overflow="hidden"
            position="static"
            w="171px"
            h="57px"
            bg="#dabffd"
            borderRadius="0px 0px 55px 0px"
            marginY="-9px"
            borderBottom="#A259FF solid 5px"
          >
            <Box w="38px" h="auto" padding="4px" fontWeight="bold">
              R$
            </Box>

            <Box w="136px" h="auto" pr="px" fontSize="34px" fontWeight="bold">
              {item.item.price}
            </Box>
          </Flex>
          <Flex flexDirection="column" color="white">
            <Flex ml="2" w="30">
              {item.item.market.neighborhood},
            </Flex>
            <Flex ml="2" w="30">
              {item.item.market.location}
            </Flex>

            <Flex ml="2" w="30">
              Cep: {item.item.market.cep}
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w="auto"
          h="auto"
          overflow="hidden"
          color="white"
          padding="6px"
          flexDirection="column"
        >
          <Flex fontWeight="bold">{item.item.product.name}</Flex>
          <Flex>{item.item.product.description}</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
