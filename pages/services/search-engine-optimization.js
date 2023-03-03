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
  OrderedList,
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

const SEO = () => {
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
        heading={`search engine \n  optimization`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657600388/Mccollins%20Video/Search_engine_marketing-_kg3pi4.mp4"
        content="Get your brand noticed at the right place at the right time. Let us help you rank high on Google search and place strategic Google Ads to see those leads convert."
        poster="/assets/image/servicePage/DM&SEO.jpg"
      />

      <Container
        maxWidth={"7xl"}
        pt={{ base: "50px", md: "100px" }}
        style={{ margin: "auto" }}
      >
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Box
            width={{ base: "100%", md: "50%" }}
            paddingRight={{ base: "0", md: "50px" }}
            alignSelf="center"
            textAlign={{ base: "left", md: "justify" }}
          >
            <Text mt={5} className="main-p">
              As a Performance driven, Search Engine Optimization agency in
              Dubai, we specialize in providing SEO services to businesses. Our
              primary goal is to support businesses to improve their online
              visibility and increase organic traffic to their websites.
            </Text>
          </Box>
          <Box width={{ base: "100%", md: "50%" }} position="relative">
            <Image
              src={"/assets/image/servicePage/DM&SEO2.jpg"}
              width="550px"
              height={"300px"}
              objectFit="cover"
            />
          </Box>
        </Flex>

        <Flex
          direction={{ base: "column", md: "row" }}
          my={{ base: "10", md: "75px" }}
        >
          <Box width={{ base: "100%", md: "50%" }} alignSelf="center">
            <Image
              src={"/assets/image/servicePage/ksa/seo.jpg"}
              width="500px"
              height={"500px"}
              objectFit="cover"
            />
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            alignSelf="center"
            mt={{ base: 5, md: 0 }}
          >
            <Heading as={"h5"} className="main-h5">
              As an SEO provider, we typically provide a range of services to
              achieve these goals, including:
            </Heading>
            <OrderedList
              my={"6"}
              textAlign={{ base: "left", md: "justify" }}
              className="main-p"
            >
              <li>
                <Text fontSize={"20px"} className="main-p">
                  <b>On-page optimization:</b> Optimizing the content, meta
                  tags, and other elements on the website to make it more
                  relevant and accessible to search engines.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Off-page optimization: </b> Building high-quality backlinks
                  from other websites to improve the website's authority and
                  relevance.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Keyword research: </b> Identifying the most relevant and
                  high-traffic keywords for the business and optimizing the
                  website's content to target those keywords.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Content creation: </b> Creating high-quality, relevant, and
                  engaging content that appeals to the target audience and helps
                  drive traffic to the website.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Analytics and reporting:</b> Monitoring the website's
                  performance, tracking the progress of the SEO campaign, and
                  providing regular reports to the client.
                </Text>
              </li>
            </OrderedList>
            <Text className="main-p">
              We also provide other related services, such as social media
              marketing, pay-per-click (PPC) advertising, and website design and
              development.
            </Text>
          </Box>
        </Flex>
      </Container>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <Box position={"relative"} style={{ marginTop: "0" }}>
        <Chakraimage
          src="/assets/image/servicePage/DM&SEO2.jpg"
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
        smallHeading={"Search engine optimization"}
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

SEO.getLayout = function getLayout(SEO) {
  return <InnerLayout color="yellow">{SEO}</InnerLayout>;
};
export default SEO;
