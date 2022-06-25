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

const Testimonials = ({ data }) => {
  const router = useRouter();
  const { data: session } = useSession();
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
  const [testi, setTesti] = useState("");
  const [content, setContent] = useState("");
  const [company, setCompany] = useState("");
  const [testiId, setTestiId] = useState("");

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const formHandler = () => {
    if (testi) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: testi,
          company: company,
          content: content,
        }),
      };
      fetch("/api/testimonials", requestOptions).then((response) =>
        response.json()
      );
      refreshData();
      onClose();
    }
  };

  const testiDelete = (id) => {
    if (id) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };
      fetch("/api/testimonials", requestOptions).then((response) =>
        response.json()
      );
      refreshData();
      onDeleteClose();
    }
  };

  const editFormHandler = () => {
    if (testiId) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: testiId, name: testi }),
      };
      fetch("/api/testimonials", requestOptions).then((response) =>
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
                <BreadcrumbLink>Testimonials</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box w="100%" p={4} bg="gray.100" borderRadius={"10px"} mt={10}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Heading fontSize={"2xl"}>Testimonials</Heading>
            </Box>
            <Box>
              <Button colorScheme="yellow" bg={"#FFE962"} onClick={onOpen}>
                Add New Testimonial
              </Button>
            </Box>
          </Flex>
          <Box>
            <TableContainer mt="10">
              <Table variant="striped" colorScheme="blackAlpha">
                <TableCaption>Testimonials Table</TableCaption>
                <Thead>
                  <Tr>
                    <Th>SI.No</Th>
                    <Th>Testimonial by</Th>
                    <Th>Company/Place</Th>
                    <Th>Content</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data
                    ? data.map((testi, i) => (
                        <Tr key={testi._id}>
                          <Td>{i + 1}</Td>
                          <Td>{testi.name}</Td>
                          <Td>{testi.company}</Td>
                          <Td>{testi.content}</Td>
                          <Td>
                            <EditIcon
                              cursor={"pointer"}
                              mr={3}
                              onClick={() => {
                                onEditOpen();
                                setTesti(testi.name);
                                setTestiId(testi._id);
                              }}
                            />
                            <DeleteIcon
                              cursor={"pointer"}
                              onClick={() => {
                                setTesti(testi.name);
                                setTestiId(testi._id);
                                onDeleteOpen();
                              }}
                            />
                          </Td>
                        </Tr>
                      ))
                    : null}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>SI.No</Th>
                    <Th>Testimonial by</Th>
                    <Th>Company/Place</Th>
                    <Th>Content</Th>
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
          <ModalHeader>Add New Testimonial</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="name">Testimonial by</FormLabel>
              <Input
                id="name"
                type="text"
                onChange={(e) => setTesti(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="company">Company/Place</FormLabel>
              <Input
                id="company"
                type="text"
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="content">content</FormLabel>
              <Input
                id="content"
                type="text"
                onChange={(e) => setContent(e.target.value)}
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
          <ModalHeader>Delete Testimonial</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are You Sure, You Want to Delete <b>{testi}</b>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                testiDelete(testiId);
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
          <ModalHeader>Edit Testimonial</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="name">Testimonial by</FormLabel>
              <Input
                id="name"
                type="text"
                value={testi}
                onChange={(e) => setTesti(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="company">Company/Place</FormLabel>
              <Input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="content">content</FormLabel>
              <Input
                id="content"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
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

  let data = await db.collection("testimonials").find({}).toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: { data },
  };
}

Testimonials.getLayout = function getLayout(Testimonials) {
  return <AdminLayout>{Testimonials}</AdminLayout>;
};

export default Testimonials;
