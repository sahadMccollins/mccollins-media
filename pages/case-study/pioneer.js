import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CaseStudy from "../../components/CaseStudy";
import CaseStudyBanner from "../../components/caseStudyBanner";

function CaseStudyPage() {
  return (
    <>
      <CaseStudyBanner
        h2="Pioneer"
        p="Case Study"
        img="/assets/image/caseStudy/banner/banner3.jpg"
      />
      <Container maxW={"4xl"} mt={"50px"} pb={10}>
        {/* <Heading className="main-h2">Trydo</Heading> */}
        {/* <Divider my={10} bg={"#e1e1e1"} /> */}

        <Text>
          Pioneer Corporation is a Japanese multinational corporation that
          specializes in the production of electronics, including audio
          equipment, car electronics, and home appliances. The company was
          founded in 1938 and is headquartered in Tokyo, Japan.
          <br />
          <br />
          Pioneer is best known for its audio equipment, including speakers,
          headphones, and amplifiers. The company's audio products are renowned
          for their high-quality sound and innovative features, such as
          Bluetooth connectivity and voice control. Pioneer also produces car
          audio systems, including speakers, receivers, and amplifiers.
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
            To create a website , launch it, maintain it and build the digital
            ecosystem for the brand
          </Text>
        </Box>
      </Container>
      <Container maxW={"6xl"}>
        {/* <Box
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
        </Box> */}

        <Box>
          <img
            src="/assets/image/caseStudy/feed (5).jpg"
            alt="mccollins media"
            width={"100%"}
            objectFit="cover"
            objectPosition="center"
          />
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
            mb={10}
          >
            The Route
          </Heading>

          <Box>
            <Text mt={5}>
              We developed a website for Pioneer which can be easily used by the
              distributors to learn about the products and engage with the
              content. Post launch of the website, we have been working on
              Search Engine Optimization. On page, off page and local SEO being
              the focus, we choose different markets from the vast regions
              Pioneer covers, to increase organic traffic within each market.
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
          Building a solid foundation for the brand on the digital ecosystem -
          growing organically.
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
