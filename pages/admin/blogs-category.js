import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import {
  Stack,
  Flex,
  Box,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Heading,
  Button,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import clientPromise from "../../lib/mongodb";
import { useSession } from "next-auth/react";

const AdminLayout = dynamic(
  () => import("../../components/Layout/AdminLayout"),
  { ssr: false }
);

const BlogsCategory = ({ category }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const [cat, setCat] = useState("");
  const [catId, setCatId] = useState("");

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const formHandler = () => {
    if (cat) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: cat }),
      };
      fetch("/api/blogs/category", requestOptions).then((response) =>
        response.json()
      );
      refreshData();
      onClose();
    }
  };

  const catDelete = (id) => {
    if (id) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };
      fetch("/api/blogs/category/delete", requestOptions).then((response) =>
        response.json()
      );
      refreshData();
      onDeleteClose();
    }
  };

  const editFormHandler = () => {
    if (catId) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: catId, name: cat }),
      };
      fetch("/api/blogs/category/update", requestOptions).then((response) =>
        response.json()
      );
      refreshData();
      onEditClose();
    }
  };

  if (!session) {
    router.push("/admin/login");
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
                <BreadcrumbLink>Blog Category</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box w="100%" p={4} bg="gray.100" borderRadius={"10px"} mt={10}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Heading fontSize={"2xl"}>Blogs Category</Heading>
            </Box>
            <Box>
              <Button colorScheme="yellow" bg={"#FFE962"} onClick={onOpen}>
                Add New Category
              </Button>
            </Box>
          </Flex>
          <Box>
            <TableContainer mt="10">
              <Table variant="striped" colorScheme="blackAlpha">
                <TableCaption>Blogs Category Table</TableCaption>
                <Thead>
                  <Tr>
                    <Th>SI.No</Th>
                    <Th>Category Name</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {category.map((cat, i) => (
                    <Tr key={cat._id}>
                      <Td>{i + 1}</Td>
                      <Td>{cat.name}</Td>
                      <Td>
                        <EditIcon
                          cursor={"pointer"}
                          mr={3}
                          onClick={() => {
                            onEditOpen();
                            setCat(cat.name);
                            setCatId(cat._id);
                          }}
                        />
                        <DeleteIcon
                          cursor={"pointer"}
                          onClick={() => {
                            setCat(cat.name);
                            setCatId(cat._id);
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
                    <Th>Category Name</Th>
                    <Th>Action</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="category">category</FormLabel>
              <Input
                id="category"
                type="text"
                onChange={(e) => setCat(e.target.value)}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={formHandler} mr={3}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are You Sure, You Want to Delete <b>{cat}</b>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                catDelete(catId);
              }}
              mr={3}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="category">category</FormLabel>
              <Input
                id="category"
                type="text"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={editFormHandler} mr={3}>
              Submit
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

  let category = await db.collection("blogs-category").find({}).toArray();
  category = JSON.parse(JSON.stringify(category));

  return {
    props: { category },
  };
}

BlogsCategory.getLayout = function getLayout(BlogsCategory) {
  return <AdminLayout>{BlogsCategory}</AdminLayout>;
};

export default BlogsCategory;
