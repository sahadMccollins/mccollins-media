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
import clientPromise from "../../../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

const Shopify = ({ metaTags }) => {
  return (
    <Stack position={"relative"} className="sub-service">
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
      <InnerBannerTwo h1="Wordpress web development" />
      <Box>
        <Container maxWidth={"4xl"} mt={10}>
          <Text mt={{ base: 5, md: 0 }} className="main-p" textAlign="center">
            Wordpress is one of the most popular open source content management
            platforms to develop websites. Many businesses feel the ease to
            align their business requirements with a Wordpress Website. Our
            in-house Wordpress development team in Dubai specializes in creating
            Corporate Websites, e-commerce websites or micro websites -
            depending upon the brand’s requirement.
          </Text>
        </Container>
        <Container maxWidth={"7xl"} pb={"50px"}>
          {/* <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: 0, md: 10 }}
              alignSelf="center"
              className="main-p"
            >
              <Text mt={{ base: 5, md: 0 }} className="main-p">
                Wordpress is one of the most popular open source content
                management platforms to develop websites. Many businesses feel
                the ease to align their business requirements with a Wordpress
                Website. Our in-house Wordpress development team in Dubai
                specializes in creating Corporate Websites, e-commerce websites
                or micro websites - depending upon the brand’s requirement.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image alt="McCollins Media"
                src={"/assets/image/servicePage/subPage/Wordpress-02.jpg"}
                width="585px"
                height={"300px"}
                objectFit="cover"
              />
            </Box>
          </Flex> */}
          <Flex direction={{ base: "column", md: "row" }} my={10}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: "0", md: "10" }}
              position="relative"
            >
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/subPage/Wordpress-01.jpg"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading as={"h3"} className={"main-h3"}>
                Some of the benefits of Developing a Wordpress Website :
              </Heading>
              <UnorderedList my={"6"} ml={0} className="checkmark">
                <li>
                  <Text className="main-p">
                    Ease of Use - Known to all, easy to adapt and launch
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Search Engines Love wordpress websites
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    100% Customizable design of your website
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Integrate plug ins to your website as per your business
                    requirements
                  </Text>
                </li>
                <li>
                  <Text className="main-p">Multiple User Access</Text>
                </li>
                <li>
                  <Text className="main-p">
                    Blog incorporation within your website
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Multilingual Websites as per the Arab Region, our Wordpress
                    developers in Dubai are bilingual to understand the
                    requirements of this market.
                  </Text>
                </li>
                <li>
                  <Text className="main-p">
                    Brands have team members who can maintain the website post
                    launch
                  </Text>
                </li>
              </UnorderedList>
            </Box>
          </Flex>
          <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: "0", md: "10" }}
              alignSelf="center"
            >
              <Heading as={"h3"} className={"main-h3"}>
                Key Aspects for Wordpress :
              </Heading>
              <OrderedList my={"6"}>
                <li>
                  <Text fontSize={"20px"} className="main-p">
                    <b>WordPress architecture: </b>WordPress is built on the PHP
                    programming language and uses a MySQL database to store
                    content. Understanding the WordPress architecture is
                    essential for building scalable and secure applications.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>WordPress customization: </b> WordPress provides a
                    variety of out-of-the-box features and plugins, but
                    customizing these features is often necessary to meet the
                    specific requirements of a project. WordPress customization
                    involves creating custom themes, plugins, and widgets.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>WordPress integration: </b>WordPress can integrate with a
                    wide range of external systems, including third-party
                    databases, marketing automation platforms, and e-commerce
                    platforms.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>WordPress deployment: </b>WordPress deployments can be
                    complex, involving multiple environments, databases, and
                    configurations. WordPress developers need to be proficient
                    in deployment tools, such as Git, FTP, and SSH.
                  </Text>
                </li>
              </OrderedList>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/subPage/Wordpress-03.jpg"}
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

Shopify.getLayout = function getLayout(Shopify) {
  return <InnerLayout>{Shopify}</InnerLayout>;
};

export default Shopify;
