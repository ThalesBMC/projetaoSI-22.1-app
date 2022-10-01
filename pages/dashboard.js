import { Flex, Text } from "@chakra-ui/react";

export const dashboard = () => {
  return (
    <Flex direction="column" h="100vh" px="18px" py="35px">
      <Flex bg="#0ACF83" pl="31px" py="12px" borderTopRadius="10px">
        <Text color="#3F3F3F" fontWeight="bold" fontSize="20px">
          INÍCIO
        </Text>
      </Flex>
      <Flex bg="#0E9662" py="20px" pl="31px">
        <Text color="#3F3F3F" fontWeight="extrabold" fontSize="30px">
          MERCADO PRAZERES
        </Text>
      </Flex>
    </Flex>
  );
};
export default dashboard;
