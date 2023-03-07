import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { ST } from "next/dist/shared/lib/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import InnerLayout from "./Layout/InnerLayout";
import FadeUp from "./Motion/FadeUp";

const VideoBanner = (props) => {
  const [isSmallerThan780] = useMediaQuery("(max-width: 780px)");
  // const videoRef = useRef();
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef.current.play();
  //   }, 100);
  // }, []);
  return (
    <Stack
      mt={"-84px"}
      height={{ base: "500px", md: "100vh" }}
      minHeight={{ base: "500px", md: "700px" }}
      position="relative"
    >
      <Box
        position={"absolute"}
        width={"100%"}
        height="100vh"
        minHeight={"700px"}
        overflow={"hidden"}
      >
        {/* <video
          muted
          loop
          width="100%"
          className="video-banner"
          ref={videoRef}
          poster={isSmallerThan780 && props.poster}
        >
          <source src={props.video} type="video/mp4" />
        </video> */}

        <video
          playsInline
          autoPlay
          loop
          muted
          width="100%"
          className="video-banner"
          poster={
            isSmallerThan780 && "/assets/image/servicePage/serviceAccordian.jpg"
          }
        >
          <source src={props.video} type="video/mp4" />
        </video>
      </Box>
      <Stack position={"absolute"} width="100%">
        <Container maxWidth={"7xl"} zIndex="9" style={{ margin: "auto" }}>
          <Flex
            height={{ base: "500px", md: "100vh" }}
            minHeight={{ base: "unset", md: "700px" }}
            alignItems="end"
            placeItems={"flex-end"}
            pb={"5%"}
          >
            <Box width={"100%"}>
              <FadeUp>
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
                  onClick={() => router.push("/contact")}
                >
                  <Image
                    src="/assets/image/icons/call.svg"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;&nbsp;contact us
                </Button>
              </FadeUp>
              <FadeUp delay={"0.3"}>
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
              </FadeUp>
            </Box>
          </Flex>
        </Container>
      </Stack>
    </Stack>
  );
};

VideoBanner.getLayout = function getLayout(VideoBanner) {
  return <InnerLayout color="yellow">{VideoBanner}</InnerLayout>;
};

export default VideoBanner;
