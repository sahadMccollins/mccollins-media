import React, { useEffect, useRef } from "react";
import MainBanner1 from "../../components/Landing-page-components/MainBanner";
import TrustedLogos from "../../components/Landing-page-components/TrustLogos";
import LpGrid from "../../components/Landing-page-components/lpGrid";
import { Box } from "@chakra-ui/react";
const LandingPage1 = () => {
  return (
    <Box marginTop={"-85px"} position="relative">
      <MainBanner1 />
      <TrustedLogos/>
      <LpGrid/>
    </Box>
  );
};
export default LandingPage1;
