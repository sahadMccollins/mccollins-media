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
import clientPromise from "../../../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

const BrandReputationManagement = ({ metaTags }) => {
  return (
    <Stack position={"relative"} className="sub-service">
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
      <InnerBannerTwo h1="Brand Reputation Management" />
      <Box>
        <Container maxWidth={"4xl"} mt={10}>
          <Text mt={{ base: 5, md: 0 }} className="main-p" textAlign="center">
            Being a leading social media agency in UAE, we work towards managing
            the digital brand reputation for your brand. Our social media
            monitoring tools analyze the brand sentiment. Tools like Meltwater,
            Hootsuite, Socialbakers, SEMRush and more help us keep a close look
            at the pulse of the brands. Positive brand sentiment refers to the
            overall perception of a brand by its target audience. It is the
            degree to which customers have positive emotions, feelings, and
            associations with a brand. Positive brand sentiment is important
            because it can lead to increased customer loyalty, advocacy, and
            sales.
          </Text>
        </Container>
        <Container maxWidth={"7xl"} py={"10"}>
          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-around"
            gap={5}
          >
            <Image
              alt="McCollins Media"
              src={
                "/assets/image/servicePage/subPage/Brand Reputation Management-01.jpg"
              }
              width="585px"
              height={"500px"}
              objectFit="cover"
            />

            <Image
              alt="McCollins Media"
              src={
                "/assets/image/servicePage/subPage/Brand Reputation Management-02.jpg"
              }
              width="585px"
              height={"500px"}
              objectFit="cover"
            />
          </Box>
          <Flex direction={{ base: "column", md: "row" }} my={10}>
            <Box>
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

        {/* <CaseStudy /> */}
      </Box>
    </Stack>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let metaTags = await db.collection("meta").find({ name: req.url }).toArray();
  metaTags = JSON.parse(JSON.stringify(metaTags));
  console.log(metaTags);

  return {
    props: { metaTags },
  };
}

BrandReputationManagement.getLayout = function getLayout(
  BrandReputationManagement
) {
  return <InnerLayout>{BrandReputationManagement}</InnerLayout>;
};

export default BrandReputationManagement;
