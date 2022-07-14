import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TextBox2 = () => {
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <Flex direction={{ base: "column", md: "row" }} my="50px">
          <Box width={{ md: "50%", base: "100%" }}>
            <Heading>LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING</Heading>
            <Box
              my={8}
              background="#FFDE11"
              width={"fit-content"}
              p={"0px 10% 0px 10px"}
              fontWeight="bold"
              fontSize={"1xl"}
            >
              <Text>creating content that tells a story</Text>
            </Box>
          </Box>
          <Box width={{ md: "50%", base: "100%" }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
              <br />
              <br /> Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default TextBox2;
