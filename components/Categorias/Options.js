import { Button, Text } from "@chakra-ui/react";
import React from "react";

export const Options = ({ nome, selected, handleSelectCategories }) => {
  console.log(selected);
  return (
    <Button
      border="1px"
      borderColor={selected ? "#0ACF83" : "black"}
      borderRadius="20px"
      color={selected ? "#0ACF83" : "black"}
      px="20px"
      h="30px"
      onClick={handleSelectCategories}
    >
      <Text fontSize="16px">{nome}</Text>
    </Button>
  );
};
export default Options;
