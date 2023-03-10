import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CaseStudyBanner = (props) => {
  return (
    <Stack>
      <Box
        bgImage={"/assets/image/caseStudy/items/bg-image-4.jpg"}
        width="100%"
        height={"475px"}
        mt={"-85px"}
        style={{ backgroundPositionX: "center", backgroundPositionY: "bottom" }}
      >
        <Flex
          textAlign={"center"}
          flexDir={"column"}
          justifyContent={"center"}
          height="100%"
        >
          <Heading
            // background={"linear-gradient(145deg,#f81f01,#ee076e)"}
            color={"#FFDE11"}
            className="main-h1"
          >
            {props.h2}
          </Heading>
          <Text
            className="main-h5"
            color={"#fff"}
            style={{ fontWeight: "400 !important" }}
            mt={5}
          >
            {props.p}
          </Text>
        </Flex>
      </Box>
    </Stack>
  );
};

export default CaseStudyBanner;
