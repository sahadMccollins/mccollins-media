import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Badge,
  Flex,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import {
  ArrowUpRight,
  Camera3d,
  Home,
  Building2,
  Layout,
  Map,
  Eye,
  BarChart2,
  ChevronRight,
} from "lucide-react";

const RealEstateServices = () => {
  const colors = {
    gradient: "linear-gradient(135deg, #FFF9E5 0%, #FFF3CC 100%)",
    primary: "yellow.400",
    secondary: "yellow.500",
    accent: "orange.400",
    text: "gray.800",
    subtext: "gray.600",
    cardHover: "yellow.50",
    badgeBg: "yellow.100",
    badgeText: "yellow.800",
    buttonGradient: "linear(to-r, yellow.400, orange.400)",
    benefitBg: "yellow.50",
    benefitDot: "orange.400",
  };

  const services = [
    {
      icon: Camera3d,
      title: "Virtual Property Tours",
      shortDesc:
        "Immersive 360° virtual property tours accessible from anywhere",
      description:
        "Our VR tours allow clients to walk through properties from anywhere, offering a fully immersive experience that includes 360-degree views and detailed spatial navigation. This is ideal for showcasing luxury listings, international properties, or newly constructed homes that aren’t yet open for in-person tours.",
      benefits: [
        "Reduced need for physical visits",
        "Time-saving for clients and agents",
        "Informed remote decision making",
        "24/7 property accessibility",
        "Enhanced international reach",
      ],
    },
    {
      icon: Home,
      title: "AR Home Staging",
      shortDesc: "Transform empty spaces with virtual furniture and decor",
      description:
        "Using AR, we transform vacant properties by overlaying virtual furniture and decor. Prospective buyers can visualize how their future home could look with different interior styles, customized to their preferences.",
      benefits: [
        "Cost-effective staging solution",
        "Interactive customization",
        "Multiple style options",
        "Instant visualization",
        "Enhanced buyer engagement",
      ],
    },
    {
      icon: Layout,
      title: "3D Floor Plans",
      shortDesc: "Interactive models with detailed spatial visualization",
      description:
        "With our 3D floor plans and interactive models, clients can view a property's layout from all angles, zooming in on details and exploring rooms in context. This provides a more comprehensive understanding of the space compared to traditional floor plans.",
      benefits: [
        "Comprehensive spatial understanding",
        "Detailed room exploration",
        "Interactive measurements",
        "Design visualization",
        "Better decision making",
      ],
    },
    {
      icon: Building2,
      title: "Mixed Reality Centers",
      shortDesc: "Immersive sales centers with VR-enhanced experiences",
      description:
        "For real estate developments, we design VR-enhanced sales centers that give potential buyers a taste of their future community. These centers feature MR experiences that combine physical elements, like sample interiors, with digital overlays for an immersive environment.",
      benefits: [
        "Memorable buyer experiences",
        "Increased sales confidence",
        "Pre-construction visualization",
        "Interactive community preview",
        "Enhanced presentation tools",
      ],
    },
    {
      icon: Map,
      title: "Location-Based AR",
      shortDesc: "Real-time neighborhood insights and property information",
      description:
        "Our location-based AR technology enables clients to receive real-time information about a property's surroundings, including nearby amenities, schools, transport links, and neighborhood insights, enhancing decision-making.",
      benefits: [
        "Real-time area insights",
        "Enhanced property context",
        "Neighborhood discovery",
        "Transit information",
        "Local amenity mapping",
      ],
    },
  ];

  return (
    <Box py={20} bg={colors.gradient} position="relative" overflow="hidden">
      {/* Animated Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        bgImage="linear-gradient(45deg, #FFB800 25%, transparent 25%, transparent 75%, #FFB800 75%, #FFB800)"
        bgSize="60px 60px"
        animation="moveBackground 30s linear infinite"
        sx={{
          "@keyframes moveBackground": {
            "0%": { transform: "translateX(0) translateY(0)" },
            "100%": { transform: "translateX(60px) translateY(60px)" },
          },
        }}
      />

      <Container maxW="8xl" px={4}>
        <VStack spacing={16}>
          {/* Header Section */}
          <VStack spacing={6} textAlign="center" maxW="3xl" mx="auto">
            <Badge
              bg={colors.badgeBg}
              color={colors.badgeText}
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Real Estate Solutions
            </Badge>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              lineHeight="1.2"
              bgGradient={colors.buttonGradient}
              bgClip="text"
              mb={4}
            >
              AR & VR Solutions for Real Estate
            </Heading>
            <Text
              fontSize="lg"
              color={colors.subtext}
              maxW="2xl"
              lineHeight="tall"
            >
              McCollins Media's AR and VR services redefine property showcasing,
              creating immersive experiences that transform how buyers interact
              with real estate.
            </Text>
          </VStack>

          {/* Services Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {services.map((service, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                  borderColor: colors.primary,
                }}
                position="relative"
                role="group"
                borderWidth="1px"
                borderColor="transparent"
              >
                {/* Card Header */}
                <Box p={6}>
                  <Flex justify="space-between" align="start" mb={4}>
                    <Icon
                      as={service.icon}
                      boxSize={10}
                      color={colors.accent}
                    />
                    <Icon
                      as={ArrowUpRight}
                      boxSize={5}
                      color="gray.400"
                      transform="rotate(0deg)"
                      transition="all 0.3s"
                      _groupHover={{
                        transform: "rotate(45deg)",
                        color: colors.accent,
                      }}
                    />
                  </Flex>
                  <Heading size="md" mb={3} color={colors.text}>
                    {service.title}
                  </Heading>
                  <Text color={colors.subtext} fontSize="sm" mb={4}>
                    {service.shortDesc}
                  </Text>
                  <Text color={colors.subtext} fontSize="sm" mb={6}>
                    {service.description}
                  </Text>
                </Box>

                {/* Benefits Section */}
                <Box
                  bg={colors.benefitBg}
                  p={6}
                  borderTop="1px"
                  borderColor="yellow.100"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color={colors.text}
                    mb={4}
                  >
                    Key Benefits
                  </Text>
                  <VStack align="stretch" spacing={3}>
                    {service.benefits.map((benefit, benefitIndex) => (
                      <Flex key={benefitIndex} align="center" gap={3}>
                        <Box
                          w={1.5}
                          h={1.5}
                          borderRadius="full"
                          bg={colors.benefitDot}
                        />
                        <Text fontSize="sm" color={colors.subtext}>
                          {benefit}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          {/* Why Choose Us Section */}
          <Box
            bg="white"
            p={8}
            borderRadius="2xl"
            boxShadow="xl"
            width="full"
            borderWidth="1px"
            borderColor="yellow.100"
          >
            <VStack spacing={6} align="start">
              <Heading size="lg" color={colors.text}>
                Why Choose McCollins Media?
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} width="full">
                {[
                  "Customized Solutions",
                  "Data-Driven Insights",
                  "Seamless Integration",
                ].map((title, index) => (
                  <Box
                    key={index}
                    p={6}
                    bg={colors.benefitBg}
                    borderRadius="xl"
                    transition="all 0.2s"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "md",
                    }}
                  >
                    <Heading size="sm" mb={2} color={colors.text}>
                      {title}
                    </Heading>
                    <Text fontSize="sm" color={colors.subtext}>
                      {index === 0 &&
                        "Tailored experiences designed to meet specific business goals and enhance buyer confidence."}
                      {index === 1 &&
                        "Comprehensive analytics to optimize strategies based on actual engagement data."}
                      {index === 2 &&
                        "Smooth integration with existing platforms for a cohesive experience."}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* CTA Section */}
          <Button
            size="lg"
            bgGradient={colors.buttonGradient}
            color="white"
            _hover={{
              bgGradient: "linear(to-r, yellow.500, orange.500)",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            rightIcon={<ChevronRight />}
            borderRadius="full"
            px={8}
            py={7}
            transition="all 0.2s"
          >
            Start Your Digital Transformation
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default RealEstateServices;
