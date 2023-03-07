import {
  Box,
  Container,
  Flex,
  Heading,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../../../components/Layout/InnerLayout";
import Image from "next/image";

import TextBox2 from "../../../components/TextBox2";
import TextBox from "../../../components/TextBox";
import ClientsLogo from "../../../components/ClientsLogo";
import VideoBanner from "../../../components/VideoBanner";
import VideoCaseStudy from "../../../components/VideoCaseStudy";
import ServiceIcon from "../../../components/ServiceIcon";
import FormBox from "../../../components/FormBox";
import Testimonials from "../../../components/Testimonials";
import { useRouter } from "next/router";
import WebShowcase from "../../../components/WebShowcase";
import FadeUp from "../../../components/Motion/FadeUp";
import ZoomInWithBounce from "../../../components/Motion/ZoomInWithBounce";

const WebsiteDevelopment = () => {
  const router = useRouter();

  return (
    <Stack position={"relative"}>
      <VideoBanner
        heading={`web \n development`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657219431/Mccollins%20Video/Website_Development_cs3y2v.mp4"
        content="Every brand in today's time must have a website to showcase itself to its audience. Having a mobile friendly website is even more important. Our team of in-house developers specialize in various backends be it Wordpress, WooCommerce, Magento, React or Shopify to name a few. Our agency is Partners with several leading platforms"
        poster="/assets/image/servicePage/serviceAccordian.jpg"
      />
      <Box position={"relative"} style={{ marginBottom: "50px" }}>
        <Container maxWidth={"7xl"}>
          <TextBox
            h2Fs="40px"
            heading="Technologies We work with"
            subHeadingOnly="Transform your brand journey today. We grow brands, create experiences and solve problems."
          />
          <ServiceIcon />

          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            mt={{ base: 0, md: 8 }}
            position="relative"
          >
            <Box
              width={{ base: "100%", md: "50%" }}
              display="block"
              alignSelf="center"
              mr={{ base: 0, md: 10 }}
            >
              <FadeUp>
                <Heading className="main-h2">
                  Develop Websites That Drive Traffic And Conversion
                </Heading>
              </FadeUp>
              <FadeUp>
                <Box
                  my={8}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 8% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"20px"}
                >
                  <Text>A Voice For Your Brand</Text>
                </Box>
              </FadeUp>
              <FadeUp>
                <Text mb={5} className="main-p">
                  Creating a website is an important part of any marketing
                  strategy, and it's no wonder that so many businesses are
                  turning to website development partners to help them create
                  their result driven website.
                  <br />
                  <br /> We have a team of in-house developers who can help you
                  create a website on any platform, from ecommerce websites to
                  corporate websites. With years of experience, our team will
                  work with you to develop a website that reflects your unique
                  brand and meets your needs. We understand that different
                  businesses need different features and accommodations, so
                  we'll work closely with you to develop a website that
                  perfectly fits your needs.
                </Text>
              </FadeUp>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <ZoomInWithBounce>
                <Image
                  src={
                    "/assets/image/servicePage/subPage/web development-01.jpg"
                  }
                  width="585px"
                  height={"528px"}
                />
              </ZoomInWithBounce>
            </Box>
          </Flex>
          <Flex
            direction={{ base: "column", md: "row" }}
            mt="10"
            position="relative"
          >
            <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              mr={{ base: 0, md: 10 }}
            >
              <ZoomInWithBounce>
                <Image
                  src={
                    "/assets/image/servicePage/subPage/web development-02.jpg"
                  }
                  width="585px"
                  height={"400px"}
                  objectFit="cover"
                />
              </ZoomInWithBounce>
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              className="sub-service"
              alignSelf="center"
            >
              <FadeUp>
                <OrderedList mt={5}>
                  <li>
                    <Text className="main-p">
                      Get your website designed and developed by a team of
                      experts who will ensure that your site is perfect for your
                      brand.
                    </Text>
                  </li>
                  <li>
                    <Text className="main-p">
                      Choose from a wide range of customizable website features
                      that will make your site unique.
                    </Text>
                  </li>
                  <li>
                    <Text className="main-p">
                      Enjoy hassle-free website maintenance that will keep your
                      site running smoothly.
                    </Text>
                  </li>
                  <li style={{ marginBottom: "5px" }} className="main-p">
                    <Text className="main-p">
                      Optimize your website for better search engine ranking
                      with our cutting-edge SEO techniques.
                    </Text>
                  </li>
                  <li>
                    <Text className="main-p">
                      Keep your data safe and secure with our state-of-the-art
                      security measures
                    </Text>
                  </li>
                </OrderedList>
              </FadeUp>
            </Box>
          </Flex>
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            mt="10"
            position="relative"
          >
            <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              alignSelf="center"
              mr={{ base: 0, md: 10 }}
            >
              <FadeUp>
                <Text className="main-p" mt={5}>
                  Partner with us and get your Business online today. With our
                  in-house team, we develop websites on Sitecore, Wordpress,
                  React, Shopify and more. Once the website is live, we support
                  with Website Maintenance, Search Engine Optimization and
                  Search Engine Marketing.
                  <br />
                  <br />
                  In the era of mobile first technology, website is the only
                  effective outlet to communicate with your customers.
                  <br />
                  <br />
                  Build a strong Mobile-first website and be in the pocket of
                  your customers. Be it informational or e-commerce, we develop
                  them in-house
                </Text>
              </FadeUp>
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              mt={{ base: "5", md: 0 }}
            >
              <ZoomInWithBounce>
                <Image
                  src={
                    "/assets/image/servicePage/subPage/web development-03.jpg"
                  }
                  width="585px"
                  height={"400px"}
                  objectFit="cover"
                />
              </ZoomInWithBounce>
            </Box>
          </Flex>
        </Container>
      </Box>
      <WebShowcase />

      <Box className="creative-head">
        <Heading
          as={"h3"}
          fontSize={{ base: "25px", md: "75px" }}
          mt={"10"}
          textAlign="center"
          color={"#fff"}
          textTransform="uppercase"
        >
          Create A Web Presence <br /> That Delivers Results
        </Heading>
      </Box>
      <Container
        maxWidth={"7xl"}
        style={{ margin: "auto", marginBottom: "40px" }}
      >
        <FormBox heading={"Request a Call Back"} />
      </Container>
      <Container maxWidth={"7xl"} style={{ margin: "auto" }}>
        <VideoCaseStudy />
      </Container>
      <Box className="creative-head" pb={10}>
        <Heading
          as={"h4"}
          fontSize={{ base: "25px", md: "50px" }}
          pt="20"
          textAlign="center"
          color={"#FFDE11"}
          textTransform="uppercase"
        >
          I am also interested in
        </Heading>
        <Container maxWidth="4xl">
          <Box className="intrestedH2">
            <Heading onClick={() => router.push("/services/google-ads")}>
              Google Ads
            </Heading>
            <Heading
              onClick={() =>
                router.push("/services/search-engine-optimization")
              }
            >
              Search Engine Optimization
            </Heading>
            <Heading
              onClick={() => router.push("/services/social-media-agency-dubai")}
            >
              Social Media Marketing
            </Heading>
            <Heading
              onClick={() =>
                router.push("/services/web-design-and-development")
              }
            >
              Website Maintenance
            </Heading>
          </Box>
        </Container>
      </Box>

      <Box style={{ margin: "0" }}>
        <ClientsLogo />
      </Box>
      <Box my="10">
        <Testimonials />
      </Box>
    </Stack>
  );
};

WebsiteDevelopment.getLayout = function getLayout(WebsiteDevelopment) {
  return <InnerLayout color="yellow">{WebsiteDevelopment}</InnerLayout>;
};

export default WebsiteDevelopment;
