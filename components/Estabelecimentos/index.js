import React from "react";
import { Flex, Box, Button, Avatar, Image } from "@chakra-ui/react";

export const Estabelecimentos = ({ data }) => {
  //as constantes e variaveis abaixo, devem ser transformadas em useState. Até o momento eu não soube importar esse hook aqui.

  const usuarioImagem =
    "https://img.freepik.com/vetores-premium/desenhos-animados-de-produtos-de-mercearia-de-supermercado_24640-26652.jpg";
  const salmao = "#FF7262";
  const salmaoClaro = "#f39489";
  const nomeSupermercado = "Super Mercadão (Nome)";
  const qtdProducts = "## Qtd ";
  const bairro = "Nome do Bairro";
  const nomeRua = "Nome da Rua";
  const numero = "Número";
  const cep = "00.000-000";

  return (
    <Flex
      w="full"
      h="auto"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        Flex
        w="auto"
        h="auto"
        borderRadius="7px"
        flexDirection="column"
        alignItems="center"
      >
        <Flex
          w="260px" //iniciei como no figma em 288px, mas achei a área util muito pequena, resolvi aumentar um pouco
          h="81px"
          bg="gray.100"
          borderRadius="15px 0px 0px 0px"
          alignItems="left"
          justifyContent="left"
          bgColor={salmao}
          p="10px"
        >
          <Flex flexDirection="column" gap="3px">
            <Box
              fontSize="x-large"
              fontWeight="bold"
              color="gray.100"
              overflow="hidden"
              flexWrap="nowrap"
            >
              {data.name}
            </Box>
          </Flex>
        </Flex>

        <Flex
          w="260px"
          h="81px"
          flexDirection="row"
          bgColor={salmaoClaro}
          gap="4px"
          padding="3px"
          color="gray.100"
          fontWeight="bold"
        >
          <Flex flexDirection="column" ml="5px" w="190px">
            <Box>{data.neighborhood}</Box>
            <Box>{data.location}</Box>
            <Box>Cep: {data.cep}</Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w="162px"
        h="162px"
        bg="gray.400"
        borderRadius="50%"
        justifyContent="center"
        alignItems="center"
        bgColor={salmao}
        margin="-81px"
      >
        <Avatar
          w="145px"
          h="145px"
          name="Segun Adebayo"
          bgColor="white"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          src={usuarioImagem}
          boxShadow="md"
        />
      </Flex>
    </Flex>
  );
};
