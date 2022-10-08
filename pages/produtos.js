import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Banners } from "../components/Banners";
import { MenuLayout } from "../components/layout/MenuLayout";
import { apiClient } from "../utils/api";

export default function login() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await apiClient.get("product");
      setProdutos(data);
    };
    getProducts();
  }, []);
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
        {produtos.map((item, idx) => (
          <Banners key={idx} item={item} />
        ))}
      </Flex>
    </MenuLayout>
  );
}
