import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import InnerBanner from "../../components/InnerBanner";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import TextBox from "../../components/TextBox";
import TechIcon from "../../components/TechIcon";
import ClientsLogo from "../../components/ClientsLogo";
import FavWork from "../../components/FavWork";

const AppDevelopment = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  return (
    <Stack>
      <Container maxWidth={"7xl"} position="relative">
        <InnerBanner
          heading={`app \n development`}
          img="/assets/image/servicePage/appDevelopment.jpg"
          content="Every brand in today’s time must have a website to showcase itself to its audience. Having a mobile friendly website is even more important. Our team of in-house developers specialize in various backends be it Wordpress, WooCommerce, Magento, React or Shopify to name a few. Our agency is Partners with several leading platforms"
        />
      </Container>
      <Box
        style={{ position: "absolute", top: "80vh", right: "0" }}
        display={{ base: "none", md: "block" }}
        zIndex={99}
      >
        <Image
          src={"/assets/image/design/1.svg"}
          width="158px"
          height={"215px"}
        />
      </Box>
      <Box
        style={{
          background: isLargerThan780
            ? "linear-gradient(to bottom,#ffde11 52%,#fff 40%)"
            : "linear-gradient(to bottom,#ffde11 39%,#fff 35%)",
        }}
      >
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Flex
              width={{ base: "100%", md: "50%" }}
              mt="14"
              direction={"column"}
              justifyContent="space-between"
            >
              <Box>
                <Heading color={"#000"} fontSize="4xl">
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING
                </Heading>
                <Box
                  my={8}
                  background="#fff"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"1xl"}
                  color={"#000"}
                >
                  <Text>creating content that tells a story</Text>
                </Box>

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
                <br />
                <br />
              </Box>
              <Box>
                <Heading color={"#000"} fontSize={{ base: "2xl", md: "3xl" }}>
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING
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
              </Box>
            </Flex>
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
