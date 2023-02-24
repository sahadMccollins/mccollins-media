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

const Sitecore = () => {
  return (
    <Stack className="sub-service">
      <InnerBannerTwo h1="Sitecore CMS" />
      <Container maxWidth={"3xl"} style={{ margin: "auto" }} py="10">
        <Text fontSize={"20px"} lineHeight="1.5">
          Sitecore is a powerful enterprise-level content management system
          (CMS) that is widely used for building complex websites, e-commerce
          platforms, and digital marketing applications. Sitecore development
          involves creating and customizing digital experiences on the Sitecore
          platform, using a combination of programming languages, tools, and
          techniques. Many businesses are scaling with time and now opting for
          Sitecore Websites.
        </Text>

        <Heading as={"h3"} fontSize="25px" mt={"10"}>
          Some Key Features for Sitecore Development :
        </Heading>
        <OrderedList my={"6"}>
          <li>
            <Text fontSize={"20px"}>
              <b>Sitecore architecture : </b>Sitecore is built on the Microsoft
              .NET framework and uses a variety of technologies, including
              ASP.NET, MVC, and Web API. Understanding the Sitecore architecture
              is essential for building scalable and secure applications.
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              <b>Sitecore customization : </b>Sitecore provides a variety of
              out-of-the-box features and modules, but customizing these
              features is often necessary to meet the specific requirements of a
              project.
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              <b>Sitecore integration : </b> We can integrate with a wide range
              of external systems, including third-party databases, marketing
              automation platforms, and e-commerce platforms.
            </Text>
          </li>
        </OrderedList>
        <Heading as={"h3"} fontSize="25px" mt={"10"}>
          As a business, Sitecore is beneficial for :
        </Heading>
        <UnorderedList my={"6"}>
          <li>
            <Text fontSize={"20px"}>Better tracking and analytics</Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Unlocking AI Powered - Personalization
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Comprehensive Content Optimization
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Gaining a single view of an individual customer
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Comprehensive Content Optimization
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Ensuring Data Protection and Privacy
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Building Omni-channel customer experience
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Increasing operational efficiency
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Increasing customer lifetime value
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              And finally , driving revenue!
            </Text>
          </li>
        </UnorderedList>
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

Sitecore.getLayout = function getLayout(Sitecore) {
  return <InnerLayout>{Sitecore}</InnerLayout>;
};

export default Sitecore;
