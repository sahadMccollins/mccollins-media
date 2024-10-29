import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Button,
  VStack,
} from "@chakra-ui/react";
import {
  Settings,
  Package,
  Monitor,
  Globe2,
  DollarSign,
  Megaphone,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, category }) => (
  <Box
    bg="white"
    p={6}
    borderRadius="xl"
    boxShadow="sm"
    position="relative"
    overflow="hidden"
    _before={{
      content: '""',
      position: "absolute",
      bottom: "-20px",
      right: "-20px",
      width: "120px",
      height: "120px",
      background:
        "linear-gradient(45deg, transparent, rgba(240, 242, 255, 0.5))",
      borderRadius: "50%",
    }}
  >
    <VStack align="flex-start" spacing={4}>
      <Box>
        <Icon
          size={32}
          style={{
            stroke: "#6366f1",
            strokeWidth: 1,
            fill: "none",
          }}
        />
      </Box>
      <Text color="gray.600" fontSize="sm">
        {description}
      </Text>
      <Heading size="md" fontWeight="semibold">
        {title}
      </Heading>
      <Text color="gray.500" fontSize="xs" letterSpacing="wide">
        {category}
      </Text>
    </VStack>
  </Box>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Content Marketing",
      description: "Comparison new entertain melancholy son themselves.",
      category: "MARKETING",
    },
    {
      icon: Package,
      title: "Social Marketing",
      description: "Comparison new entertain melancholy son themselves.",
      category: "MEDIA",
    },
    {
      icon: Monitor,
      title: "App Development",
      description: "Comparison new entertain melancholy son themselves.",
      category: "SOFTWARE",
    },
    {
      icon: Globe2,
      title: "SEO Optimization",
      description: "Comparison new entertain melancholy son themselves.",
      category: "OPTIMIZED",
    },
    {
      icon: DollarSign,
      title: "PPC Advertising",
      description: "Comparison new entertain melancholy son themselves.",
      category: "ADVERTISEMENT",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comparison new entertain melancholy son themselves.",
      category: "AGENCY",
    },
  ];

  return (
    <Box
      py={16}
      px={4}
      bg="linear-gradient(180deg, rgba(253, 206, 26, 0.6) 0%, rgba(253, 206, 26, 0.3) 100%)"
    >
      <Container maxW="7xl">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {/* Header Card */}
          <Box
            gridColumn={{ lg: "span 2" }}
            p={8}
            borderRadius="xl"
            bgGradient="linear(to-r, #000, #000)"
            color="white"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
              background:
                "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDAgTDEwMCAxMDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')",
              backgroundSize: "30px 30px",
              opacity: "0.1",
            }}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              opacity={0.1}
              bgImage="radial-gradient(circle at 20px 20px, black 2px, transparent 0)"
              backgroundSize="40px 40px"
            />
            <VStack align="flex-start" spacing={4}>
              <Text fontWeight="bold">OUR SERVICES</Text>
              <Heading size="2xl" lineHeight="1.2" maxW="xl">
                Our creative & digital agency services
              </Heading>
              <Button
                bg="rgba(255,255,255,0.2)"
                color="white"
                _hover={{
                  bg: "rgba(255,255,255,0.3)",
                }}
                size="lg"
                borderRadius="full"
                px={8}
              >
                See All
              </Button>
            </VStack>
          </Box>

          {/* First row service cards */}
          <ServiceCard {...services[0]} />
          <ServiceCard {...services[1]} />

          {/* Remaining service cards */}
          <Box gridColumn={{ lg: "span 4" }}>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={6}
            >
              {services.slice(2).map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
