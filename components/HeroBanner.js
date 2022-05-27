import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const HeroBanner = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  return (
    <Stack marginTop={"-80px"} position="relative">
      <Box>
        <Image
          src="/assets/image/banner/home-banner.webp"
          width="100vw"
          height={isLargerThan780 ? "100vh" : "60vh"}
          minHeight={isLargerThan780 ? "600px" : "500px"}
          objectFit="cover"
          priority={true}
        />
      </Box>
      <Box position={"absolute"} width="100%" bottom={"50px"} color="#fff">
        <Container maxWidth={"7xl"}>
          <Box width={isLargerThan780 ? "50%" : "100%"}>
            <Heading fontSize={isLargerThan780 ? "60px" : "40px"}>
              digital brand activation agency
            </Heading>
            <Text
              mt={"15px"}
              fontSize={isLargerThan780 ? "25px" : "30px"}
              width={isLargerThan780 ? "60%" : "100%"}
            >
              result driven agency with mobile first technology
            </Text>
            <ButtonGroup gap="4" zIndex="99" mt={"15px"}>
              <Button
                colorScheme="yellow"
                background={"#FFDE11"}
                borderRadius="20px"
                color="#000"
              >
                <Image
                  src="/assets/image/icons/call.png"
                  width="25px"
                  height="25px"
                  marginRight="10px"
                />
                contact us
              </Button>
              <Button colorScheme="whiteAlpha" borderRadius="20px" color="#fff">
                <Image
                  src="/assets/image/icons/play.png"
                  width="25px"
                  height="25px"
                  marginRight="10px"
                />
                watch now
              </Button>
            </ButtonGroup>
          </Box>
        </Container>
      </Box>
    </Stack>
  );
};

export default HeroBanner;
