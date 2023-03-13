import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CaseStudy from "../../components/CaseStudy";
import CaseStudyBanner from "../../components/caseStudyBanner";
import FadeUp from "../../components/Motion/FadeUp";

function CaseStudyPage() {
  return (
    <>
      <CaseStudyBanner
        h2="OAKBERRY"
        p="Case Study"
        img="/assets/image/caseStudy/banner/banner3.jpg"
      />
      <Container maxW={"4xl"} mt={"50px"} pb={10}>
        {/* <Heading className="main-h2">Trydo</Heading> */}
        {/* <Divider my={10} bg={"#e1e1e1"} /> */}

        <Text>
          OAKBERRY is a global brand known for its Acai - from the Amazon. We
          have had the utmost pleasure working with OAKBERRY from Day 1 - when
          it entered the market in the Middle East, that too right before the
          pandemic.
          <br />
          <br />
          With the start of the pandemic, the brand saw its fair share of
          challenges, however, the product itself got a lot of love! The brands
          vibrant personality was well received on social media and soon we are
          close to 90 locations within the Middle East. OAKBERRY launched its
          key locations in United Arab Emirates, Saudi Arabia, Kuwait etc over a
          span of 4 years.
        </Text>
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
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1677846880/Mccollins%20Video/Oakberry_Case_Study_Video_akplh6.mp4"
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
            mt={20}
            mb={10}
          >
            The Brief
          </Heading>
          <Text mt={5} textAlign="center">
            To launch OAKBERRY in the Middle East Market. To create awareness
            and drive footfall to the stores.
            <br />
            The brand was also pushed through third party delivery channels like
            Talabat, Deliveroo and more.
          </Text>
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
            mt={20}
            mb={10}
          >
            The Route
          </Heading>

          <Box>
            <Heading
              as={"h4"}
              className="main-h4"
              borderLeft={"20px solid #FFE962"}
              pl={{ base: 5, md: 10 }}
            >
              Social Media
            </Heading>
            <Text mt={5} ml={{ base: 0, md: 14 }}>
              We created a vibrant feed , just like the brand's personality.
              Engaging with influencers, creating fun reel and TikTok content -
              bite size video content which is mobile first. While we were
              growing at the peak of the pandemic, the team at OAKBERRY was very
              innovative in launching the Acai Bucket, Nut Butters and Acai
              popsicles. With great health benefits, we focused on pushing our
              content to the health conscious lifestyle of people.
              <br />
              <br />
              Performance Marketing was a focus - META, TikTok, Snapchat Ads to
              push awareness and conversion. We developed a website for the
              OAKBERRY with the capability to order online. Search Engine
              Optimization, Google Ads were optimized.
              <br />
              <br />
              Blogger Meet Ups were arranged from time to time with the launch
              of a new location.
            </Text>
          </Box>
        </Box>
        <Box mt={5}>
          <img
            src="/assets/image/caseStudy/feed (3).jpg"
            alt="mccollins media"
            width={"100%"}
            objectFit="cover"
            objectPosition="center"
          />
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
          Increase in brand recall and loyalty. Over 90 Locations within the
          Middle East over a span of 4 years.
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
