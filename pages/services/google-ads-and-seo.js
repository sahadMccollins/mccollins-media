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
import { useRouter } from "next/router";

const DigitalMarketingSEO = () => {
  const favWorkData = [
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
  ];

  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  return (
    <Stack position={"relative"}>
      <VideoBanner
        heading={`google ads \n & seo`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657600388/Mccollins%20Video/Search_engine_marketing-_kg3pi4.mp4"
        content="Get your brand noticed at the right place at the right time. Let us help you rank high on Google search and place strategic Google Ads to see those leads convert."
        poster="/assets/image/servicePage/DM&SEO.jpg"
      />

      <Box py={10}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading>YOUR EXTENDED DIGITAL ARM</Heading>
              <Box
                my={8}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"20px"}
                color={"#000"}
              >
                {/* <Text>creating content that tells a story</Text> */}
              </Box>
              <Text>
                We take ownership of your brand from the basics of community
                management on the social media channels, to bringing the traffic
                to your website and mapping the conversions.
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
                <Heading>In-House Team</Heading>
              </Box>
              <Text>
                A team of young and passionate digital enthusiasts from
                different walks of life, taking ownership of your brands in the
                digital space
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
                <Heading>Dare to Create</Heading>
              </Box>
              <Text>
                Always innovating, always creating. The digital space is full of
                creating your own experience, working with a online community,
                and we dare to create.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <ServicePoint
        heading="Digital Brand Activation"
        // subHeading="performance marketing"
        contentHeading={"Key Digital Marketing Routes for Your Brand"}
        content="From Social Media Management to Performance Marketing, our in-house team is your extended marketing arm."
        points={
          "Performance Marketing \n Google Ads - PPC \n Social Media Management \n Content Production \n Search Engine Optimization \n Digital Media Buying \n Email Marketing \n  Data Analysis \n AR/VR"
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
                  onClick={() => router.push("/contact")}
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
        smallHeading={"Google Ads and SEO"}
        subHeading="Learn how we executed campaigns to get results"
        content="Over the decade we have worked on some exciting web projects from Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia. Have a look at some of our work"
      />
      <FavWork data={favWorkData} />
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
