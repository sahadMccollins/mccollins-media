import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { signOut, useSession } from "next-auth/react";
import { FiMenu, FiHome, FiFileText } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { GrGallery } from "react-icons/gr";
import { AiOutlineForm } from "react-icons/ai";
import NavItem from "../AdminPanel/NavItem";
import { useRouter } from "next/router";
import { MdOutlineEngineering } from "react-icons/md";

export default function Sidebar() {
  const { data: session } = useSession();
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
      w={navSize == "small" ? "75px" : "300px"}
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
            alt="McCollins Media"
            src="/assets/image/navbar/logo-yellow.svg"
            width="100%"
            height="47px"
            display={navSize == "small" ? "none" : "flex"}
          />
          <Image
            alt="McCollins Media"
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
        <NavItem
          navSize={navSize}
          icon={GrGallery}
          title="Portfolio"
          page="/admin/portfolio"
          active={router.pathname == "/admin/portfolio"}
        />
        <NavItem
          navSize={navSize}
          icon={VscFeedback}
          title="Testimonials"
          page="/admin/testimonials"
          active={router.pathname == "/admin/testimonials"}
        />
        <NavItem
          navSize={navSize}
          icon={AiOutlineForm}
          title="Form Submit"
          page="/admin/form-submit"
          active={router.pathname == "/admin/form-submit"}
        />
        <NavItem
          navSize={navSize}
          icon={MdOutlineEngineering}
          title="Meta Tag"
          page="/admin/meta"
          active={router.pathname == "/admin/meta"}
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
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronUpIcon />}
                textAlign="left"
              >
                {session ? (
                  <Text color="gray">{session.user.name}</Text>
                ) : (
                  <Text>User</Text>
                )}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
