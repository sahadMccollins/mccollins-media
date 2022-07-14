import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import AdminLayout from "../../../components/Layout/AdminLayout";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSession } from "next-auth/react";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const EditBlog = ({ blog }) => {
  const [title, setTitle] = useState(blog.title);
  const [date, setDate] = useState(blog.date);
  const [blogUrl, setBlogUrl] = useState(blog.blogUrl);
  const [category, setCategory] = useState(blog.category);
  const [author, setAuthor] = useState(blog.author);
  const [photo, setPhoto] = useState(blog.photo);
  const [tags, setTags] = useState(blog.tags);
  const [keywords, setkeywords] = useState(blog.keywords);
  const [description, setDescription] = useState(blog.description);
  const [shortContent, setShortContent] = useState(blog.shortContent);
  const [arabicTitle, setArabicTitle] = useState(blog.arabicTitle);
  const [arabicDescription, setArabicDescription] = useState(
    blog.arabicDescription
  );

  const [loading, setLoading] = useState(false);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(convertFromRaw(JSON.parse(blog.content)))
  );

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  });

  const { status } = useSession();
  const router = useRouter();

  const imgUpload = (event) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "blog-img");

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(
      "https://api.cloudinary.com/v1_1/mccollins-media/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPhoto(data.secure_url);
        setLoading(false);
      });
  };

  const submitFormHandler = () => {
    const rowContent = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(rowContent);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: blog._id,
        title: title,
        date: date,
        blogUrl: blogUrl,
        category: category,
        author: author,
        photo: photo,
        tags: tags,
        keywords: keywords,
        description: description,
        content: rowContent,
        shortContent: shortContent,
        arabicTitle: arabicTitle,
        arabicDescription: arabicDescription,
      }),
    };
    fetch("/api/blogs/blog/update", requestOptions).then((response) =>
      response.json()
    );
    router.replace("/admin/blogs");
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <Stack width={"100%"}>
      <Flex direction={"column"}>
        <Box w="100%" p={4} bg="gray.100" borderRadius={"10px"}>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <NextLink href="/admin">
                <BreadcrumbLink>Admin</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <NextLink href="/admin/blogs">
                <BreadcrumbLink>Blogs</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <NextLink href="/admin/blogs/create-blog">
                <BreadcrumbLink>Create Blog</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box w="100%" p={4} bg="gray.100" borderRadius={"10px"} mt={10}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Heading fontSize={"2xl"}>Create Blog</Heading>
            </Box>
          </Flex>
          <Box my={10}>
            <form onSubmit={submitFormHandler}>
              <Box display={{ base: "block", md: "flex" }}>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Title</FormLabel>
                  <Input
                    id="tilte"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Date</FormLabel>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </FormControl>
              </Box>
              <Box display={{ base: "block", md: "flex" }}>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Blog URL</FormLabel>
                  <Input
                    id="url"
                    type="text"
                    value={blogUrl}
                    onChange={(e) => setBlogUrl(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Category</FormLabel>
                  <Input
                    id="category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </FormControl>
              </Box>
              <Box display={{ base: "block", md: "flex" }}>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Author</FormLabel>
                  <Input
                    id="author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Photo</FormLabel>
                  <Input
                    id="photo"
                    type="file"
                    onChange={(e) => imgUpload(e)}
                  />
                </FormControl>
              </Box>
              <Box display={{ base: "block", md: "flex" }}>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Tags</FormLabel>
                  <Input
                    id="tags"
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Meta keywords</FormLabel>
                  <Input
                    id="keywords"
                    type="text"
                    value={keywords}
                    onChange={(e) => setkeywords(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box display={{ base: "block", md: "flex" }}>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Meta Description</FormLabel>
                  <Input
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl p={5}>
                  <FormLabel htmlFor="shortContent">Short Content</FormLabel>
                  <Textarea
                    id="shortContent"
                    type="textArea"
                    value={shortContent}
                    onChange={(e) => setShortContent(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Content</FormLabel>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                  />
                </FormControl>
              </Box>
              <Box display={{ base: "block", md: "flex" }}>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Arabic Title</FormLabel>
                  <Input
                    id="arabicTitle"
                    type="text"
                    value={arabicTitle}
                    onChange={(e) => setArabicTitle(e.target.value)}
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Arabic Description</FormLabel>
                  <Input
                    id="arabicDescription"
                    type="text"
                    value={arabicDescription}
                    onChange={(e) => setArabicDescription(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Button
                float={"right"}
                isLoading={loading}
                colorScheme="blue"
                type="submit"
                mr={3}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
};

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let blog = await db
    .collection("blogs")
    .findOne({ _id: ObjectId(context.params.id) });
  blog = JSON.parse(JSON.stringify(blog));

  return {
    props: { blog },
  };
}

EditBlog.getLayout = function getLayout(EditBlog) {
  return <AdminLayout>{EditBlog}</AdminLayout>;
};

export default EditBlog;
