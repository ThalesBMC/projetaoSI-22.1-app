import React from "react";
import {
  Flex,
  Button,
  FormControl,
  Input,
  FormLabel,
  Image,
  Text,
  Avatar,
  Box,
  GridItem,
  Grid,
} from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function login() {
  return (

    <Flex bgColor="gray.100" flexDirection="column" h="100vh">
      
      <Grid
        templateAreas={`"header header"
                        "nav logo"
                        "nav info"`}
        gridTemplateRows={'200px 220px 220px'}
        gridTemplateColumns={'50% 50%'}
        h='80%' w='100%' gap='1' fontWeight='bold'
        >

            <GridItem           
            area={'header'} paddingLeft='-4'
            >
                <Header area={'header'}/>
                
            </GridItem>

            <GridItem pl='2' pr='2' area={'nav'}>
                <Flex flexDirection='column' h='100%' w='100%' 
                justifyContent='center' alignItems='center'
                backgroundImage="https://www.agroportal.pt/wp-content/uploads/2021/03/compras.jpg" 
                backgroundSize='cover'
                backgroundRepeat='no-repeat'
                borderRadius='8px'
                >

                    

                </Flex>
            
            </GridItem>

            <GridItem pl='2' pr='2'area={'logo'} textAlign='center'  >
                <Flex flexDirection='column' h='100%' w='100%' 
                justifyContent='center' alignItems='center'
                >

                    <Avatar
                    w="48"
                    h="48"
                    name="Segun Adebayo"
                    bgColor="white"
                    src="https://www.cin.ufpe.br/~imprensa/marcacinpng/SC"
                    boxShadow="md"
                    justifyContent='center' alignItems='center'
                    justifyItems='center' alignContent='center'
                    />

                </Flex>

            </GridItem>

            <GridItem pl='2' pr='2'area={'info'} h='100%' mt= '35px'>
                <Flex h='100%' w='100%' flexDirection='row' justifyContent='center'>            
                    <Flex h='100%' flexDirection='column' 
                    justifyContent='center' alignItems='left' w='auto' gap='15px'
                    >
                        
                        <box>

                            <Text fontSize="4xl">Parceiro Flyer!</Text>
                            <Text fontSize="xl">Divulge suas promoções em um só lugar</Text>

                        </box>
                    
                        <form w='380px'>
                            <Flex flexDirection="column" gap="16">

                                <FormControl isRequired>
                                
                                    <FormLabel color="#686868">E-mail</FormLabel>
                                    <Input
                                        color="#686868"
                                        bgColor="white"
                                        placeholder="nome@email.com.br"
                                    />
                                    <Text fontSize="sm" color="#0ACF83" textAlign='right' mt='5px'> 
                                        Esqueci meu e-mail
                                    </Text>

                                </FormControl>       
                                
                            </Flex>

                        </form>

                        <box>

                            <Flex flexDirection='row' justifyContent='space-between' mt='25px'>
                                <Text fontSize="sm">Ainda não tem cadastro?</Text>
                                <Text fontSize="sm" color="#0ACF83">Faça o seu cadastro agora!</Text>
                            </Flex>

                        </box>

                    </Flex>
                </Flex>

            </GridItem>        
        
        </Grid>
      
        <Footer />

    </Flex>
    
  );
}
