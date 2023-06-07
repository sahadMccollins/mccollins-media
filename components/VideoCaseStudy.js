import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useRef } from "react";
import FadeUp from "./Motion/FadeUp";

const VideoCaseStudy = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);
  const video5Ref = useRef(null);

  function playVideo1() {
    video1Ref.current.src =
      "/assets/cloudinaryBackup/Oakberry_Case_Study_Video_akplh6.mp4";
    video1Ref.current.play();
  }

  function playVideo2() {
    video2Ref.current.src =
      "/assets/cloudinaryBackup/Poco_Case_Study_yes5es.mp4";
    video2Ref.current.play();
  }

  function playVideo3() {
    video3Ref.current.src =
      "/assets/cloudinaryBackup/Snaidero_Case_Study_Video_1_dmggpo.mp4";
    video3Ref.current.play();
  }

  function playVideo4() {
    video4Ref.current.src =
      "/assets/cloudinaryBackup/Snaidero_Case_Study_Video_kcnfgj.mp4";
    video4Ref.current.play();
  }

  function playVideo5() {
    video5Ref.current.src = "/assets/cloudinaryBackup/cyro.mp4";
    video5Ref.current.play();
  }
  return (
    <>
      <FadeUp>
        <Heading textAlign={"center"} className="main-h2" mt={10} mb="10">
          Case Study
        </Heading>
      </FadeUp>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap="wrap"
        placeContent={"center"}
      >
        <Box
          mb={"10"}
          width={{ base: "100%", md: "50%" }}
          padding={"5px 10px"}
          cursor="pointer"
        >
          <FadeUp>
            <video
              poster="/assets/image/videoCase/OakberryCaseStudySS.jpg"
              playsInline=""
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
        <Box
          mb={"10"}
          width={{ base: "100%", md: "50%" }}
          padding={"5px 10px"}
          cursor="pointer"
        >
          <FadeUp>
            <video
              poster="/assets/image/videoCase/pocco.jpg"
              playsInline=""
              muted="muted"
              loop="loop"
              loading="lazy"
              controls
              className="video2"
              onClick={playVideo2}
              ref={video2Ref}
            ></video>
          </FadeUp>
        </Box>
        <Box
          mb="10"
          width={{ base: "100%", md: "50%" }}
          padding={"5px 10px"}
          cursor="pointer"
        >
          <FadeUp>
            <video
              poster="/assets/image/videoCase/cleaning-superstore.jpg"
              playsInline=""
              muted="muted"
              loop="loop"
              loading="lazy"
              controls
              className="video3"
              onClick={playVideo3}
              ref={video3Ref}
            ></video>
          </FadeUp>
        </Box>
        <Box
          mb={"10"}
          width={{ base: "100%", md: "50%" }}
          padding={"5px 10px"}
          cursor="pointer"
        >
          <FadeUp>
            <video
              poster="/assets/image/videoCase/sn.png"
              playsInline=""
              muted="muted"
              loop="loop"
              loading="lazy"
              controls
              className="video4"
              onClick={playVideo4}
              ref={video4Ref}
            ></video>
          </FadeUp>
        </Box>
        <Box
          mb={"10"}
          width={{ base: "100%", md: "50%" }}
          padding={"5px 10px"}
          cursor="pointer"
        >
          <FadeUp>
            <video
              poster="/assets/image/videoCase/cyro.png"
              playsInline=""
              muted="muted"
              loop="loop"
              loading="lazy"
              controls
              className="video4"
              onClick={playVideo5}
              ref={video5Ref}
            ></video>
          </FadeUp>
        </Box>
      </Flex>
    </>
  );
};

export default VideoCaseStudy;
