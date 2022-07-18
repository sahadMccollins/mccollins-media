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
import FavWork from "../../components/FavWork";
import TextBox from "../../components/TextBox";
import SocialBox from "../../components/SocialBox";
import ClientsLogo from "../../components/ClientsLogo";
import VideoBanner from "../../components/VideoBanner";

const SocialMediaMarketing = () => {
  return (
    <Stack>
      <VideoBanner
        heading={`social \n media \n marketing`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657600385/Mccollins%20Video/Social_Media-_jmavct.mp4"
        content="Mobile First, Content Driven, Result Oriented extended marketing arm for your brand!"
        poster="/assets/image/servicePage/socialMediaMarketing.jpg"
      />
      <Box
        style={{
          background: "linear-gradient(to bottom,#fff 59%,#ffde11 50%)",
        }}
        bg={{
          base: "linear-gradient(to bottom,#fff 59%,#ffde11 50%)",
          md: "linear-gradient(to bottom,#fff 56%,#ffde11 50%)",
        }}
        pb={12}
      >
        <Container maxWidth={"7xl"} position="relative">
          <Box
            style={{ position: "absolute", top: "45%", left: "25%" }}
            display={{ base: "none", md: "block" }}
          >
            <Image
              src={"/assets/image/design/1.svg"}
              width="158px"
              height={"215px"}
            />
          </Box>
          <Flex direction={{ base: "column", md: "row" }} position="relative">
            <Box style={{ position: "absolute", top: "10%", left: "-20%" }}>
              <Image
                src={"/assets/image/design/11.svg"}
                width="247px"
                height={"284px"}
              />
            </Box>
            <Box width={{ base: "100%", md: "35%" }}>
              <Image
                src="/assets/image/ServiceTabs/IphoneReels.png"
                width="610px"
                height="905px"
              />
              <Text
                fontSize={"28px"}
                fontWeight={"bold"}
                color={"#000"}
                textAlign={"center"}
              >
                #REELS
              </Text>
            </Box>
            <Flex
              width={{ base: "100%", md: "30%" }}
              direction={"column"}
              alignItems="center"
              textAlign={"center"}
            >
              <Heading mt={10}>#1 SOCIAL MEDIA AGENCY IN UAE</Heading>
              <Box
                width={"80px"}
                my={10}
                height={"5px"}
                background="#000"
              ></Box>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                <br />
                <br /> Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </Text>
              <Button
                colorScheme="black"
                background={"#000"}
                borderRadius="20px"
                color="#fff"
                mt={7}
                fontWeight="bold"
              >
                view more
                <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
              </Button>
            </Flex>
            <Box width={{ base: "100%", md: "35%" }}>
              <Image
                src="/assets/image/ServiceTabs/IphoneTiktok.png"
                width="610px"
                height="897px"
              />
              <Text
                fontSize={"28px"}
                fontWeight={"bold"}
                color={"#000"}
                textAlign={"center"}
              >
                #TIKTOKS
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxWidth={"7xl"} my={10}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading>
                SOCIAL MEDIA <br />
                MARKETING
              </Heading>
              <Box
                my={8}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"1xl"}
                color={"#000"}
              >
                <Text>creating content that tells a story</Text>
              </Box>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  }}
                ></span>
                <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                  performance marketing
                </Heading>
              </Box>
              <Text>
                Your brand must rank high amongst competitors when your
                customers search for your brand on Google. With Keyword
                Research, we understand what your customers are searching for.
              </Text>
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  }}
                ></span>
                <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                  content management
                </Heading>
              </Box>
              <Text>
                Your brand must rank high amongst competitors when your
                customers search for your brand on Google. With Keyword
                Research, we understand what your customers are searching for.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <ServicePoint
        heading="SEO & SEM"
        subHeading="performance marketing"
        contentHeading={"how can this work for your brand ?"}
        content="With SEO and Google Ads, we set long term goals and short term
              goals for Lead Generation or e-commerce website conversions. We
              bring the right people to your website."
        points={
          "SEO Strategy \n Keyword Research \n Blog Submissions \n Backlinks \n Content Optimization \n Off Page Promotion \n On Page SEO \n  SERP Features \n Multi-Visit Buyer Journey \n Voice Search \n Display Ads"
        }
      />
      <Box bg={"#F7F7F7"} style={{ marginTop: "0px" }}>
        <Container maxWidth={"7xl"} mt={"5"} mb={"12"}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }}>
            BLOGGER OUTREACH PROGRAM
          </Heading>
          <Text mt={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris
          </Text>
        </Container>
      </Box>
      <TextBox
        heading="CASE STUDY"
        smallHeading="social media designs"
        subHeading="sneak peak into our social media marketing projects"
        content="Have a look at some of the Social Media Marketing work we have done for our clients over these years"
      />
      <FavWork />
      <TextBox
        heading="Social media Platform"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <Box
        style={{ position: "absolute", top: "50%", left: "-4%" }}
        display={{ base: "none", md: "block" }}
      >
        <Image
          src={"/assets/image/design/12.svg"}
          width="130px"
          height={"130px"}
        />
      </Box>
      <SocialBox />
      <ClientsLogo />
    </Stack>
  );
};

SocialMediaMarketing.getLayout = function getLayout(SocialMediaMarketing) {
  return <InnerLayout color="yellow">{SocialMediaMarketing}</InnerLayout>;
};

export default SocialMediaMarketing;
