import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import InnerBanner from "../../components/InnerBanner";
import InnerLayout from "../../components/InnerLayout";
import Image from "next/image";
import TextBox2 from "../../components/TextBox2";
import TextBox from "../../components/TextBox";
import FavWork from "../../components/favWork";
import TechIcon from "../../components/TechIcon";
import ClientsLogo from "../../components/ClientsLogo";

const AppDevelopment = () => {
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <InnerBanner
          heading1="app"
          heading2="development"
          img="/assets/image/servicePage/appDevelopment.jpg"
          content="Every brand in today’s time must have a website to showcase itself to its audience. Having a mobile friendly website is even more important. Our team of in-house developers specialize in various backends be it Wordpress, WooCommerce, Magento, React or Shopify to name a few. Our agency is Partners with several leading platforms"
        />
      </Container>
      <Box
        style={{
          background: "linear-gradient(to bottom,#ffde11 52%,#fff 40%)",
        }}
      >
        <Container maxWidth={"7xl"}>
          <Flex>
            <Box width={{ base: "100%", md: "50%" }} mt="14">
              <Heading color={"#000"} fontSize="4xl">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING
              </Heading>
              <Box
                my={8}
                background="#fff"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"20px"}
                color={"#000"}
              >
                <Text>creating content that tells a story</Text>
              </Box>

              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <br />
              <br />
              <Heading color={"#000"} fontSize="4xl">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING
              </Heading>
              <Box
                my={8}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"20px"}
                color={"#000"}
              >
                <Text>creating content that tells a story</Text>
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "40%" }}>
              <Image
                src="/assets/image/servicePage/appDevelopment2.png"
                width="718px"
                height="950px"
              />
            </Box>
          </Flex>
          <Text mb="5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br />
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </Text>
        </Container>
      </Box>

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

AppDevelopment.getLayout = function getLayout(AppDevelopment) {
  return <InnerLayout>{AppDevelopment}</InnerLayout>;
};

export default AppDevelopment;
