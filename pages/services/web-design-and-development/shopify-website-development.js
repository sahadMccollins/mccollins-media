import {
  Box,
  Container,
  Heading,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ClientsLogo from "../../../components/ClientsLogo";
import FormBox from "../../../components/FormBox";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";
import Testimonials from "../../../components/Testimonials";

const Shopify = () => {
  return (
    <Stack className="sub-service">
      <InnerBannerTwo h1="Shopify Website Development" />
      <Container maxWidth={"3xl"} style={{ margin: "auto" }} py="10">
        <Text fontSize={"20px"} lineHeight="1.5">
          Launching an ecommerce business ? Shopify is one of the most preferred
          platforms to build and maintain your e-commerce website. As a Shopify
          Partner, we customize the websites as per your brand guidelines.{" "}
        </Text>
        <br />
        <Text fontSize={"20px"} lineHeight="1.5">
          From conceptualizing your website UI/UX to Product Photography to
          creating product collections , we take you through the payment gateway
          process and get your website up and running in no time.
        </Text>
        <Heading as={"h3"} fontSize="25px" mt={"10"}>
          We can help you with :{" "}
        </Heading>
        <OrderedList my={"6"}>
          <li>
            <Text fontSize={"20px"}>
              <b>Storefront Development : </b>Building and customizing visual
              elements of your online such - be with the layout, theme and
              design. Our Shopify developers work on the latest trends and
              customize themes using HTML, CSS and other tools
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              <b>App Development : </b>Take your business mobile. The Shopify
              theme can then provide a mobile experience for your brand.
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              <b>Shopify API Integration : </b>The APO allows us to integrate
              with third party services like Payment gateway providers, shipping
              partners and marketing tools like Klaviyo etc
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              <b>Maintenance and support : </b>We also provide ongoing
              maintenance and support to ensure that the online store is running
              smoothly, and any issues are quickly resolved.
            </Text>
          </li>
        </OrderedList>
        <Text fontSize={"20px"} lineHeight="1.5">
          Our marketing team works with our web development team to launch your
          website and take your business on the next journey of promoting your
          products via Performance Marketing and Social Media Marketing.
        </Text>
      </Container>
      <Box className="creative-head">
        <Heading
          as={"h3"}
          fontSize="75px"
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

Shopify.getLayout = function getLayout(Shopify) {
  return <InnerLayout>{Shopify}</InnerLayout>;
};

export default Shopify;
