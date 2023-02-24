import {
  Box,
  Container,
  Heading,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import ClientsLogo from "../../../components/ClientsLogo";
import FormBox from "../../../components/FormBox";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";
import Testimonials from "../../../components/Testimonials";

const LandingPage = () => {
  return (
    <Stack className="sub-service">
      <InnerBannerTwo h1="Website Landing Page" />
      <Container maxWidth={"3xl"} style={{ margin: "auto" }} py="10">
        <Heading as={"h3"} fontSize="25px" my={"10"}>
          Develop Websites That Drive Traffic And Conversion
        </Heading>
        <Text fontSize={"20px"} lineHeight="1.5">
          Creating a website is an important part of any marketing strategy, and
          it's no wonder that so many businesses are turning to website
          development partners to help them create their result driven website.
          <br />
          We have a team of in-house developers who can help you create a
          website on any platform, from ecommerce websites to corporate
          websites. With years of experience, our team will work with you to
          develop a website that reflects your unique brand and meets your
          needs. We understand that different businesses need different features
          and accommodations, so we'll work closely with you to develop a
          website that perfectly fits your needs.
        </Text>

        <OrderedList my={"6"}>
          <li>
            <Text fontSize={"20px"}>
              Get your website designed and developed by a team of experts who
              will ensure that your site is perfect for your brand..
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Choose from a wide range of customizable website features that
              will make your site unique.
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Enjoy hassle-free website maintenance that will keep your site
              running smoothly.
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Optimize your website for better search engine ranking with our
              cutting-edge SEO techniques.
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Keep your data safe and secure with our state-of-the-art security
              measures
            </Text>
          </li>
        </OrderedList>
        <Text fontSize={"20px"} lineHeight="1.5">
          Partner with us and get your Business online today. With our in-house
          team, we develop websites on Sitecore, Wordpress, React, Shopify and
          more. Once the website is live, we support with Website Maintenance,
          Search Engine Optimization and Search Engine Marketing.{" "}
        </Text>
      </Container>
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
      <ClientsLogo />
      <Box my="10">
        <Testimonials />
      </Box>
    </Stack>
  );
};

LandingPage.getLayout = function getLayout(LandingPage) {
  return <InnerLayout>{LandingPage}</InnerLayout>;
};
export default LandingPage;
