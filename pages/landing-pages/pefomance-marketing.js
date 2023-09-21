import React, { useEffect, useRef } from "react";
import FooterNav from "../../components/Landing-page-components/FooterNav";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import ClientPortFolio from "../../components/Landing-page-components/ClientPortfolio";
import PerfomanceBannerMarketing from "../../components/Landing-page-components/PerfomanceMarketingBanner";
import PerfomanceSevices from "../../components/Landing-page-components/PeromanceSevices";
import InstaBox from "../../components/Landing-page-components/InstaBox";
import ClientPerfomance from "../../components/Landing-page-components/ClientPerfomance";
import CleantTestimonials from "../../components/Landing-page-components/ClientTestimonials";
const PerfomanceMarketing = () => {
  useEffect(() => {
    document.body.className = 'LandingPage';
    document.body.className = 'PerfomancePage';
  });
  return (
    <Box marginTop={"-85px"} position="relative">
      <Head>
      <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <PerfomanceBannerMarketing/>
      <ClientPortFolio/>
      <PerfomanceSevices/>
      <ClientPerfomance/>
      <CleantTestimonials/>
      <InstaBox/>
      <FooterNav/>
    </Box>
  );
};
export default PerfomanceMarketing;
