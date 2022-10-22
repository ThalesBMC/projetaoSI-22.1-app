import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginContextProvider } from "../contexts/LoginContext";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "",
      },
    }),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <LoginContextProvider>
        <Component {...pageProps} />
      </LoginContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
