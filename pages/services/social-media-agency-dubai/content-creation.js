import {
  Box,
  Container,
  Flex,
  Heading,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import CaseStudy from "../../../components/CaseStudy";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";
import FadeUp from "../../../components/Motion/FadeUp";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "../../../node_modules/react-modal-video/css/modal-video.min.css";

const ContentCreation = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoURL, setvideoURL] = useState("");

  const videoHandler = (url) => {
    setvideoURL(url);
    setOpen(true);
  };

  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);

  function playVideo1() {
    if (!video1Ref.current.src) {
      video1Ref.current.src =
        "https://res.cloudinary.com/dhhtgppki/video/upload/v1672984054/mccollins-media/Armoured_Vehicles_-_Interior_-_Exterior_Video_cvqcvv.mp4";
      video1Ref.current.play();
    }
  }

  function playVideo2() {
    if (!video2Ref.current.src) {
      video2Ref.current.src =
        "https://res.cloudinary.com/mccollins-media/video/upload/v1678182417/Mccollins%20Video/Toshiba-Arabicversion-Youngman2_bvjmwq.mp4";
      video2Ref.current.play();
    }
  }

  function playVideo3() {
    if (!video3Ref.current.src) {
      video3Ref.current.src =
        "https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/Snaidero_Case_Study_Video_2_ivf5yh.mp4";
      video3Ref.current.play();
    }
  }

  function playVideo4() {
    if (!video4Ref.current.src) {
      video4Ref.current.src =
        "https://res.cloudinary.com/dhhtgppki/video/upload/v1672987704/mccollins-media/Mapei-LoadingVideo_thrg6q.mp4";
      video4Ref.current.play();
    }
  }

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
  return (
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="Content Creation" />
      <Box>
        <Container maxWidth={"4xl"} my={10}>
          <Heading as={"h5"} className="main-h5" textAlign={"center"} mb={5}>
            Are you looking for a one-stop shop for all your{}
            <Box display={{ base: "none", md: "block" }} height="0">
              <br />
            </Box>
            content creation needs? Let’s talk shop.
          </Heading>
          <Text mt={{ base: 5, md: 0 }} className="main-p" textAlign="center">
            As a content marketing agency in Dubai, we provide a wide range of
            services including photoshoots, video shoots, and copywriting. Our
            team of experts is equipped to help you create content that is both
            engaging and mobile-first. With our extensive portfolio of work, we
            know just what it takes to get your content seen by the masses. We
            work on the brand strategy, aiming to be the best content marketing
            service provider in the UAE and other GCC Markets like Saudi Arabia,
            Kuwait, Qatar, Bahrain, Oman and more. The content creation process
            in Dubai is competitive and we need to ensure our brands are ahead
            of the curve.
          </Text>
        </Container>
        <Container maxWidth={"7xl"}>
          {/* <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: "0", md: "10" }}
              alignSelf="center"
              className="main-p"
            >
              <Heading as={"h5"} className="main-h5">
                Are you looking for a one-stop shop for all your content
                creation needs? Let’s talk shop.
              </Heading>
              <Text mt={5} className="main-p">
                As a content marketing agency in Dubai, we provide a wide range
                of services including photoshoots, video shoots, and
                copywriting. Our team of experts is equipped to help you create
                content that is both engaging and mobile-first. With our
                extensive portfolio of work, we know just what it takes to get
                your content seen by the masses. We work on the brand strategy,
                aiming to be the best content marketing service provider in the
                UAE and other GCC Markets like Saudi Arabia, Kuwait, Qatar,
                Bahrain, Oman and more. The content creation process in Dubai is
                competitive and we need to ensure our brands are ahead of the
                curve.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image alt="McCollins Media"
                src={"/assets/image/servicePage/contentProduction.jpg"}
                width="585px"
                height={"450px"}
                objectFit="cover"
              />
            </Box>
          </Flex> */}
          <Flex direction={{ base: "column", md: "row" }} my={10}>
            <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              alignSelf={"center"}
              mr={{ base: 0, md: 10 }}
            >
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/cp2.jpg"}
                width="585px"
                height={"600px"}
                objectFit="cover"
              />
            </Box>
            <Box width={{ base: "100%", md: "50%" }} alignSelf="center">
              <Heading as={"h5"} className="main-h5" mt={{ base: 5, md: 0 }}>
                Why work with us ?
              </Heading>
              <OrderedList my={"6"}>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Understand your audience and their needs to create content
                    that is relevant and engaging.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Develop a brand positioning that sets you apart from your
                    competition.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Analyze your competitor's content and develop a strategy to
                    beat them at their own game.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Use multimedia to capture viewer attention and keep them
                    engaged.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Utilize trending content to stay ahead of the curve and
                    attract new readers.
                  </Text>
                </li>
              </OrderedList>
              <Text className="main-p">
                Be it Arabic or English content , we align your brand to the
                market requirements. We engage with influencers and bloggers to
                create User Generated Content for your brand.
                <br />
                <br />
                Content differs for every platform - Be it META, Snapchat,
                TikTok, YouTube or any other platform, we create content as per
                the Brand Strategy.
                <br />
                <br />
                From Reels, Stories, TikTok Videos to Snapchat content - We work
                primarily on Mobile First Content.
              </Text>
            </Box>
          </Flex>
        </Container>
        <Container maxW={"6xl"}>
          <Box mb={"5"} width={"100%"} padding={"5px 10px"}>
            <FadeUp>
              <video
                poster="/assets/image/servicePage/contentProduction/thoshiba-vid.png"
                playsinline=""
                muted="muted"
                loop="loop"
                loading="lazy"
                controls
                className="video1"
                onClick={playVideo2}
                ref={video2Ref}
              ></video>
            </FadeUp>
          </Box>

          <Box mb={"5"} width={"100%"} padding={"5px 10px"}>
            <FadeUp>
              <video
                poster="/assets/image/servicePage/contentProduction/armoured-vid.png"
                playsinline=""
                muted="muted"
                loop="loop"
                loading="lazy"
                controls
                className="video1"
                onClick={playVideo1}
                ref={video1Ref}
              ></video>
            </FadeUp>
          </Box>

          <Box mb={"5"} width={"100%"} padding={"5px 10px"}>
            <FadeUp>
              <video
                poster="/assets/image/servicePage/contentProduction/cyro-vid.png"
                playsinline=""
                muted="muted"
                loop="loop"
                loading="lazy"
                controls
                className="video1"
                onClick={playVideo3}
                ref={video3Ref}
              ></video>
            </FadeUp>
          </Box>

          <Box mb={"5"} width={"100%"} padding={"5px 10px"}>
            <FadeUp>
              <video
                poster="/assets/image/servicePage/contentProduction/mapei-vid.png"
                playsinline=""
                muted="muted"
                loop="loop"
                loading="lazy"
                controls
                className="video1"
                onClick={playVideo4}
                ref={video4Ref}
              ></video>
            </FadeUp>
          </Box>
        </Container>
      </Box>
      {/* <CaseStudy data={favWorkData} /> */}
      <ModalVideo
        channel="custom"
        url={videoURL}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </Stack>
  );
};

ContentCreation.getLayout = function getLayout(ContentCreation) {
  return <InnerLayout>{ContentCreation}</InnerLayout>;
};

export default ContentCreation;
