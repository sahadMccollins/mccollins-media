import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ServicePoint from "../../components/ServicePoint";
import TextBox from "../../components/TextBox";
import FavWork from "../../components/FavWork";
import ClientsLogo from "../../components/ClientsLogo";
import Carousel from "../../components/Carousel";
import VideoBanner from "../../components/VideoBanner";

const ContentProduction = () => {
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
      <VideoBanner
        heading={`content \n production`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657219369/Mccollins%20Video/Content_Creation_m3dsap.mp4"
        content="Get your brand noticed at the right place at the right time. Let us help you rank high on Google search and place strategic Google Ads to see those leads convert."
        poster="/assets/image/servicePage/contentProduction.jpg"
      />

      <Box
        bg={{
          base: "linear-gradient(to bottom,#fff 43%,#ffde11 43%)",
          md: "linear-gradient(to bottom,#fff 50%,#ffde11 50%)",
        }}
        position="relative"
      >
        <Box
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "0px",
          }}
          width={{ base: "150px", md: "unset" }}
        >
          <Image
            src={"/assets/image/design/10.png"}
            width="241px"
            height={"228px"}
          />
        </Box>
        <Container maxWidth={"7xl"} my="10">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            mt="-10"
          >
            <Box width={{ base: "100%", md: "50%" }}>
              <Image
                src="/assets/image/ServiceTabs/IphoneReels.png"
                width="610px"
                height="905px"
              />
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box display={"flex"}>
                <Heading>
                  CONTENT <br />
                  PRODUCTION
                </Heading>
                <Box
                  width={"100px"}
                  height={"7px"}
                  background="#000"
                  alignSelf={"end"}
                  marginBottom="10px"
                  marginLeft={"20px"}
                ></Box>
              </Box>
              <Text mt={20}>
                Bring a Digital Brand Activation Agency, the process of content
                production is the very core of our set up. From developing
                exclusive content for Social Media Marketing to Web Development,
                our in-house team of content creators follow global trends,
                consumer insights and curate content that is relatable to each
                of our brands.
                <br />
                <br />
                Content without Analysis is futile. So from A/B Testing of
                Digital Content, Marketing in the metaverse, Video Marketing,
                Podcasts, Launch of Shoppable Links and more.
                <br />
                <br />
                Leveraging Data-based insights, we work with brands to enhance
                their digital ecosystem.
                <br />
                Leading with empathy and value-driven content , this is just the
                start.
              </Text>
              <Button
                colorScheme="black"
                background={"#000"}
                borderRadius="20px"
                color="#fff"
                mt={7}
                fontWeight="bold"
              >
                view more{" "}
                <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      <ServicePoint
        heading="Content Marketing"
        subHeading="For your Brand"
        contentHeading={"Creating Content that tells a story"}
        content="Creating exclusive brand content is a great way to communicate a story about your brand. In the digital space, this is a content process of CREATING"
        points={
          "Photography \n Food Photography \n Mobile First Content \n Videography \n 360 Images and Videos \n Cinemagraphs \n Stop Motion Videos \n  Brand Montage Videos \n Corporate Videos "
        }
      />
      <Carousel />
      <TextBox
        heading="Mobile First Content "
        // smallHeading="website design & development"
        subHeading="Creating content for an optimized Mobile Experience is key to every brand"
        content="Explore some of our team’s favorite work done for Mobile First Content - be it Instagram Reels, Snapchat Videos or TikTok Content, we understand the consumer insights and create relatable content"
      />
      <FavWork data={favWorkData} />
      <ClientsLogo />
    </Stack>
  );
};

ContentProduction.getLayout = function getLayout(ContentProduction) {
  return <InnerLayout color="yellow">{ContentProduction}</InnerLayout>;
};
export default ContentProduction;
