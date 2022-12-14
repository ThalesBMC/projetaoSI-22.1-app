import {
  Flex,
  Button,
  Icon,
  useDisclosure,
  Slide,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const array = ["banana", "batata", "alface", "tomate", "pão"];

export const Search = ({ produtos, setFilteredProducts }) => {
  const [isActivated, setIsActivated] = useState(false);
  const { onToggle, isOpen } = useDisclosure();

  const openSearch = () => {
    setIsActivated(true);
    onToggle();
  };

  const closeSearch = () => {
    setIsActivated(false);
    onToggle();
  };

  const handlerFilter = (product) => {
    let filteredProducts = produtos.filter((produto) => {
      console.log(produto.product.name, "wow");
      if (produto.product.name.toLowerCase().includes(product.toLowerCase())) {
        return produto.product.name;
      }
    });
    setFilteredProducts(filteredProducts);
  };
  return (
    <Flex justify="end">
      <Flex
        mr="10"
        borderRadius="full"
        bg="purple.200"
        h="16"
        align={"center"}
        display={isActivated === true ? "none" : "flex"}
      >
        <Button onClick={openSearch}>
          <Icon as={FaSearch} w="9" h="9" color={"purple.500"} />
        </Button>
      </Flex>
      <Flex>
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p="30px"
            color="white"
            mt="4"
            bg="purple.200"
            rounded="md"
            shadow="md"
          >
            <InputGroup>
              <Input
                bg="white"
                w="354px"
                h="65px"
                color="black"
                borderRadius={"2xl"}
                onChange={(event) => handlerFilter(event.target.value)}
              ></Input>
              <InputRightElement h="100%" mr="4">
                <Button onClick={closeSearch}>
                  <Icon as={FaSearch} w="9" h="9" color={"purple.500"} />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Slide>
      </Flex>
    </Flex>
  );
};
