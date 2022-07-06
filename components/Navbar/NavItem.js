import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css";
import { Box } from "@chakra-ui/react";

const NavItem = (props, { onClose }) => {
  const router = useRouter();
  return (
    <Box
      className={router.pathname == props.href ? styles.sidebarActiveLi : null}
    >
      <Link href={props.href}>
        <a>{props.name}</a>
      </Link>
    </Box>
  );
};

export default NavItem;
