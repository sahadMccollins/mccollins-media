import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CaseStudy from "../../components/CaseStudy";
import CaseStudyBanner from "../../components/caseStudyBanner";
import FadeUp from "../../components/Motion/FadeUp";

function CaseStudyPage() {
  return (
    <>
      <CaseStudyBanner
        h2="Toshiba "
        p="Case Study"
        img="/assets/image/caseStudy/banner/banner3.jpg"
      />
      <Container maxW={"4xl"} mt={"50px"} pb={10}>
        {/* <Heading className="main-h2">Trydo</Heading> */}
        {/* <Divider my={10} bg={"#e1e1e1"} /> */}

        <Text>
          Toshiba Corporation is a Japanese multinational conglomerate that
          specializes in the production of electronic and electrical products.
          The company was founded in 1939 and is headquartered in Tokyo, Japan.
          Toshiba produces a wide range of products, including laptops,
          desktops, tablets, printers, televisions, home appliances, and
          electronic components.
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
            Our Mandate was to focus on creating awareness and brand recall for
            the Toshiba Home Appliances vertical within the Middle East Market
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
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1678182417/Mccollins%20Video/Toshiba-Arabicversion-Youngman2_bvjmwq.mp4"
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
            <Text mt={5}>
              Toshiba is a brand with a strong recall. We focused on resonating
              with the target audience, working with brand partners to promote
              tactical offers and engage with our audience. From developing
              monthly content calendars to designing seasonal content for
              different GCC Markets, we also focused on Performance Marketing
              mainly META Ads.
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
          Increase in engagement and positive brand sentiment
        </Text>
        <Box mt={5}>
          <img
            src="/assets/image/caseStudy/feed (1).jpg"
            alt="mccollins media"
            width={"100%"}
            objectFit="cover"
            objectPosition="center"
          />
        </Box>

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
