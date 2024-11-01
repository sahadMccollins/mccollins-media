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
      <Container maxW="6xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          gap={8}
          alignItems="center"
        >
          {/* FAQ Column */}
          <GridItem alignSelf={"start"}>
            <Accordion allowMultiple>
              <FAQItem question="What is Google Ad Management?">
                Google Ad Management is the process of creating, managing, and
                optimizing Google Ads campaigns to drive traffic, increase brand
                visibility, and generate leads or sales. This includes managing
                Search, Display, Video, Shopping, and Remarketing ads.
              </FAQItem>

              <FAQItem question="How do you determine the right keywords for my business?">
                We conduct in-depth keyword research using industry-leading
                tools, focusing on high-converting keywords relevant to your
                target audience. This ensures your ads reach those most likely
                to engage with and benefit from your product or service.
              </FAQItem>

              <FAQItem question="What types of Google Ads do you manage?">
                We manage all types of Google Ads, including Search, Display,
                Shopping, Video, and Remarketing ads. Each ad type has unique
                benefits, and we recommend the best mix based on your business
                goals.
              </FAQItem>

              <FAQItem question="How do you optimize my Google Ads campaign?">
                We use data-driven techniques to monitor and optimize your
                campaigns. By tracking metrics like CTR, conversion rate, and
                cost per conversion, we adjust bids, ad content, and targeting
                parameters to improve performance continually.
              </FAQItem>

              <FAQItem question="How will I know if my Google Ads are working?">
                We provide detailed monthly reports showing key performance
                metrics such as impressions, CTR, conversions, and ROI. These
                reports offer clear insights into how the campaigns are
                performing and the value they’re delivering to your business.
              </FAQItem>
              <FAQItem question="How much does Google Ad Management cost?">
                Our pricing varies based on the complexity and scope of the
                campaigns. Typically, costs include an ad spend budget and a
                management fee. We work with you to set a budget that aligns
                with your goals and industry standards.
              </FAQItem>
              <FAQItem question="Do you offer Remarketing?">
                Yes, we offer Remarketing to re-engage users who have previously
                interacted with your website. Remarketing is an effective way to
                stay top-of-mind, boost conversions, and improve ROI by
                targeting users with relevant ads across the web.
              </FAQItem>
              <FAQItem question="Can you help with Google Shopping Ads?">
                Absolutely. We can create, manage, and optimize Google Shopping
                Ads to display your products directly to users searching for
                items like yours. These ads are ideal for ecommerce businesses
                looking to boost product visibility and drive online sales.
              </FAQItem>
              <FAQItem question="How long does it take to see results?">
                Results vary depending on factors like competition and budget.
                For most campaigns, initial results start appearing within the
                first month, while significant improvements and ROI are usually
                visible within three to six months of consistent management and
                optimization.
              </FAQItem>
              <FAQItem question="Why choose our agency for Google Ad Management?">
                Our agency specializes in a data-driven, strategic approach to
                Google Ad Management. With our experience in audience targeting,
                keyword strategy, and continuous optimization, we help maximize
                your ad spend and deliver results aligned with
                your business goals.
              </FAQItem>
            </Accordion>
          </GridItem>

          {/* Image Column */}
          <GridItem>
            <Box overflow="hidden" position="relative">
              <Image
                src="/assets/image/servicePage/faq-img-1.jpg"
                alt="VR Headset"
                h={{ base: "lg", md: "3xl" }}
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
