import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  VStack,
  InputGroup,
} from "@chakra-ui/react";
import { TrendingUp } from "lucide-react";

const DigitalMarketingBanner = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #EBF4FF 0%, #E1F0FF 100%)"
      overflow="hidden"
      pt={10}
      mb={"-10px !important"}
      position="relative"
    >
      <Container maxW="7xl" position="relative">
        <Box
          position="absolute"
          top="10%"
          right="5%"
          width="300px"
          height="300px"
          borderRadius="full"
          bg={"#fdce1a"}
          zIndex={1}
        />

        <HStack
          justify="space-between"
          align="center"
          spacing={8}
          position="relative"
          zIndex={2}
        >
          {/* Left Content */}
          <Box maxW="550px">
            <VStack align="flex-start" spacing={6}>
              <Heading
                fontSize={{ base: "4xl", md: "5xl" }}
                lineHeight="1.2"
                fontWeight="bold"
              >
                Increase sales
                <br />
                with{" "}
                <Text
                  as="span"
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    bg: "blue.500",
                  }}
                >
                  digital marketing
                </Text>
              </Heading>

              <Text fontSize="lg" color="gray.600">
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret suitable.
              </Text>

              <InputGroup size="lg" maxW="450px">
                <Input
                  placeholder="Your Email"
                  bg="white"
                  borderRadius="md"
                  borderColor="gray.200"
                  _placeholder={{ color: "gray.400" }}
                  pr="140px"
                />
                <Button
                  position="absolute"
                  right="0"
                  top="0"
                  colorScheme="blue"
                  zIndex={2}
                  px={6}
                  bg={"#fdce1a"}
                >
                  Get Started
                </Button>
              </InputGroup>
            </VStack>
          </Box>

          {/* Right Content with Images */}
          <Box position="relative" display={{ base: "none", lg: "block" }}>
            <Box position="relative" width="500px">
              <img
                src="/assets/image/servicePage/girl.png"
                alt="Digital Marketing Professional"
                style={{
                  height: "600px",
                  position: "relative",
                  zIndex: 2,
                }}
              />

              {/* Traffic Stats Card */}
              <Box
                position="absolute"
                top="10%"
                right="-80px"
                bg="white"
                borderRadius="xl"
                boxShadow="lg"
                p={4}
                zIndex={3}
              >
                <img
                  src="/assets/image/servicePage/newtraffic.png"
                  alt="Traffic Stats"
                  style={{
                    width: "150px",
                    height: "auto",
                  }}
                />
              </Box>

              {/* Sales Increase Badge */}
              <HStack
                position="absolute"
                bottom="20%"
                left="-40px"
                bg="white"
                borderRadius="full"
                boxShadow="lg"
                p={3}
                pr={6}
                zIndex={3}
              >
                <Box bg="black" p={2} borderRadius="full">
                  <TrendingUp size={20} color="white" />
                </Box>
                <VStack spacing={0} align="flex-start">
                  <Text fontSize="sm" color="gray.600">
                    Sale Increase
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="blue.500">
                    +128%
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default DigitalMarketingBanner;
