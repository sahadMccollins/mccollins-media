import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const FAQItem = ({ question, children }) => {
  return (
    <AccordionItem border="none" mb={4}>
      <AccordionButton
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        _hover={{ bg: useColorModeValue("yellow.200", "yellow.500") }}
        borderRadius="md"
        boxShadow="sm"
      >
        <Box flex="1" textAlign="left" fontWeight="medium" fontSize="lg">
          {question}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4} pt={4} px={4}>
        <Text color={useColorModeValue("gray.600", "gray.400")}>
          {children}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

const FAQSection = () => {
  return (
    <Box as="section" py={16} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="5xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          gap={8}
          alignItems="center"
        >
          {/* FAQ Column */}
          <GridItem alignSelf={"start"}>
            <Accordion allowMultiple>
              <FAQItem question="What Should Be Listed On A Business Card?">
                Nullam pulvinar, enim ornare tristique vehicula, massa est
                eleifend velit pellentesque hendrerit. Morbi condimentum in elit
                in lobortis. Maurisvit velit erat. Nunc in urna sit amet nisi
                venenatis listed on a business card.
              </FAQItem>

              <FAQItem question="What Is The Standard Size Of Business Cards?">
                Nullam pulvinar, enim ornare tristique vehicula, massa est
                eleifend velit pellentesque hendrerit. Morbi condimentum in elit
                in lobortis.
              </FAQItem>

              <FAQItem question="What Should Be Listed On A Business Card?">
                Nullam pulvinar, enim ornare tristique vehicula, massa est
                eleifend velit pellentesque hendrerit. Morbi condimentum in elit
                in lobortis.
              </FAQItem>

              <FAQItem question="How Do I Design My Own Business Cards?">
                Nullam pulvinar, enim ornare tristique vehicula, massa est
                eleifend velit pellentesque hendrerit. Morbi condimentum in elit
                in lobortis.
              </FAQItem>

              <FAQItem question="Design My Own Business Cards?">
                Nullam pulvinar, enim ornare tristique vehicula, massa est
                eleifend velit pellentesque hendrerit. Morbi condimentum in elit
                in lobortis.
              </FAQItem>
            </Accordion>
          </GridItem>

          {/* Image Column */}
          <GridItem>
            <Box overflow="hidden" position="relative">
              <Image
                src="/assets/image/servicePage/faq-img-1.jpg"
                alt="VR Headset"
                h="md"
                objectFit="cover"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSection;
