import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const stageInfo = {
  "Awareness Stage: Drive Initial Interest": {
    title: "Awareness Stage: Drive Initial Interest",
    content: `At the top of the funnel, the goal is to reach a broad audience and introduce them to your brand. Use Display Ads and Video Ads with engaging visuals and attention-grabbing messaging to create brand awareness. Target keywords and topics relevant to your industry and audience to attract clicks and impressions, bringing new visitors to your website.

Goal: Maximize impressions and clicks.
Metrics to Monitor: Impressions, click-through rate (CTR), and reach.`,
  },
  "Consideration Stage: Engage and Inform": {
    title: "Consideration Stage: Engage and Inform",
    content: `Once potential customers are familiar with your brand, move them into the consideration phase by targeting them with Search Ads and Remarketing Ads. At this stage, provide informative content like product comparisons, case studies, or benefits-focused ads to help users understand the value of your offerings.

Goal: Increase engagement and drive users to your product or service pages.
Metrics to Monitor: CTR, session duration, and page engagement.`,
  },
  "Conversion Stage: Drive Action": {
    title: "Conversion Stage: Drive Action",
    content: `The bottom of the funnel is where users are ready to make a purchase decision. Focus on conversion-optimized Search Ads and remarketing ads targeted specifically at users who visited key product pages or took actions that indicate purchase intent. Include compelling calls to action, limited-time offers, or discounts to encourage conversions.

Goal: Drive conversions and generate sales.
Metrics to Monitor: Conversion rate, cost per conversion, and ROI.`,
  },
  "Post-Purchase Stage: Build Loyalty and Retention": {
    title: "Post-Purchase Stage: Build Loyalty and Retention",
    content: `After a purchase, continue engaging with customers using remarketing ads for complementary products or services, or exclusive deals for repeat buyers. Use customer match to re-engage past buyers and build loyalty, encouraging them to become brand advocates.

Goal: Increase customer lifetime value.
Metrics to Monitor: Repeat purchases, customer retention rate, and customer lifetime value (CLV).`,
  },
};

const ServiceLink = ({ title, isActive, onClick }) => (
  <Box
    as="button"
    width="100%"
    onClick={onClick}
    _hover={{ textDecoration: "none" }}
  >
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
  </Box>
);

const GoogleAdsSec1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedStage, setSelectedStage] = useState(null);

  const handleStageClick = (title) => {
    setSelectedStage(stageInfo[title]);
    onOpen();
  };

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
                the buyer's journey, from awareness to conversion. Here's how to
                structure a powerful Google Ads-based sales funnel:
              </Text>

              <Stack spacing={4} width="100%">
                {Object.keys(stageInfo).map((title) => (
                  <ServiceLink
                    key={title}
                    title={title}
                    isActive={selectedStage?.title === title}
                    onClick={() => handleStageClick(title)}
                  />
                ))}
              </Stack>
            </VStack>
          </MotionBox>
        </Flex>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
          >
            {selectedStage?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py={6}>
            <VStack align="stretch" spacing={4}>
              {selectedStage?.content.split("\n\n").map((paragraph, index) => (
                <Text key={index} color="gray.700">
                  {paragraph}
                </Text>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GoogleAdsSec1;
