import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CaseStudy from "../../components/CaseStudy";
import CaseStudyBanner from "../../components/caseStudyBanner";
import FadeUp from "../../components/Motion/FadeUp";

function CaseStudyPage() {
  return (
    <>
      <CaseStudyBanner
        h2="Dubai Airport Freezone"
        p="Case Study"
        img="/assets/image/caseStudy/banner/banner7.jpg"
      />
      <Container maxW={"4xl"} mt={"50px"} pb={10}>
        {/* <Heading className="main-h2">Trydo</Heading> */}
        {/* <Divider my={10} bg={"#e1e1e1"} /> */}

        <Text>
          Dubai Airport Freezone, also known as DAFZA, is a free economic zone
          located in the vicinity of the Dubai International Airport. The free
          zone was established in 1996, and it provides a business-friendly
          environment for companies to set up and operate their businesses.
          <br />
          <br />
          DAFZA offers various benefits to companies, such as 100% foreign
          ownership, 100% repatriation of capital and profits, no currency
          restrictions, and exemption from corporate taxes and customs duties.
          The free zone also provides companies with access to world-class
          infrastructure and support services, including offices, warehouses,
          and logistics services.
        </Text>
        <Box>
          <Heading
            as={"h2"}
            className="main-h2"
            textAlign={"center"}
            borderBottom={"20px solid #FFE962"}
            maxWidth="fit-content"
            padding={"0 20px 20px 20px"}
            margin={"auto"}
            mt={10}
            mb={10}
          >
            The Brief
          </Heading>
          <Text mt={5} textAlign="center">
            To create a digital ecosystem for DAFZA and move from Manual
            paperwork to a more digitized process for over 350 Services within
            the DAFZA Portal.
            <br />
            To create a Website and Mobile Application across all platforms on
            Apple, Android, Windows, Blackberry
          </Text>
        </Box>
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
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1678696919/Mccollins%20Video/Dubai_Airport_Free_Zone_Authority_-_launch_its_First_Mobile_App_uqzqcv.mp4"
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
            mt={{ base: 0, md: 20 }}
            mb={10}
          >
            The Route
          </Heading>

          <Box>
            <Text mt={5} textAlign="center">
              We worked on creating a flow of requirements by DAFZA. We
              developed the entire User Journey, Site Map, UI/UX Development of
              the Website and Mobile Applications.
              <br />
              Our in-house developers were seeded in the DAFZA premises to
              ensure quality control is top priority and being a government
              entity we needed the execution to be top of class.
              <br />
              Post development, we tested the products before launch.
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
          Digitalization of the brand - DAFZA. Automated process for DAFZA
          Stakeholders.
        </Text>
        {/* <Box mt={5}>
          <img
            src="/assets/image/caseStudy/feed (4).jpg"
            alt="mccollins media"
            width={"100%"}
            objectFit="cover"
            objectPosition="center"
          />
        </Box> */}

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
