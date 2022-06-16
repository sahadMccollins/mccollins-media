import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  );
}

export default MyApp;
