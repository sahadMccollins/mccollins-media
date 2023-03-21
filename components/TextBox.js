import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import FadeUp from "./Motion/FadeUp";

const TextBox = (props) => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  return (
    <Stack bg={props.bg ? props.bg : "#fff"}>
      <Container maxWidth={"7xl"} py="50" zIndex={2} position="relative">
        <Flex direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "30%" }} alignSelf="center">
            <FadeUp>
              <Heading
                borderLeft="20px solid #FFE962"
                fontWeight={"black"}
                className="main-h2"
                pl="6"
              >
                {props.heading.split("\n").map((str) => (
                  <div key={str}>{str}</div>
                ))}
              </Heading>
              <Heading
                borderLeft="20px solid #FFE962"
                className="main-p"
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
              <Heading className="main-h3" mb="2" mt={{ base: "5", md: "0" }}>
                {props.subHeading}
              </Heading>
              <Heading className="main-h6" mb="2" mt={{ base: "5", md: "0" }}>
                {isLargerThan780
                  ? props.subHeadingOnly &&
                    props.subHeadingOnly
                      .split("\n")
                      .map((str) => <div key={str}>{str}</div>)
                  : props.subHeadingOnly}
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
