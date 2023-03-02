import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";

const DigialMediaBuying = () => {
  return (
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="Digial Media Buying" />
      <Box>
        <Container maxWidth={"7xl"} py={"50px"}>
          <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              paddingRight={{ base: "0", md: "50px" }}
              alignSelf="center"
              textAlign={"justify"}
              className="main-p"
            >
              <Heading as={"h5"} className="main-h5">
                Drive Traffic And Conversion With The Right Digital Media Buying
                Strategy
              </Heading>
              <Text mt={5} className="main-p">
                Get the most out of your digital media budget with our
                performance marketing services. Improve your conversions and
                reach with effective ads that target your audience.Increase
                engagement and impress your customers with high-quality video
                content. Maximize your ROI with our comprehensive key
                performance indicators.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/Magneto2.jpg"}
                width="500px"
                height={"400px"}
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Stack>
  );
};

DigialMediaBuying.getLayout = function getLayout(DigialMediaBuying) {
  return <InnerLayout>{DigialMediaBuying}</InnerLayout>;
};

export default DigialMediaBuying;
