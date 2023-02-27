import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ServicePoint = (props) => {
  return (
    <Stack py={"20"} bg={"#F7F7F7"} style={{ marginTop: "0px" }}>
      <Container maxWidth={"7xl"}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box
            width={{ base: "100%", md: "30%" }}
            borderLeft="15px solid #FFE962"
            pl={"5"}
            mb={{ base: "10px", md: "0" }}
          >
            <Heading>
              {props.heading &&
                props.heading
                  .split("\n")
                  .map((str) => <Box key={str}>{str}</Box>)}
            </Heading>
            <Text className="subHeading">{props.subHeading}</Text>
          </Box>
          <Box width={{ base: "100%", md: "70%" }}>
            <Heading fontSize={"28px"} fontWeight={"bold"}>
              {props.contentHeading}
            </Heading>
            <Text mt={"10px"}>{props.content}</Text>
          </Box>
        </Flex>
        <SimpleGrid
          columns={{ sm: 2, md: 3 }}
          spacing="40px"
          mt={20}
          className="servicePoint"
        >
          {props.points &&
            props.points.split("\n").map((str) => <Box key={str}>{str}</Box>)}
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export default ServicePoint;
