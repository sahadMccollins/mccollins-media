import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Center,
  Badge,
  Icon,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowUpRight, Sparkles, Play } from "lucide-react";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const CustomTab1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  const services = [
    {
      category: "AR/VR/Metaverse",
      items: [
        {
          title: "Augmented Reality",
          description: "Enhance reality with digital overlays.",
          image: "/cgi/k4.jpg",
          details:
            "Augmented Reality (AR) enhances the physical world by overlaying digital content, creating engaging experiences that can captivate customers. Especially relevant for real estate companies, restaurants, hotels and malls, AR can showcase properties, menus, or promotional offers in an interactive way. By integrating AR into your marketing strategy, you can allow clients to visualize spaces before visiting, transforming the way they interact with your brand.",
        },
        {
          title: "Virtual Reality",
          description: "Immerse in simulated environments.",
          image: "/cgi/k7.jpg",
          details:
            "Virtual Reality (VR) provides immersive experiences that transport users into simulated environments, making it an invaluable tool for marketing in industries like real estate and hospitality. For brand owners, VR can offer virtual property tours or immersive dining experiences that engage customers on a deeper level. By utilizing VR, you can effectively showcase your offerings and create memorable interactions that resonate with potential clients.",
        },
        {
          title: "Metaverse",
          description: "Connect in a shared digital universe.",
          image: "/cgi/k10.jpg",
          details:
            "The Metaverse is a shared digital universe where brands can connect with their audience in innovative ways. For marketing managers in sectors such as real estate, hotels, and malls, leveraging the Metaverse can create unique virtual experiences that enhance brand presence. By establishing a foothold in this expansive digital landscape, you can host virtual events, showcase properties, or create immersive shopping experiences that attract and engage customers.",
        },
        {
          title: "AR Glasses",
          description: "Wearable devices for AR experiences.",
          image: "/cgi/k2.jpg",
          details:
            "AR Glasses are wearable devices that enable users to experience augmented reality in real time, providing a unique opportunity for marketing in various industries. For brand owners in real estate, restaurants, and malls, these glasses can enhance customer experiences by delivering contextual information and interactive content. Imagine potential buyers using AR glasses to visualize home renovations or diners exploring menu items through digital overlays.",
        },
        {
          title: "Extended Reality",
          description: "Merge virtual and physical worlds.",
          image: "/cgi/k3.jpg",
          details:
            "Extended Reality (XR) seamlessly merges virtual and physical worlds, offering transformative marketing solutions for industries like real estate, hotels, and restaurants. By employing XR technologies, marketing managers can create captivating experiences that engage customers through interactive simulations or enhanced environments. For example, potential buyers can explore properties in a lifelike virtual setting, while diners can preview their meals in augmented formats.",
        },
        {
          title: "360 Photobooth",
          description: "Capture moments from every angle",
          image: "/cgi/k5.jpg",
          details:
            "The 360 Photobooth captures moments from every angle, creating an immersive photo experience that delights customers in industries like real estate, hospitality, and entertainment. Marketing managers can use this innovative tool at events, promotions, or in-store activations to allow guests to create dynamic videos and photos that showcase their experiences in a unique way. By sharing 360-degree content on social media, brands can enhance visibility and engagement, encouraging user-generated content that resonates with their audience. This cutting-edge technology not only makes interactions more memorable but also differentiates your brand in a competitive landscape, driving customer loyalty and interest.",
        },
      ],
    },
    {
      category: "Generative AI",
      items: [
        {
          title: "AI Chatbot",
          description: "Intelligent virtual assistant.",
          image: "/cgi/k6.jpg",
          details:
            "An AI Chatbot serves as an intelligent virtual conversational assistant, revolutionizing customer interaction for brands in real estate, restaurants, and hotels. Marketing managers can leverage chatbots to provide instant responses to inquiries, schedule appointments, and guide potential customers through their decision-making process. By implementing an AI Chatbot on your website or social media channels, you enhance customer service while freeing up resources.",
        },
        {
          title: "AI Photobooth",
          description: "AI-powered photo experiences.",
          image: "/cgi/k11.jpg",
          details:
            "AI Photobooth combines cutting-edge artificial intelligence with photography to create unique, personalized photo experiences. Perfect for events, retail spaces, or marketing campaigns, AI Photobooth can generate custom backgrounds, apply real-time filters, and even suggest poses, providing an engaging and shareable experience for users. This technology not only enhances user engagement but also provides valuable data insights for marketing strategies.",
        },
      ],
    },
  ];

  const handleOpenModal = (service) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <Box
      bg="linear-gradient(135deg, #FFF9E5 0%, #FFFAF0 100%)"
      color="gray.800"
      py={20}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative Background Elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        bgImage="radial-gradient(circle at 2px 2px, #FFB800 1px, transparent 0)"
        bgSize="40px 40px"
        animation="fadeInOut 8s infinite"
        sx={{
          "@keyframes fadeInOut": {
            "0%, 100%": { opacity: 0.1 },
            "50%": { opacity: 0.2 },
          },
        }}
      />

      <Container maxW="8xl" px={4}>
        <VStack spacing={16}>
          {/* Header Section */}
          {services.map((serviceCategory, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              width="full"
            >
              <VStack spacing={8} mb={16}>
                <Flex direction="column" align="center" mb={8}>
                  <Badge
                    colorScheme="yellow"
                    px={4}
                    py={2}
                    borderRadius="full"
                    mb={4}
                  >
                    {serviceCategory.category}
                  </Badge>
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl" }}
                    textAlign="center"
                    bgGradient="linear(to-r, yellow.400, orange.400)"
                    bgClip="text"
                    mb={4}
                  >
                    {serviceCategory.category} Solutions
                  </Heading>
                  <Text
                    fontSize="lg"
                    color="gray.600"
                    textAlign="center"
                    maxW="3xl"
                  >
                    Transform your digital presence with cutting-edge{" "}
                    {serviceCategory.category} technologies
                  </Text>
                </Flex>

                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3 }}
                  spacing={8}
                  width="full"
                >
                  {serviceCategory.items.map((service, serviceIndex) => (
                    <MotionBox
                      key={serviceIndex}
                      position="relative"
                      onHoverStart={() => setHoveredService(service)}
                      onHoverEnd={() => setHoveredService(null)}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box
                        bg="white"
                        borderRadius="2xl"
                        overflow="hidden"
                        boxShadow="lg"
                        borderWidth="1px"
                        borderColor={
                          hoveredService === service
                            ? "yellow.400"
                            : "transparent"
                        }
                        transition="all 0.3s"
                        position="relative"
                      >
                        {/* Image Container */}
                        <Box position="relative" height="250px">
                          <Image
                            src={service.image}
                            alt={service.title}
                            layout="fill"
                            objectFit="cover"
                          />
                          <Box
                            position="absolute"
                            top="0"
                            left="0"
                            right="0"
                            bottom="0"
                            bg="blackAlpha.50"
                            transition="all 0.3s"
                            _groupHover={{ bg: "blackAlpha.30" }}
                          />
                          {/* Floating Badge */}
                          <Badge
                            position="absolute"
                            top={4}
                            right={4}
                            bg="yellow.400"
                            color="gray.800"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="sm"
                          >
                            {serviceCategory.category}
                          </Badge>
                        </Box>

                        {/* Content */}
                        <VStack p={6} spacing={4} align="start">
                          <Heading size="md" fontWeight="bold">
                            {service.title}
                          </Heading>
                          <Text color="gray.600" fontSize="sm">
                            {service.description}
                          </Text>

                          <Flex
                            justify="space-between"
                            align="center"
                            width="full"
                            mt={4}
                          >
                            <Button
                              onClick={() => handleOpenModal(service)}
                              rightIcon={<ArrowUpRight size={18} />}
                              variant="ghost"
                              color="yellow.500"
                              _hover={{
                                bg: "yellow.50",
                                transform: "translateX(4px)",
                              }}
                              transition="all 0.3s"
                            >
                              Learn More
                            </Button>
                            <Icon
                              as={Sparkles}
                              color="yellow.400"
                              boxSize={5}
                            />
                          </Flex>
                        </VStack>
                      </Box>
                    </MotionBox>
                  ))}
                </SimpleGrid>
              </VStack>
            </MotionBox>
          ))}
        </VStack>

        {/* Enhanced Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
          <ModalContent bg="white" borderRadius="2xl" overflow="hidden" mx={4}>
            <Box position="relative" height="200px">
              {selectedService && (
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  layout="fill"
                  objectFit="cover"
                />
              )}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="blackAlpha.60"
              />
              <Flex
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                p={6}
                direction="column"
                color="white"
              >
                <Heading size="lg">{selectedService?.title}</Heading>
              </Flex>
            </Box>

            <ModalCloseButton color="white" top={4} right={4} />

            <ModalBody py={6}>
              <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="medium" color="yellow.500">
                  Overview
                </Text>
                <Text color="gray.700" lineHeight="tall">
                  {selectedService?.details}
                </Text>

                <Divider my={4} />

                <Text fontSize="lg" fontWeight="medium" color="yellow.500">
                  Key Features
                </Text>
                <SimpleGrid columns={2} spacing={4} width="full">
                  {[
                    "Interactive",
                    "Scalable",
                    "Customizable",
                    "Innovative",
                  ].map((feature, index) => (
                    <Flex key={index} align="center" gap={2}>
                      <Icon as={Sparkles} color="yellow.400" boxSize={4} />
                      <Text>{feature}</Text>
                    </Flex>
                  ))}
                </SimpleGrid>
              </VStack>
            </ModalBody>

            <ModalFooter bg="gray.50" borderTop="1px" borderColor="gray.100">
              <Button
                bg="yellow.400"
                color="gray.800"
                _hover={{ bg: "yellow.500" }}
                rightIcon={<ChevronRight size={18} />}
                onClick={onClose}
              >
                Get Started
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default CustomTab1;
