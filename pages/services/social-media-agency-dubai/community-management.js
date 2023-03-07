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

const CommunityManagement = () => {
  return (
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="Community Management" />
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
                Social media community management involves building and managing
                a brand's online presence on social media platforms. It involves
                engaging with customers, creating content, monitoring feedback,
                and managing social media campaigns. Being a leading Social
                Media Agency in UAE, one of our main objectives is to represent
                the brand on Digital channels with a particular brand persona
                which we outline with our clients. From the tonality, to FAQs ,
                we work with our partners on creating real time responses and
                acknowledging their stakeholders on social media.
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
              <Box display={{ base: "none", md: "block" }}>
                <Image
                  src={"/assets/image/servicePage/Magneto2.jpg"}
                  width="585px"
                  height={"700px"}
                  objectFit="cover"
                />
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading as={"h3"} className={"main-h3"} mt={{ base: 5, md: 0 }}>
                A few steps on how we go about Community Management :
              </Heading>
              <OrderedList my={"6"}>
                <li>
                  <Text fontSize={"20px"} className="main-p">
                    <b>Defining the brand's social media strategy:</b> This
                    involves setting clear goals for the brand's social media
                    presence and identifying the target audience, social media
                    platforms, and key performance indicators (KPIs) that will
                    be used to measure success. From brand tonality,
                    transparency, frequency of communication - we work on a
                    digital brand book to outline the way your brand must be
                    represented on social media. brands.
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
                    <b>Creating and curating content:</b> This involves
                    developing high-quality content that resonates with the
                    target audience and supports the brand's messaging. This may
                    include creating blog posts, videos, graphics, and other
                    forms of content, as well as curating content from other
                    sources that is relevant to the brand's audience. With more
                    open ended content, we give a chance to your audience to
                    engage with your brand and create shareability of content.
                    Being a content marketing agency in Dubai, we work closely
                    on created content calendars, and work on community
                    management guidelines to ensure the best engagement is
                    received for your brand.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Engaging with customers:</b> This involves actively
                    monitoring social media channels for customer feedback,
                    questions, and complaints, and responding to them in a
                    timely and professional manner. It also involves proactively
                    engaging with customers to build relationships and foster a
                    sense of community around the brand. Positive brand
                    sentiment is key - we work on reviews, acknowledging
                    negative content and converting into positive ones.
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
                    <b>Managing social media campaigns:</b> This involves
                    developing and executing social media campaigns that support
                    the brand's marketing objectives, such as driving website
                    traffic, increasing brand awareness, or promoting a new
                    product or service.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Analyzing performance:</b> This involves tracking social
                    media metrics, such as engagement rates, reach, and
                    conversions, and using this data to measure the
                    effectiveness of social media campaigns and make data-driven
                    decisions to improve performance. Tools like Hootsuite,
                    Meltwater, Social Bakers and more give insight into the
                    brand sentiment.
                  </Text>
                </li>
              </OrderedList>
              <Text className="main-p">
                Overall, effective social media community management requires a
                deep understanding of the target audience, a strong grasp of
                social media best practices and trends, and an ability to create
                engaging content and build and manage relationships with
                customers that drive results for the brand.
              </Text>
            </Box>
          </Flex>
        </Container>

        <WebShowcase />
      </Box>
    </Stack>
  );
};

CommunityManagement.getLayout = function getLayout(CommunityManagement) {
  return <InnerLayout>{CommunityManagement}</InnerLayout>;
};

export default CommunityManagement;
