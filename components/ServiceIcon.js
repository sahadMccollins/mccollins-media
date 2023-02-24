import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const ServiceIcon = () => {
  const router = useRouter();

  return (
    <Stack className="serviceIcon">
      <Container maxWidth={"7xl"} pb="20">
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacingX="40px"
          spacingY="60px"
          alignItems={"center"}
          mt="75px"
          textAlign={"center"}
        >
          <Box
            onClick={() =>
              router.push(
                "/services/web-design-and-development/shopify-website-development"
              )
            }
            className="icon"
          >
            <Image
              src="/assets/image/techLogo/shopify.svg"
              width="97px"
              height="97px"
              margin={"auto"}
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              shopify
            </Text>
          </Box>
          <Box
            onClick={() =>
              router.push("/services/web-design-and-development/sitecore")
            }
            className="icon"
          >
            <Image
              src="/assets/image/techLogo/site.png"
              width="97px"
              height="97px"
              margin={"auto"}
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              Sitecore
            </Text>
          </Box>
          <Box
            onClick={() =>
              router.push("/services/web-design-and-development/wordpress")
            }
            className="icon"
          >
            <Image
              src="/assets/image/techLogo/wordpress.svg"
              width="97px"
              height="97px"
              margin={"auto"}
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              Wordpress
            </Text>
          </Box>
          <Box
            onClick={() => router.push("/services/web-design-and-development/")}
            className="icon"
          >
            <Image
              src="/assets/image/techLogo/web.jpg"
              width="97px"
              height="97px"
              margin={"auto"}
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              Website Landing Page
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export default ServiceIcon;
