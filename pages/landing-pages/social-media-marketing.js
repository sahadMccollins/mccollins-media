import React, { useEffect, useRef } from "react";
import FooterNav from "../../components/Landing-page-components/FooterNav";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import SocialMainBanner from "../../components/Landing-page-components/SocialMainBanner";

import ClientPortFolio from "../../components/Landing-page-components/ClientPortfolio";
import WhatWeOffer1 from "../../components/Landing-page-components/WhatWeOffer";
import ClientResults from "../../components/Landing-page-components/ClientResults";
import OurPartners1 from "../../components/Landing-page-components/OurPartners1";
import Accordion1 from "../../components/Landing-page-components/Accordion1";
const LandingPage1 = () => {
  useEffect(() => {
    document.body.className = "LandingPage";
  });

  return (
    <Box marginTop={"-85px"} position="relative">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <SocialMainBanner />
      <ClientPortFolio />
      <WhatWeOffer1 />
      
      <OurPartners1 />
      <ClientResults />
      <Accordion1/>
      
      
      <FooterNav />
    </Box>
  );
};
export default LandingPage1;
