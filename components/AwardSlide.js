import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const AwardSlide = () => {
  return (
    <Flex direction={{ base: "column-reverse", md: "row" }}>
      <Box
        width={{ base: "100%", md: "50%" }}
        p="50px 100px 50px 100px"
        height={"fit-content"}
        alignSelf="end"
        bg={"#F7F7F7"}
      >
        <Heading fontSize={"18px"} mb="20px">
          The Marketing Award Best Social Media Campaign
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      <Box
        width={{ base: "100%", md: "50%" }}
        position="relative"
        pt={"22px"}
        textAlign={{ base: "center", md: "left" }}
      >
        <Box
          position={"absolute"}
          bg="#FFDE11"
          width="316px"
          height="398px"
          top="0"
          left="22px"
        ></Box>
        <Image
          src="/assets/image/awards/awards1.jpg"
          width="316px"
          height="376px"
        />
      </Box>
    </Flex>
  );
};

export default AwardSlide;
