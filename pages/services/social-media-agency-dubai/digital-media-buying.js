import {
  Box,
  Container,
  Flex,
  Heading,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import CaseStudy from "../../../components/CaseStudy";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";

const DigialMediaBuying = () => {
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
  return (
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="Digial Media Buying" />
      <Box>
        <Container maxWidth={"7xl"} py={"50px"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: 0, md: 10 }}
              alignSelf="center"
              className="main-p"
            >
              <Heading as={"h5"} className="main-h5" textAlign={"left"}>
                Drive Traffic And Conversion With The Right Digital Media Buying
                Strategy
              </Heading>
              <Text mt={5} className="main-p">
                Get the most out of your digital media budget with our
                performance marketing services. Improve your conversions and
                reach with effective ads that target your audience.Increase
                engagement and impress your customers with high-quality video
                content. Maximize your ROI with our comprehensive key
                performance indicators.
                <br />
                <br />
                Being a Digital Media Planning and Buying Agency in Dubai - we
                cater to the GCC Market be it Saudi Arabia, Bahrain, Kuwait,
                Qatar, Oman or UAE. We are official partners for Google,
                Snapchat, TikTok, Baidu, Yandex and more.
              </Text>
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              mt={{ base: 5, md: 0 }}
              position="relative"
              mr={{ base: 0, md: 10 }}
            >
              <Image
                src={"/assets/image/servicePage/subPage/DigialMedia-1.jpg"}
                width="585px"
                height={"350px"}
                objectFit="cover"
              />
            </Box>
          </Flex>
          <Flex direction={{ base: "column-reverse", md: "row" }} my={10}>
            <Box width={{ base: "100%", md: "50%" }} mt={{ base: 5, md: 0 }}>
              <Image
                src={"/assets/image/servicePage/subPage/DigitaAnalysis-1.jpg"}
                width="585px"
                height={"350px"}
                objectFit="cover"
              />
            </Box>
            <Box width={{ base: "100%", md: "50%" }} alignSelf="center">
              <Text className="main-p">
                As a Digital media buying agency in UAE, we offer a range of
                services, including media planning, audience targeting, creative
                development, campaign execution, and reporting and analysis.
                They may also provide additional services such as search engine
                optimization (SEO), content marketing, and social media
                management to help clients achieve their marketing goals.
                <br />
                <br />
                The main advantage of working with a digital media buying agency
                like us is that we have the knowledge and experience needed to
                navigate the complex and constantly evolving digital advertising
                landscape. We can help clients reach their target audiences more
                effectively, maximize their ad spend, and optimize their
                campaigns for better performance.
              </Text>
            </Box>
          </Flex>

          <Flex direction={{ base: "column", md: "row" }} my={10}>
            <Box width={"100%"} alignSelf="center">
              <Heading as={"h5"} className="main-h5">
                The process of digital media planning involves several key
                steps:
              </Heading>
              <OrderedList my={"6"}>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Defining the target audience:</b> This involves creating
                    detailed customer personas that describe the demographics,
                    psychographics, and behaviors of the target audience. Being
                    a part of the Arab Market, we understand the different
                    personas of this region.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Conducting research:</b> This involves researching the
                    digital channels and platforms that the target audience uses
                    most often and identifying the most effective ways to reach
                    them. We create brand personas for your brand.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Setting goals:</b> This involves establishing specific
                    brand goals for the media plan, such as increasing website
                    traffic, generating leads, or improving brand awareness. We
                    work with you to define your KPI.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Developing the media plan:</b> This involves selecting
                    the appropriate digital channels and tactics to achieve the
                    marketing objectives, such as social media advertising,
                    search engine marketing, programmatic advertising, or
                    influencer marketing.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Allocating budget:</b> This involves determining the
                    budget required for the media plan and allocating it to the
                    various channels and tactics selected. Budgets are allocated
                    as per seasonality, be it Ramadan, Eid , Festive Season -
                    Christmas, New Years or UAE National Day or Saudi National
                    Day.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Implementing and monitoring the plan:</b> This involves
                    launching the campaigns and monitoring their performance
                    from time to time to ensure that they are achieving the
                    desired outcomes.
                  </Text>
                </li>
              </OrderedList>
            </Box>
            {/* <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              alignSelf={"center"}
            >
              <Image
                src={"/assets/image/servicePage/subPage/plan-management.jpg"}
                width="585px"
                height={"750px"}
                objectFit="cover"
              />
            </Box> */}
          </Flex>
        </Container>
      </Box>

      {/* <CaseStudy data={favWorkData} /> */}
    </Stack>
  );
};

DigialMediaBuying.getLayout = function getLayout(DigialMediaBuying) {
  return <InnerLayout>{DigialMediaBuying}</InnerLayout>;
};

export default DigialMediaBuying;
