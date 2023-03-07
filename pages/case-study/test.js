import { Box, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import CaseStudyBanner from "../../components/caseStudyBanner";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "../../node_modules/react-modal-video/css/modal-video.min.css";

function Test() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <CaseStudyBanner />
      <Container maxW={"4xl"} py={{ base: "50px", md: "100px" }}>
        <Heading className="main-h2">Trydo</Heading>
        <Divider my={10} bg={"#e1e1e1"} />
        <Heading as={"h5"} className="main-h5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </Heading>
        <Text mt={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commod viverra maecenas accumsan
          lacus vel facilisis. ut labore et dolore magna aliqua.
        </Text>
      </Container>
      <Container maxW={"6xl"}>
        <Box
          width="100%"
          height={{ base: "250px", sm: "400px", md: "600px" }}
          position={"relative"}
          className="VCSBox"
          onClick={() => setOpen(true)}
        >
          <Image
            src="/assets/image/caseStudy/items/portfolio-big-03.jpg"
            layout="fill"
            objectFit="cover"
          />
          <a className="button is-play">
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
          </a>
        </Box>
        <Box
          width="100%"
          height={{ base: "250px", sm: "400px", md: "600px" }}
          position={"relative"}
          mt={10}
        >
          <Image
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
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Pj6P8kQvpZw"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Test;
