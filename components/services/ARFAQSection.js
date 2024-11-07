import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import { Play } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What are the key benefits of AR/VR marketing?",
      answer:
        "AR/VR marketing offers immersive experiences, higher engagement rates, better data insights, and reduced return rates for products. It enables customers to make more informed decisions through virtual try-ons and demonstrations.",
    },
    {
      question: "How can small businesses implement AR/VR solutions?",
      answer:
        "Small businesses can start with simple AR filters for social media, virtual product previews, or 360-degree virtual tours. Many platforms now offer affordable, ready-to-use AR/VR solutions that don't require extensive technical expertise.",
    },
    {
      question: "What industries benefit most from AR/VR marketing?",
      answer:
        "While AR/VR can benefit any industry, retail, real estate, automotive, fashion, beauty, and hospitality see particularly strong results. These industries leverage immersive experiences to enhance customer decision-making and engagement.",
    },
    {
      question: "How do you measure ROI on AR/VR marketing?",
      answer:
        "ROI can be measured through engagement metrics, conversion rates, reduction in returns, time spent with AR/VR content, and customer feedback. Advanced analytics can track eye movement and interaction patterns within virtual experiences.",
    },
  ];

  return (
    <Box py={16} bg="gray.50">
      <Container maxW="7xl" px={4}>
        <Heading fontSize="3xl" textAlign="center" mb={12} color="gray.800">
          Frequently Asked Questions
        </Heading>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          align="start"
          alignItems={"center"}
        >
          {/* FAQ Column */}
          <Box flex="1" bg="white" borderRadius="lg" p={6} boxShadow="sm">
            <Accordion allowMultiple>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} border="none" mb={4}>
                  <h2>
                    <AccordionButton
                      bg="yellow.50"
                      _hover={{ bg: "yellow.100" }}
                      borderRadius="lg"
                      p={4}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontSize="lg" fontWeight="semibold">
                          {faq.question}
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} pt={4} px={4}>
                    <Text color="gray.600">{faq.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          {/* Video Column */}
          <Box
            flex="1"
            borderRadius="lg"
            overflow="hidden"
            placeItems={"center"}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "503px",
                height: "540px",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
            >
              <source src="/ar/aidesktop-sq.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQSection;
