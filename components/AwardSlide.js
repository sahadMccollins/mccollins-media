import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import FadeUp from "./Motion/FadeUp";

const AwardSlide = (props) => {
  return (
    <FadeUp>
      <Flex direction={{ base: "column-reverse", md: "row" }}>
        <Box
          width={{ base: "100%", md: "50%" }}
          p={{ base: "50px 20px 50px 20px", md: "50px 100px 50px 100px" }}
          height={"fit-content"}
          alignSelf="end"
          bg={"#F7F7F7"}
        >
          <Heading fontSize={"20px"} mb="20px">
            {props.h1}
          </Heading>
          <Text>{props.p}</Text>
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
          position="relative"
          pt={"22px"}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "0", md: "37px" }}
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
            alt="McCollins Media"
            src={props.img}
            width="316px"
            height="376px"
          />
          <Box
            display={{ base: "none", md: "block" }}
            position={"absolute"}
            bg="#F7F7F7"
            width="316px"
            bottom={-10}
            left="-10px"
            height="45px"
          ></Box>
        </Box>
      </Flex>
    </FadeUp>
  );
};

export default AwardSlide;
