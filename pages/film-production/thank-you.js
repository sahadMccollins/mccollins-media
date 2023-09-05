import React from "react";
import EmptyLayout from "../../components/Layout/EmptyLayout";
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
import VideoBanner from "../../components/VideoBanner";
import FadeUp from "../../components/Motion/FadeUp";
import Image from "next/image";
import InnerLayout from "../../components/Layout/InnerLayout";

const ThankYou = () => {
  const [isSmallerThan780] = useMediaQuery("(max-width: 780px)");
  return (
    <>
      <Stack
        position={"relative"}
        mt={"-84px"}
        height={{ base: "500px", md: "100vh" }}
        minHeight={{ base: "500px", md: "700px" }}
      >
        <Box
          position={"absolute"}
          width={"100%"}
          height="100vh"
          minHeight={"700px"}
          overflow={"hidden"}
        >
          <video
            playsInline
            autoPlay
            loop
            muted
            width="100%"
            className="video-banner"
            poster={
              isSmallerThan780
                ? "/assets/image/servicePage/contentProduction.jpg"
                : "none"
            }
          >
            <source
              src={"/assets/cloudinaryBackup/Content_Creation_m3dsap.mp4"}
              type="video/mp4"
            />
          </video>
        </Box>
        <Stack position={"absolute"} width="100%">
          <Container maxWidth={"7xl"} zIndex="9" style={{ margin: "auto" }}>
            <Flex
              height={{ base: "500px", md: "100vh" }}
              minHeight={{ base: "unset", md: "700px" }}
              placeItems={"flex-end"}
              pb={"5%"}
              alignItems={"center"}
            >
              <Box width={"100%"}>
                <FadeUp>
                  <Heading className="main-h2" color="#FFDE11">
                    Thank you for contacting us.
                  </Heading>
                  <Heading className="bnrBigHd" color="#fff" fontWeight="black">
                    We will get back to you soon.
                  </Heading>
                </FadeUp>
              </Box>
            </Flex>
          </Container>
        </Stack>
      </Stack>
    </>
  );
};

ThankYou.getLayout = function getLayout(ThankYou) {
  return <InnerLayout color="yellow">{ThankYou}</InnerLayout>;
};

export default ThankYou;
