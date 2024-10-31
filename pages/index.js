import { Box, Stack } from "@chakra-ui/react";
import Awards from "../components/Awards";
import HeroBanner from "../components/HeroBanner";
import TextBox from "../components/TextBox";
import { PageLinks } from "../link";
import clientPromise from "../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

import dynamic from "next/dynamic";

const ClientsLogoWhite = dynamic(() =>
  import("../components/ClientsLogoWhite")
);
const CaseStudy = dynamic(() => import("../components/CaseStudy"));
const WhatWeOffer = dynamic(() => import("../components/WhatWeOffer"));
const Partner = dynamic(() => import("../components/Partner"));
const IntrestedInBox = dynamic(() => import("../components/IntrestedInBox"));

export default function Home({ metaTags }) {
  return (
    <>
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
      <HeroBanner
        img="/assets/cloudinaryBackup/home-banner_bwes6c.webp"
        h2="A Digital Pioneer In Changing The Game"
        content="We architect end-to-end experiences which create a meaningful digital footprint for your future."
      />

      <Stack
        position={"absolute"}
        width="100%"
        height={"730px"}
        background={"#F7F7F7"}
        zIndex="0"
      ></Stack>

      <ClientsLogoWhite />

      <TextBox
        heading="CASE STUDY"
        subHeading="learn how we executed campaigns to get results"
        content="13 Years in the making, pioneers to UAE’s digital scene, we are McCollins Media ! We enjoy working with earned media, where we get others to talk about your brand."
      />

      <CaseStudy />

      {/* <WhatWeOffer /> */}
      <IntrestedInBox />

      <TextBox
        heading="OUR PARTNERS"
        subHeadingOnly="As a technology-driven company, we adapt to the latest trends and combine them with consumer insights to help brands be on top of their game. "
      />

      <Partner />

      <hr />

      <Awards />

      <Box className="footerQuicklink">
        {PageLinks.map((link) => (
          <a href={link} key={link}>
            {link}
          </a>
        ))}
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let metaTags = await db.collection("meta").find({ name: req.url }).toArray();
  metaTags = JSON.parse(JSON.stringify(metaTags));
  console.log(metaTags);

  return {
    props: { metaTags },
  };
}
