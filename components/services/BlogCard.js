import React, { useState, useEffect } from "react";
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
import axios from "axios";

const BlogCard = ({
  title,
  date,
  comments,
  description,
  author,
  image,
  url,
}) => (
  <Box
    bg="white"
    borderRadius="xl"
    overflow="hidden"
    position="relative"
    transition="all 0.3s ease"
    _hover={{
      "& .blog-content": {
        color: "black",
        zIndex: 2,
      },
      "& .blog-overlay": {
        opacity: 1,
      },
      "& .blog-image": {
        opacity: 1,
      },
      "& .blog-meta": {
        color: "black",
      },
      transform: "translateY(-5px)",
      cursor: "pointer",
    }}
  >
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

    <Box
      className="blog-overlay"
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="#fdce1a"
      opacity={0.3}
      transition="opacity 0.3s ease"
    />

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
        <Link href={url} _hover={{ textDecoration: "none" }}>
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
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs/blog");
        // Select only the latest 3 blogs
        const latestBlogs = response.data.slice(0, 3).map((blog) => ({
          title: blog.title,
          date: blog.date,
          comments: blog.comments || 0, // Assuming `comments` is not in API
          description: blog.shortContent,
          author: blog.author || "Admin", // Fallback if author is missing
          image: blog.photo || "/assets/image/blogPage/blog1.jpg", // Add a default image path
          url: `/blog/${blog.blogUrl}`,
        }));
        setBlogs(latestBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

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
