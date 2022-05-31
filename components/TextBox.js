import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const TextBox = (props) => {
  return (
    <Stack bg={props.bg ? props.bg : "#fff"}>
      <Container maxWidth={"7xl"} py="50" zIndex={2} position="relative">
        <Flex direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "30%" }} alignSelf="center">
            <Heading
              borderLeft="20px solid #FFE962"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight={"black"}
              pl="6"
            >
              {props.heading}
            </Heading>
          </Box>
          <Box width={{ base: "100%", md: "70%" }} alignSelf="center" pl={5}>
            <Heading
              fontSize={{ base: "1xl", md: "3xl" }}
              mb="2"
              mt={{ base: "5", md: "0" }}
            >
              {props.subHeading}
            </Heading>
            <Text>{props.content}</Text>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default TextBox;
