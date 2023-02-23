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
      <Box width={"100%"} paddingRight="20px">
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
          </Box>
          <Heading as={"h4"} fontSize="2xl" mt={"2"} fontWeight="500">
            Cleaning Superstore
          </Heading>
          <Text fontSize={"15px"}>Development, Web Design</Text>
        </Box>
      </Box>
      <Box width={"100%"} paddingLeft="20px">
        <Box>
          <Box className="VCSBox" onClick={() => handleClick("qRtiBjuBbDk")}>
            <Image
              src={"/assets/image/caseStudy/CS-SQ2.jpg"}
              layout="fill"
              objectFit="cover"
            />
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
