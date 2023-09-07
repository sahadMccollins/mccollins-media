import React, { useEffect, useRef } from "react";
import MainBanner1 from "../../components/Landing-page-components/MainBanner";
import ClientPortFolio from "../../components/Landing-page-components/ClientPortfolio";
import TrustedLogos from "../../components/Landing-page-components/TrustLogos";
import LpGrid from "../../components/Landing-page-components/lpGrid";
import WebPortfolio from "../../components/Landing-page-components/portfolio";
import WorkTogether from "../../components/Landing-page-components/workTogether";
import FooterNav from "../../components/Landing-page-components/FooterNav";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import AutoPlayVideo from "../../components/Landing-page-components/AutoPLayVideo";
const LandingPage1 = () => {
  useEffect(() => {
    document.body.className = 'LandingPage';
  });
  
  return (
    <Box marginTop={"-85px"} position="relative">
      <Head>
      <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <MainBanner1 />
      <ClientPortFolio/>
      <TrustedLogos/>
      <LpGrid/>
      
      <WebPortfolio/>
      
      <WorkTogether/>
      <FooterNav/>
      <AutoPlayVideo src="/abaka.mp4"/>
      <AutoPlayVideo src="/asia.mp4"/>
    </Box>
  );
};
export default LandingPage1;
