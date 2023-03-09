import {
  Box,
  Container,
  Flex,
  Heading,
  OrderedList,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import FavWork from "../../../components/FavWork";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";
import ServicePoint from "../../../components/ServicePoint";
import TextBox from "../../../components/TextBox";
import WebShowcase from "../../../components/WebShowcase";

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
      <InnerBannerTwo h1="SITECORE CRM" />
      <Box>
        <Container maxWidth={"4xl"} mt={10}>
          <Text mt={{ base: 5, md: 0 }} className="main-p" textAlign="center">
            Sitecore is a powerful enterprise-level content management system
            (CMS) that is widely used for building complex websites, e-commerce
            platforms, and digital marketing applications. Sitecore development
            involves creating and customizing digital experiences on the
            Sitecore platform, using a combination of programming languages,
            tools, and techniques. Many businesses are scaling with time and now
            opting for Sitecore Websites. As we do Sitecore development in the
            UAE, share a brief for your next project.
          </Text>
        </Container>
        <Container maxWidth={"7xl"} pb={"50px"} pt={5}>
          <Flex
            direction={{ base: "column", md: "row" }}
            my={{ base: 5, md: 5 }}
          >
            <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              mr={{ base: 0, md: 10 }}
              alignSelf="center"
            >
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/subPage/sitecore (1).jpg"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading as={"h3"} className={"main-h3"}>
                Some Key Features for Sitecore Development :
              </Heading>
              <OrderedList my={"6"}>
                <li>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Sitecore architecture: </b> Sitecore is built on the
                    Microsoft .NET framework and uses a variety of technologies,
                    including ASP.NET, MVC, and Web API. Understanding the
                    Sitecore architecture is essential for building scalable and
                    secure applications.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Sitecore customization: </b>Sitecore provides a variety
                    of out-of-the-box features and modules, but customizing
                    these features is often necessary to meet the specific
                    requirements of a project. Our Sitecore Web Developers in
                    Dubai strive to keep themselves updated with the latest
                    technologies.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Sitecore integration: </b>We can integrate with a wide
                    range of external systems, including third-party databases,
                    marketing automation platforms, and e-commerce platforms.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Maintenance and support : </b>We also provide ongoing
                    maintenance and support to ensure that the online store is
                    running smoothly, and any issues are quickly resolved.
                  </Text>
                </li>
              </OrderedList>
            </Box>
          </Flex>
          <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: 0, md: 10 }}
              alignSelf="center"
            >
              <Heading as={"h3"} className={"main-h3"}>
                As a business, Sitecore is beneficial for :
              </Heading>
              <UnorderedList my={"6"} ml={0} className="checkmark">
                <li>
                  <Text className="main-p">Better tracking and analytics </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Unlocking AI Powered - Personalization
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Comprehensive Content Optimization
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Gaining a single view of an individual customer
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Ensuring Data Protection and Privacy
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Building Omni-channel customer experience
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Increasing operational efficiency
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Increasing customer lifetime value
                  </Text>
                </li>
                <li>
                  <Text className="main-p">And finally , driving revenue!</Text>
                </li>
              </UnorderedList>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} alignSelf="center">
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/subPage/sitecore (2).jpg"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Container>

        <WebShowcase />
      </Box>
    </Stack>
  );
};

Shopify.getLayout = function getLayout(Shopify) {
  return <InnerLayout>{Shopify}</InnerLayout>;
};

export default Shopify;
