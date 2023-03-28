// import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { theme } from "../chakra/theme";
// import { Component } from 'react';
import Layout from "../components/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}

// function MyApp({ Component: pageProps }: AppProps) {
//   return (
//     <ChakraProvider>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }

// export default MyApp;
