import { Box, Stack } from "@chakra-ui/react";
import Awards from "../components/Awards";
import HeroBanner from "../components/HeroBanner";
import Partner from "../components/Partner";
import ServiceAccordian from "../components/ServiceAccordian";
import TextBox from "../components/TextBox";
import CaseStudy from "../components/CaseStudy";
import { PageLinks } from "../link";
import ClientsLogoWhite from "../components/ClientsLogoWhite";
import WhatWeOffer from "../components/WhatWeOffer";
import clientPromise from "../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

export default function Home({ metaTags }) {
  return (
    <>
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
      <HeroBanner
        img="https://res.cloudinary.com/mccollins-media/image/upload/v1657138383/Mccollins%20Banner/home-banner_bwes6c.webp"
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

      {/* <TextBox
        heading={"WHO WE ARE"}
        content="We are McCollins Media, a story that began over 15 years ago on the principles of creativity, innovation, and result-driven thinking. We blend creative thinking and digital development with purposeful strategies to create a digital ecosystem like no other. We are passionate about being the leading digital marketing and web development services provider in the UAE and across all GCC countries."
      /> */}

      <ClientsLogoWhite />

      {/* <ServiceAccordian /> */}

      <TextBox
        heading="CASE STUDY"
        subHeading="learn how we executed campaigns to get results"
        content="13 Years in the making, pioneers to UAE’s digital scene, we are McCollins Media ! We enjoy working with earned media, where we get others to talk about your brand."
      />

      <CaseStudy />

      <WhatWeOffer />

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
