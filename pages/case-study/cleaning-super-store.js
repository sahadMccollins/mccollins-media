import { Box, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import CaseStudy from "../../components/CaseStudy";
import CaseStudyBanner from "../../components/caseStudyBanner";
import FadeUp from "../../components/Motion/FadeUp";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "../../node_modules/react-modal-video/css/modal-video.min.css";

function CaseStudyPage() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CaseStudyBanner
        h2="Cleaning Superstore"
        p="Case Study"
        img="/assets/image/caseStudy/banner/banner1.jpg"
      />
      <Container maxW={"4xl"} mt={"50px"} pb={10}>
        {/* <Heading className="main-h2">Trydo</Heading> */}
        {/* <Divider my={10} bg={"#e1e1e1"} /> */}

        <Text>
          Cleaning Superstore is out and about a Pandemic born brand. With the
          start of Covid, Cleaning Superstore was conceptualized. McCollins
          Media created the brand from the inception of its logo, to taking it
          all the way to Website Development , Social Media Activation,
          Performance Marketing , Influencer Collaborations and more
        </Text>

        <Heading as={"h5"} className="main-h5" mt={10}>
          The Objective : The Launch the first ever cleaning superstore haven in
          UAE. Create awareness about the brand, launch the website to urge
          people to shop online for their monthly cleaning supplies or Visit the
          store in Ajman
        </Heading>
      </Container>
      <Container maxW={"6xl"}>
        <Box
          width="100%"
          height={{ base: "250px", sm: "400px", md: "600px" }}
          position={"relative"}
          className="VCSBox"
        >
          <FadeUp>
            <video
              title="Film Production Company Dubai"
              autoPlay
              loop
              muted
              controls
              playsInline
              preload="auto"
              alt="McCollins Media Production"
              style={{
                width: "100%",
                marginTop: "-10px",
                marginBottom: "-10px",
              }}
            >
              <source
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1678476812/Mccollins%20Video/Cleaning_Superstore_Dubai_Lynx_Awards_Entry_Video_Second_Cut_03.02_zguftp.mp4"
                type="video/mp4"
                media="screen"
              />
              Your browser does not support HTML5 video.
            </video>
          </FadeUp>
        </Box>

        <Box>
          <Heading
            as={"h2"}
            className="main-h2"
            textAlign={"center"}
            borderBottom={"20px solid #FFE962"}
            maxWidth="fit-content"
            padding={"0 20px 20px 20px"}
            margin={"auto"}
            mt={20}
            mb={10}
          >
            The Route
          </Heading>
          <Box>
            <Heading
              as={"h4"}
              className="main-h4"
              borderLeft={"20px solid #FFE962"}
              pl={{ base: 5, md: 10 }}
            >
              Social Media
            </Heading>
            <Text mt={5} ml={{ base: 0, md: 14 }}>
              We launched social media with a very supermarket vibe of raw
              content. Worked with the team to create TikTok Emoji personalities
              of the team members who speak in colloquial Arabic. The target
              audience is 100% Local Emirati. Being a TikTok Partner, our agency
              in UAE focused on Arabic and English to create the much needed
              buzz about Shopping by Carton and the first every refill station
              in UAE as the brand launched a 5L Jerry Can.
              <br />
              <br />
              We launched Snapchat Ads with heavy focus on conversion Ad
              campaigns to shop via the website. And another campaign to drive
              awareness about the factory outlet in Ajman. Being a Performance
              Marketing agency in Dubai, we focused on creating different ad
              sets , running A/B Testing campaigns to understand what our
              audience prefers.
              <br />
              <br />
              We focused on inviting influencers and collaborating with them
              with exclusive Promo Codes via the Shopify Website. Being a
              Shopify Partner in UAE, we got our shopify developers to customize
              the website for the UAE Market.
            </Text>
          </Box>
        </Box>
        <Heading
          as={"h2"}
          className="main-h2"
          textAlign={"center"}
          borderBottom={"20px solid #FFE962"}
          maxWidth="fit-content"
          padding={"0 20px 20px 20px"}
          margin={"auto"}
          mt={10}
          mb={5}
        >
          The Result
        </Heading>
        <Text textAlign={"center"}>
          Cleaning Superstore is completely driven by Digital Marketing with
          huge focus on Snapchat Ads, TikTok, Amazon Store, the local feel of
          shopping at a Factory Outlet in Ajman. Customers enjoy the concept of
          a Refill Station, Shop by Carton and more. Sales have been on the
          rise, the brand enjoys a customer retention of 65% with monthly orders
          for their cleaning supplies.
        </Text>

        <Box mt={{ base: 10, md: 20 }} textAlign="center">
          <Heading color={"#FFDE11"} fontSize="25px" as={"h5"}>
            Related Work
          </Heading>
          <Heading as={"h3"} className="main-h2">
            Case Study
          </Heading>
        </Box>
      </Container>
      <CaseStudy />
      <ModalVideo
        channel="custom"
        url="https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/cyro.mp4"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default CaseStudyPage;
