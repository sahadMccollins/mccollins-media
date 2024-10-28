import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

const BlogCard = ({ title, date, comments, description, author, image }) => (
  <Box
    bg="white"
    borderRadius="xl"
    overflow="hidden"
    position="relative"
    transition="all 0.3s ease"
    _hover={{
      "& .blog-content": {
        color: "white",
        zIndex: 2,
      },
      "& .blog-overlay": {
        opacity: 1,
      },
      "& .blog-image": {
        opacity: 1,
      },
      "& .blog-meta": {
        color: "white",
      },
      transform: "translateY(-5px)",
      cursor: "pointer",
    }}
  >
    {/* Background Image (hidden by default) */}
    <Box
      className="blog-image"
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      opacity={0}
      transition="opacity 0.3s ease"
    />

    {/* Blue Overlay (hidden by default) */}
    <Box
      className="blog-overlay"
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="#fdce1a"
      opacity={0}
      transition="opacity 0.3s ease"
    />

    {/* Content */}
    <VStack
      className="blog-content"
      spacing={4}
      h="full"
      p={8}
      align="stretch"
      position="relative"
      transition="color 0.3s ease"
    >
      <HStack
        spacing={6}
        fontSize="sm"
        className="blog-meta"
        color="gray.600"
        transition="color 0.3s ease"
      >
        <HStack>
          <Calendar size={16} />
          <Text>{date}</Text>
        </HStack>
        <HStack>
          <MessageCircle size={16} />
          <Text>{comments} Comment</Text>
        </HStack>
      </HStack>

      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>

      <HStack justify="space-between" mt="auto">
        <HStack>
          <Avatar size="sm" src="/assets/image/avatar.png" />
          <Text fontWeight="medium">{author}</Text>
        </HStack>
        <Link href="#" _hover={{ textDecoration: "none" }}>
          <HStack>
            <Text>Learn More</Text>
            <ArrowRight size={16} />
          </HStack>
        </Link>
      </HStack>
    </VStack>
  </Box>
);

const BlogSection = () => {
  const blogs = [
    {
      title: "Digital Privacy Changes And The Impact On Advertising",
      date: "15 Nov, 2023",
      comments: 12,
      description:
        "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      author: "Admin",
      image: "/assets/image/servicePage/blog-1.jpg",
    },
    {
      title: "How to Onboard New Clients the Right Way",
      date: "15 Nov, 2023",
      comments: 12,
      description:
        "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      author: "Admin",
      image: "/assets/image/servicePage/blog-2.jpg",
    },
    {
      title: "How Marketing Compliance Your Marketing Strategy",
      date: "15 Nov, 2023",
      comments: 12,
      description:
        "Dolor sed maecenas quis faucibus justo nibh ultricies praesent justo dolorIf you are going to use",
      author: "Admin",
      image: "/assets/image/servicePage/blog-3.jpg",
    },
  ];

  return (
    <Box py={16} bg="gray.50">
      <Container maxW="7xl">
        <VStack spacing={16} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Text color="blue.500" fontWeight="medium">
              OUR BLOG UPDATE
            </Text>
            <Heading size="2xl">
              Recent Important Stories
              <br />
              Daily Updated
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default BlogSection;
