import React, { useEffect } from "react";
import MainBanner1 from "../../components/Landing-page-components/MainBanner";
import ClientPortFolio from "../../components/Landing-page-components/ClientPortfolio";
import TrustedLogos from "../../components/Landing-page-components/TrustLogos";
import LpGrid from "../../components/Landing-page-components/lpGrid";
import WebPortfolio from "../../components/Landing-page-components/portfolio";
import WorkTogether from "../../components/Landing-page-components/workTogether";
import FooterNav from "../../components/Landing-page-components/FooterNav";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import BannerBox from "../../components/BanneBox";
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
      <MainBanner1 label="qssOCPGu1uIYEKLcvZ8o" />
      <ClientPortFolio />

      <TrustedLogos />
      <BannerBox
          Banner="/services/web/McC_WDev_Web_2-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_2-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_4-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_3-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_5-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_5-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_6-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_6-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_7-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_7-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_8-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_8-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_9-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_9-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_10-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_10-min.jpg"
        />
      <LpGrid />

      <WebPortfolio />

      <WorkTogether />
      <FooterNav phone={true} />
    </Box>
  );
};
export default LandingPage1;
