import { Box, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useRef, useState } from "react";
import CaseStudyBanner from "../../components/caseStudyBanner";
import FadeUp from "../../components/Motion/FadeUp";
import TextBox from "../../components/TextBox";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "../../node_modules/react-modal-video/css/modal-video.min.css";

function CaseStudy() {
  const [isOpen, setOpen] = useState(false);
  const video1Ref = useRef(null);

  function playVideo1() {
    video1Ref.current.src =
      "https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/cyro.mp4";
    video1Ref.current.play();
  }
  return (
    <>
      <CaseStudyBanner h2="cyro" p="Case Study" />
      <Container maxW={"4xl"} mt={"50px"} pb={10}>
        {/* <Heading className="main-h2">Trydo</Heading> */}
        {/* <Divider my={10} bg={"#e1e1e1"} /> */}

        <Text>
          Cryotherapy is much loved by the wellness community in today's time.
          We were given a mandate to increase awareness about CRYO and its
          locations in the UAE. With a 360 Digital Approach, we worked along
          with our client to create several campaigns ongoing each year. From
          organic content, content creation to performance marketing and blogger
          collaborations, have a read on how we worked with CRYO on their
          digital mandate.
        </Text>

        <Heading as={"h5"} className="main-h5" mt={10}>
          The Objective : To increase brand awareness of Cryotherapy and
          increase bookings and footfall to all CRYO locations across UAE
        </Heading>
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
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/cyro.mp4"
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
              Social Media Campaign to activate and engage the audience with
              campaigns like Every Body is a CRYO Body. The campaign is
              inclusive to all body types and welcomes people of different ages
              and pace of life to enjoy the benefits of Cryotherapy. Being
              active on Instagram, Facebook, TikTok we generated awareness about
              CRYO services, promoted content to the target audience and set a
              sales funnel to generate leads.
              <br />
              <br />
              With a heavy influencer marketing strategy, we focused on creating
              user generated content for CRYO - to show everybody is a CRYO
              body.
            </Text>
          </Box>
          <Box mt={10}>
            <Heading
              as={"h4"}
              className="main-h4"
              borderLeft={"20px solid #FFE962"}
              pl={{ base: 5, md: 10 }}
            >
              Performance Marketing
            </Heading>
            <Text mt={5} ml={{ base: 0, md: 14 }}>
              Run Social Media Ad Campaigns via META Ads, TikTok Ads and
              Snapchat Ads to engage with the target audience. Conversion Ad
              Campaigns and Brand Awareness Campaigns were key.
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
        <Text
          textAlign={"center"}
          fontSize={{ base: "25px !Important", md: "35px !Important" }}
          fontWeight={"600"}
        >
          Increase in bookings of sessions and footfall
        </Text>

        <Flex
          gap={10}
          justifyContent="space-around"
          my={10}
          flexDir={{ base: "column", md: "row" }}
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
                marginTop: "-10px",
                height: "550px",
                marginBottom: "-10px",
              }}
            >
              <source
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1678449645/Mccollins%20Video/Many_faces_of_Cryo_Body_zzgtod.mp4"
                type="video/mp4"
                media="screen"
              />
              Your browser does not support HTML5 video.
            </video>
          </FadeUp>
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
                height: "550px",
                marginTop: "-10px",
                marginBottom: "-10px",
              }}
            >
              <source
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1678447494/Mccollins%20Video/1.mp4"
                type="video/mp4"
                media="screen"
              />
              Your browser does not support HTML5 video.
            </video>
          </FadeUp>
          <FadeUp>
            <video
              title="Film Production Company Dubai"
              autoPlay
              loop
              controls
              muted
              playsInline
              preload="auto"
              alt="McCollins Media Production"
              style={{
                height: "550px",
                marginTop: "-10px",
                marginBottom: "-10px",
              }}
            >
              <source
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1678449702/Mccollins%20Video/Everybody_Scream_p8mq88.mp4"
                type="video/mp4"
                media="screen"
              />
              Your browser does not support HTML5 video.
            </video>
          </FadeUp>
        </Flex>

        <Box
          width="100%"
          height={{ base: "250px", sm: "400px", md: "600px" }}
          position={"relative"}
          mt={10}
        >
          <Image
            alt="McCollins Media"
            src="/assets/image/caseStudy/items/portfolio-big-02.jpg"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box
          width="100%"
          height={{ base: "250px", sm: "400px", md: "600px" }}
          position={"relative"}
          mt={10}
        >
          <Image
            alt="McCollins Media"
            src="/assets/image/caseStudy/items/portfolio-big-01.jpg"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box mt={{ base: 10, md: 20 }} mb="10" textAlign="center">
          <Heading color={"#FFDE11"} fontSize="25px" as={"h5"}>
            Related Work
          </Heading>
          <Heading as={"h3"} className="main-h2">
            Our More Projects
          </Heading>
          <Flex
            mt={{ base: 5, md: 10 }}
            flexDir={{ base: "column", md: "row" }}
            gap="10"
          >
            <Box width="100%">
              <Box
                width="100%"
                height={{ base: "250px", sm: "300px", md: "400px" }}
                position={"relative"}
                mt={{ base: 2, md: 10 }}
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/caseStudy/items/related-image-01.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>

              <Heading className="main-h5" mt={5}>
                Digital Analysis
              </Heading>
            </Box>
            <Box width="100%">
              <Box
                width="100%"
                height={{ base: "250px", sm: "300px", md: "400px" }}
                position={"relative"}
                mt={{ base: 2, md: 10 }}
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/caseStudy/items/related-image-02.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Heading className="main-h5" mt={5}>
                Plan Management
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Container>
      <ModalVideo
        channel="custom"
        url="https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/cyro.mp4"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default CaseStudy;
