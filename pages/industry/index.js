import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import HeroBanner from "../../components/HeroBanner";
import ServicePageAccordian from "../../components/ServicePageAccordian";
import TextBox2 from "../../components/TextBox2";

const index = () => {
  return (
    <Stack>
      <HeroBanner
        img="/assets/image/banner/about-banner.webp"
        breadcrumb="industry"
        h2="result driven various industry marketing partner"
      />
      <ServicePageAccordian />
      <TextBox2 />
    </Stack>
  );
};

export default index;
