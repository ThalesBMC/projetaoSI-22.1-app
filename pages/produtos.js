import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { Search } from "../components/Search";
import { Header } from "../components/Header";
import { Banners } from "../components/Banners";
import { MenuLayout } from "../components/layout/MenuLayout";
import { apiClient } from "../utils/api";
import { useRouter } from "next/router";
export default function login() {
  const router = useRouter();
  const [produtos, setProdutos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState([]);
  useEffect(() => {
    if (router.query && produtos) {
      console.log(router.query);
      let test = Object.values(router.query).map((query) => query);
      console.log(produtos, "iii");
      let test2 = Object.values(produtos).filter((item) =>
        test.includes(item.product.id.toString())
      );
      console.log(test2, "22)");
      setQuery(test2);
    }
  }, [router, produtos]);

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
        {!query[0] ? (
          <>
            {filteredProducts.map((item, idx) => (
              <Banners key={idx} item={item} />
            ))}
            <Search
              produtos={produtos}
              setFilteredProducts={setFilteredProducts}
            />
          </>
        ) : (
          <>
            {" "}
            {query.map((item, idx) => (
              <Banners key={idx} item={item} />
            ))}
          </>
        )}
      </Flex>
    </MenuLayout>
  );
}
