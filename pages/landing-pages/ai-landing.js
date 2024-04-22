import React, { useEffect } from "react";
import MainBanner1ai from "../../components/Landing-page-components/MainBannerai";
import ClientPortFolio from "../../components/Landing-page-components/ClientPortfolio";
import TrustedLogos from "../../components/Landing-page-components/TrustLogos";
import LpGrid from "../../components/Landing-page-components/lpGrid";
import FooterNav from "../../components/Landing-page-components/FooterNav";
import Head from "next/head";
import CustomTab1 from "../../components/Landing-page-components/CustomTab1";
import { Box } from "@chakra-ui/react";
const LandingPage1 = () => {
  useEffect(() => {
    document.body.className = "LandingPage";
  });

  useEffect(() => {
    // Create the script element and append it to the head
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-3505417.js?sv=6`;
    document.head.appendChild(script);

    // Define a cleanup function to remove the script element
    const cleanup = () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };

    // Add the Hotjar script element
    script.onload = () => {
      // Initialize Hotjar when the script has loaded
      window.hj =
        window.hj ||
        function () {
          (window.hj.q = window.hj.q || []).push(arguments);
        };
      window._hjSettings = { hjid: 3505417, hjsv: 6 };
    };

    // Attach the cleanup function to the component unmount event
    return cleanup;
  }, []);

  useEffect(() => {
    // Add the Google Tag Manager script to this page
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-10803441186";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-10803441186");
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Box marginTop={"-85px"} position="relative">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <MainBanner1ai />
      <ClientPortFolio />
      <CustomTab1/>
      <TrustedLogos />
      <LpGrid />
      <FooterNav phone={true} />
    </Box>
  );
};
export default LandingPage1;
