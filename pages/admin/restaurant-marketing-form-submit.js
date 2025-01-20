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
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import clientPromise from "../../lib/mongodb";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

const AdminLayout = dynamic(
  () => import("../../components/Layout/AdminLayout"),
  { ssr: false }
);

const RestaurantMarketingFormSubmit = ({ data }) => {
  const [fullName, setFullName] = useState("");
  const [formId, setFormId] = useState("");

  const router = useRouter();
  const { data: session } = useSession();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const formDelete = () => {
    if (formId) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: formId }),
      };
      fetch("/api/restaurant-marketing-form-submit", requestOptions).then(
        (response) => response.json(),
        // refreshData(),
        onDeleteClose(),
        window.location.reload()
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
                <BreadcrumbLink>
                  Restaurant Marketing Form Submit
                </BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box w="100%" p={4} bg="gray.100" borderRadius={"10px"} mt={10}>
          <Box>
            <Heading fontSize={"2xl"}>Restaurant Marketing Form Submit</Heading>
          </Box>
          <Box maxWidth={"73vw"}>
            <TableContainer mt="10">
              <Table variant="striped" colorScheme="blackAlpha">
                <TableCaption>
                  Restaurant Marketing Form Submit Table
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Full Name</Th>
                    <Th>Contact</Th>
                    <Th>Email</Th>
                    <Th>Restaurant Name</Th>
                    <Th>Role</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data
                    ? data
                        .slice()
                        .reverse()
                        .map((form, i) => (
                          <Tr key={form._id} className="formTbl">
                            <Td>
                              {form.date !== undefined
                                ? new Date(form.date).toLocaleDateString()
                                : ""}
                            </Td>
                            <Td>{form.fullName}</Td>
                            <Td>{form.contact}</Td>
                            <Td>{form.email}</Td>
                            <Td>{form.restaurantName}</Td>
                            <Td>{form.role}</Td>
                            <Td>
                              <DeleteIcon
                                cursor={"pointer"}
                                onClick={() => {
                                  setFullName(form.fullName);
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
                    <Th>Date</Th>
                    <Th>Full Name</Th>
                    <Th>Contact</Th>
                    <Th>Email</Th>
                    <Th>Restaurant Name</Th>
                    <Th>Role</Th>
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
              Are You Sure, You Want to Delete <b>{fullName}</b>
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

  let data = await db
    .collection("restaurantMarketingFormSubmit")
    .find({})
    .toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: { data },
  };
}

RestaurantMarketingFormSubmit.getLayout = function getLayout(
  RestaurantMarketingFormSubmit
) {
  return <AdminLayout>{RestaurantMarketingFormSubmit}</AdminLayout>;
};

export default RestaurantMarketingFormSubmit;
