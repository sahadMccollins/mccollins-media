import { useRouter } from "next/router";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";
import NextLink from "next/link";
import clientPromise from "../../../lib/mongodb";
import { ChevronRightIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const BlogEditor = ({ blogs }) => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState([]);
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
              <Heading fontSize={"2xl"}>Blogs Category</Heading>
            </Box>
          </Flex>
          <Box>
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
                            // onEditOpen();
                            router.push(`/admin/blogs/${blog._id}`);
                          }}
                        />
                        <DeleteIcon
                          cursor={"pointer"}
                          onClick={() => {
                            setBlog(blog);
                            // onDeleteOpen();
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

BlogEditor.getLayout = function getLayout(BlogEditor) {
  return <AdminLayout>{BlogEditor}</AdminLayout>;
};

export default BlogEditor;
