import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export const Header = () => {
  return (
    <Flex
      bgColor="#0ACF83"
      w="full"
      h="60px"
      justifyContent="space-between"
      alignItems="center"
      paddingLeft="4"
      paddingRight="4"
      borderBottomRightRadius="3rem"
      position='fixed'
      zIndex='998' //add o zIndex para o header não ser sobrescrito por outros componentes/elementos
      boxShadow= '2px 2px 2px 0px rgba(0,0,0,0.09)'
    >
      <CloseIcon w="6" h="6" />
      <Heading fontSize="2xl" mr="8">
        Nome do site
      </Heading>
    </Flex>
  );
};
