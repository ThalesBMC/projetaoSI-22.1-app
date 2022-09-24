import {
  Flex,
  Button,
  Text,
  Icon,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  const [isActivated, setIsActivated] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearchButton = () => {
    setIsActivated(true);
    onOpen();
  };
  console.log(isActivated);
  const handleDisplay = () => {
    isActivated === true ? "none" : "flex";
  };
  return (
    <Flex justify="end" bg="purple.200">
      <Flex
        mr="10"
        borderRadius="full"
        bg="purple.200"
        h="16"
        align={"center"}
        display={handleDisplay()}
      >
        <Button onClick={handleSearchButton}>
          <Icon as={FaSearch} w="9" h="9" color={"purple.500"} />
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Text>asdasd</Text>
      </Modal>
    </Flex>
  );
};
