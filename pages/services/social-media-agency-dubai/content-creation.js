import {
  Box,
  Container,
  Flex,
  Heading,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";

const ContentCreation = () => {
  return (
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="Content Creation" />
      <Box>
        <Container maxWidth={"7xl"} py={"50px"}>
          <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              paddingRight={{ base: "0", md: "50px" }}
              alignSelf="center"
              textAlign={"justify"}
              className="main-p"
            >
              <Heading as={"h5"} className="main-h5">
                Are you looking for a one-stop shop for all your content
                creation needs? Let’s talk shop.
              </Heading>
              <Text mt={5} className="main-p">
                As a content marketing agency in Dubai, we provide a wide range
                of services including photoshoots, video shoots, and
                copywriting. Our team of experts is equipped to help you create
                content that is both engaging and mobile-first. With our
                extensive portfolio of work, we know just what it takes to get
                your content seen by the masses. We work on the brand strategy,
                aiming to be the best content marketing service provider in the
                UAE and other GCC Markets like Saudi Arabia, Kuwait, Qatar,
                Bahrain, Oman and more. The content creation process in Dubai is
                competitive and we need to ensure our brands are ahead of the
                curve.
              </Text>
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              textAlign={"center"}
            >
              <Image
                src={"/assets/image/servicePage/contentProduction.jpg"}
                width="500px"
                height={"400px"}
                objectFit="cover"
              />
            </Box>
          </Flex>
          <Flex
            direction={{ base: "column", md: "row" }}
            my={{ base: "10", md: "75px" }}
          >
            <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              textAlign={"center"}
            >
              <Image
                src={"/assets/image/servicePage/cp2.jpg"}
                width="500px"
                height={"400px"}
              />
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              alignSelf="center"
              mt={{ base: 5, md: 0 }}
            >
              <Heading as={"h5"} className="main-h5">
                Why work with us ?
              </Heading>
              <OrderedList my={"6"} textAlign="justify">
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Understand your audience and their needs to create content
                    that is relevant and engaging.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Develop a brand positioning that sets you apart from your
                    competition.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Analyze your competitor's content and develop a strategy to
                    beat them at their own game.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Use multimedia to capture viewer attention and keep them
                    engaged.
                  </Text>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <Text fontSize={"20px"} className="main-p">
                    Utilize trending content to stay ahead of the curve and
                    attract new readers.
                  </Text>
                </li>
              </OrderedList>
              <Text textAlign="justify" className="main-p">
                Be it Arabic or English content , we align your brand to the
                market requirements. We engage with influencers and bloggers to
                create User Generated Content for your brand.
                <br />
                <br />
                Content differs for every platform - Be it META, Snapchat,
                TikTok, YouTube or any other platform, we create content as per
                the Brand Strategy.
                <br />
                <br />
                From Reels, Stories, TikTok Videos to Snapchat content - We work
                primarily on Mobile First Content.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Stack>
  );
};

ContentCreation.getLayout = function getLayout(ContentCreation) {
  return <InnerLayout>{ContentCreation}</InnerLayout>;
};

export default ContentCreation;
