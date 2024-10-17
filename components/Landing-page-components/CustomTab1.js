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
  AspectRatio,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const MotionBox = motion(Box);

const CustomTab1 = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    {
      src: "/ar/AR Video 1.mp4",
      heading: "A place where reality gets a makeover",
      description:
        "We assist brands create experiential solutions—smart, collaborative, and fun.",
    },
    // {
    //   src: "/ar/AR Video 2.mp4",
    //   heading: "Step into the future of interaction",
    //   description:
    //     "Immersive experiences that blur the line between digital and physical.",
    // },
    {
      src: "/ar/AR Video 3.mp4",
      heading: "Where imagination meets technology",
      description: "Transforming ideas into tangible, interactive realities.",
    },
    {
      src: "/ar/AR Video 4.mp4",
      heading: "The next frontier of digital engagement",
      description:
        "Pushing boundaries to create unforgettable brand experiences.",
    },
  ];

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
          image: "/cgi/k5.jpg",
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

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <Box bg="white" color="gray.800" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <Heading
            as="h1"
            size="3xl"
            textAlign="center"
            color="#FFDE11"
            fontWeight="extrabold"
          >
            Revolutionizing Reality with AI and VR
          </Heading>

          {/* <Box position="relative" width="full" maxWidth="400px" height="800px">
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              overflow="hidden"
            >
              <Image
                src="/assets/image/mobile-frame.png"
                layout="fill"
                objectFit="contain"
                alt="Mobile frame"
                style={{ pointerEvents: "none" }}
              />
            </Box>
            <Box
              position="absolute"
              top="12px"
              left="22px"
              right="22px"
              bottom="12px"
              overflow="hidden"
              borderRadius="40px"
            >
              <Box
                width="100%"
                height="100%"
                position="relative"
                overflow="hidden"
              >
                <video
                  key={currentVideoIndex}
                  autoPlay
                  loop
                  muted
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source
                    src={videos[currentVideoIndex].src}
                    type="video/mp4"
                  />
                </video>
              </Box>
            </Box>
            <Flex
              position="absolute"
              bottom="40px"
              left="0"
              right="0"
              justify="center"
              gap={4}
              zIndex={2}
            >
              <Button onClick={prevVideo} variant="ghost" color="white">
                <ChevronLeft />
              </Button>
              <Button onClick={nextVideo} variant="ghost" color="white">
                <ChevronRight />
              </Button>
            </Flex>
          </Box>

          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="bold" color="#FFDE11">
              {videos[currentVideoIndex].heading}
            </Heading>
            <Text fontSize="lg" maxW="2xl">
              {videos[currentVideoIndex].description}
            </Text>
          </VStack> */}

          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            gap={8}
          >
            {/* Left side - Video */}
            <Box
              flex={1}
              maxW={{ base: "100%", md: "400px" }}
              h={{ base: "600px", md: "800px" }}
              position="relative"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                overflow="hidden"
              >
                <Image
                  src="/assets/image/mobile-frame.png"
                  layout="fill"
                  objectFit="contain"
                  alt="Mobile frame"
                  style={{ pointerEvents: "none" }}
                />
              </Box>
              <Box
                position="absolute"
                top="12px"
                left="22px"
                right="22px"
                bottom="12px"
                overflow="hidden"
                borderRadius="40px"
              >
                <AspectRatio ratio={9 / 19.5} height="100%">
                  <video
                    key={currentVideoIndex}
                    autoPlay
                    loop
                    muted
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <source
                      src={videos[currentVideoIndex].src}
                      type="video/mp4"
                    />
                  </video>
                </AspectRatio>
              </Box>
              <Flex
                position="absolute"
                bottom="40px"
                left="0"
                right="0"
                justify="center"
                gap={4}
                zIndex={2}
              >
                <Button onClick={prevVideo} variant="ghost" color="white">
                  <ChevronLeft />
                </Button>
                <Button onClick={nextVideo} variant="ghost" color="white">
                  <ChevronRight />
                </Button>
              </Flex>
            </Box>

            {/* Right side - Text */}
            <VStack
              flex={1}
              spacing={6}
              align={{ base: "center", md: "start" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading as="h2" size="2xl" fontWeight="bold" color="#FFDE11">
                {videos[currentVideoIndex].heading}
              </Heading>
              <Text fontSize="xl" maxW="2xl">
                {videos[currentVideoIndex].description}
              </Text>
              <Button
                bg="#FFDE11"
                color="gray.800"
                size="lg"
                _hover={{ bg: "yellow.400" }}
              >
                Learn More
              </Button>
            </VStack>
          </Flex>

          {services.map((serviceCategory, index) => (
            <VStack
              key={index}
              spacing={12}
              align="center"
              width="full"
              mb={16}
            >
              <Heading
                as="h3"
                size="xl"
                fontWeight="bold"
                color="#FFDE11"
                textAlign="center"
              >
                {serviceCategory.category}
              </Heading>
              <Center>
                <SimpleGrid
                  columns={
                    serviceCategory.items.length <= 2 ? [1, 2] : [1, 2, 3]
                  }
                  spacing={8}
                  width="full"
                  justifyItems="center"
                >
                  {serviceCategory.items.map((service, serviceIndex) => (
                    <MotionBox
                      key={serviceIndex}
                      bg="white"
                      borderRadius="xl"
                      overflow="hidden"
                      boxShadow="md"
                      borderWidth="1px"
                      borderColor="gray.200"
                      maxW="350px"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(255, 222, 17, 0.7)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box height="200px" width={"335px"} position="relative">
                        <Image
                          src={service.image}
                          alt={service.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </Box>
                      <VStack p={6} align="center" spacing={3}>
                        <Heading
                          as="h4"
                          size="md"
                          fontWeight="semibold"
                          textAlign="center"
                        >
                          {service.title}
                        </Heading>
                        <Text color="gray.600" textAlign="center">
                          {service.description}
                        </Text>
                        <Button
                          bg="#FFDE11"
                          color="gray.800"
                          _hover={{ bg: "yellow.400" }}
                          onClick={() => handleOpenModal(service)}
                        >
                          Explore
                        </Button>
                      </VStack>
                    </MotionBox>
                  ))}
                </SimpleGrid>
              </Center>
            </VStack>
          ))}
        </VStack>

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent bg="white" color="gray.800">
            <ModalHeader color="#FFDE11">{selectedService?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{selectedService?.details}</Text>
            </ModalBody>
            <ModalFooter>
              <Button bg="#FFDE11" color="gray.800" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default CustomTab1;
