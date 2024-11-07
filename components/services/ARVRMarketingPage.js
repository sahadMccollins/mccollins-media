import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button,
  Icon,
  Flex,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Building2,
  Store,
  UtensilsCrossed,
  ChevronRight,
  ShoppingBag,
  Store3d,
  Layout,
  Users2,
  Headphones,
  BarChart3,
  Glasses,
  Smartphone,
  Globe,
  Target,
  MessageSquare,
  Box as BoxIcon,
  ArrowRight,
} from "lucide-react";
import FAQSection from "./ARFAQSection";
import RealEstateServices from "./RealEstateServices";

const ARVRMarketingPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("real-estate");

  // Updated color scheme for yellow theme
  const cardBg = useColorModeValue("white", "gray.800");
  const selectedBorder = useColorModeValue("yellow.500", "yellow.400");
  const hoverBorder = useColorModeValue("yellow.400", "yellow.300");
  const primaryGradient = "linear(to-r, yellow.400, orange.300)";
  const secondaryColor = "yellow.500";

  const industries = [
    {
      id: "real-estate",
      name: "Real Estate",
      icon: Building2,
      description:
        "Transform property experiences with immersive virtual tours",
    },
    {
      id: "retail",
      name: "Retail",
      icon: Store,
      description:
        "Revolutionize shopping with virtual try-ons and 3D showrooms",
    },
    {
      id: "hospitality",
      name: "Hospitality",
      icon: UtensilsCrossed,
      description: "Create memorable guest experiences through AR/VR solutions",
    },
  ];

  const trends = [
    {
      icon: ShoppingBag,
      title: "Immersive Shopping Experiences",
      description:
        "Retailers and e-commerce brands increasingly use AR to enable customers to try on products virtually—from fashion items to makeup and furniture. By 2025, advancements in AR try-on technology allow for more realistic and personalized interactions, helping brands reduce return rates and boost customer satisfaction.",
      example:
        "Fashion brands are leveraging 3D avatars and virtual mirrors, allowing shoppers to visualize outfits or accessories in real-time, helping customers make informed choices instantly.",
    },
    {
      icon: Store3d,
      title: "Virtual Showrooms and Pop-Up Stores",
      description:
        "Virtual showrooms and pop-up shops are gaining momentum as cost-effective solutions to reach a broader audience. Brands create branded, interactive environments that let customers explore product catalogs and engage with products in an immersive setting, removing the physical limitations of traditional retail.",
      example:
        "Brands can integrate VR headsets or 360-degree web-based experiences, giving customers a seamless way to “enter” a virtual store from their homes.",
    },
    {
      icon: Layout,
      title: "Personalized AR/VR Ads",
      description:
        "In 2025, personalized VR ads allow brands to tailor marketing experiences, from car test drives to product walkthroughs. This level of customization enhances relevance and increases customer engagement by providing ads that feel less intrusive and more interactive.",
      example:
        "Automotive brands enable prospective buyers to experience vehicle interiors and test drive models via VR, making the journey from awareness to purchase more engaging.",
    },
    {
      icon: Users2,
      title: "AR for Social Media Engagement",
      description:
        "Social platforms integrate AR effects and filters to help brands create memorable, shareable content. In 2025, AR technology is more accessible on social media, with platforms like Instagram, Snapchat, and TikTok offering sophisticated AR tools for interactive marketing campaigns.",
      example:
        "Beauty and cosmetic brands use AR filters that let users “apply” products virtually, leading to higher engagement and stronger brand loyalty.",
    },
    {
      icon: Headphones,
      title: "Hyper-Realistic VR Brand Storytelling",
      description:
        "Brands use VR for immersive storytelling, creating branded narratives that allow customers to experience a product or brand's journey in real time.",
      example:
        "Sustainability-focused brands create VR experiences showing eco-friendly production processes.",
    },
    {
      icon: BarChart3,
      title: "Enhanced Data Collection",
      description:
        "With AR/VR, brands gain access to unique behavioral data, allowing for more precise targeting. Eye-tracking in VR, for example, reveals which products draw the most attention, while heatmaps in AR show which features users explore most.",
      example:
        "Marketers can use these insights to optimize campaigns and improve product displays, enhancing personalization and driving better ROI on marketing efforts.",
    },
    {
      icon: MessageSquare,
      title: "Mixed Reality Events",
      description:
        "Mixed Reality, which blends AR and VR, is expected to play a significant role in experiential marketing. MR enables brands to create interactive event experiences that combine the physical and virtual worlds, offering engaging, immersive events for product launches or brand activations.",
      example:
        "Brands hosting conferences or product launches use MR to create holographic displays or interactive games, transforming the user experience and deepening engagement.",
    },
    {
      icon: Globe,
      title: "Cross-Platform AR Advertising",
      description:
        "By 2025, AR ads are seamlessly integrated across platforms, from social media and e-commerce sites to digital signage in retail spaces. AR advertising campaigns are now capable of delivering a consistent, interactive experience across multiple devices and channels, increasing reach and consistency in brand messaging.",
      example:
        "A skincare brand might have AR ads on Instagram where users can virtually test products, as well as in-store displays that offer AR product demos via QR codes.",
    },
    {
      icon: Target,
      title: "Try Before You Buy AR",
      description:
        "For e-commerce brands, AR enables “Try Before You Buy” experiences that reduce hesitation in online purchases. AR-enhanced product previews allow customers to test the look or fit of items from the comfort of home, improving conversion rates and reducing return costs.",
      example:
        "Furniture and home decor brands offer AR capabilities for customers to see how products will look in their spaces before making a purchase, leading to more confident buying decisions.",
    },
  ];

  const realEstateServices = [
    {
      title: "Virtual Property Tours",
      description:
        "Our VR tours allow clients to walk through properties from anywhere, offering fully immersive experiences with 360-degree views and detailed spatial navigation.",
      benefits:
        "Reduces physical visits, saves time, enables informed remote decisions",
    },
    {
      title: "AR Home Staging",
      description:
        "Transform vacant properties by overlaying virtual furniture and decor, helping buyers visualize their future home with different interior styles.",
      benefits: "Cost-effective, interactive, personalized visualization",
    },
    {
      title: "3D Floor Plans",
      description:
        "Interactive 3D models allow viewing property layouts from all angles, with detailed room exploration and spatial understanding.",
      benefits:
        "Enhanced spatial understanding, perfect for off-plan properties",
    },
    {
      title: "Mixed Reality Sales Centers",
      description:
        "VR-enhanced sales centers that combine physical elements with digital overlays for an immersive environment.",
      benefits:
        "Creates memorable experiences, drives interest in off-plan sales",
    },
    {
      title: "Location-Based AR",
      description:
        "Provide real-time information about property surroundings, including amenities, schools, and transport links.",
      benefits: "Enhanced decision-making, streamlined sales process",
    },
  ];

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
    <Box minH="100vh">
      {/* Hero Section with yellow theme */}
      <Box bgGradient={primaryGradient} color="gray.800" py={20}>
        <Container maxW="7xl" px={4}>
          <VStack spacing={8} align="start">
            <Badge
              bg="yellow.500"
              color="gray.800"
              px={4}
              py={2}
              borderRadius="full"
            >
              2025 AR & VR Trends
            </Badge>
            <Heading fontSize={{ base: "4xl", md: "5xl" }} maxW="3xl">
              Transforming Customer Experiences Through Immersive Technology
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl">
              Discover how augmented and virtual reality are reshaping marketing
              strategies and customer engagement in 2025 and beyond.
            </Text>
            <Button
              bg="gray.800"
              color="white"
              _hover={{ bg: "gray.700" }}
              size="lg"
              px={8}
              rightIcon={<ChevronRight />}
              borderRadius="full"
            >
              Explore Solutions
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Industry Selection */}
      <Box py={16} bg="gray.50">
        <Container maxW="7xl" px={4}>
          <Heading textAlign="center" mb={12} fontSize="3xl" color="gray.800">
            Choose Your Industry
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {industries.map((industry) => (
              <Box
                key={industry.id}
                bg={cardBg}
                p={6}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={
                  selectedIndustry === industry.id
                    ? selectedBorder
                    : "transparent"
                }
                _hover={{
                  borderColor: hoverBorder,
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                cursor="pointer"
                transition="all 0.2s"
                onClick={() => setSelectedIndustry(industry.id)}
              >
                <VStack spacing={4}>
                  <Icon
                    as={industry.icon}
                    boxSize={12}
                    color={secondaryColor}
                  />
                  <Heading size="md">{industry.name}</Heading>
                  <Text textAlign="center" color="gray.600">
                    {industry.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <FAQSection />

      {/* Trends Section */}
      <Box py={16}>
        <Container maxW="7xl" px={4}>
          <VStack spacing={12}>
            <Heading fontSize="3xl" textAlign="center" color="gray.800">
              2025 AR & VR Marketing Trends
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {trends.map((trend, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  p={6}
                  borderRadius="lg"
                  borderWidth="1px"
                  h="full"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.2s"
                >
                  <VStack spacing={4} align="start">
                    <Icon as={trend.icon} boxSize={8} color={secondaryColor} />
                    <Heading size="md">{trend.title}</Heading>
                    <Text color="gray.600">{trend.description}</Text>
                    <Box bg="yellow.50" p={4} borderRadius="lg" w="full">
                      <Text fontSize="sm" color="yellow.800">
                        <strong>Example:</strong> {trend.example}
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <RealEstateServices />

      {/* CTA Section */}
      <Box bgGradient={primaryGradient} color="gray.800" py={16}>
        <Container maxW="7xl" px={4}>
          <VStack spacing={8} textAlign="center">
            <Heading fontSize="4xl">
              Ready to Transform Your Marketing Strategy?
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Join the future of marketing with our cutting-edge AR and VR
              solutions. Let's create immersive experiences that drive results.
            </Text>
            <Button
              bg="gray.800"
              color="white"
              _hover={{ bg: "gray.700" }}
              size="lg"
              px={8}
              borderRadius="full"
              rightIcon={<ArrowRight />}
            >
              Get Started Today
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default ARVRMarketingPage;
