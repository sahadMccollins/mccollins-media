import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import HeroBanner from "../../components/HeroBanner";
import IndustryPageAccordian from "../../components/IndustryPageAccordian";
import TextBox2 from "../../components/TextBox2";

const index = () => {
  return (
    <Stack position={"relative"}>
      <HeroBanner
        img="/assets/image/banner/about-banner.webp"
        breadcrumb="industry"
        h2="result driven various industry marketing partner"
      />
      <Box
        style={{ position: "absolute" }}
        top={{ base: "63%", md: "73%" }}
        left={{ base: "75%", md: "50%" }}
        zIndex="9"
      >
        <Image
          alt="McCollins Media"
          src={"/assets/image/design/7.svg"}
          width="89px"
          height={"103px"}
        />
      </Box>
      <IndustryPageAccordian />
      <TextBox2 />
      <Box
        style={{ position: "absolute", right: "2%" }}
        zIndex="9"
        width={{ base: "18%", md: "unset" }}
        bottom={{ base: "-1%", md: "0" }}
      >
        <Image
          alt="McCollins Media"
          src={"/assets/image/design/1.svg"}
          width="118px"
          height={"165px"}
        />
      </Box>
    </Stack>
  );
};

export default index;
