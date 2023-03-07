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
import FavWork from "../../../components/FavWork";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";
import ServicePoint from "../../../components/ServicePoint";
import TextBox from "../../../components/TextBox";
import WebShowcase from "../../../components/WebShowcase";

const InfluencerMarketing = () => {
  return (
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="Influencer Marketing" />
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
                Influencer management involves identifying, engaging, and
                managing relationships with influencers to promote a brand's
                products or services. As an influencer marketing company in
                Dubai, we work with different influencers be it macro or micro.
                It involves developing a strategy, identifying the right
                influencers, managing campaigns, and measuring the results.
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
                height={"500px"}
                objectFit="cover"
              />
              <Box display={{ base: "none", md: "block" }}>
                <Image
                  src={"/assets/image/servicePage/Magneto2.jpg"}
                  width="585px"
                  height={"500px"}
                  objectFit="cover"
                />
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading as={"h3"} className={"main-h3"} mt={{ base: 5, md: 0 }}>
                Here is how we go about our influencer marketing campaigns :
              </Heading>
              <OrderedList my={"6"}>
                <li>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Defining the influencer marketing strategy:</b> This
                    involves setting clear goals for the influencer marketing
                    campaign, such as increasing brand awareness or driving
                    sales, and identifying the key performance indicators (KPIs)
                    that will be used to measure success. This is normally a
                    part of the Campaign Development and management for our
                    brands.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Sitecore customization: </b>Sitecore provides a variety
                    of out-of-the-box features and modules, but customizing
                    these features is often necessary to meet the specific
                    requirements of a project. Our Sitecore Web Developers in
                    Dubai strive to keep themselves updated with the latest
                    technologies.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Identifying the right influencers:</b> This involves
                    researching and selecting influencers who align with the
                    brand's values, target audience, and campaign objectives.
                    Influencers may be social media personalities, bloggers, or
                    thought leaders in a particular industry or niche. We work
                    with the best of the softwares in the market to help us
                    identify these influencers in UAE, Saudi Arabia, Oman,
                    Bahrain, Kuwait and more.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Engaging with influencers:</b> This involves reaching out
                    to influencers and building relationships with them. This
                    may involve sending personalized pitches, offering free
                    products or services, or negotiating compensation for
                    sponsored content.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Managing influencer campaigns:</b> This involves creating
                    a campaign brief that outlines the goals, messaging, and
                    deliverables for the campaign, and ensuring that influencers
                    deliver content that meets the brand's standards and aligns
                    with the campaign objectives. From individual reviews to
                    influencer meetups - we work on different formats of
                    collaborations that will work for the benefit of the brand.
                    We aim to be the best influencer marketing company in the
                    UAE.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Measuring and optimizing results:</b> This involves
                    tracking the performance of the influencer marketing
                    campaign and making adjustments as necessary to improve its
                    effectiveness. This may involve analyzing engagement rates,
                    click-through rates, and conversions, and refining the
                    campaign strategy or content as needed. We work on providing
                    PROMO Codes and Call to Action which helps us track the ROI.
                  </Text>
                </li>
              </OrderedList>
            </Box>
          </Flex>
          <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: 0, md: 10 }}
              alignSelf="center"
              mt={{ base: 5, md: 0 }}
            >
              <Text className="main-p">
                Overall, effective influencer marketing management requires a
                deep understanding of the target audience, a strong grasp of the
                influencer marketing landscape, and an ability to build and
                manage relationships with influencers in a way that drives
                results for the brand. As we focus on blogger and influencer
                marketing in the UAE, we complement it with other services we
                provide from Video Production services, Social Media Management
                services to Performance Marketing in the UAE.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                src={"/assets/image/servicePage/Woocommerce.jpg"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Container>

        <WebShowcase />
      </Box>
    </Stack>
  );
};

InfluencerMarketing.getLayout = function getLayout(InfluencerMarketing) {
  return <InnerLayout>{InfluencerMarketing}</InnerLayout>;
};

export default InfluencerMarketing;
