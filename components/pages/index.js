import { NextSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import {
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Projetão 2022.1 SI-UFPE"
        description="Página do projetão 2022.1 SI-UFPE"
      />
    </div>
  );
}
