import React from "react";
import { Flex } from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Banners } from "../components/Banners";
import { MenuLayout } from "../components/layout/MenuLayout";
export default function login() {
  return (
    <MenuLayout>
      <Flex
        h="auto"
        bg="gray.100"
        flexDirection="column"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        justifyItems="center"
      >
        <Banners />
        <Banners />
        <Banners />
        <Banners />
      </Flex>
    </MenuLayout>
  );
}
