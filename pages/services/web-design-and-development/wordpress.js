import {
  Container,
  Heading,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";

const Wordpress = () => {
  return (
    <Stack className="sub-service">
      <InnerBannerTwo h1="Wordpress Website Development" />
      <Container maxWidth={"3xl"} style={{ margin: "auto" }} py="10">
        <Text fontSize={"20px"} lineHeight="1.5">
          Wordpress is one of the most popular open source content management
          platforms to develop websites. Many businesses feel the ease to align
          their business requirements with a Wordpress Website. Our in-house
          development team specializes in Wordpress Development
        </Text>
        <br />
        <Heading as={"h3"} fontSize="25px" mt={"10"}>
          Some of the benefits of Developing a Wordpress Website :
        </Heading>
        <UnorderedList my={"6"}>
          <li>
            <Text fontSize={"20px"}>
              Ease of Use - Known to all, easy to adapt and launch
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Search Engines Love wordpress websites
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              100% Customizable design of your website
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Integrate plug ins to your website as per your business
              requirements
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Multiple User Access
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Blog incorporation within your website
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Multilingual Websites as per the Arab Region
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              Brands have team members who can maintain the website post launch
            </Text>
          </li>
        </UnorderedList>
        <Heading as={"h3"} fontSize="25px" mt={"10"}>
          Key Aspects for Wordpress :
        </Heading>
        <OrderedList my={"6"}>
          <li>
            <Text fontSize={"20px"}>
              <b>WordPress architecture : </b>WordPress is built on the PHP
              programming language and uses a MySQL database to store content.
              Understanding the WordPress architecture is essential for building
              scalable and secure applications.
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              <b>WordPress customization : </b> WordPress provides a variety of
              out-of-the-box features and plugins, but customizing these
              features is often necessary to meet the specific requirements of a
              project. WordPress customization involves creating custom themes,
              plugins, and widgets.
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              <b>WordPress integration : </b>WordPress can integrate with a wide
              range of external systems, including third-party databases,
              marketing automation platforms, and e-commerce platforms.
            </Text>
          </li>
          <li>
            <Text fontSize={"20px"} mt="5">
              <b>WordPress deployment : </b>WordPress deployments can be
              complex, involving multiple environments, databases, and
              configurations. WordPress developers need to be proficient in
              deployment tools, such as Git, FTP, and SSH.
            </Text>
          </li>
        </OrderedList>
      </Container>
    </Stack>
  );
};

Wordpress.getLayout = function getLayout(Wordpress) {
  return <InnerLayout>{Wordpress}</InnerLayout>;
};

export default Wordpress;
