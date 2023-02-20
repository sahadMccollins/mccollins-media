import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <SessionProvider session={session}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
