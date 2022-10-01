import { Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Options from "../components/Categorias/Options";

export const alerts = () => {
  const categorias = [
    { name: "Cereais" },
    { name: "Grãos" },
    { name: "Padaria" },
    { name: "Frios" },
    { name: "Congelados" },
    { name: "Hortifruti" },
    { name: "Limpeza" },
    { name: "Higiene" },
    { name: "Bebidas" },
    { name: "Papelaria" },
    { name: "Carne" },
    { name: "Aves" },
    { name: "Peixes" },
    { name: "Enlatados" },
    { name: "Doces" },
    { name: "Feira" },
    { name: "Laticínios" },
    { name: "Molhos" },
    { name: "Pets" },
    { name: "Suplementos" },
    { name: "Condimentos" },
    { name: "Alimentos" },
    { name: "Próximo da validade" },
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelectCategories = (name) => {
    const removeIndex = selectedCategories.indexOf(name);
    if (!selectedCategories.includes(name)) {
      selectedCategories.push(name);
    } else selectedCategories.splice(removeIndex, 1);
    console.log(selectedCategories);
  };

  return (
    <Flex h="100vh" bg="#EFEFEF" direction="column" px="30px">
      <Flex
        py="35px"
        direction="column"
        align="center"
        borderBottom="1px solid #A7A7A7"
        gap="22px"
      >
        <Text color="#0ACF83" fontWeight="bold" fontSize="25px">
          Alerta de Preço
        </Text>
        <Text color="#0ACF83" align="center" fontSize="16px">
          Indique quais promoções você está procurando, que te avisaremos assim
          que ela aparecer :)
        </Text>
      </Flex>
      <Text color="#0ACF83" fontWeight="bold" fontSize="22px">
        Categorias
      </Text>
      <Flex flexWrap="wrap" gap="8px">
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
    </Flex>
  );
};
export default alerts;
