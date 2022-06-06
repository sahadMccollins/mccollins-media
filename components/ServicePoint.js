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

const ServicePoint = () => {
  return (
    <Stack py={"20"} bg={"#F7F7F7"} style={{ marginTop: "0px" }}>
      <Container maxWidth={"7xl"}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box
            width={{ base: "100%", md: "30%" }}
            borderLeft="15px solid #FFE962"
            pl={"5"}
          >
            <Heading>SEO & SEM</Heading>
            <Text className="subHeading">performance marketing</Text>
          </Box>
          <Box width={{ base: "100%", md: "70%" }}>
            <Heading fontSize={"28px"} fontWeight={"bold"}>
              how can this work for your brand ?
            </Heading>
            <Text mt={"10px"}>
              With SEO and Google Ads, we set long term goals and short term
              goals for Lead Generation or e-commerce website conversions. We
              bring the right people to your website.
            </Text>
          </Box>
        </Flex>
        <SimpleGrid
          columns={{ sm: 2, md: 3 }}
          spacing="40px"
          mt={20}
          className="servicePoint"
        >
          <Box>SEO Strategy</Box>
          <Box>Keyword Research</Box>
          <Box>Blog Submissions</Box>
          <Box>Backlinks</Box>
          <Box>Content Optimization</Box>
          <Box>Off Page Promotion</Box>
          <Box>On Page SEO</Box>
          <Box>SERP Features</Box>
          <Box>Multi-Visit Buyer Journey</Box>
          <Box>Voice Search</Box>
          <Box>Google Ads - PPC</Box>
          <Box>Display Ads</Box>
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export default ServicePoint;
