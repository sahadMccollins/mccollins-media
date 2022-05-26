import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <Box
      position="relative"
      className="hello"
      maxHeight="100vh"
      overflow="hidden"
      marginTop="-110px"
    >
      <Image
        src="/assets/image/banner/home-banner.jpg"
        layout="responsive"
        width="1440px"
        height="810px"
        style={{ position: "absolute" }}
        alt="Mccollins media"
      />
      <Box position="absolute" bottom="8%" left="6%">
        <Heading fontSize="60px" color="#fff">
          digital brand
          <br /> activation agency
        </Heading>
        <Text fontSize="30px" color="#fff">
          result driven agency with mobile
          <br /> first technology
        </Text>
        <ButtonGroup gap="4" marginTop="20px" position="relative">
          <Button
            background="#FFDE11"
            colorScheme="yellow"
            borderRadius="20px"
            fontWeight="bold"
            fontSize="20px"
          >
            <Image
              src="/assets/image/navbar/call.png"
              width="25px"
              height="25px"
            />
            &nbsp;&nbsp;contact us
          </Button>
          <Button
            background="#707070"
            colorScheme="blackAlpha"
            borderRadius="20px"
            color="#fff"
            fontWeight="bold"
            fontSize="20px"
          >
            <Image
              src="/assets/image/banner/play.png"
              width="25px"
              height="25px"
            />
            &nbsp;&nbsp;watch now
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default HeroBanner;
