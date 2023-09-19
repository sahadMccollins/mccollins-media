import React, { useEffect, useRef } from "react";
import FooterNav from "../../components/Landing-page-components/FooterNav";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import ClientPortFolio from "../../components/Landing-page-components/ClientPortfolio";
import ClientResults from "../../components/Landing-page-components/ClientResults";
import SearchEngineBanner from "../../components/Landing-page-components/SearchEnginBanner";
import OurApproachtoSEO from "../../components/Landing-page-components/OurApproachtoSEO";
import LetsTalkNumbers from "../../components/Landing-page-components/letsTalkNumbers";
const SearchEngineOptimization = () => {
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
      <SearchEngineBanner/>
      <ClientPortFolio/>
      <OurApproachtoSEO/>
      <LetsTalkNumbers/>
      <ClientResults/>
      <FooterNav/>
    </Box>
  );
};
export default SearchEngineOptimization;
