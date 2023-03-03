import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";

const VideoCaseStudy = () => {
  const [isSmallerThan780] = useMediaQuery("(max-width: 780px)");
  return (
    <>
      <Heading textAlign={"center"} className="main-h2" mt={10} mb="10">
        Case Study
      </Heading>
      {/* <Flex flexDirection={{ base: "column", md: "row" }} my="50px">
        <Box width={"100%"} paddingRight={{ base: "0", md: "20px" }}>
          <Box>
            <Box className="VCSBox" onClick={() => handleClick("bOvDzPdWNEI")}>
              <Image
                src={"/assets/image/caseStudy/CS-SQ1.jpg"}
                layout="fill"
                objectFit="cover"
              />
              <div className="button is-play">
                <div className="button-outer-circle has-scale-animation"></div>
                <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                <div className="button-icon is-play">
                  <svg height="100%" width="100%" fill="#f857a6">
                    <polygon
                      className="triangle"
                      points="5,0 30,15 5,30"
                      viewBox="0 0 30 15"
                    ></polygon>
                    Ī
                    <path
                      className="path"
                      d="M5,0 L30,15 L5,30z"
                      fill="none"
                      stroke="#f857a6"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
              </div>
            </Box>
            <Heading as={"h4"} fontSize="2xl" mt={"2"} fontWeight="500">
              OAKBERRY
            </Heading>
            <Text fontSize={"15px"}>Digital Marketing, Branding</Text>
          </Box>
          <Box>
            <Box
              className="VCSBox"
              mt="10"
              onClick={() => handleClick("Mmu2Nx3m9Zk")}
            >
              <Image
                src={"/assets/image/caseStudy/CS-SQ3.jpg"}
                layout="fill"
                objectFit="cover"
              />
              <div className="button is-play">
                <div className="button-outer-circle has-scale-animation"></div>
                <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                <div className="button-icon is-play">
                  <svg height="100%" width="100%" fill="#f857a6">
                    <polygon
                      className="triangle"
                      points="5,0 30,15 5,30"
                      viewBox="0 0 30 15"
                    ></polygon>
                    <path
                      className="path"
                      d="M5,0 L30,15 L5,30z"
                      fill="none"
                      stroke="#f857a6"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
              </div>
            </Box>
            <Heading as={"h4"} fontSize="2xl" mt={"2"} fontWeight="500">
              Cleaning Superstore
            </Heading>
            <Text fontSize={"15px"}>Development, Web Design</Text>
          </Box>
        </Box>
        <Box
          width={"100%"}
          paddingLeft={{ base: "0", md: "20px" }}
          mt={{ base: 10, md: 0 }}
        >
          <Box>
            <Box className="VCSBox" onClick={() => handleClick("qRtiBjuBbDk")}>
              <Image
                src={"/assets/image/caseStudy/CS-SQ2.jpg"}
                layout="fill"
                objectFit="cover"
              />
              <div className="button is-play">
                <div className="button-outer-circle has-scale-animation"></div>
                <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                <div className="button-icon is-play">
                  <svg height="100%" width="100%" fill="#f857a6">
                    <polygon
                      className="triangle"
                      points="5,0 30,15 5,30"
                      viewBox="0 0 30 15"
                    ></polygon>
                    <path
                      className="path"
                      d="M5,0 L30,15 L5,30z"
                      fill="none"
                      stroke="#f857a6"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
              </div>
            </Box>
            <Heading as={"h4"} fontSize="2xl" mt={"2"} fontWeight="500">
              Poco
            </Heading>
            <Text fontSize={"15px"}>Digital Marketing, Branding</Text>
          </Box>
          <Box mt={10}>
            <Box className="VCSBox" onClick={() => handleClick("kY2ICDFk-3E")}>
              <Image
                src={"/assets/image/caseStudy/CS-SQ4.jpg"}
                layout="fill"
                objectFit="cover"
              />
              <div className="button is-play">
                <div className="button-outer-circle has-scale-animation"></div>
                <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                <div className="button-icon is-play">
                  <svg height="100%" width="100%" fill="#f857a6">
                    <polygon
                      className="triangle"
                      points="5,0 30,15 5,30"
                      viewBox="0 0 30 15"
                    ></polygon>
                    <path
                      className="path"
                      d="M5,0 L30,15 L5,30z"
                      fill="none"
                      stroke="#f857a6"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
              </div>
            </Box>
            <Heading as={"h4"} fontSize="2xl" mt={"2"} fontWeight="500">
              Snaidero
            </Heading>
            <Text fontSize={"15px"}>Digital Marketing, Branding</Text>
          </Box>
        </Box>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoID}
          onClose={() => setOpen(false)}
        />
      </Flex> */}
      <Flex flexDirection={{ base: "column", md: "row" }} flexWrap="wrap">
        <Box mb={"10"} width={{ base: "100%", md: "50%" }} padding={"5px 10px"}>
          <video
            poster="/assets/image/videoCase/OakberryCaseStudySS.jpg"
            src="https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/Snaidero_Case_Study_Video_kcnfgj.mp4"
            playsinline=""
            muted="muted"
            loop="loop"
            controls
          ></video>
        </Box>

        <Box mb={"10"} width={{ base: "100%", md: "50%" }} padding={"5px 10px"}>
          <video
            poster="/assets/image/videoCase/pocco.jpg"
            src="https://res.cloudinary.com/mccollins-media/video/upload/v1677847650/Mccollins%20Video/Poco_Case_Study_yes5es.mp4"
            playsinline=""
            muted="muted"
            loop="loop"
            controls
          ></video>
        </Box>

        <Box mb="10" width={{ base: "100%", md: "50%" }} padding={"5px 10px"}>
          <video
            poster="/assets/image/videoCase/cleaning-superstore.jpg"
            src="https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/Snaidero_Case_Study_Video_2_ivf5yh.mp4"
            playsinline=""
            muted="muted"
            loop="loop"
            controls
          ></video>
        </Box>

        <Box mb={"10"} width={{ base: "100%", md: "50%" }} padding={"5px 10px"}>
          <video
            poster="/assets/image/videoCase/sn.jpg"
            src="https://res.cloudinary.com/mccollins-media/video/upload/v1677847856/Mccollins%20Video/Snaidero_Case_Study_Video_kcnfgj.mp4"
            playsinline=""
            muted="muted"
            loop="loop"
            controls
          ></video>
        </Box>
      </Flex>
    </>
  );
};

export default VideoCaseStudy;
