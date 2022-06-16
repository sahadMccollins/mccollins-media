import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import { FiMenu, FiHome, FiFileText } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import NavItem from "../AdminPanel/NavItem";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <Box p={2}>
          <Image
            src="/assets/image/navbar/logo-yellow.png"
            width="100%"
            height="47px"
            display={navSize == "small" ? "none" : "flex"}
          />
          <Image
            src="/assets/image/navbar/logo-sq.jpg"
            width="47px"
            height="47px"
            display={navSize == "small" ? "flex" : "none"}
          />
        </Box>
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          page="/admin"
          active={router.pathname == "/admin"}
        />
        <NavItem
          navSize={navSize}
          icon={BiCategory}
          title="Blogs Category"
          page="/admin/blogs-category"
          active={router.pathname == "/admin/blogs-category"}
        />
        <NavItem
          navSize={navSize}
          icon={FiFileText}
          title="Blogs"
          page="/admin/blogs"
          active={router.pathname == "/admin/blogs"}
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Sylwia Weller
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
