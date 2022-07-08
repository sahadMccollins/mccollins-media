import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import InnerLayout from "./Layout/InnerLayout";

const VideoBanner = (props) => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 100);
  }, []);
  return (
    <Stack mt={"-84px"} position="relative">
      <Box
        position={"absolute"}
        width={"100%"}
        height="100vh"
        minHeight={"700px"}
        overflow={"hidden"}
      >
        <video muted loop width="100%" className="video-banner" ref={videoRef}>
          <source src={props.video} type="video/mp4" />
        </video>
      </Box>
      <Container maxWidth={"7xl"} zIndex="9" style={{ margin: "auto" }}>
        <Flex
          height={{ base: "500px", md: "100vh" }}
          minHeight={{ base: "unset", md: "700px" }}
          alignItems="end"
          placeItems={"flex-end"}
          pb={"5%"}
        >
          <Box width={"100%"}>
            <Heading fontSize={"50px"} color="#FFDE11">
              our services
            </Heading>
            <Heading
              fontSize={{ base: "55px", md: "80px" }}
              color="#fff"
              fontWeight="black"
            >
              {props.heading.split("\n").map((str) => (
                <div key={str}>{str}</div>
              ))}
            </Heading>
            <Button
              colorScheme="yellow"
              background={"#FFDE11"}
              borderRadius="20px"
              color="#000"
              mt={"5"}
            >
              <Image
                src="/assets/image/icons/call.svg"
                width="25px"
                height="25px"
                priority={true}
              />
              &nbsp;&nbsp;contact us
            </Button>
            <Text
              mt="10"
              fontSize={{ base: "18px", md: "18px" }}
              fontWeight="bold"
              color={"#fff"}
              pr="5"
              maxWidth={"700px"}
              display={{ base: "none", md: "block" }}
            >
              {props.content}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

VideoBanner.getLayout = function getLayout(VideoBanner) {
  return <InnerLayout color="yellow">{VideoBanner}</InnerLayout>;
};

export default VideoBanner;
