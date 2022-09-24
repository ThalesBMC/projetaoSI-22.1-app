import { useDisclosure, Slide, Box, Lorem } from "@chakra-ui/react";

export const SearchSlide = ({ onToggle }) => {
  const { isOpen } = useDisclosure();
  return (
    <>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Lorem count={2} />
        </Box>
      </Slide>
    </>
  );
};
