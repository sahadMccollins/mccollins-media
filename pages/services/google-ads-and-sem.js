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
import ServicePoint from "../../components/ServicePoint";
import TextBox from "../../components/TextBox";
import FavWork from "../../components/FavWork";
import TechIcon from "../../components/TechIcon";
import ClientsLogo from "../../components/ClientsLogo";
import VideoBanner from "../../components/VideoBanner";
import { useRouter } from "next/router";

const DigitalMarketingSEO = () => {
  const favWorkData = [
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
  ];

  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  return (
    <Stack position={"relative"}>
      <VideoBanner
        heading={`google ads \n & seo`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657600388/Mccollins%20Video/Search_engine_marketing-_kg3pi4.mp4"
        content="Get your brand noticed at the right place at the right time. Let us help you rank high on Google search and place strategic Google Ads to see those leads convert."
        poster="/assets/image/servicePage/DM&SEO.jpg"
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

      <Container maxWidth={"7xl"} py={"50px"} style={{ margin: "auto" }}>
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Box
            width={{ base: "100%", md: "50%" }}
            paddingRight={{ base: "0", md: "50px" }}
            alignSelf="center"
            textAlign={{ base: "left", md: "justify" }}
            className="main-p"
          >
            <Text mt={5} className="main-p">
              Google Ad Management refers to the process of creating, managing,
              and optimizing Google Ads campaigns for brands. Google Ads is an
              online advertising platform where businesses can create and
              display ads to reach potential customers when they search for
              specific products or services on Google. Being an official Google
              Partner, McCollins Media aims to be one of the best google ad
              management agencies in the UAE. Search Engine Marketing in Dubai
              is key for any business to reach their relevant target audience.
              With lead generation and conversion campaigns, brands are able to
              see their short term targets materialize a lot more faster.
            </Text>
          </Box>
          <Box width={{ base: "100%", md: "50%" }} position="relative">
            <Image
              src={"/assets/image/servicePage/ksa/google-ads.jpg"}
              width="550px"
              height={"450px"}
              objectFit="cover"
            />
          </Box>
        </Flex>

        <Flex
          direction={{ base: "column", md: "row" }}
          my={{ base: "10", md: "75px" }}
        >
          <Box width={{ base: "100%", md: "50%" }} alignSelf="center">
            <Image
              src={"/assets/image/servicePage/DM&SEO.jpg"}
              width="500px"
              height={"500px"}
              objectFit="cover"
            />
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            alignSelf="center"
            mt={{ base: 5, md: 0 }}
          >
            <Heading as={"h5"} className="main-h5">
              Google Ad Management involves several steps, including:
            </Heading>
            <OrderedList my={"6"} textAlign={{ base: "left", md: "justify" }}>
              <li>
                <Text fontSize={"20px"} className="main-p">
                  <b>Campaign planning:</b> Defining the campaign goals, target
                  audience, and budget.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Ad creation:</b> Creating compelling and relevant ads that
                  resonate with the target audience.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Keyword research:</b> Identifying the keywords that people
                  use to search for the products or services being advertised.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Campaign setup:</b> Setting up the campaign structure, ad
                  groups, and targeting options.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Bid management:</b> Setting the right bid amounts for each
                  ad and keyword to optimize ad performance.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Performance monitoring:</b> Tracking the campaign
                  performance and making adjustments to improve the ad's
                  performance.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Optimization: </b>Continuously testing and optimizing the
                  ads to improve their relevance, click-through rate (CTR), and
                  conversion rate.
                </Text>
              </li>
            </OrderedList>
          </Box>
        </Flex>

        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Box
            width={{ base: "100%", md: "50%" }}
            paddingRight={{ base: "0", md: "50px" }}
            alignSelf="center"
            textAlign={{ base: "left", md: "justify" }}
            className="main-p"
          >
            <Text mt={5} className="main-p">
              By effectively managing Google Ads campaigns, businesses can
              increase their visibility and reach more potential customers,
              ultimately leading to increased sales and revenue. Regenerate
              response. Our inhouse team of SEM experts in Dubai, work on
              several Google Ad Management Campaigns in the GCC and worldwide to
              help brands reach the right target audience.
            </Text>
          </Box>
          <Box width={{ base: "100%", md: "50%" }} textAlign="center">
            <Image
              src={"/assets/image/ServiceTabs/DigitalMarketing&SEO.png"}
              width="400px"
              height={"450px"}
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Container>
      {/* 
      <ServicePoint
        // heading="Digital Brand Activation"
        // subHeading="performance marketing"
        contentHeading={"Key Digital Marketing Routes for Your Brand"}
        content="From Social Media Management to Performance Marketing, our in-house team is your extended marketing arm."
        points={
          "Campaign Management \n A/B Testing \n Lead Generation \n Conversion Campaign  \n Competitor Analysis \n Google Data Studio \n Tracking \n  Campaign Reporting "
        }
      /> */}

      <TextBox
        heading="Case study"
        smallHeading={"Google Ads and SEO"}
        subHeading="Learn how we executed campaigns to get results"
        content="Over the decade we have worked on some exciting web projects from Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia. Have a look at some of our work"
      />
      <FavWork data={favWorkData} />
      <TextBox
        heading="Technologies We work with"
        content="Transform your brand journey today. We grow brands, create experiences and solve problems."
      />
      <TechIcon />
      <ClientsLogo />
    </Stack>
  );
};

DigitalMarketingSEO.getLayout = function getLayout(DigitalMarketingSEO) {
  return <InnerLayout color="yellow">{DigitalMarketingSEO}</InnerLayout>;
};
export default DigitalMarketingSEO;
