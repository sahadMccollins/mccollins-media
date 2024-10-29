import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Stack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";

const StrategySection = () => {
  const features = [
    "Agile web design and development methodology",
    "Award winning web solutions and sites",
    "Competitive rates for web design and development talen",
  ];

  return (
    <Box py={16} bg="white">
      <Container maxW="7xl" py={16}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12}>
          {/* Left Column */}
          <Stack spacing={8} alignSelf={"center"}>
            <Heading fontSize="5xl" lineHeight="1.1" fontWeight="bold">
              How we Plan to
              <br />
              Disrupt the Strategy
            </Heading>

            <Text color="gray.600" fontSize="lg">
              We're based in NYC, which is home to so many great companies and
              communities, but it's also where we started out as a bootstrapped
              team of two people working from their apartments.
            </Text>

            <Stack spacing={4}>
              {features.map((feature, index) => (
                <HStack key={index} spacing={3}>
                  <Icon as={CheckCircle} color="blue.500" boxSize={5} />
                  <Text fontSize="lg">{feature}</Text>
                </HStack>
              ))}
            </Stack>
          </Stack>

          {/* Right Column */}
          <Box>
            <Stack spacing={8}>
              <Box>
                <Text fontSize="2xl" fontWeight="semibold" mb={4}>
                  Sales Report
                </Text>

                {/* Legend */}
                <HStack spacing={8} mb={4}>
                  <HStack>
                    <Box w={3} h={3} bg="blue.500" borderRadius="full" />
                    <Text color="gray.600">My product</Text>
                  </HStack>
                  <HStack>
                    <Box w={3} h={3} bg="red.400" borderRadius="full" />
                    <Text color="gray.600">Competitor</Text>
                  </HStack>
                </HStack>

                {/* Sales Image */}
                <Box>
                  <img
                    src="/assets/image/servicePage/Sales-thumb.png"
                    alt="Sales Report"
                    style={{
                      height: "350px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>

              {/* Metrics */}
              <Grid
                templateColumns="1fr 1fr"
                bg="#fdce1a"
                p={6}
                borderRadius="xl"
                color="black"
                gap={8}
              >
                <Box>
                  <Text fontSize="lg">Sales</Text>
                  <Text fontSize="3xl" fontWeight="bold">
                    $31,092
                  </Text>
                  <Text fontSize="sm" opacity={0.8}>
                    + 4.2% from last year
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg">Marketing</Text>
                  <Text fontSize="3xl" fontWeight="bold">
                    $29,128
                  </Text>
                  <Text fontSize="sm" opacity={0.8}>
                    + 2.1% from last year
                  </Text>
                </Box>
              </Grid>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default StrategySection;
