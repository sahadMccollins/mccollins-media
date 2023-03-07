import {
  Box,
  Container,
  Flex,
  Heading,
  OrderedList,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import CaseStudy from "../../../components/CaseStudy";
import FavWork from "../../../components/FavWork";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";
import ServicePoint from "../../../components/ServicePoint";
import TextBox from "../../../components/TextBox";
import WebShowcase from "../../../components/WebShowcase";

const BrandReputationManagement = () => {
  const favWorkData = [
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
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
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="Brand Reputation Management" />
      <Box>
        <Container maxWidth={"7xl"} py={"50px"}>
          <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: 0, md: 10 }}
              alignSelf="center"
              className="main-p"
            >
              <Text mt={{ base: 5, md: 0 }} className="main-p">
                Being a leading social media agency in UAE, we work towards
                managing the digital brand reputation for your brand. Our social
                media monitoring tools analyze the brand sentiment. Tools like
                Meltwater, Hootsuite, Socialbakers, SEMRush and more help us
                keep a close look at the pulse of the brands. Positive brand
                sentiment refers to the overall perception of a brand by its
                target audience. It is the degree to which customers have
                positive emotions, feelings, and associations with a brand.
                Positive brand sentiment is important because it can lead to
                increased customer loyalty, advocacy, and sales.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/Magneto.jpg"}
                width="585px"
                height={"300px"}
                objectFit="cover"
              />
            </Box>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} my={10}>
            <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              mr={{ base: 0, md: 10 }}
              display={"flex"}
              flexDir={"column"}
              justifyContent="space-around"
            >
              <Image
                src={"/assets/image/servicePage/Magneto2.jpg"}
                width="585px"
                height={"700px"}
                objectFit="cover"
              />
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading as={"h3"} className={"main-h3"} mt={{ base: 5, md: 0 }}>
                Here are some factors that can influence positive brand
                sentiment:
              </Heading>
              <OrderedList my={"6"}>
                <li>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Brand reputation:</b> A brand with a strong reputation
                    for quality, reliability, and customer service is more
                    likely to have positive brand sentiment.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Customer experience:</b> Brands that consistently provide
                    positive customer experiences, such as prompt and friendly
                    service, are more likely to have positive brand sentiment.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Social media presence:</b> A brand's social media
                    presence can influence brand sentiment, as customers may
                    form opinions based on the brand's social media posts,
                    engagement with customers, and overall online reputation.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Advertising and marketing:</b> Brands that create
                    compelling and memorable advertising and marketing campaigns
                    can positively influence brand sentiment by creating
                    emotional connections with customers.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Word-of-mouth:</b> Positive word-of-mouth recommendations
                    and reviews from satisfied customers can also contribute to
                    positive brand sentiment. Your customers buy your products
                    or opt for your service based on Google Reviews, TripAdvisor
                    Reviews, Amazon Reviews and more. As a brand reputation
                    management company in UAE, work on comment moderation of
                    reviews across all platforms and represent your brand
                    online.
                  </Text>
                </li>
              </OrderedList>
              <Text className="main-p" ml={7}>
                Overall, positive brand sentiment is important for building
                strong relationships with customers, driving sales, and building
                a loyal customer base. It requires a focus on building a strong
                reputation, providing positive customer experiences, and
                effectively communicating the brand's values and messaging to
                its target audience.
              </Text>
            </Box>
          </Flex>
        </Container>

        {/* <CaseStudy data={favWorkData} /> */}
      </Box>
    </Stack>
  );
};

BrandReputationManagement.getLayout = function getLayout(
  BrandReputationManagement
) {
  return <InnerLayout>{BrandReputationManagement}</InnerLayout>;
};

export default BrandReputationManagement;
