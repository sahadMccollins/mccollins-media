import {
  Box,
  Container,
  Stack,
  Image as Chakraimage,
  useMediaQuery,
  Heading,
  ButtonGroup,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import { useState } from "react";

import "../../node_modules/react-modal-video/css/modal-video.min.css";
import ServicePoint from "../../components/ServicePoint";
import TextBox from "../../components/TextBox";
import FavWork from "../../components/FavWork";
import TechIcon from "../../components/TechIcon";
import ClientsLogo from "../../components/ClientsLogo";
import VideoBanner from "../../components/VideoBanner";

const DigitalMarketingSEO = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const [isOpen, setOpen] = useState(false);
  return (
    <Stack position={"relative"}>
      <VideoBanner
        heading={`digital \n marketing \n & seo`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657600388/Mccollins%20Video/Search_engine_marketing-_kg3pi4.mp4"
        content="Get your brand noticed at the right place at the right time. Let us help you rank high on Google search and place strategic Google Ads to see those leads convert."
        poster="/assets/image/servicePage/DM&SEO.jpg"
      />

      <Box py={10}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading>LOREM IPSUM DOLOR SIT AMET ADIPISCING</Heading>
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
                <Heading>seo rankings</Heading>
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
                <Heading>google ad campaigns</Heading>
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

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <Box position={"relative"} style={{ marginTop: "0" }}>
        <Chakraimage
          src="/assets/image/servicePage/DM&SEO2.jpeg"
          width={"100%"}
          height={"700px"}
          objectFit={"cover"}
        />
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/assets/image/servicePage/playBtn.svg"
            width={"93px"}
            height={"93px"}
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
        </Box>

        <Box position={"absolute"} width="100%" bottom={"50px"} color="#fff">
          <Container maxWidth={"7xl"}>
            <Box width={isLargerThan780 ? "50%" : "100%"}>
              <Heading fontSize={isLargerThan780 ? "60px" : "40px"}>
                result driven
                <br /> seo & sem partner
              </Heading>

              <ButtonGroup gap="4" zIndex="99" mt={"25px"}>
                <Button
                  colorScheme="yellow"
                  background={"#FFDE11"}
                  borderRadius="20px"
                  color="#000"
                >
                  <Image
                    src="/assets/image/icons/call.svg"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;&nbsp;contact us
                </Button>
                <Button
                  colorScheme="whiteAlpha"
                  borderRadius="20px"
                  color="#fff"
                  onClick={() => setOpen(true)}
                >
                  <Image
                    src="/assets/image/icons/play.svg"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;&nbsp;watch now
                </Button>
              </ButtonGroup>
            </Box>
          </Container>
        </Box>
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

DigitalMarketingSEO.getLayout = function getLayout(DigitalMarketingSEO) {
  return <InnerLayout color="yellow">{DigitalMarketingSEO}</InnerLayout>;
};
export default DigitalMarketingSEO;
