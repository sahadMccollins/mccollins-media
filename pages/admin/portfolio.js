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
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import clientPromise from "../../lib/mongodb";

const AdminLayout = dynamic(
  () => import("../../components/Layout/AdminLayout"),
  { ssr: false }
);

const Portfolio = ({ data }) => {
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
  const [image, setImage] = useState("");
  const [imageId, setImageId] = useState("");
  const [title, setTitle] = useState("");

  const [loading, setLoading] = useState(false);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const uploadImage = (event) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "portfolio");

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(
      "https://api.cloudinary.com/v1_1/mccollins-media/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((imageData) => {
        console.log(imageData);
        setImage(imageData.secure_url);
      });
    setLoading(false);
  };

  const formHandler = () => {
    if (image) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, image: image }),
      };
      fetch("/api/portfolio", requestOptions).then((response) =>
        response.json()
      );
      refreshData();
      onClose();
    }
  };

  const imageDelete = (id) => {
    if (id) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };
      fetch("/api/portfolio", requestOptions).then((response) =>
        response.json()
      );
      refreshData();
      onDeleteClose();
    }
  };

  const editFormHandler = () => {
    if (imageId) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: imageId, image: image }),
      };
      fetch("/api/portfolio", requestOptions).then((response) =>
        response.json()
      );
      refreshData();
      onEditClose();
    }
  };
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
              <NextLink href="/admin/portfolio">
                <BreadcrumbLink>Portfolio</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box w="100%" p={4} bg="gray.100" borderRadius={"10px"} mt={10}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Heading fontSize={"2xl"}>Portfolio</Heading>
            </Box>
            <Box>
              <Button colorScheme="yellow" bg={"#FFE962"} onClick={onOpen}>
                Add New Portfolio
              </Button>
            </Box>
          </Flex>
          <Box>
            <TableContainer mt="10">
              <Table variant="striped" colorScheme="blackAlpha">
                <TableCaption>Portfolio Table</TableCaption>
                <Thead>
                  <Tr>
                    <Th>SI.No</Th>
                    <Th>Tilte</Th>
                    <Th>Image</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data
                    ? data.map((image, i) => (
                        <Tr key={image._id}>
                          <Td>{i + 1}</Td>
                          <Td>{image.title}</Td>
                          <Td>
                            <Image
                              src={image.image}
                              width="250px"
                              height="250px"
                            />
                          </Td>
                          <Td>
                            <EditIcon
                              cursor={"pointer"}
                              mr={3}
                              onClick={() => {
                                onEditOpen();
                                setImage(image.title);
                                setImageId(image._id);
                              }}
                            />
                            <DeleteIcon
                              cursor={"pointer"}
                              onClick={() => {
                                setImageId(image._id);
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
                    <Th>Tilte</Th>
                    <Th>Image</Th>
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
          <ModalHeader>Add New Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="image">Image</FormLabel>
              <Input
                id="image"
                type="file"
                onChange={(e) => uploadImage(e)}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              isLoading={loading}
              onClick={formHandler}
              mr={3}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are You Sure, You Want to Delete the Image</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                imageDelete(imageId);
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
          <ModalHeader>Edit Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="image">Image</FormLabel>
              <Input
                id="image"
                type="file"
                onChange={(e) => uploadImage(e)}
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

  let data = await db.collection("portfolio").find({}).toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: { data },
  };
}

Portfolio.getLayout = function getLayout(Portfolio) {
  return <AdminLayout>{Portfolio}</AdminLayout>;
};

export default Portfolio;
