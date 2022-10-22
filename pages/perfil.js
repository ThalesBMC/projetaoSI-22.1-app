import React, { useContext } from "react";
import { Flex, Avatar, Text, Button, Icon } from "@chakra-ui/react";

import { CgProfile } from "react-icons";
import { LoginContext } from "../contexts/LoginContext";
import { VscBellDot } from "react-icons/vsc";

import { ImProfile } from "react-icons/im";
import { MenuLayout } from "../components/layout/MenuLayout";
export default function perfil() {
  const { userInfo } = useContext(LoginContext);
  console.log(userInfo);
  return (
    <MenuLayout>
      <Flex flexDirection="column" w="full">
        <Flex
          align="center"
          gap="6"
          mt="6"
          justifyContent="flex-start"
          w="full"
        >
          <Avatar ml="5%" bgColor="#0ACF83" w="72px" h="72px" src={CgProfile} />
          <Text color="#0ACF83" fontWeight="extrabold" fontSize="">
            {userInfo.name}
          </Text>
        </Flex>
        <Flex flexDirection="column" pl="5%" pr="5%" w="full" mt="2rem">
          <Text color="#0ACF83" fontWeight="extrabold" fontSize="">
            Email: {userInfo.email}
          </Text>
          <Text color="#0ACF83" fontWeight="extrabold" fontSize="">
            Bairro:{userInfo.neighborhood}
          </Text>
        </Flex>
        <Flex flexDirection="column" gap="6" pl="5%" pr="5%" w="full" mt="7rem">
          <Button
            _active={{ bg: "#0ACF83", opacity: 0.8 }}
            _hover={{ bg: "#0ACF83", opacity: 0.8 }}
            bgColor="#0ACF83"
            w="100%"
            h="4rem"
            boxShadow="md"
            justifyContent="flex-start"
            gap="14"
          >
            <Icon as={VscBellDot} w="9" h="9" color={"white"} />
            <Text fontWeight="bold" fontSize="lg">
              Notificações
            </Text>
          </Button>
        </Flex>
      </Flex>
    </MenuLayout>
  );
}
