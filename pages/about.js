import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import Image from "next/image";
import OurTeam from "../components/OurTeam";
import TextBox from "../components/TextBox";
import ClientsLogo from "../components/ClientsLogo";
import Awards from "../components/Awards";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const about = () => {
  return (
    <>
      <HeroBanner
        img="/assets/image/banner/about-banner.webp"
        breadcrumb="about us"
        h2="result driven digital marketing partner"
      />

      <Container maxWidth={"7xl"} pb="2">
        <Flex
          direction={{ base: "column", md: "row" }}
          mt="8"
          justifyContent={"space-between"}
          position="relative"
        >
          <Box width={{ base: "100%", md: "45%" }}>
            <Heading>LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING</Heading>
            <Box
              my={8}
              background="#FFDE11"
              width={"fit-content"}
              p={"0px 10% 0px 10px"}
              fontWeight="bold"
              fontSize={"20px"}
            >
              <Text>creating content that tells a story</Text>
            </Box>
            <Text mb={5}>
              We craft digital experiences that change the game for you and your
              customers. Our teams combine strategy, customer insight, and
              technology engineering to help you rapidly solve customer problems
              and demonstrate measurable impact against your strategic goals.
              <br />
              <br /> We believe in earned media, and develop marketing vehicles
              to get your brand noticed at the right time, in the right place.
              Our multicultural team comes with a zest to create something
              different, dare to explore the digital space and take ownership
              for the brands we represent. Today, 10 years and counting, we are
              just warming up.
            </Text>
          </Box>
          <Box width={{ base: "100%", md: "45%" }}>
            <Box p={6} bg={"#F7F7F7"} mb={5}>
              <Heading fontSize={16} mb="5">
                Managing the digital ecosystem for your brand with a result
              </Heading>
              <Text>
                From Digital Media Buying, Campaign Development, Blogger
                Outreach Programs to Content Development, we do it all in-house.
              </Text>
            </Box>
            <Box p={6} bg={"#F7F7F7"} mb={5}>
              <Heading fontSize={16} mb="5">
                Be it a mobile application, website or an e-commerce platform,
              </Heading>
              <Text>
                we create a product for your brand from the scratch. Create an
                exclusive product for your brand which can build a database over
                time!
              </Text>
            </Box>
            <Box p={6} bg={"#F7F7F7"} mb={5}>
              <Heading fontSize={16} mb="5">
                Implement performance based marketing, ensure lead generation
              </Heading>
              <Text>
                call to action to your website or mobile application. Get the
                phone ringing or increase the CTR for your campaigns. Get in
                touch now.
              </Text>
            </Box>
          </Box>
          <Box
            position={"absolute"}
            left={{ base: "60", md: "42%" }}
            bottom={"-28"}
            zIndex="2"
          >
            <Image
              src="/assets/image/design/1.svg"
              width="187px"
              height="202px"
            />
          </Box>
        </Flex>
      </Container>
      <Box position={"relative"}>
        <Box
          position={"absolute"}
          bg="#F7F7F7"
          height={"600px"}
          width="100%"
        ></Box>
      </Box>
      <TextBox
        heading="OUR TEAM"
        subHeading="We Help to Acheive Your Business Goal"
        content="We create brand names that are simplistic, unique, and can travel the world, whether selling a product in a small town or an urban city."
      />

      <OurTeam />

      <ClientsLogo />
      <Awards />
      <Heading textAlign={"center"} mb={5}>
        Our Instagram Feed
      </Heading>
      <Box>
        <InstagramFeed
          token="IGQVJVU3U4ZAjljbGJEVkVVdnZAJOVBsYmlDdzZAlbWw5clk2TDJKRnBIRG5jQlFYanVLTThFV042MWpwdHFNTDBfUnR0OERQZAGZANZA2IwcG9uQjJKMmFSOGxaMk1qZAmxEUzdEb3FKNEYyX3hhYXZAQMlJuRgZDZD"
          counter="6"
        />
      </Box>
    </>
  );
};

export default about;
