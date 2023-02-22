import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import FavWork from "../../../components/FavWork";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";
import ServicePoint from "../../../components/ServicePoint";
import TextBox from "../../../components/TextBox";

const Woocommerce = () => {
  const favWorkData = [
    {
      name: "Dafza",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Rica",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Dafza",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Rica",
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
    <Stack position={"relative"}>
      <InnerBannerTwo h1="Woocommerce Website Development" />
      <Box>
        <Container maxWidth={"7xl"} py={"50px"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              paddingRight={{ base: "0", md: "50px" }}
            >
              <Box
                my={4}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"1xl"}
              >
                <Text>WOOCOMMERCE WEBSITE DEVELOPMENT</Text>
              </Box>
              <Heading textAlign="left" fontSize={"5xl"}>
                Build your WooCommerce Website
              </Heading>
              <Text mt={5}>
                Having your own website is an important piece of your ecommerce
                strategy. It is a great way for you to grow your brand, acquire
                loyal customers, gain new insights, and get creative with your
                marketing
              </Text>
              <Heading fontSize={"2xl"} mt={3}>
                Fast Go To Market Time
              </Heading>
              <Text mt={5}>
                Build your website fast and launch in this ever competing
                market.
              </Text>
              <Heading fontSize={"2xl"} mt={3}>
                Customer Data Insights
              </Heading>
              <Text mt={5}>
                Use your consumer insights to understand your audience better
                and provide your customers what they actually need.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/Woocommerce.jpg"}
                width="585px"
                height={"528px"}
                style={{ borderRadius: "25px" }}
              />
            </Box>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} my="75px">
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/Woocommerce2.jpg"}
                width="585px"
                height={"528px"}
                style={{ borderRadius: "25px" }}
              />
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              paddingLeft={{ base: "0", md: "50px" }}
            >
              <Box
                my={4}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"1xl"}
              >
                <Text>WOOCOMMERCE WEBSITE AND ITS BENEFITS</Text>
              </Box>
              <Heading textAlign="left" fontSize={"5xl"}>
                Why Choose <br /> WooCommerce ?
              </Heading>
              <Text mt={5}>
                Understand why choose to build your website on the woocommerce
                platform and how it can help you increase your market share.
              </Text>
              <SimpleGrid
                columns={{ sm: 1, md: 2 }}
                spacing="20px"
                mt={10}
                className="servicePoint2"
              >
                <Box>Fast Launch</Box>
                <Box>Customer Insights</Box>
                <Box>Easy Integration</Box>
                <Box>Integrate Content Marketing</Box>
                <Box>Social Media Integration</Box>
                <Box>Third Party Plug-ins</Box>
              </SimpleGrid>
            </Box>
          </Flex>
          <TextBox
            heading="CASE STUDY"
            smallHeading="social media designs"
            subHeading="sneak peak into our social media marketing projects"
            content="Have a look at some of the Social Media Marketing work we have done for our clients over these years"
          />
          <FavWork data={favWorkData} />
        </Container>
      </Box>
    </Stack>
  );
};

Woocommerce.getLayout = function getLayout(Woocommerce) {
  return <InnerLayout>{Woocommerce}</InnerLayout>;
};

export default Woocommerce;
