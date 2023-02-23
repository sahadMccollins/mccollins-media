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

const Shopify = () => {
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
    <Stack position={"relative"}>
      <InnerBannerTwo h1="Shopify Website Development" />
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
                <Text>SHOPIFY WEBSITE</Text>
              </Box>
              <Heading textAlign="left" fontSize={"5xl"}>
                Build your Shopify Website today
              </Heading>
              <Text mt={5}>
                Favorite of many, Shopify websites are easy to build and great
                to manage. Use the best of the tools and let us help you develop
                your shopify website.
              </Text>
              <Heading fontSize={"2xl"} mt={3}>
                Up and Running Fast
              </Heading>
              <Text mt={5}>
                Build your shopify Website in no time. Outline your business
                objectives and let us help you develop your very own shopify
                website
              </Text>
              <Heading fontSize={"2xl"} mt={3}>
                Track your Orders Real Time
              </Heading>
              <Text mt={5}>
                Enjoy tracking orders in real time. See which page are your
                customers engaging, which products are they buying and let the
                Ka-Ching happen in Real Time!
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/shopify2.jpg"}
                width="585px"
                height={"528px"}
                style={{ borderRadius: "25px" }}
              />
            </Box>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} my="75px">
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/shopify.jpg"}
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
                <Text>BUILD YOUR SHOPIFY WEBSITE</Text>
              </Box>
              <Heading textAlign="left" fontSize={"5xl"}>
                Why use Shopify ?
              </Heading>
              <Text mt={5}>
                Contemplating which platform to use to build your website ?
                Shopify is great to launch an ecommerce business. Manage your
                website on your own.
              </Text>
              <SimpleGrid
                columns={{ sm: 1, md: 2 }}
                spacing="20px"
                mt={10}
                className="servicePoint2"
              >
                <Box>Easy to Set Up</Box>
                <Box>Track your orders in Real Time</Box>
                <Box>Ease of Inventory Management</Box>
                <Box>Great for Marketing Automation</Box>
                <Box>Great for Production Management</Box>
                <Box>Fast Payment Gateway Integration</Box>
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

Shopify.getLayout = function getLayout(Shopify) {
  return <InnerLayout>{Shopify}</InnerLayout>;
};

export default Shopify;
