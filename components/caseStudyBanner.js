import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const CaseStudyBanner = (props) => {
  return (
    <Stack>
      <Box
        bgImage={props.img}
        width="100%"
        height={"475px"}
        mt={"-85px"}
        style={{
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}
      >
        <Flex
          textAlign={"center"}
          flexDir={"column"}
          justifyContent={"center"}
          height="100%"
        >
          <Heading
            // background={"linear-gradient(145deg,#f81f01,#ee076e)"}
            color={props.h2color ? props.h2color : "#fff"}
            className="main-h1"
            textTransform={"uppercase"}
          >
            {props.h2}
          </Heading>
          <Text
            className="main-h5"
            color={"#fff"}
            bg="#ffde11"
            width={"fit-content"}
            marginRight="auto"
            marginLeft={"auto"}
            paddingRight="15px"
            paddingLeft="15px"
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
