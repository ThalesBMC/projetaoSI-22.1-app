import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { Search } from "../components/Search";
import { Header } from "../components/Header";
import { Banners } from "../components/Banners";
import { MenuLayout } from "../components/layout/MenuLayout";
import { apiClient } from "../utils/api";

export default function login() {
  const [produtos, setProdutos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await apiClient.get("market-product");
      setProdutos(data);
      setFilteredProducts(data);
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
        {filteredProducts.map((item, idx) => (
          <Banners key={idx} item={item} />
        ))}
      </Flex>
      <Search produtos={produtos} setFilteredProducts={setFilteredProducts} />
    </MenuLayout>
  );
}
