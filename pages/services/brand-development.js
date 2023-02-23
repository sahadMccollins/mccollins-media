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
import InnerLayout from "../../components/Layout/InnerLayout";
import ServicePoint from "../../components/ServicePoint";
import TextBox from "../../components/TextBox";
import VideoBanner from "../../components/VideoBanner";

const DesignAndBrandDevelopment = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  const favWorkData = [
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
  ];

  return (
    <Stack position={"relative"}>
      <VideoBanner
        heading={`brand \n development`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657600388/Mccollins%20Video/BRANDING_-_z6r43b.mp4"
        content="Brand identity is everything, and we bring in unimaginable creativity through brand execution, logo creation, website redesign, social media content creation, and more."
        poster="/assets/image/servicePage/designAndBrand.jpg"
      />
      <Box bg={"#F7F7F7"} style={{ marginTop: "0" }}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }} my={10}>
            <Box width={{ base: "100%", md: "50%" }} mr={"20"}>
              <Heading fontWeight={"bold"} fontSize={"4xl"}>
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
                <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                  brand identity development
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
                  design projects
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
        <Box position={"relative"}>
          <Box
            style={{
              position: "absolute",
              top: isLargerThan780 ? "10%" : "-50%",
              right: "5%",
            }}
          >
            <Image
              src={"/assets/image/design/1.svg"}
              width="118px"
              height={"165px"}
            />
          </Box>
          <Container maxWidth={"7xl"} pb={10}>
            <Heading>COPYWRIRING</Heading>
            <Text my={15}>
              Written content that goes along with design is key. Our
              copywriters understand the DNA of your brand and create written
              material for the design collaterals
            </Text>
          </Container>
        </Box>
      </Box>
      {/* <Box
        style={{ position: "absolute", top: "58%", left: "-4%" }}
        display={{ base: "none", md: "block" }}
      >
        <Image
          src={"/assets/image/design/12.svg"}
          width="130px"
          height={"130px"}
        />
      </Box> */}
      {/* <TextBox
        heading="CASE STUDY"
        smallHeading="social media designs"
        subHeading="sneak peak into our social media marketing projects"
        content="Have a look at some of the Social Media Marketing work we have done for our clients over these years"
      />
      <FavWork data={favWorkData} /> */}
      <ClientsLogo />
    </Stack>
  );
};

DesignAndBrandDevelopment.getLayout = function getLayout(
  DesignAndBrandDevelopment
) {
  return <InnerLayout color="yellow">{DesignAndBrandDevelopment}</InnerLayout>;
};

export default DesignAndBrandDevelopment;
