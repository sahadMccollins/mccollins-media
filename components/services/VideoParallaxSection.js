import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";
import { Play } from "lucide-react";

const VideoParallaxSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollY, setScrollY] = useState(0);

  // Replace with your actual YouTube video ID and poster image
  const youtubeVideoId = "YOUR_VIDEO_ID";
  const posterUrl = "/assets/image/servicePage/vid-2-bg.jpg";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="section"
      position="relative"
      h={{ base: "50vh", md: "70vh" }}
      overflow="hidden"
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${posterUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: "brightness(0.8)",
          zIndex: 0,
        },
      }}
    >
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="url('/assets/image/servicePage/vid-2-bg.jpg')"
        zIndex={1}
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        height="100%"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
      >
        {/* Play Button */}
        <Box
          onClick={onOpen}
          cursor="pointer"
          position="relative"
          transition="all 0.3s"
          _hover={{ transform: "scale(1.1)" }}
        >
          {/* Outer Ring Animation */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="120px"
            height="120px"
            borderRadius="full"
            border="3px solid"
            borderColor="white"
            opacity="0.5"
            animation="pulse 2s infinite"
          />

          {/* Play Button Circle */}
          <Box
            width="100px"
            height="100px"
            borderRadius="full"
            bg="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="xl"
          >
            <Play size={40} color="#3182CE" style={{ marginLeft: "5px" }} />
          </Box>
        </Box>

        {/* Video Modal */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="6xl"
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay bg="blackAlpha.900" backdropFilter="blur(10px)" />
          <ModalContent bg="transparent" w="90vw" maxW="1200px">
            <ModalCloseButton
              color="white"
              bg="whiteAlpha.300"
              borderRadius="full"
              size="lg"
              m={4}
              _hover={{ bg: "whiteAlpha.400" }}
            />
            <ModalBody p={0}>
              <AspectRatio ratio={16 / 9}>
                <Box
                  as="iframe"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  borderRadius="md"
                  overflow="hidden"
                />
              </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          70% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
};

export default VideoParallaxSection;
