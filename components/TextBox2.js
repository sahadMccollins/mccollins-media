import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import FadeUp from "./Motion/FadeUp";

const TextBox2 = (props) => {
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          my={props.noMy ? "0" : "50px"}
        >
          <Box width={{ md: "50%", base: "100%" }} alignSelf="center">
            <FadeUp>
              <Heading className="main-h3">
                {props.heading &&
                  props.heading
                    .split("\n")
                    .map((str) => <div key={str}>{str}</div>)}
              </Heading>
            </FadeUp>
            <FadeUp>
              <Box
                my={8}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"1xl"}
              >
                <Text>{props.subHeading}</Text>
              </Box>
            </FadeUp>
          </Box>
          <Box width={{ md: "50%", base: "100%" }}>
            <FadeUp>
              <Text>
                {props.content}
                <br />
                <br />
                {props.content2}
              </Text>
            </FadeUp>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default TextBox2;
