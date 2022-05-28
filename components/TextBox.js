import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const TextBox = () => {
  return (
    <>
      <Container maxWidth={"7xl"} py="50" zIndex={2} position="relative">
        <Flex direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "30%" }} alignSelf="center">
            <Heading
              borderLeft="20px solid #FFE962"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight={"black"}
              pl="6"
            >
              Our Core Services
            </Heading>
          </Box>
          <Box width={{ base: "100%", md: "80%" }} alignSelf="center">
            <Heading
              fontSize={{ base: "1xl", md: "3xl" }}
              mb="2"
              mt={{ base: "5", md: "0" }}
            >
              what we are passionate about
            </Heading>
            <Text>
              13 Years in the making, pioneers to UAE’s digital scene, we are
              McCollins Media ! We enjoy working with earned media, where we get
              others to talk about your brand.
            </Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default TextBox;
