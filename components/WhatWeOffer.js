import { Box, Container, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const WhatWeOffer = () => {
  const router = useRouter();
  return (
    <Box className="creative-head" pb={10} style={{ marginTop: "50px" }}>
      <Heading
        as={"h4"}
        className="main-h2"
        pt="20"
        textAlign="center"
        color={"#FFDE11"}
        textTransform="uppercase"
      >
        what we offer
      </Heading>
      <Container maxWidth="4xl">
        <Box className="intrestedH2">
          <Heading
            onClick={() =>
              router.push(
                "/services/social-media-agency-dubai/content-creation "
              )
            }
          >
            Content Creation
          </Heading>
          <Heading
            onClick={() =>
              router.push(
                "/services/social-media-agency-dubai/digital-media-buying"
              )
            }
          >
            Digital Media Buying
          </Heading>
          <Heading
            onClick={() =>
              router.push(
                "/services/social-media-agency-dubai/campaign-development"
              )
            }
          >
            Campaign Development
          </Heading>
          <Heading
            onClick={() =>
              router.push(
                "/services/social-media-agency-dubai/influencer-marketing"
              )
            }
          >
            Influencer Marketing
          </Heading>
          <Heading
            onClick={() =>
              router.push(
                "/services/social-media-agency-dubai/community-management"
              )
            }
          >
            Community Management
          </Heading>
          <Heading
            onClick={() =>
              router.push(
                "/services/social-media-agency-dubai/brand-reputation-management"
              )
            }
          >
            Brand Reputation Management
          </Heading>
          <Heading
            onClick={() =>
              router.push("/services/social-media-agency-dubai/ar-experiences")
            }
          >
            AR Experiences
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeOffer;
