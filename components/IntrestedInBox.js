import { Box, Container, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const IntrestedInBox = () => {
  const router = useRouter();

  return (
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
          <Heading
            display={
              router.pathname == "/services/web-design-and-development"
                ? "none"
                : "block"
            }
            onClick={() => router.push("/services/web-design-and-development")}
          >
            Website Development
          </Heading>
          <Heading
            display={
              router.pathname == "/services/social-media-agency-dubai"
                ? "none"
                : "block"
            }
            onClick={() => router.push("/services/social-media-agency-dubai")}
          >
            social media marketing
          </Heading>
          <Heading
            display={
              router.pathname === "/services/google-ads" ? "none" : "block"
            }
            onClick={() => router.push("/services/google-ads")}
          >
            Google Ads
          </Heading>
          <Heading
            display={
              router.pathname === "/services/search-engine-optimization"
                ? "none"
                : "block"
            }
            onClick={() => router.push("/services/search-engine-optimization")}
          >
            Search Engine Optimization
          </Heading>
          <Heading
            display={router.pathname === "/services/film" ? "none" : "block"}
            onClick={() => router.push("/services/film")}
          >
            Film
          </Heading>
          <Heading
            display={
              router.pathname === "/services/brand-development"
                ? "none"
                : "block"
            }
            onClick={() => router.push("/services/brand-development")}
          >
            Brand Development
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default IntrestedInBox;
