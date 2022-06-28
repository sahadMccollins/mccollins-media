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
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import AdminLayout from "../../../components/Layout/AdminLayout";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSession } from "next-auth/react";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [blogUrl, setBlogUrl] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [photo, setPhoto] = useState("");
  const [tags, setTags] = useState("");
  const [keywords, setkeywords] = useState("");
  const [description, setDescription] = useState("");
  const [arabicTitle, setArabicTitle] = useState("");
  const [arabicDescription, setArabicDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const { data: session } = useSession();
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
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
        arabicTitle: arabicTitle,
        arabicDescription: arabicDescription,
      }),
    };
    fetch("/api/blogs/blog", requestOptions).then(
      (response) => response.json(),
      router.push("/admin/blogs")
    );
  };

  useEffect(() => {
    if (!session) {
      router.push("/admin/login");
    }
  });

  if (!session) {
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
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Date</FormLabel>
                  <Input
                    id="date"
                    type="date"
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
                    onChange={(e) => setBlogUrl(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Category</FormLabel>
                  <Input
                    id="category"
                    type="text"
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
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Photo</FormLabel>
                  <Input
                    id="photo"
                    type="file"
                    onChange={(e) => imgUpload(e)}
                    required
                  />
                </FormControl>
              </Box>
              <Box display={{ base: "block", md: "flex" }}>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Tags</FormLabel>
                  <Input
                    id="tags"
                    type="text"
                    onChange={(e) => setTags(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Meta keywords</FormLabel>
                  <Input
                    id="keywords"
                    type="text"
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
                    onChange={(e) => setDescription(e.target.value)}
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
                    onChange={(e) => setArabicTitle(e.target.value)}
                  />
                </FormControl>
                <FormControl p={5}>
                  <FormLabel htmlFor="category">Arabic Description</FormLabel>
                  <Input
                    id="arabicDescription"
                    type="text"
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

CreateBlog.getLayout = function getLayout(CreateBlog) {
  return <AdminLayout>{CreateBlog}</AdminLayout>;
};

export default CreateBlog;
