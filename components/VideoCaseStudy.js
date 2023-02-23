import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "../node_modules/react-modal-video/css/modal-video.min.css";

const VideoCaseStudy = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoID, setvideoID] = useState("");

  const handleClick = (videoUrl) => {
    setvideoID(videoUrl);
    setOpen(true);
  };

  return (
    <Flex flexDirection={{ base: "column", md: "row" }} mt="50px">
      <Box width={"100%"} paddingRight={{ base: "0", md: "20px" }}>
        <Box>
          <Heading as={"h4"}>VIDEO CASE STUDY</Heading>
          <Text maxWidth={"500px"} mt="3" fontSize={"20px"}>
            We’re constantly refining our product. Adding new features. Working
            to help your section business grow.
          </Text>
          <Button
            colorScheme="yellow"
            background={"#FFDE11"}
            borderRadius={"50px"}
            fontSize={"18px"}
            mt="5"
          >
            Learn More
          </Button>
        </Box>
        <Box>
          <Box
            className="VCSBox"
            mt="10"
            onClick={() => handleClick("bOvDzPdWNEI")}
          >
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
            OAK BERRY
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
    </Flex>
  );
};

export default VideoCaseStudy;
