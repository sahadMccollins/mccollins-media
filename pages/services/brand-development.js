import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ClientsLogo from "../../components/ClientsLogo";
import FavWork from "../../components/FavWork";
import IntrestedInBox from "../../components/IntrestedInBox";
import InnerLayout from "../../components/Layout/InnerLayout";
import ServicePoint from "../../components/ServicePoint";
import TextBox from "../../components/TextBox";
import VideoBanner from "../../components/VideoBanner";
import clientPromise from "../../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

const DesignAndBrandDevelopment = ({ metaTags }) => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  return (
    <Stack position={"relative"}>
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
      <VideoBanner
        heading={`brand \n development`}
        video="/assets/cloudinaryBackup/BRANDING_-_z6r43b.mp4"
        content="Brand identity is everything, and we bring in unimaginable creativity through brand execution, logo creation, website redesign, social media content creation, and more."
        poster="/assets/image/servicePage/designAndBrand.jpg"
      />
      <Box bg={"#F7F7F7"} style={{ marginTop: "0" }}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }} my={10}>
            <Box width={{ base: "100%", md: "50%" }} mr={"20"}>
              <Heading fontWeight={"bold"} className="main-h3">
                Brand Development
              </Heading>
              <Box
                my={8}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"1xl"}
                color={"#000"}
              >
                {/* <Text>creating content that tells a story</Text> */}
              </Box>
              <Text>
                Creating a brand from the inception - logo to the entire
                adaptation of various deliverables are conceptualized in-house
                by our team of designers and copywriters
              </Text>
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              mt={{ base: "10", md: "unset" }}
            >
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                  }}
                ></span>
                <Heading className="main-h3">
                  Brand Identity Development
                </Heading>
              </Box>
              <Text>
                Logo design, Brand Elements, Brand Positioning, Color Themes to
                executing the design across all mediums.
              </Text>
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                  }}
                ></span>
                <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                  Design Projects
                </Heading>
              </Box>
              <Text>
                Be it a brochure or a menu or any specific design requirements,
                we take on branding projects based on the brief provided by the
                Clients
              </Text>
            </Box>
          </Flex>
        </Container>
        <ServicePoint
          heading={"BRANDING \n SERVICES"}
          contentHeading="Conceptualizing design solutions for your brand"
          content="From conceptualizing a logo for a new brand to a comprehensive design solution for an existing brand, our in-house team provides design solutions for brands"
          points={
            "Logo Development \n Copywriting \n Translation \n Printing Guidelines \n Brand Asset Development \n Brand Guideline Development"
          }
        />
      </Box>

      <IntrestedInBox />
      <ClientsLogo />
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

DesignAndBrandDevelopment.getLayout = function getLayout(
  DesignAndBrandDevelopment
) {
  return <InnerLayout color="yellow">{DesignAndBrandDevelopment}</InnerLayout>;
};

export default DesignAndBrandDevelopment;
