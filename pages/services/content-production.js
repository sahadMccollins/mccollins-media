import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import InnerBanner from "../../components/InnerBanner";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ServicePoint from "../../components/ServicePoint";
import TextBox from "../../components/TextBox";
import FavWork from "../../components/FavWork";
import TechIcon from "../../components/TechIcon";
import ClientsLogo from "../../components/ClientsLogo";
import Carousel from "../../components/Carousel";

const ContentProduction = () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 100);
  }, []);
  return (
    <Stack position={"relative"}>
      <Box
        display={{ base: "none", md: "block" }}
        position={"absolute"}
        top="-85px"
        width={"100%"}
        height="100vh"
        overflow={"hidden"}
      >
        <video muted loop width="100%" ref={videoRef}>
          <source
            src="https://res.cloudinary.com/mccollins-media/video/upload/v1657194135/Mccollins%20Video/Content_Creation_ovbsaz.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
      <Container maxWidth={"7xl"} style={{ margin: "auto" }}>
        <Flex
          display={{ base: "none", md: "block" }}
          mt="-85px"
          height={{ base: "100%", md: "100vh" }}
          minHeight="600px"
          pt="170px"
          direction={{ base: "column", md: "row" }}
        >
          <Box width={{ base: "100%", md: "55%" }} position="relative">
            <Box
              position={"absolute"}
              top={{ base: "37%", md: "6%" }}
              left={"70%"}
            >
              <Image
                src="/assets/image/design/3.svg"
                width={"89px"}
                height={"104px"}
                priority={true}
              />
            </Box>
            <Heading fontSize={"50px"} color="#FFDE11">
              our services
            </Heading>
            <Heading
              fontSize={{ base: "55px", md: "80px" }}
              color="#fff"
              fontWeight="black"
            >
              content <br /> production
            </Heading>
            <Button
              colorScheme="yellow"
              background={"#FFDE11"}
              borderRadius="20px"
              color="#000"
              mt={"5"}
            >
              <Image
                src="/assets/image/icons/call.svg"
                width="25px"
                height="25px"
                priority={true}
              />
              &nbsp;&nbsp;contact us
            </Button>
            <Text
              mt="10"
              fontSize={{ base: "18px", md: "18px" }}
              fontWeight="bold"
              color={"#fff"}
              pr="5"
            >
              Get your brand noticed at the right place at the right time. Let
              us help you rank high on Google search and place strategic Google
              Ads to see those leads convert.
            </Text>
          </Box>
        </Flex>
        <Box display={{ base: "block", md: "none" }}>
          <InnerBanner
            heading={`content \n production `}
            img="/assets/image/servicePage/contentProduction.jpg"
            content="Get your brand noticed at the right place at the right time. Let us help you rank high on Google search and place strategic Google Ads to see those leads convert."
          />
        </Box>
      </Container>
      <Box
        style={{
          background: "linear-gradient(to bottom,#fff 53%,#ffde11 50%)",
        }}
        position="relative"
      >
        <Box
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "0px",
          }}
        >
          <Image
            src={"/assets/image/design/10.png"}
            width="241px"
            height={"228px"}
          />
        </Box>
        <Container maxWidth={"7xl"}>
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
                  alignSelf={{ md: "end", base: "center" }}
                  marginBottom="10px"
                  marginLeft={"20px"}
                ></Box>
              </Box>
              <Text mt={20}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
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
      <ServicePoint />
      <Carousel />
      <TextBox
        heading="Case study"
        smallHeading="website design & development"
        subHeading="learn how we executed campaigns to get results"
        content="Over the decade we have worked on some exciting web projects from Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia. Have a look at some of our work"
      />
      <FavWork />
      <TextBox
        heading="Technologies We work with"
        content="Transform your brand journey today. We grow brands, create experiences and solve problems."
      />
      <TechIcon />
      <ClientsLogo />
    </Stack>
  );
};

ContentProduction.getLayout = function getLayout(ContentProduction) {
  return <InnerLayout>{ContentProduction}</InnerLayout>;
};
export default ContentProduction;
