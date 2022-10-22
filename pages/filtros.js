import { Divider, Flex, Text, Button } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import Options from "../components/Categorias/Options";
import { apiClient } from "../utils/api";
import { LoginContext } from "../contexts/LoginContext";
import Router from "next/router";
import { useToast } from "@chakra-ui/react";
import { Header } from "../components/Header";
export const filtros = () => {
  const [categorias, setCategories] = useState([]);
  const [neighborhood, setNeighborhood] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState([]);
  const toast = useToast();
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
    const getNeighborhood = async () => {
      try {
        const res = await apiClient.get("market/neighborhood");
        let values = Object.values(res.data).map((item) => item.neighborhood);

        setNeighborhood(values);
      } catch (err) {
        console.error(err);
      }
    };
    getCategories();
    getNeighborhood();
  }, []);

  const { userInfo } = useContext(LoginContext);

  const sendFiltered = async () => {
    try {
      const res = await apiClient.get("market-product/findFiltered", {
        params: {
          clientId: 20,
          neighborhood: selectedNeighborhood,
          category: selectedCategories,
        },
      });

      console.log(res.data, "ooooo");
      let test = Object.keys(res.data).map((item) => res.data[item].productId);
      Router.push({ pathname: "produtos", query: test });
      console.log(test);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectCategories = (name) => {
    const removeIndex = selectedCategories.indexOf(name);
    if (!selectedCategories.includes(name)) {
      setSelectedCategories([...selectedCategories, name]);
    } else {
      selectedCategories.splice(removeIndex, 1);

      setSelectedCategories([...selectedCategories]);
    }
  };

  return (
    <>
      <Header />
      <Flex h="100vh" bg="#EFEFEF" direction="column" px="30px">
        <Text color="#0ACF83" fontWeight="bold" fontSize="22px" mt="20">
          Filtros por Categoria
        </Text>
        <Flex flexWrap="wrap" gap="8px" mt="6">
          {categorias.map((item, index) => (
            <Options
              key={index}
              selected={selectedCategories.includes(item.name)}
              value={item.name}
              nome={item.name}
              handleSelectCategories={() => handleSelectCategories(item.name)}
            />
          ))}
        </Flex>
        <Text color="#0ACF83" fontWeight="bold" fontSize="22px" mt="20">
          Filtros por Bairro
        </Text>
        <Flex flexWrap="wrap" gap="8px" mt="6">
          {neighborhood.map((item, index) => (
            <Options
              key={index}
              selected={selectedCategories.includes(item)}
              value={item.name}
              nome={item}
              handleSelectCategories={() => handleSelectCategories(item)}
            />
          ))}
          <Button
            _active={{ bg: "#0ACF83", opacity: 0.8 }}
            _hover={{ bg: "#0ACF83", opacity: 0.8 }}
            bgColor="#0ACF83"
            w="xs"
            h="10"
            borderRadius="2xl"
            boxShadow="md"
            onClick={sendFiltered}
            mt="4"
          >
            Confirmar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default filtros;
