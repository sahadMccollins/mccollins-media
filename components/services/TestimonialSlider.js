import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Targeting consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point at dimension per techinal issue.",
    author: "Matthew J. Wyman",
    position: "Senior Consultant",
  },
  {
    id: 2,
    content:
      "Targeting consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point at dimension per techinal issue.",
    author: "Matthew J. Wyman",
    position: "Senior Consultant",
  },
  {
    id: 3,
    content:
      "Targeting consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point at dimension per techinal issue.",
    author: "Matthew J. Wyman",
    position: "Senior Consultant",
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <Box
      bgGradient="linear(to-r, #fdce1a, yellow.400)"
      py={24}
      position="relative"
      overflow="hidden"
    >
      {/* Quotation marks at top */}
      <Box
        position="absolute"
        left="50%"
        top="60px"
        transform="translateX(-50%)"
        opacity={0.2}
      >
        <HStack spacing="-4">
          <Box transform="rotate(180deg)">
            <svg width="60" height="48" viewBox="0 0 60 48" fill="currentColor">
              <path d="M0 48L24 0H36L20 48H0ZM36 48L60 0H48L32 48H36Z" />
            </svg>
          </Box>
          <Box transform="rotate(180deg)">
            <svg width="60" height="48" viewBox="0 0 60 48" fill="currentColor">
              <path d="M0 48L24 0H36L20 48H0ZM36 48L60 0H48L32 48H36Z" />
            </svg>
          </Box>
        </HStack>
      </Box>

      {/* Star in bottom right */}
      <Box position="absolute" right="80px" bottom="80px">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 0L28 20L48 24L28 28L24 48L20 28L0 24L20 20L24 0Z"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </Box>

      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.1}
        backgroundImage={`
          radial-gradient(circle at 20px 20px, black 1px, transparent 0),
          radial-gradient(circle at 40px 40px, black 1px, transparent 0)
        `}
        backgroundSize="40px 40px"
      />

      <Container maxW="6xl" position="relative">
        <VStack spacing={16} align="flex-start">
          <Heading fontSize="5xl" fontWeight="semibold" color={"black"}>
            What people say
          </Heading>

          <Box maxW="4xl">
            <Text fontSize="2xl" lineHeight="1.6" mb={8} color="black">
              {testimonials[currentSlide].content}
            </Text>

            <VStack spacing={1} align="flex-start">
              <Text fontSize="2xl" fontWeight="semibold" color="black">
                {testimonials[currentSlide].author}
              </Text>
              <Text fontSize="md" color="black">
                {testimonials[currentSlide].position}
              </Text>
            </VStack>
          </Box>

          <HStack spacing={8} width="full" justify="flex-start">
            <IconButton
              icon={<ChevronLeft size={24} />}
              onClick={prevSlide}
              variant="ghost"
              color="black"
              _hover={{ bg: "blackAlpha.100" }}
              aria-label="Previous testimonial"
            />
            <Text fontSize="lg" fontWeight="medium" color="black">
              {currentSlide + 1} / {totalSlides}
            </Text>
            <IconButton
              icon={<ChevronRight size={24} />}
              onClick={nextSlide}
              variant="ghost"
              color="black"
              _hover={{ bg: "blackAlpha.100" }}
              aria-label="Next testimonial"
            />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default TestimonialSlider;
