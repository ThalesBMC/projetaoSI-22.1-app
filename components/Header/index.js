import React, { useState } from "react";
import { Flex, Heading, Menu, Text } from "@chakra-ui/react";

import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MenuItem } from "../MenuItem/index";

const menuItemsOptions = [
  { name: "Home", route: "produtos" },
  { name: "Perfil", route: "perfil" },
  { name: "Lojas Parceiras", route: "lojasParceiras" },
  { name: "Filtros", route: "filtros" },
  { name: "Seja nosso parceiro", route: "loginVendedor" },
  { name: "Alertas", route: "alertas" },
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { route } = useRouter();

  return (
    <>
      <Flex
        bgColor="#0ACF83"
        w="full"
        h="60px"
        justifyContent="space-between"
        alignItems="center"
        paddingRight="4"
        borderBottomRightRadius="3rem"
        zIndex="998" //add o zIndex para o header não ser sobrescrito por outros componentes/elementos
        boxShadow="2px 2px 2px 0px rgba(0,0,0,0.09)"
        position="fixed"
      >
        <HamburgerIcon
          ml="4"
          fontSize="3xl"
          onClick={() => setShowMenu(!showMenu)}
        />
        <Heading fontSize="2xl" mr="8" color="gray.100">
          Offerta.com
        </Heading>
      </Flex>
      {showMenu && (
        <Slide direction="left" in={showMenu} style={{ zIndex: 10 }}>
          <Flex
            width="60vw"
            alignSelf="flex-start"
            height="100%"
            bgColor="#0E9662"
            zIndex="999"
            opacity="0.9"
            position="absolute"
            mt="60px"
          >
            <Flex flexDirection="column" mt="12" gap="6">
              {menuItemsOptions.map((item) => (
                <MenuItem
                  currentRoute={route}
                  name={item.name}
                  route={item.route}
                />
              ))}
            </Flex>
          </Flex>
        </Slide>
      )}
    </>
  );
};
