import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";

import theme from "../theme";

export default function App({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
