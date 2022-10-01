import { Button, Flex, Img, Text } from "@chakra-ui/react";

export const publicaranuncio = () => {
  const produtos = {
    nome: "Óleo de Soja Soya 900ml",
    img: "image12.png",
    preco: "5,49",
    descrição:
      "Óleo de Soja Soya Pet 900ml. Óleo para o preparo de receitas e frituras, dando um sabor mais leve no seu prato",
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
            MERCADO PRAZERES
          </Text>
        </Flex>
        <Flex align="center" direction={"column"}>
          <Text color="#3F3F3F" fontSize="30px" fontWeight="bold">
            Você deseja publicar este anúncio?
          </Text>
          <Text color="#616161" fontSize="25px">
            {produtos.nome}
          </Text>
          <Flex bg="#EFEFEF" justify="end" align="end">
            <Img src={produtos.img} />
            <Flex
              align="center"
              justify="center"
              borderRadius="full"
              bg="#D9D9D9"
              w="110px"
              h="110px"
              m="20px"
            >
              <Text color="black">Logo</Text>
            </Flex>
          </Flex>
          <Flex bg="#0ACF83" h="120px" maxW="550px" borderRightRadius="20px">
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
                  {produtos.preco}
                </Text>
              </Flex>
            </Flex>
            <Text color="#525252">Descrição: {produtos.descrição}</Text>
          </Flex>
          <Flex gap="30px" mt="30px">
            <Button bg="#FF7262" px="100px" py="30px">
              Voltar
            </Button>
            <Button bg="#0ACF83" px="100px" py="30px">
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
