import React from "react";
import { Flex,
  Box,
  Button,
  Avatar } from "@chakra-ui/react";

export const Banners = () => {
  return (
    <Flex
      bgColor="white"
      w="368px"
      h="231px"
      borderRadius='7px'
      flexDirection='column'
      alignItems='center'
      gap = '13px'
      p = '7px'
      margin='3px' 
      
    >
      <Flex 
      w='356px'
      h='118px'
      bg='#E9E9E9'
      borderRadius='7px 7px 7px 0px'
      alignItems='end'
      justifyContent='end'
      padding='5px'
      >
        
        <Flex position='absolut'
        w='82px'
        h='82px'
        bg='darkblue'
        borderRadius='50%'
        justifyContent='center'
        alignItems='center'>
          <Avatar
            w="74px"
            h="74px"
            name="Segun Adebayo"
            bgColor="white"
            src="https://www.cin.ufpe.br/~imprensa/marcacinpng/SC"
            boxShadow="md"
          />
          
        </Flex>

      </Flex>

      <Flex 
      bg = '#0ACF83'
      w='356px'
      h='88px'

      borderRadius='7px'
      flexDirection='row'>

        <Flex
        flexDirection='column'
        gap='15px'>

          <Flex overflow='hidden'
          position = 'static'
          w='171px'
          h='57px'
          bg='#dabffd'
          borderRadius= '0px 0px 55px 0px'
          marginY='-9px'
          borderBottom='#A259FF solid 5px'>

            <Box 
            w ='38px'
            h='auto'
            padding='4px'
            fontWeight='bold'>
              R$ 
            </Box>
            
            <Box 
            w ='136px'
            h= 'auto'
            pr ='px'
            fontSize='34px'
            fontWeight='bold'>
              00,00 
            </Box>

          </Flex>

          <Flex h='30px' 
          justifyContent='center'>
            <Button h='auto' bg='#FF7262'> Como Chegar? </Button>

          </Flex>

        </Flex>

      <Flex 
      w='auto'
      h='auto'
      overflow='hidden'
      color='white'
      padding='6px'>
      Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi elit
      </Flex> 

      </Flex>

    </Flex>
  );
};
