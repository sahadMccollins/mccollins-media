import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import InnerBanner from "../../components/InnerBanner";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import BlogList from "../../components/BlogList";
import clientPromise from "../../lib/mongodb";
import { useRouter } from "next/router";

const Index = ({ blogs }) => {
  const router = useRouter();
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <InnerBanner
          img="/assets/image/blogPage/blogBanner.jpg"
          heading={`lorem ipsum \n consectetur \n dolor sit`}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </Container>
      <Box py="10" bg="#F7F7F7">
        <Container maxWidth={"7xl"}>
          <Heading
            style={{
              background:
                "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
              width: "fit-content",
              padding: "0 5px",
            }}
            fontWeight="black"
          >
            LATEST BLOG
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} my="10">
            <Box
              width={{ base: "100%", md: "50%" }}
              style={{ border: "30px solid #fff" }}
              mb={"5"}
            >
              <Image
                src={blogs[0].photo}
                objectFit="cover"
                width="615px"
                height={"521px"}
              />
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              ml={{ base: "0", md: 20 }}
              alignSelf="center"
              mb={"5"}
            >
              <Heading fontSize={"5xl"}>{blogs[0].title}</Heading>
              <Box my={5} display="flex">
                <Text
                  fontSize={"2xl"}
                  bg="#393838"
                  width={"fit-content"}
                  color="#fff"
                  p={"5px 30px 5px 20px"}
                >
                  {blogs[0].date}
                </Text>
                <Box
                  as="span"
                  style={{
                    width: "20px",
                    background: "#f7f7f7",
                    transform: "rotate(25deg)",
                    margin: "-10px",
                  }}
                ></Box>
              </Box>

              {/* <Text fontWeight={"bold"}>{blogs[0].smallContent}</Text> */}
              <Text fontWeight={"bold"}>
                When you think about marketing, the fastest man in the world is
                not necessarily the most obvious connection to make. That said,
                there are a few similarities between the world of high
                performance athletics and the business of brand building. Here
                are a few lessons that we could do well to learn from Usain
                Bolt.
              </Text>
              <Button
                colorScheme="yellow"
                background={"#FFDE11"}
                borderRadius="20px"
                color="#000"
                mt={7}
                fontWeight="bold"
                onClick={() => {
                  router.push(`/blog/${blogs[0].blogUrl}`);
                }}
              >
                read more{" "}
                <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxWidth={"7xl"} py="20">
          <SimpleGrid columns={{ base: "1", sm: "2", md: "3" }} spacing={10}>
            {blogs.map((blog) => {
              return (
                <BlogList
                  key={blog._id}
                  img={blog.photo}
                  heading={blog.title}
                  date={blog.date}
                  url={`/blog/${blog.blogUrl}`}
                />
              );
            })}
          </SimpleGrid>
          <Box textAlign={"center"}>
            <Button
              colorScheme="yellow"
              background={"#FFDE11"}
              borderRadius="20px"
              color="#000"
              mt={7}
              fontWeight="bold"
            >
              view more{" "}
              <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
            </Button>
          </Box>
        </Container>
      </Box>
    </Stack>
  );
};

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let blogs = await db.collection("blogs").find().sort({ _id: -1 }).toArray();
  blogs = JSON.parse(JSON.stringify(blogs));

  return {
    props: { blogs },
  };
}

Index.getLayout = function getLayout(Index) {
  return <InnerLayout>{Index}</InnerLayout>;
};

export default Index;
