import React from "react";
import {
  Flex,

} from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Banners } from "../components/Banners";

export default function login() {
  return (
    
    <Flex
    bgColor="gray.100" 
    flexDirection="column" 
    h="auto" 
    w='100%' 
    alignItems = 'center'
    justifyItems='center'
    
    >

    <Header />

    <Flex
        w='480px' 
        h='auto' 
        bg='white'
        flexDirection = 'column'
        flexWrap='wrap'
        
        alignContent='center'
        justifyContent = 'center'
        alignItems = 'center'
        justifyItems='center'
        >
        
        <Banners/>
        <Banners/>
        <Banners/>
        <Banners/>

        </Flex>

        <Footer></Footer>
      
    </Flex>
    
  );
}
