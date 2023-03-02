import {
  Box,
  Container,
  Flex,
  Heading,
  OrderedList,
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
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="Shopify Website Development" />
      <Box>
        <Container maxWidth={"7xl"} py={"50px"}>
          <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              paddingRight={{ base: "0", md: "50px" }}
              alignSelf="center"
              textAlign={"justify"}
              className="main-p"
            >
              <Text mt={{ base: 5, md: 0 }}>
                Launching an ecommerce business ? Shopify is one of the most
                preferred platforms to build and maintain your e-commerce
                website. As a Shopify Partner, we customize the websites as per
                your brand guidelines. As we focus on Shopify Development in the
                UAE and for other GCC Countries, we also launch Arabic Shopify
                Websites which are key to this market. Our inhouse team of
                Shopify developers in UAE are updated with the latest trends in
                UI/UX and Technology.
                <br />
                <br />
                From conceptualizing your website UI/UX to Product Photography
                to creating product collections , we take you through the
                payment gateway process and get your website up and running in
                no time. Shopify Development in Dubai is now one of the fastest
                growing platforms to launch your website with a Mobile First
                Interface.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/shopify2.jpg"}
                width="500px"
                height={"400px"}
                objectFit="cover"
              />
            </Box>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} my="75px">
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/shopify.jpg"}
                width="585px"
                height={"528px"}
              />
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading as={"h3"} className="main-h3">
                We can help you with
              </Heading>
              <OrderedList my={"6"} textAlign="justify">
                <li>
                  <Text fontSize={"20px"}>
                    <b>Storefront Development : </b>Building and customizing
                    visual elements of your online such - be with the layout,
                    theme and design. Our Shopify developers work on the latest
                    trends and customize themes using HTML, CSS and other tools
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5">
                    <b>App Development : </b>Take your business mobile. The
                    Shopify theme can then provide a mobile experience for your
                    brand.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5">
                    <b>Shopify API Integration : </b>The APO allows us to
                    integrate with third party services like Payment gateway
                    providers, shipping partners and marketing tools like
                    Klaviyo etc
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5">
                    <b>Maintenance and support : </b>We also provide ongoing
                    maintenance and support to ensure that the online store is
                    running smoothly, and any issues are quickly resolved.
                  </Text>
                </li>
              </OrderedList>
              {/* <SimpleGrid
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
              </SimpleGrid> */}
            </Box>
          </Flex>
          <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              paddingRight={{ base: "0", md: "50px" }}
              alignSelf="center"
              textAlign={"justify"}
              className="main-p"
            >
              <Text mt={5} textAlign="justify">
                Our marketing team works with our web development team, from
                Shopify Web Development in the UAE to launch your website and
                take your business on the next journey of promoting your
                products via Performance Marketing and Social Media Marketing.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/Woocommerce.jpg"}
                width="500px"
                height={"300px"}
                objectFit="cover"
              />
            </Box>
          </Flex>
          <Box mt={10}>
            <FavWork data={favWorkData} />
          </Box>
        </Container>
      </Box>
    </Stack>
  );
};

Shopify.getLayout = function getLayout(Shopify) {
  return <InnerLayout>{Shopify}</InnerLayout>;
};

export default Shopify;
