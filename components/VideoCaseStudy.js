import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useRef } from "react";
import FadeUp from "./Motion/FadeUp";

const VideoCaseStudy = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);

  function playVideo1() {
    video1Ref.current.src =
      "https://res.cloudinary.com/mccollins-media/video/upload/v1677846880/Mccollins%20Video/Oakberry_Case_Study_Video_akplh6.mp4";
    video1Ref.current.play();
  }

  function playVideo2() {
    video2Ref.current.src =
      "https://res.cloudinary.com/mccollins-media/video/upload/v1677847650/Mccollins%20Video/Poco_Case_Study_yes5es.mp4";
    video2Ref.current.play();
  }

  function playVideo3() {
    video3Ref.current.src =
      "https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/Snaidero_Case_Study_Video_2_ivf5yh.mp4";
    video3Ref.current.play();
  }

  function playVideo4() {
    video4Ref.current.src =
      "https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/Snaidero_Case_Study_Video_kcnfgj.mp4";
    video4Ref.current.play();
  }
  return (
    <>
      <FadeUp>
        <Heading textAlign={"center"} className="main-h2" mt={10} mb="10">
          Case Study
        </Heading>
      </FadeUp>
      <Flex flexDirection={{ base: "column", md: "row" }} flexWrap="wrap">
        <Box mb={"10"} width={{ base: "100%", md: "50%" }} padding={"5px 10px"}>
          <FadeUp>
            <video
              poster="/assets/image/videoCase/OakberryCaseStudySS.jpg"
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
        <Box mb={"10"} width={{ base: "100%", md: "50%" }} padding={"5px 10px"}>
          <FadeUp>
            <video
              poster="/assets/image/videoCase/pocco.jpg"
              playsinline=""
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
        <Box mb="10" width={{ base: "100%", md: "50%" }} padding={"5px 10px"}>
          <FadeUp>
            <video
              poster="/assets/image/videoCase/cleaning-superstore.jpg"
              playsinline=""
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
        <Box mb={"10"} width={{ base: "100%", md: "50%" }} padding={"5px 10px"}>
          <FadeUp>
            <video
              poster="/assets/image/videoCase/sn.jpg"
              playsinline=""
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
      </Flex>
    </>
  );
};

export default VideoCaseStudy;
