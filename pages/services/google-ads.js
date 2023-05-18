import {
  Box,
  Container,
  Stack,
  Image as Chakraimage,
  useMediaQuery,
  Heading,
  ButtonGroup,
  Button,
  Flex,
  Text,
  OrderedList,
} from "@chakra-ui/react";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import { useState } from "react";

import "../../node_modules/react-modal-video/css/modal-video.min.css";
import TextBox from "../../components/TextBox";
import ClientsLogo from "../../components/ClientsLogo";
import VideoBanner from "../../components/VideoBanner";
import { useRouter } from "next/router";
import VideoCaseStudy from "../../components/VideoCaseStudy";
import FormBox from "../../components/FormBox";
import WebShowcase from "../../components/WebShowcase";
import Testimonials from "../../components/Testimonials";
import FadeUp from "../../components/Motion/FadeUp";
import ZoomInWithBounce from "../../components/Motion/ZoomInWithBounce";
import IntrestedInBox from "../../components/IntrestedInBox";
import clientPromise from "../../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

const DigitalMarketingSEO = ({ metaTags }) => {
  const router = useRouter();
  return (
    <Stack position={"relative"}>
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
      <VideoBanner
        heading={`google ads`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657600388/Mccollins%20Video/Search_engine_marketing-_kg3pi4.mp4"
        content="Get your brand noticed at the right place at the right time. Let us help you rank high on Google search and place strategic Google Ads to see those leads convert."
        poster="/assets/image/servicePage/DMSEO.jpg"
      />

      {/* <Box py={10}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading>YOUR EXTENDED DIGITAL ARM</Heading>
              <Box
                my={8}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"20px"}
                color={"#000"}
              >
              </Box>
              <Text>
                We take ownership of your brand from the basics of community
                management on the social media channels, to bringing the traffic
                to your website and mapping the conversions.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  }}
                ></span>
                <Heading>In-House Team</Heading>
              </Box>
              <Text>
                A team of young and passionate digital enthusiasts from
                different walks of life, taking ownership of your brands in the
                digital space
              </Text>
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  }}
                ></span>
                <Heading>Dare to Create</Heading>
              </Box>
              <Text>
                Always innovating, always creating. The digital space is full of
                creating your own experience, working with a online community,
                and we dare to create.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box> */}

      <Container maxWidth={"7xl"} pt={"50px"} style={{ margin: "auto" }}>
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Box
            width={{ base: "100%", md: "50%" }}
            mr={{ base: "0", md: "10" }}
            alignSelf="center"
            className="main-p"
          >
            <FadeUp>
              <Text mt={5} className="main-p">
                Google Ad Management refers to the process of creating,
                managing, and optimizing Google Ads campaigns for brands. Google
                Ads is an online advertising platform where businesses can
                create and display ads to reach potential customers when they
                search for specific products or services on Google. Being an
                official Google Partner, McCollins Media aims to be one of the
                best google ad management agencies in the UAE. Search Engine
                Marketing in Dubai is key for any business to reach their
                relevant target audience. With lead generation and conversion
                campaigns, brands are able to see their short term targets
                materialize a lot more faster.
              </Text>
            </FadeUp>
          </Box>
          <Box width={{ base: "100%", md: "50%" }} position="relative">
            <ZoomInWithBounce>
              <Image
                alt="McCollins Media"
                src={"/assets/image/ServiceTabs/DigitalMarketingSEO.png"}
                width="450px"
                height={"528px"}
                objectFit="cover"
              />
            </ZoomInWithBounce>
          </Box>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} my={10}>
          <Box
            width={{ base: "100%", md: "50%" }}
            alignSelf="center"
            mr={{ base: 0, md: 10 }}
          >
            <ZoomInWithBounce>
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/DMSEO.jpg"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
            </ZoomInWithBounce>
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            alignSelf="center"
            className="sub-service"
          >
            <FadeUp>
              <Heading as={"h5"} className="main-h5" maxW={"400px"}>
                Google Ad Management involves several steps, including:
              </Heading>
            </FadeUp>
            <OrderedList my={"6"}>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Campaign planning:</b> Defining the campaign goals,
                    target audience, and budget.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Keyword research:</b> Identifying the keywords that
                    people use to search for the products or services being
                    advertised.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Campaign setup:</b> Setting up the campaign structure, ad
                    groups, and targeting options.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Ad creation:</b> Creating compelling and relevant ads
                    that resonate with the target audience.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Bid management:</b> Setting the right bid amounts for
                    each ad and keyword to optimize ad performance.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Performance monitoring:</b> Tracking the campaign
                    performance and making adjustments to improve the ad's
                    performance.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Optimization: </b>Continuously testing and optimizing the
                    ads to improve their relevance, click-through rate (CTR),
                    and conversion rate.
                  </Text>
                </FadeUp>
              </li>
            </OrderedList>
          </Box>
        </Flex>

        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Box
            width={{ base: "100%", md: "50%" }}
            mr={{ base: "0", md: "10" }}
            alignSelf="center"
            className="main-p"
          >
            <FadeUp>
              <Text mt={5} className="main-p">
                By effectively managing Google Ads campaigns, businesses can
                increase their visibility and reach more potential customers,
                ultimately leading to increased sales and revenue. Regenerate
                response. Our inhouse team of SEM experts in Dubai, work on
                several Google Ad Management Campaigns in the GCC and worldwide
                to help brands reach the right target audience.
              </Text>
            </FadeUp>
          </Box>
          <Box width={{ base: "100%", md: "50%" }} textAlign="center">
            <Image
              alt="McCollins Media"
              src={"/assets/image/servicePage/ksa/google-ads.jpg"}
              width="585px"
              height={"300px"}
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Container>
      <Container
        maxWidth={"7xl"}
        style={{ margin: "auto", marginBottom: "40px" }}
      >
        <FormBox heading={"Request a Call Back"} />
      </Container>
      <IntrestedInBox />
      <Box style={{ margin: "0" }}>
        <ClientsLogo />
      </Box>
      <Box my="10">
        <Testimonials />
      </Box>
    </Stack>
  );
};

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

DigitalMarketingSEO.getLayout = function getLayout(DigitalMarketingSEO) {
  return <InnerLayout color="yellow">{DigitalMarketingSEO}</InnerLayout>;
};
export default DigitalMarketingSEO;
