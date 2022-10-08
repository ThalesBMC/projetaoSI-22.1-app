import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginContextProvider } from "../contexts/LoginContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <LoginContextProvider>
        <Component {...pageProps} />
      </LoginContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
