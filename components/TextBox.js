import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import FadeUp from "./Motion/FadeUp";

const TextBox = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Stack bg={props.bg ? props.bg : "#fff"}>
      <Container maxWidth={"7xl"} py="50" zIndex={2} position="relative">
        <Flex direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "30%" }} alignSelf="center">
            <FadeUp>
              <Heading
                borderLeft="20px solid #FFE962"
                fontSize={{ base: "3xl", md: props.h2Fs ? props.h2Fs : "5xl" }}
                fontWeight={"black"}
                pl="6"
              >
                {props.heading.split("\n").map((str) => (
                  <div key={str}>{str}</div>
                ))}
              </Heading>
              <Heading
                borderLeft="20px solid #FFE962"
                fontSize={{ base: "18px", md: "18px" }}
                fontWeight={"black"}
                pl="6"
                mr={{ base: "0", md: "50%" }}
                pt="10px"
                color={"#6F6F6F"}
              >
                {props.smallHeading}
              </Heading>
            </FadeUp>
          </Box>
          <Box
            width={{ base: "100%", md: "70%" }}
            alignSelf="center"
            pl={{ base: "0", md: "5" }}
          >
            <FadeUp>
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                mb="2"
                mt={{ base: "5", md: "0" }}
              >
                {props.subHeading}
              </Heading>
              <Heading
                fontSize={{ base: "1xl", md: "2xl" }}
                mb="2"
                mt={{ base: "5", md: "0" }}
              >
                {props.subHeadingOnly &&
                  props.subHeadingOnly
                    .split("\n")
                    .map((str) => <div key={str}>{str}</div>)}
              </Heading>
              <Text>{props.content}</Text>
            </FadeUp>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default TextBox;
