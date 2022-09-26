import React from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";

import { Footer } from "../Footer/index";
import { Header } from "../Header/index";
export const MenuLayout = ({ children }) => {
  return (
    <Flex
      bg="gray.100"
      flexDirection="column"
      h="auto"
      w="100%"
      alignItems="center"
      minHeight="100vh"
      justifyItems="center"
    >
      <Header />
      <Flex mt="60px" w="full" h="full" flexDirection='column'> 
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
