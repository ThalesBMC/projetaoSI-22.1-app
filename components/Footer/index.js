import React from "react";

import { Flex, Divider } from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Flex as="footer" mt="8" w="full" bottom="100%" top="100%">
      <Divider
        zIndex="99"
        bgColor="#A259FF"
        opacity="1"
        position="absolute"
        bottom="0"
        h="10px"
      />
    </Flex>
  );
};
