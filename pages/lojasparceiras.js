import React, { useState, useEffect } from "react";
import { Flex, Box, Button, Input, FormControl, Icon } from "@chakra-ui/react";

import { Estabelecimentos } from "../components/Estabelecimentos";
import { MenuLayout } from "../components/layout/MenuLayout";
import { ImHome3 } from "react-icons/im";
import { apiClient } from "../utils/api";

export default function login() {
  const [markets, setMarkets] = useState([]);
  const [filteredMarkets, setFilteredMarkets] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await apiClient.get("market");
      setMarkets(data);
      setFilteredMarkets(data);
    };
    getProducts();
  }, []);
  return (
    <MenuLayout>
      <Flex
        h="auto"
        bg="gray.100"
        flexDirection="row"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        justifyItems="center"
        gap="15px"
      >
        <Flex
          flexDirection="column"
          w="441px"
          flexWrap="wrap"
          alignContent="center"
          justifyContent="center"
          alignItems="center"
          justifyItems="center"
        >
          <FormControl
            isRequired
            display="flex"
            w="100%"
            h="80px"
            gap="7px"
            flexDirection="column"
          >
            <Box
              alignContent="left"
              justifyContent="left"
              alignItems="left"
              justifyItems="left"
              bg="gray.100"
              w="50%"
              fontWeight="bold"
              fontSize="2xl"
              color="#0ACF83"
              mt="15px"
            >
              Filtrar por Bairro:
            </Box>

            <Flex w="100%">
              <Input
                color="#686868"
                bgColor="#FFFFFF"
                placeholder="Nome do Bairro"
                variant="unstyled"
                height="48px"
                borderRadius="6px 0px 0px 6px"
                padding="10px"
              />

              <Button
                h="48px"
                borderRadius="0px 6px 6px 0px"
                bgColor="#FFFFFF"
                bgImage=""
              >
                <Icon as={ImHome3} w="6" h="6" color="#0ACF83" />
              </Button>
            </Flex>
          </FormControl>

          <Box h="30px"></Box>

          <Flex flexDirection="column" margin="20px" gap="20px">
            {markets.map((market) => (
              <Estabelecimentos data={market} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </MenuLayout>
  );
}
