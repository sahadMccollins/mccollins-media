import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CaseStudyBanner = () => {
  return (
    <Stack>
      <Box
        bgImage={"/assets/image/caseStudy/items/bg-image-4.jpg"}
        width="100%"
        height={"500px"}
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
            background={"linear-gradient(145deg,#f81f01,#ee076e)"}
            style={{
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="main-h1"
          >
            Getting tickets to the big show
          </Heading>
          <Text
            className="main-h5"
            color={"#fff"}
            style={{ fontWeight: "400 !important" }}
            mt={5}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </Text>
        </Flex>
      </Box>
    </Stack>
  );
};

export default CaseStudyBanner;
