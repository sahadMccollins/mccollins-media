import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const PortfolioImage = ({ src, alt, height = "full" }) => (
  <Box
    overflow="hidden"
    borderRadius="lg"
    position="relative"
    transition="transform 0.3s ease"
    _hover={{ transform: "scale(1.02)" }}
    height={height}
  >
    <Box
      as="img"
      src={src}
      alt={alt}
      w="full"
      h="full"
      objectFit="cover"
      transition="transform 0.3s ease"
    />
  </Box>
);

const CaseStudyLayout = () => {
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const linkColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box
      bg={bgColor}
      py={20}
      mb={{ base: "20px !important", md: "125px !important" }}
    >
      <Container maxW="container.xl">
        {/* Header Section */}
        <Box mb={16}>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            color={textColor}
            mb={4}
          >
            Case Study
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="medium"
            color={textColor}
            mb={6}
          >
            Branding & Lettering
          </Heading>
          <Link
            href="#"
            color={linkColor}
            fontSize="lg"
            fontWeight="medium"
            _hover={{ textDecoration: "none", opacity: 0.8 }}
          >
            Portfolio Single
          </Link>
        </Box>

        {/* Image Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr" }}
          gap={8}
          height={{ base: "auto", md: "600px" }}
        >
          {/* Left Side - Single Large Image */}
          <GridItem height="full">
            <PortfolioImage
              src="/assets/image/servicePage/portfolio6.jpg"
              alt="Main branding showcase"
            />
          </GridItem>

          {/* Right Side - Two Stacked Images */}
          <GridItem>
            <Grid templateRows="1fr 1fr" gap={8} height="full">
              <GridItem>
                <PortfolioImage
                  src="/assets/image/servicePage/portfolio5.jpg"
                  alt="Live a life quote"
                />
              </GridItem>
              <GridItem>
                <PortfolioImage
                  src="/assets/image/servicePage/portfolio4.jpg"
                  alt="Punch your fears quote"
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudyLayout;
