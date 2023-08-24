import { ChevronRightIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import NextLink from "next/link";
import clientPromise from "../../lib/mongodb";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const FormSubmit = ({ data }) => {
  const [name, setName] = useState("");
  const [formId, setFormId] = useState("");

  const { data: session } = useSession();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const formDelete = () => {
    if (formId) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: formId }),
      };
      fetch("/api/form-submit", requestOptions).then(
        (response) => response.json(),
        refreshData(),
        onDeleteClose()
      );
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
              <NextLink href="/admin/form-submit">
                <BreadcrumbLink>Form Submit</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box w="100%" p={4} bg="gray.100" borderRadius={"10px"} mt={10}>
          <Box>
            <Heading fontSize={"2xl"}>Form Submit</Heading>
          </Box>
          <Box maxWidth={"73vw"}>
            <TableContainer mt="10">
              <Table variant="striped" colorScheme="blackAlpha">
                <TableCaption>Form Submit Table</TableCaption>
                <Thead>
                  <Tr>
                    <Th>SI.No</Th>
                    <Th>First Name</Th>
                    <Th>Last Name</Th>
                    <Th>Company</Th>
                    <Th>Job Title</Th>
                    <Th>Email</Th>
                    <Th>Contact</Th>
                    <Th>Services</Th>
                    <Th>How can we help you</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data
                    ? data.map((form, i) => (
                        <Tr key={form._id}>
                          <Td>{i + 1}</Td>
                          <Td>{form.firstName}</Td>
                          <Td>{form.lastName}</Td>
                          <Td>{form.company}</Td>
                          <Td>{form.jobTitle}</Td>
                          <Td>{form.email}</Td>
                          <Td>{form.contact}</Td>
                          <Td>{form.services}</Td>
                          <Td>{form.text}</Td>
                          <Td>
                            <DeleteIcon
                              cursor={"pointer"}
                              onClick={() => {
                                setName(form.firstName);
                                setFormId(form._id);
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
                    <Th>First Name</Th>
                    <Th>Last Name</Th>
                    <Th>Company</Th>
                    <Th>Job Title</Th>
                    <Th>Email</Th>
                    <Th>Contact</Th>
                    <Th>Services</Th>
                    <Th>How can we help you</Th>
                    <Th>Delete</Th>
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
          <ModalHeader>Delete Testimonial</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are You Sure, You Want to Delete <b>{name}</b>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                formDelete();
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

  let data = await db.collection("formSubmit").find({}).toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: { data },
  };
}

FormSubmit.getLayout = function getLayout(FormSubmit) {
  return <AdminLayout>{FormSubmit}</AdminLayout>;
};

export default FormSubmit;
