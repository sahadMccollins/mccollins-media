import Sidebar from "../AdminPanel/Sidebar";
import { Flex, Box } from "@chakra-ui/react";

export default function AdminLayout({ children }) {
  return (
    <Flex w="100%">
      <Sidebar />
      <Flex pos="relative" flexGrow={1} p={"50px 50px 0 50px"}>
        {children}
      </Flex>
    </Flex>
  );
}
