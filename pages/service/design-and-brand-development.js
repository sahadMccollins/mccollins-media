import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ClientsLogo from "../../components/ClientsLogo";
import FavWork from "../../components/FavWork";
import InnerBanner from "../../components/InnerBanner";
import InnerLayout from "../../components/InnerLayout";
import ServicePoint from "../../components/ServicePoint";
import SocialBox from "../../components/SocialBox";
import TextBox from "../../components/TextBox";

const DesignAndBrandDevelopment = () => {
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <InnerBanner
          heading={`design and \n brand \n development`}
          img="/assets/image/servicePage/designAndBrand.jpg"
          content="Creating a brand from the inception - logo to the entire adaptation of various deliverables are conceptualized in-house by our team of designers and copywriters"
        />
      </Container>
      <Box bg={"#F7F7F7"}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }} my={20}>
            <Box width={{ base: "100%", md: "50%" }} mr={"20"}>
              <Heading fontWeight={"black"}>
                BRANDING <br />
                SOLUTIONS
              </Heading>
              <Box
                my={8}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"20px"}
                color={"#000"}
              >
                <Text>creating content that tells a story</Text>
              </Box>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                  }}
                ></span>
                <Heading>brand identity development</Heading>
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
                <Heading>design projects</Heading>
              </Box>
              <Text>
                Be it a brochure or a menu or any specific design requirements,
                we take on branding projects based on the brief provided by the
                Clients
              </Text>
            </Box>
          </Flex>
        </Container>
        <ServicePoint />
        <Box>
          <Container maxWidth={"7xl"} pb={10}>
            <Heading>Copywriting</Heading>
            <Text my={15}>
              Written content that goes along with design is key. Our
              copywriters understand the DNA of your brand and create written
              material for the design collaterals
            </Text>
          </Container>
        </Box>
      </Box>
      <TextBox
        heading="CASE STUDY"
        smallHeading="social media designs"
        subHeading="sneak peak into our social media marketing projects"
        content="Have a look at some of the Social Media Marketing work we have done for our clients over these years"
      />
      <FavWork />
      <ClientsLogo />
    </Stack>
  );
};

DesignAndBrandDevelopment.getLayout = function getLayout(
  DesignAndBrandDevelopment
) {
  return <InnerLayout>{DesignAndBrandDevelopment}</InnerLayout>;
};

export default DesignAndBrandDevelopment;
