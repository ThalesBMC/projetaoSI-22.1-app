import React, { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

import { useRouter } from "next/router";

export const MenuItem = ({ currentRoute, name, route }) => {
  return (
    <Flex h="12" align="center" opacity="1">
      <Flex
        bgColor={currentRoute === `/${route}` ? "#A259FF" : "transparent"}
        w="4"
        h="full"
      />
      <Link ml="2" href={`/${route}`} cursor="pointer">
        <Text ml="2" fontWeight="bold" fontSize="xl" cursor="pointer">
          {name}
        </Text>
      </Link>
    </Flex>
  );
};
