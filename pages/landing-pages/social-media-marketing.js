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
import BannerBox from "../../components/BanneBox";
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
      <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_1-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_1-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_2-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_2-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_3-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_3-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_4-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_4-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_5-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_5-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_6-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_6-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_7-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_7-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_8-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_8-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_9-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_9-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_10-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_10-min.jpg"
              />
              <BannerBox
                Banner="/services/social/McC_SocMedMark_Web_11-min.jpg"
                MobileBanner="/services/web/McC_SocMedMark_Mob_11-min.jpg"
              />

      <OurPartners1 />
      <ClientResults />
      <Accordion1/>
      
      
      <FooterNav />
    </Box>
  );
};
export default LandingPage1;
