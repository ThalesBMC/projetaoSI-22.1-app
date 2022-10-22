import Link from "next/link";
import { Footer } from "../components/Footer";
import {
  Text,
  Img,
  Input,
  Icon,
  FormControl,
  Avatar,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { apiClient } from "../utils/api";

export default function HomePage() {
  const { handleSubmit, register } = useForm();

  const sendComercialForm = (comercialForm) => {
    Router.push({
      pathname: "cadastrocomercial",
      query: comercialForm,
    });
  };
  return (
    <Flex flexDirection="row">
      <Flex
        w="50%"
        h="100vh"
        bgColor="#0ACF83"
        flexDirection="column"
        align="center"
        justifyContent="center"
        pb="32"
      >
        <Img src={"client1.svg"} w="400px" h="400px" />
        <Link href="/cadastrocliente">
          <Button
            _active={{ bg: "#0ACF83", opacity: 0.8 }}
            _hover={{ bg: "#0ACF83", opacity: 0.8 }}
            bgColor="#1A202C"
            w={["190px", "xs"]}
            h="10"
            borderRadius="2xl"
            boxShadow="md"
            type="submit"
          >
            <Text fontSize="16px"> Entre como Cliente</Text>
          </Button>
        </Link>
      </Flex>
      <Flex
        w="50%"
        h="100vh"
        bg="#1A202C"
        flexDirection="column"
        align="center"
        justifyContent="center"
        pb="32"
      >
        <Img src={"Marketplace-bro.svg"} w="400px" h="400px" />
        <Link href="/loginvendedor">
          <Button
            _active={{ bg: "#0ACF83", opacity: 0.8 }}
            _hover={{ bg: "#0ACF83", opacity: 0.8 }}
            bgColor="#0ACF83"
            w={["190px", "xs"]}
            h="10"
            borderRadius="2xl"
            boxShadow="md"
            type="submit"
          >
            <Text fontSize="16px"> Entre como Comerciante</Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
