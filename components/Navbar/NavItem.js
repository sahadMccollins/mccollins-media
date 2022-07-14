import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css";
import { Box, useMediaQuery } from "@chakra-ui/react";

const NavItem = (props) => {
  const router = useRouter();
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  return (
    <Box
      className={router.pathname == props.href ? styles.sidebarActiveLi : null}
    >
      <Link href={props.href}>
        <a
          style={{
            fontSize: isLargerThan500 ? "20px" : "inherit",
            fontWeight: "500",
          }}
        >
          {props.name}
        </a>
      </Link>
    </Box>
  );
};

export default NavItem;
