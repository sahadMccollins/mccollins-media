import React, { useEffect, useState } from "react";
import clientPromise from "../../lib/mongodb";
import InnerLayout from "../../components/Layout/InnerLayout";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { EditorState, convertFromRaw, Editor } from "draft-js";
import { TbFolders, TbCalendar } from "react-icons/tb";
import { useRouter } from "next/router";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

const Blog = ({ blog, recentPost, metaTags }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const router = useRouter();

  useEffect(() => {
    loadContent();
    console.log(recentPost);
  }, []);

  const loadContent = () => {
    let content = convertFromRaw(JSON.parse(blog.content));
    setEditorState(EditorState.createWithContent(content));
  };

  return (
    <Stack>
      <Head>
        <title>{blog.SEOtitle}</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content={blog.keywords} />
        <meta property="og:title" content={blog.SEOtitle} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.photo} />
        <meta
          property="og:url"
          content={`https://www.mccollinsmedia.com${metaTags[0]?.url}`}
        />
        {metaTags[0] && (
          <link
            rel="canonical"
            href={`https://www.mccollinsmedia.com${metaTags[0].url}`}
          />
        )}
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
        /assets/image/design/3.svg 1x, /asset
      </Head>
      <Container maxWidth={"7xl"}>
        <Flex
          mt={{ base: "-160px", md: "-100px" }}
          height={"100%"}
          minHeight="600px"
          pt="170px"
          pb={"50px"}
          direction={{ base: "column", md: "row" }}
        >
          <Box width={{ base: "100%", md: "50%" }} position="relative">
            <Heading fontSize={"50px"} mt="10" color="#FFDE11">
              Blog
            </Heading>
            <Heading
              fontSize={{ base: "30px", md: "42px" }}
              color="#000"
              fontWeight="black"
            >
              {blog.title}
            </Heading>
            <Button
              colorScheme="yellow"
              background={"#FFDE11"}
              borderRadius="20px"
              color="#000"
              mt={"5"}
              onClick={() => {
                router.push(`/contact`);
              }}
            >
              <Image
                alt="McCollins Media"
                src="/assets/image/icons/call.svg"
                width="25px"
                height="25px"
                priority={true}
              />
              &nbsp;&nbsp;contact us
            </Button>
            <Flex mt={5} flexDir={{ base: "column", md: "row" }} my={10}>
              <Flex alignItems={"center"} mr="10">
                <TbFolders size={"40px"} />
                <Box ml={3} maxWidth={"225px"}>
                  <Text fontSize={"20px"} color="#FFDE11">
                    Category
                  </Text>
                  <Text fontSize={"18px"} fontWeight="semibold">
                    {blog.category}
                  </Text>
                </Box>
              </Flex>
              <Flex alignItems={"center"} mt={{ base: "5", md: "0" }}>
                <TbCalendar size={"40px"} />
                <Box ml={3}>
                  <Text fontSize={"20px"} color="#FFDE11">
                    LAST UPDATED
                  </Text>
                  <Text fontSize={"18px"} fontWeight="semibold">
                    {blog.date}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box width={{ base: "100%", md: "50%" }} position="relative">
            <Image
              alt="McCollins Media"
              src={blog.photo}
              width="740px"
              height={"430px"}
              property={true}
            />
          </Box>
        </Flex>
      </Container>
      <Stack bg="#F7F7F7" pt={"10"}>
        <Container maxWidth={"7xl"}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box
              width={{ base: "100%", md: "70%" }}
              color="#4b5280"
              lineHeight={"1.8"}
              bg={"#fff"}
              p="5"
            >
              {blog.video && (
                <video
                  style={{ marginBottom: "30px" }}
                  src={blog.video}
                  controls
                  width={"100%"}
                />
              )}
              <Editor editorState={editorState} readOnly />
            </Box>
            <Box width={{ base: "100%", md: "25%" }} bg="#fff" p="5">
              <Heading mb={3}>Recent Posts</Heading>
              <hr />
              <Box mt={5}>
                {recentPost.map((rp) => (
                  <Flex
                    key={rp._id}
                    alignItems={"center"}
                    mt="10"
                    onClick={() => {
                      router.push(`/blog/${rp.blogUrl}`);
                    }}
                    cursor={"pointer"}
                  >
                    <Image
                      alt="McCollins Media"
                      src={rp.photo}
                      width="170px"
                      height={"80px"}
                      objectFit={"cover"}
                      layout="fixed"
                      style={{ borderRadius: "10px" }}
                    />
                    <Box ml={"20px"}>
                      <Text
                        color={"#4b5280"}
                        fontSize="15px"
                        fontWeight={"semibold"}
                      >
                        {rp.date}
                      </Text>
                      <Text fontSize={"18px"} fontWeight="bold">
                        {rp.title}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Box>
            </Box>
          </Flex>
        </Container>
      </Stack>
    </Stack>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let blog = await db
    .collection("blogs")
    .findOne({ blogUrl: context.params.id });
  blog = JSON.parse(JSON.stringify(blog));

  let metaTags = await db.collection("meta").find({ name: req.url }).toArray();
  metaTags = JSON.parse(JSON.stringify(metaTags));

  let recentPost = await db
    .collection("blogs")
    .find()
    .sort({ _id: -1 })
    .limit(5)
    .toArray();
  recentPost = JSON.parse(JSON.stringify(recentPost));

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blog, recentPost, metaTags },
  };
}

Blog.getLayout = function getLayout(Blog) {
  return <InnerLayout>{Blog}</InnerLayout>;
};

export default Blog;
