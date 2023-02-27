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
      <Box mb={"10"}>
        <iframe
          width="100%"
          height={isSmallerThan780 ? "300px" : "450px"}
          src="https://www.youtube-nocookie.com/embed/1gMPCjq9osI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>

      <Box mb={"10"}>
        <iframe
          width="100%"
          height={isSmallerThan780 ? "300px" : "450px"}
          src="https://www.youtube-nocookie.com/embed/BfAQbo1u34c"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>

      <Box mb="10">
        <iframe
          width="100%"
          height={isSmallerThan780 ? "300px" : "450px"}
          src="https://www.youtube.com/embed/xlwLRqFnDks"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
    </>
  );
};

export default VideoCaseStudy;
