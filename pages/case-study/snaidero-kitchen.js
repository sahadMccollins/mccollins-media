import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
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
        h2color="#ffde11"
        h2="Snaidero Kitchen"
        p="Case Study"
        img="/assets/image/caseStudy/banner/banner4.jpg"
      />
      <Container maxW={"4xl"} mt={"50px"} pb={10}>
        {/* <Heading className="main-h2">Trydo</Heading> */}
        {/* <Divider my={10} bg={"#e1e1e1"} /> */}

        <Text>
          Snaidero is an Italian manufacturer of high-end kitchens. The company
          was founded in 1946 by Rino Snaidero, and it has since grown to become
          one of the leading kitchen manufacturers in the world. Snaidero's
          kitchens are known for their contemporary design, high-quality
          materials, and advanced technology.
          <br />
          <br />
          Snaidero offers a wide range of kitchen designs, from sleek and modern
          to more traditional styles. The company uses a variety of materials in
          its kitchens, including wood, glass, stainless steel, and lacquer.
          Snaidero also offers a variety of accessories and appliances to
          complement its kitchen designs.
        </Text>
      </Container>
      <Container maxW={"6xl"}>
        <Box>
          <Heading
            as={"h2"}
            className="main-h2"
            textAlign={"center"}
            borderBottom={"20px solid #FFE962"}
            maxWidth="fit-content"
            padding={"0 20px 20px 20px"}
            margin={"auto"}
            my={10}
          >
            The Brief
          </Heading>
          <Box>
            <Text mt={5} ml={{ base: 0, md: 14 }}>
              To create awareness about the brand in the UAE Market and to
              generate leads from the relevant target audience
            </Text>
          </Box>
          <Box mt={10} className="sub-service">
            <Heading
              as={"h4"}
              className="main-h4"
              borderLeft={"20px solid #FFE962"}
              pl={{ base: 5, md: 10 }}
            >
              The Route
            </Heading>
            <Text mt={5} ml={{ base: 0, md: 14 }}>
              We took a 360 Digital Approach for Snaidero. From Social Media
              Management to Website Management, Google Ad Management, Search
              Engine Optimization to Influencer marketing. Lead Generation being
              the key KPI for the brand, we set different campaigns targeting
              the Villa Community Area in UAE. We focused on Arabic and English
              Content - other niche channels like Snapchat for Ads, META Ads and
              so on.
            </Text>
            <UnorderedList
              className="checkmark newCM"
              mt={5}
              mb={10}
              ml={{ base: 0, md: 14 }}
            >
              <li className="CMtop">
                Google Ads Management
                <Box className="ulSub" mt={5}>
                  Lead Generation Campaign
                </Box>
              </li>

              <li className="CMtop">
                Social Media Ads
                <Box className="ulSub" mt={5}>
                  Awareness Campaign
                </Box>
                <Box className="ulSub" mt={3}>
                  Conversion Campaign
                </Box>
              </li>
              <li>Search Engine Optimization </li>
              <li>Influencer Marketing </li>
              <li>Social Media Marketing </li>
              <li>Content Production</li>
            </UnorderedList>
          </Box>
        </Box>

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
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/Snaidero_Case_Study_Video_kcnfgj.mp4"
                type="video/mp4"
                media="screen"
              />
              Your browser does not support HTML5 video.
            </video>
          </FadeUp>
        </Box>

        <Heading
          as={"h2"}
          className="main-h2"
          textAlign={"center"}
          borderBottom={"20px solid #FFE962"}
          maxWidth="fit-content"
          padding={"0 20px 20px 20px"}
          margin={"auto"}
          mt={{ base: 5, md: 16 }}
          mb={5}
        >
          The Result
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={{ base: "25px !Important", md: "35px !Important" }}
          fontWeight={"600"}
        >
          Increase in Leads and awareness of Snaidero Kitchens within the UAE
          Market.
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
    </>
  );
}

export default CaseStudyPage;
