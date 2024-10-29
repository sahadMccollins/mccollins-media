import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Mouse, Cloud, FileEdit } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, category, ...rest }) => {
  return (
    <VStack
      align="flex-start"
      flexDir={"row"}
      alignItems={"center"}
      spacing={4}
      p={6}
      {...rest}
    >
      <Box color="blue.500" mr={10}>
        <Icon size={24} strokeWidth={1.5} />
      </Box>
      <VStack align="flex-start" spacing={1}>
        <Heading size="md" fontWeight="semibold">
          {title}
        </Heading>
        <Text
          color={useColorModeValue("gray.600", "gray.400")}
          fontSize="sm"
          textTransform="uppercase"
        >
          {category}
        </Text>
      </VStack>
    </VStack>
  );
};

const Content = () => {
  return (
    <Box as="section" pb={20} bg={useColorModeValue("white", "gray.900")}>
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          {/* Header Section */}
          <VStack spacing={6} align="stretch">
            <Text color="blue.500" fontSize="sm" fontWeight="medium">
              Business GROWTH
            </Text>

            <Heading
              size={{ base: "lg", md: "2xl" }}
              lineHeight="1.2"
              fontWeight="semibold"
              mb={10}
            >
              Google Ad Management refers to the process of creating, managing,
              and optimizing Google Ads campaigns for brands.
            </Heading>

            <Text
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize="lg"
            >
              Google Ads is an online advertising platform where businesses can
              create and display ads to reach potential customers when they
              search for specific products or services on Google. Being an
              official Google Partner, McCollins Media aims to be one of the
              best google ad management agencies in the UAE. Search Engine
              Marketing in Dubai is key for any business to reach their relevant
              target audience. With lead generation and conversion campaigns,
              brands are able to see their short term targets materialize a lot
              more faster.
            </Text>
          </VStack>

          {/* Services Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 2, md: 8 }}
            mt={"20px !important"}
          >
            <ServiceCard
              icon={Mouse}
              title="Information technology"
              category="CONSULTING"
            />
            <ServiceCard
              icon={Cloud}
              title="Easy to edit process"
              category="IT SERVICE"
            />
            <ServiceCard
              icon={FileEdit}
              title="Wordpress table design"
              category="IT BUSINESS"
            />
          </SimpleGrid>

          {/* Bottom Text */}
          <Text
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize="lg"
            mt={"20px !important"}
          >
            By effectively managing Google Ads campaigns, businesses can
            increase their visibility and reach more potential customers,
            ultimately leading to increased sales and revenue. Regenerate
            response. Our inhouse team of SEM experts in Dubai, work on several
            Google Ad Management Campaigns in the GCC and worldwide to help
            brands reach the right target audience.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Content;
