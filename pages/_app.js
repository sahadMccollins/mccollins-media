import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout children={page} />);
  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  );
}

export default MyApp;
