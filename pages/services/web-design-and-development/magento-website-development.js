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
import WebShowcase from "../../../components/WebShowcase";

const Magento = () => {
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
      <InnerBannerTwo h1="Magento Website Development" />
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
                <Text>MAGENTO WEBSITE DEVELOPMENT</Text>
              </Box>
              <Heading textAlign="left" fontSize={"5xl"}>
                Develop your Website <br /> on Magento
              </Heading>
              <Text mt={5}>
                Magento is one of the best multi-channel eCommerce platforms as
                it is super fast, well optimized and extremely user-friendly.
                With the every increasing competition, Magento is great for
                increasing your website experience and online sales. Make the
                most of your Magento website and gain a competitive advantage by
                streamlining all your business processes..
              </Text>
              <Heading fontSize={"2xl"} mt={3}>
                Open Source Platform
              </Heading>
              <Text mt={5}>
                Magento is an open source platform which gives us flexibility to
                create the websites which will benefit our brands.
              </Text>
              <Heading fontSize={"2xl"} mt={3}>
                Customization Options
              </Heading>
              <Text mt={5}>
                Everything can be customized, from layout, size and style, to
                the number of products, details, check-out procedures and
                payment methods and more. Your vision can be turned into
                reality.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/Magneto.jpg"}
                width="585px"
                height={"528px"}
                style={{ borderRadius: "25px" }}
              />
            </Box>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} my="75px">
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/Magneto2.jpg"}
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
                <Text>LET’S TALK ABOUT THE BENEFITS</Text>
              </Box>
              <Heading textAlign="left" fontSize={"5xl"}>
                Why choose Magento
              </Heading>
              <Text mt={5}>
                Your website is an important way to showcase your offerings.
                With a open platform like Magento, it’s easy to customize your
                website to every element we conceptualize together.
              </Text>
              <SimpleGrid
                columns={{ sm: 1, md: 2 }}
                spacing="20px"
                mt={10}
                className="servicePoint2"
              >
                <Box>Customized Website</Box>
                <Box>Excellent Website Speed</Box>
                <Box>Easy Product Management</Box>
                <Box>Solid Inventory Management</Box>
                <Box>Optimized Search Technology</Box>
                <Box>Effective Analysis and Reporting</Box>
              </SimpleGrid>
            </Box>
          </Flex>
          <TextBox
            heading="CASE STUDY"
            smallHeading="social media designs"
            subHeading="sneak peak into our social media marketing projects"
            content="Have a look at some of the Social Media Marketing work we have done for our clients over these years"
          />
        </Container>

        <WebShowcase />
      </Box>
    </Stack>
  );
};

Magento.getLayout = function getLayout(Magento) {
  return <InnerLayout>{Magento}</InnerLayout>;
};

export default Magento;
