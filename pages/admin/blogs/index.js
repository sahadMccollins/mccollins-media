import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Text,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";
import NextLink from "next/link";
import clientPromise from "../../../lib/mongodb";
import { ChevronRightIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Blogs = ({ blogs }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const [blog, setBlog] = useState([]);
  const [blogId, setBlogId] = useState([]);

  const blogDelete = () => {
    if (blogId) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: blogId }),
      };
      fetch("/api/blogs/blog/delete", requestOptions).then(
        (response) => response.json(),
        router.replace(router.asPath)
      );

      onDeleteClose();
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  });

  if (status === "unauthenticated") {
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
              <NextLink href="/admin/blogs-category">
                <BreadcrumbLink>Blogs</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box w="100%" p={4} bg="gray.100" borderRadius={"10px"} mt={10}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Heading fontSize={"2xl"}>Blogs</Heading>
            </Box>
            <Box>
              <Button
                colorScheme="yellow"
                bg={"#FFE962"}
                onClick={() => router.push("/admin/blogs/create-blog")}
              >
                Add New Blog
              </Button>
            </Box>
          </Flex>
          <Box maxWidth={"73vw"}>
            <TableContainer mt="10">
              <Table variant="striped" colorScheme="blackAlpha">
                <TableCaption>Blogs Category Table</TableCaption>
                <Thead>
                  <Tr>
                    <Th>SI.No</Th>
                    <Th>Title</Th>
                    <Th>Date</Th>
                    <Th>Category</Th>
                    <Th>Author Name</Th>
                    <Th>Tags</Th>
                    <Th>Photo</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {blogs.map((blog, i) => (
                    <Tr key={blog._id}>
                      <Td>{i + 1}</Td>
                      <Td>{blog.title}</Td>
                      <Td>{blog.date}</Td>
                      <Td>{blog.category}</Td>
                      <Td>{blog.author}</Td>
                      <Td>{blog.tags}</Td>
                      <Td>{blog.photo}</Td>
                      <Td>
                        <EditIcon
                          cursor={"pointer"}
                          mr={3}
                          onClick={() => {
                            router.push(`/admin/blogs/${blog._id}`);
                          }}
                        />
                        <DeleteIcon
                          cursor={"pointer"}
                          onClick={() => {
                            setBlogId(blog._id);
                            setBlog(blog.title);
                            onDeleteOpen();
                          }}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>SI.No</Th>
                    <Th>Title</Th>
                    <Th>Date</Th>
                    <Th>Category</Th>
                    <Th>Author Name</Th>
                    <Th>Tags</Th>
                    <Th>Photo</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Flex>
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are You Sure, You Want to Delete <b>{blog}</b>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                blogDelete();
              }}
              mr={3}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export async function getServerSideProps() {
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let blogs = await db.collection("blogs").find({}).toArray();
  blogs = JSON.parse(JSON.stringify(blogs));

  return {
    props: { blogs },
  };
}

Blogs.getLayout = function getLayout(Blogs) {
  return <AdminLayout>{Blogs}</AdminLayout>;
};

export default Blogs;
