import React from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";

import { Footer } from "../Footer/index";
import { Header } from "../Header/index";
export const MenuLayout = ({ children }) => {
  return (
    <Flex
      bg="white"
      flexDirection="column"
      h="auto"
      w="100%"
      alignItems="center"
      minHeight="100vh"
      justifyItems="center"
    >
      <Header />
      <Flex mt="60px" w="full" h="full">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
