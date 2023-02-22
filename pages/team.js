import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FavWork from "../components/FavWork";
import HeroBanner from "../components/HeroBanner";
import OurTeam from "../components/OurTeam";
import TextBox from "../components/TextBox";

const Team = () => {
  const favWorkData = [
    {
      name: "Dafza",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Rica",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Dafza",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Rica",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
  ];
  return (
    <Stack>
      <HeroBanner img="/assets/image/banner/about-banner.webp" h2="Our Team" />
      <TextBox
        heading={"MEET \n THE TEAM"}
        subHeadingOnly={
          "You know our story, but do you know who keeps it alive? \n Meet our team who take brands to unthinkable heights!"
        }
      />

      <OurTeam />

      <Box bg={"#F7F7F7"} py={20}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "40%" }}>
              <Box alignSelf="center" position={"relative"} textAlign="center">
                <Image
                  src="/assets/image/industryPage/foodAndBeverage2.jpg"
                  width="417px"
                  height="454px"
                  zIndex={2}
                  position="relative"
                  pl={{ base: "10px", md: "40px" }}
                />
                <Box
                  position={"absolute"}
                  width="300px"
                  height={{ base: "65%", md: "75%" }}
                  bg={"#FFDE11"}
                  top="140px"
                  right="200px"
                  zIndex={0}
                ></Box>
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "60%" }} p={10}>
              <Box>
                <Flex direction={{ base: "column", lg: "row" }}>
                  <Heading
                    style={{
                      background:
                        "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                      width: "fit-content",
                      padding: "0 5px",
                    }}
                    fontSize={{ base: "3xl", lg: "4xl" }}
                  >
                    #1 CORPORATE
                  </Heading>
                  <Heading
                    style={{
                      background:
                        "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                      width: "fit-content",
                      padding: "0 5px",
                    }}
                    fontSize={{ base: "3xl", lg: "4xl" }}
                  >
                    MARKETING
                  </Heading>
                </Flex>
                <Heading fontSize="4xl">AGENCY IN UAE</Heading>
              </Box>
              <Text mt={10}>
                When you take a company as a whole and promote its services and
                products through various forms of marketing, it is known as
                corporate marketing.
                <br />
                <br /> We have had the pleasure of working with several
                corporate conglomerates over the last decade from their
                branding, to social media marketing, website development,
                performance marketing and content development within the GCC
                Markets primarily - United Arab Emirates, Saudi Arabia, Kuwait,
                Qatar and Bahrain.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <TextBox
        heading="CASE STUDY"
        smallHeading="social media designs"
        subHeading="sneak peak into our social media marketing projects"
        content="Have a look at some of the Social Media Marketing work we have done for our clients over these years"
      />
      <FavWork data={favWorkData} />
    </Stack>
  );
};

export default Team;
