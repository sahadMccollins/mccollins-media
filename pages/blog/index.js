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

const Index = ({ blogs }) => {
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
            <Box width={{ base: "100%", md: "50%" }} ml={{ base: "0", md: 20 }}>
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

              <Text fontWeight={"bold"}>{blogs[0].smallContent}</Text>
              <Button
                colorScheme="yellow"
                background={"#FFDE11"}
                borderRadius="20px"
                color="#000"
                mt={7}
                fontWeight="bold"
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
            <BlogList
              img="/assets/image/blogPage/blogs/blog1.jpg"
              heading="In 2022, Here Are a Few Outstanding Web Design Trends to Try"
            />
            <BlogList
              img="/assets/image/blogPage/blogs/blog2.jpg"
              heading="5 Trends that will fuel e-commerce businesses in 2022"
            />
            <BlogList
              img="/assets/image/blogPage/blogs/blog3.jpg"
              heading="How to plan your Digital Marketing Budget for 2022"
            />
            <BlogList
              img="/assets/image/blogPage/blogs/blog4.jpg"
              heading="In 2022, Here Are a Few Outstanding Web Design Trends to Try"
            />
            <BlogList
              img="/assets/image/blogPage/blogs/blog5.jpg"
              heading="In 2022, Here Are a Few Outstanding Web Design Trends to Try"
            />
            <BlogList
              img="/assets/image/blogPage/blogs/blog6.jpg"
              heading="In 2022, Here Are a Few Outstanding Web Design Trends to Try"
            />
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
