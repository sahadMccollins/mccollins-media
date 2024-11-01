import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const ServiceLink = ({ title, isActive }) => (
  <Link href="#" _hover={{ textDecoration: "none" }} width="100%">
    <MotionBox whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
      <HStack
        p={4}
        borderWidth="1px"
        borderColor={isActive ? "#fdce1a" : "gray.200"}
        borderRadius="lg"
        _hover={{ borderColor: "#fdce1a" }}
        justify="space-between"
      >
        <Text
          fontSize="lg"
          fontWeight="medium"
          color={isActive ? "blue.500" : "gray.800"}
        >
          {title}
        </Text>
        <Icon
          as={ChevronRightIcon}
          w={5}
          h={5}
          transition="transform 0.2s"
          _groupHover={{ transform: "translateX(4px)" }}
        />
      </HStack>
    </MotionBox>
  </Link>
);

const GoogleAdsSec1 = () => {
  return (
    <Box py={16} bg="white">
      <Container maxW="7xl">
        <Flex direction={{ base: "column", md: "row" }} align="center" gap={12}>
          {/* Left side with image and stats */}
          <Box width={{ base: "100%", md: "50%" }} position="relative">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              position="relative"
            >
              <Box position="relative" width="100%" height="500px">
                <Image
                  src="/assets/image/servicePage/developer.jpg"
                  alt="Developer"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "0.5rem" }}
                />
              </Box>
            </MotionBox>
          </Box>

          {/* Right side with content */}
          <MotionBox
            width={{ base: "100%", md: "50%" }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <VStack align="start" spacing={6}>
              <Text color="#fdce1a" fontWeight="medium">
                GOOGLE ADS
              </Text>

              <Heading as="h2" size="lg" mt={"10px !important"}>
                Result Driven Google Ad
                <br />
                Management to scale your brand
              </Heading>

              <Text color="gray.600">
                Creating a sales funnel with Google Ad Management is an
                effective way to guide potential customers through each stage of
                the buyer’s journey, from awareness to conversion. Here’s how to
                structure a powerful Google Ads-based sales funnel:
              </Text>

              <Stack spacing={4} width="100%">
                <ServiceLink title="Awareness Stage: Drive Initial Interest" />
                <ServiceLink title="Consideration Stage: Engage and Inform" />
                <ServiceLink title="Conversion Stage: Drive Action" />
                <ServiceLink title="Post-Purchase Stage: Build Loyalty and Retention" />
              </Stack>
            </VStack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default GoogleAdsSec1;
