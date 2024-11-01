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
  return (
    <Box py={16} bg="white">
      <Container maxW="7xl" py={{ base: 4, md: 16 }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={12}
          alignItems={"center"}
        >
          {/* Left Column */}
          <Stack spacing={8} alignSelf={"center"}>
            <Heading
              fontSize={{ base: "2xl", md: "5xl" }}
              lineHeight="1.1"
              fontWeight="bold"
            >
              How we Plan to
              <br />
              Disrupt the Strategy
            </Heading>

            <Text color="gray.600" fontSize="lg">
              In today’s digital landscape, a well-thought-out Google Ad
              strategy can transform a brand’s visibility, engagement, and
              revenue. Especially in a dynamic market like Dubai, where
              competition is fierce, having a targeted approach to Google Ads is
              crucial. McCollins Media specializes in crafting customized Google
              Ad Management strategies tailored to resonate with local and
              global audiences. Here’s how partnering with McCollins Media can
              elevate your Google Ad strategy to achieve optimal performance.
            </Text>

            <Stack spacing={4}>
              <HStack spacing={3} alignItems={"start"}>
                <Icon as={CheckCircle} color="blue.500" boxSize={5} mt={1} />
                <Text fontSize="lg">
                  <b>Keyword-Driven Targeting</b>
                  <br />
                  McCollins Media starts by conducting in-depth keyword research
                  to identify high-converting keywords relevant to your brand.
                  Using the latest SEO tools, they pinpoint search terms that
                  can capture your audience's interest, ensuring that your ads
                  reach those most likely to engage and convert.
                </Text>
              </HStack>
              <HStack spacing={3} alignItems={"start"}>
                <Icon as={CheckCircle} color="blue.500" boxSize={5} mt={1} />
                <Text fontSize="lg">
                  <b>Advanced Audience Segmentation</b>
                  <br />
                  Understanding the nuances of GCC's diverse audience is key.
                  McCollins Media segments audiences based on demographics,
                  interests, and purchasing behavior, allowing for a more
                  personalized ad experience. This ensures that your ads are
                  tailored to specific customer profiles, driving higher
                  engagement and return on ad spend.
                </Text>
              </HStack>
              <HStack spacing={3} alignItems={"start"}>
                <Icon as={CheckCircle} color="blue.500" boxSize={5} mt={1} />
                <Text fontSize="lg">
                  <b>Data-Driven Optimization</b>
                  <br />
                  With a focus on maximizing ad performance, McCollins Media
                  continuously monitors and optimizes ad campaigns using data
                  insights. They analyze metrics such as click-through rates,
                  conversion rates, and user behavior to refine strategies in
                  real time, ensuring that each campaign consistently
                  delivers results.
                </Text>
              </HStack>
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
