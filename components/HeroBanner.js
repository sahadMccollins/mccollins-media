import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <Box
      position="relative"
      className="hello"
      textAlign="center"
      maxHeight="100vh"
      overflow="hidden"
      marginTop="-20"
    >
      <Image
        src="/assets/image/banner/home-banner.png"
        layout="responsive"
        width="1440px"
        height="810px"
        style={{ position: "absolute" }}
      />
      <Box position="absolute" bottom="8px" left="16px">
        <Container>
          <Heading>digital brand activation agency</Heading>
          <Text>result driven agency with mobile first technology</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroBanner;
