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
import Testimonials from "../components/Testimonials";

const about = () => {
  return (
    <>
      <HeroBanner
        img="/assets/image/banner/about-banner.webp"
        breadcrumb="about us"
        h2="Creatively Led & Strategically Driven"
      />

      <Container maxWidth={"7xl"} pb="2">
        <Flex
          direction={{ base: "column", md: "row" }}
          mt="8"
          justifyContent={"space-between"}
          position="relative"
        >
          <Box width={{ base: "100%", md: "45%" }}>
            <Heading fontSize={"24px"}>
              BUILT ON STRATEGIC VALUES, FUELED BY CREATIVITY AND DRIVEN BY
              CONSUMER INSIGHTS.
            </Heading>
            <Box
              my={8}
              background="#FFDE11"
              width={"fit-content"}
              p={"0px 8% 0px 10px"}
              fontWeight="bold"
              fontSize={"20px"}
            >
              <Text>A Voice For Your Brand</Text>
            </Box>
            <Text mb={5}>
              McCollins Media is a Digital Brand Activation agency specializing
              in Mobile-first technology and Performance-Driven Marketing
              campaigns in the MENA region. We are Headquartered in Dubai with a
              complete in-house team of creative professionals.
              <br />
              <br /> We are in the pursuit of providing digital advancement to
              all our clients to take their brand to the next level. Be it Web
              Development, Google Ads, 360 Brand Development, or Digital
              Marketing, we do everything in-house.
              <br />
              <br />
              Our multi-cultural team is always daring to set viral trends,
              venture into the digital realm, and take ownership of the brands
              we represent. After 15 years of being a pioneer Digital Marketing
              agency in the UAE, we’re just starting what we are here for!
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
        heading={"MEET \n THE TEAM"}
        subHeadingOnly={
          "You know our story, but do you know who keeps it alive? \n Meet our team who take brands to unthinkable heights!"
        }
      />

      <OurTeam />

      {/* <Testimonials /> */}

      <ClientsLogo />
      <Awards />
      <Heading textAlign={"center"} mb={5}>
        Our Instagram Feed
      </Heading>
      <Box style={{ marginBottom: "57px" }}>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div class="elfsight-app-59a98d63-d789-41ac-ae96-2f56ea9aa4fd"></div>
      </Box>
    </>
  );
};

export default about;
