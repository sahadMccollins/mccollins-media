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

const sitefinity = () => {
  return (
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="sitefinity web development" />
      <Box>
        <Container maxWidth={"4xl"} mt={10}>
          <Text
            mt={{ base: 5, md: 0 }}
            className="main-p"
            textAlign="center !Important"
          >
            Sitefinity development involves creating, customizing, and deploying
            websites, intranets, and mobile applications using the Sitefinity
            CMS and DXP
          </Text>
        </Container>
        <Container maxWidth={"7xl"} pb={"50px"}>
          <Flex direction={{ base: "column", md: "row" }} mt={10}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: "0", md: "10" }}
              position="relative"
              alignSelf={"center"}
            >
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/subPage/sitefinity.png"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading as={"h3"} className={"main-h3"} mt={{ base: 5, md: 0 }}>
                Here are the key steps involved in Sitefinity development:
              </Heading>
              <OrderedList my={"6"}>
                <li>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Planning and strategy:</b> This involves understanding
                    the client's requirements, identifying the target audience,
                    and creating a roadmap for the project.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Design:</b> This involves creating the visual design and
                    user experience of the website or application, including
                    wireframes, mockups, and prototypes.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Development:</b> This involves building the website or
                    application using Sitefinity's tools and features, such as
                    the drag-and-drop page builder, custom templates, and
                    widgets.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Testing:</b> This involves testing the website or
                    application for functionality, usability, and performance.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Deployment:</b> This involves deploying the website or
                    application to the client's servers or a hosting platform.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Maintenance and support:</b> This involves providing
                    ongoing maintenance and support services, such as bug fixes,
                    updates, and enhancements.
                  </Text>
                </li>
              </OrderedList>
            </Box>
          </Flex>
          <Box alignSelf="center">
            <Text textAlign={"center"}>
              Sitefinity allows businesses and organizations to build and manage
              their websites, intranets, and mobile applications. Sitefinity
              offers a range of features including content creation, publishing,
              and personalization, as well as e-commerce and social media
              integration. It also provides a variety of customization options,
              such as drag-and-drop functionality, custom templates, and
              third-party integrations. Sitefinity is a popular choice for
              businesses and organizations that require a robust and scalable
              CMS that can handle complex websites and digital experiences.
              <br />
              Get in touch with us to discuss your next Website Development
              brief.
            </Text>
          </Box>
        </Container>

        <WebShowcase />
      </Box>
    </Stack>
  );
};

sitefinity.getLayout = function getLayout(sitefinity) {
  return <InnerLayout>{sitefinity}</InnerLayout>;
};

export default sitefinity;
