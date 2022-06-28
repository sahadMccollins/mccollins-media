import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Stack,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text,
  Link as chakraLink,
  color,
} from "@chakra-ui/react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <Stack zIndex={"99"}>
      <Container maxWidth={"7xl"} mt="7" position="relative">
        <Flex>
          <Box flexGrow={1} zIndex="99">
            <Link href="/">
              <Image
                src={`/assets/image/navbar/${
                  props.color ? "logo-black" : "logo"
                }.svg`}
                alt="Mccolins Media logo"
                width="223"
                height="50"
                priority={true}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Box>
          <Box alignSelf={"center"}>
            {isLargerThan780 ? (
              <>
                <Flex>
                  <ButtonGroup gap="4" zIndex="99">
                    <Button
                      colorScheme={props.color ? "yellow" : "whiteAlpha"}
                      background={props.color ? "#FFDE11" : null}
                      borderRadius="20px"
                      color="#000"
                      as={chakraLink}
                      href="tel:+971 4 445 6848"
                    >
                      <Image
                        src="/assets/image/icons/call.svg"
                        width="25px"
                        height="25px"
                      />
                      &nbsp;&nbsp;Call
                    </Button>
                    <Button
                      colorScheme={props.color ? "yellow" : "whiteAlpha"}
                      background={props.color ? "#FFDE11" : null}
                      borderRadius="20px"
                      color="#000"
                      as={chakraLink}
                      href="mailto:info@mccollinsmedia.com"
                    >
                      <Image
                        src="/assets/image/icons/chat.svg"
                        width="25px"
                        height="25px"
                        marginRight="10px"
                        priority={true}
                      />
                      &nbsp;&nbsp;Lets talk
                    </Button>
                  </ButtonGroup>
                  <Box
                    className={styles.hamBurger}
                    colorScheme="teal"
                    onClick={onOpen}
                  >
                    <span
                      style={{ background: props.color ? "#000" : "#FFDE11" }}
                    ></span>
                    <span
                      style={{ background: props.color ? "#000" : "#FFDE11" }}
                    ></span>
                    <span
                      style={{ background: props.color ? "#000" : "#FFDE11" }}
                    ></span>
                  </Box>
                </Flex>
                <VStack
                  position={"absolute"}
                  zIndex="99"
                  right={0}
                  marginTop="6%"
                  className={props.color ? "drawerSocialIcon" : ""}
                >
                  <Box
                    mb={3}
                    as={chakraLink}
                    href="https://vm.tiktok.com/ZSJShjmYH/"
                    target="_blank"
                  >
                    <Image
                      src="/assets/image/icons/tiktok.svg"
                      width={"18px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    mb={3}
                    as={chakraLink}
                    href="https://www.instagram.com/mccollinsmedia/?hl=en"
                    target="_blank"
                  >
                    <Image
                      src="/assets/image/icons/insta.svg"
                      width={"21px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    mb={3}
                    as={chakraLink}
                    href="https://www.facebook.com/mccollinsmedia/"
                    target="_blank"
                  >
                    <Image
                      src="/assets/image/icons/fb.svg"
                      width={"9px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    mb={3}
                    as={chakraLink}
                    href="https://www.linkedin.com/company/mccollins-media/"
                    target="_blank"
                  >
                    <Image
                      src="/assets/image/icons/linkedin.svg"
                      width={"22px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    mb={3}
                    as={chakraLink}
                    href="https://twitter.com/mccollinsmedia?lang=en"
                    target="_blank"
                  >
                    <Image
                      src="/assets/image/icons/twiter.svg"
                      width={"27px"}
                      height="20px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    bg={"#fff"}
                    p="8px 11px 6px 11px"
                    borderRadius="30px"
                    as={chakraLink}
                    href="https://api.whatsapp.com/send?phone=971559564135&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media"
                    target="_blank"
                    style={{
                      marginTop: "75px",
                      boxShadow: "-4px 10px 30px 7px rgba(0,0,0,0.09)",
                    }}
                  >
                    <Image
                      src="/assets/image/icons/whatsapp.svg"
                      width={"27px"}
                      height={"27px"}
                      priority={true}
                    />
                  </Box>
                  <Box textAlign={"center"} style={{ marginTop: "60px" }}>
                    <Text
                      fontSize={"18px"}
                      fontWeight="bold"
                      style={{ transform: "rotate(-90deg)" }}
                      color={props.color ? "#000" : "#FFDE11"}
                      mb={5}
                    >
                      Scroll
                    </Text>
                    <Image
                      src="/assets/image/icons/scroll.svg"
                      width={"9px"}
                      height="58px"
                      priority={true}
                    />
                  </Box>
                </VStack>
              </>
            ) : (
              <Box
                className={styles.hamBurger}
                colorScheme="teal"
                onClick={onOpen}
              >
                <span
                  style={{ background: props.color ? "#000" : "#FFDE11" }}
                ></span>
                <span
                  style={{ background: props.color ? "#000" : "#FFDE11" }}
                ></span>
                <span
                  style={{ background: props.color ? "#000" : "#FFDE11" }}
                ></span>
              </Box>
            )}
          </Box>
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => onClose()}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Container>
            <DrawerCloseButton
              className={styles.sidebarCloseBtn}
              right={isLargerThan780 ? "100px" : "25px"}
            />
            <DrawerHeader>
              <ButtonGroup gap="4" float={"right"} mr={"50px"}>
                <Button
                  colorScheme="yellow"
                  background={"#FFDE11"}
                  borderRadius="20px"
                  color="#000"
                >
                  <Image
                    src="/assets/image/icons/call.svg"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;Call
                </Button>
                <Button
                  colorScheme="yellow"
                  background={"#FFDE11"}
                  borderRadius="20px"
                  color="#000"
                >
                  <Image
                    src="/assets/image/icons/chat.svg"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;Lets talk
                </Button>
              </ButtonGroup>
            </DrawerHeader>
            <DrawerBody mt={"70px"} textAlign="right">
              <Flex direction={"row"}>
                <Box width={"90%"} className={styles.sidebarUl}>
                  <ul>
                    <li
                      className={
                        router.pathname == "/" ? styles.sidebarActiveLi : null
                      }
                      onClick={() => onClose()}
                    >
                      <Link href="/">
                        <a>home</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname == "/about"
                          ? styles.sidebarActiveLi
                          : null
                      }
                      onClick={() => onClose()}
                    >
                      <Link href="/about">
                        <a>about us</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname == "/services"
                          ? styles.sidebarActiveLi
                          : null
                      }
                      onClick={() => onClose()}
                    >
                      <Link href="/services">
                        <a>services</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/about">
                        <a>work</a>
                      </Link>
                    </li> */}
                    <li
                      className={
                        router.pathname == "/industry"
                          ? styles.sidebarActiveLi
                          : null
                      }
                      onClick={() => onClose()}
                    >
                      <Link href="/industry">
                        <a>industry</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/about">
                        <a>career</a>
                      </Link>
                    </li> */}
                    <li
                      className={
                        router.pathname == "/blog"
                          ? styles.sidebarActiveLi
                          : null
                      }
                      onClick={() => onClose()}
                    >
                      <Link href="/blog">
                        <a>blog</a>
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname == "/conatct"
                          ? styles.sidebarActiveLi
                          : null
                      }
                      onClick={() => onClose()}
                    >
                      <Link href="/contact">
                        <a>contact</a>
                      </Link>
                    </li>
                  </ul>
                </Box>
                <Box width={"10%"} mt="6">
                  <VStack zIndex="99" right={0} marginTop="6%">
                    <Flex className="drawerSocialIcon" direction={"column"}>
                      <Box
                        mb={3}
                        as={chakraLink}
                        href="https://vm.tiktok.com/ZSJShjmYH/"
                        target="_blank"
                      >
                        <Image
                          src="/assets/image/icons/tiktok.svg"
                          width={"18px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box
                        mb={3}
                        as={chakraLink}
                        href="https://www.instagram.com/mccollinsmedia/?hl=en"
                        target="_blank"
                      >
                        <Image
                          src="/assets/image/icons/insta.svg"
                          width={"21px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box
                        mb={3}
                        as={chakraLink}
                        href="https://www.facebook.com/mccollinsmedia/"
                        target="_blank"
                      >
                        <Image
                          src="/assets/image/icons/fb.svg"
                          width={"9px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box
                        mb={3}
                        as={chakraLink}
                        href="https://www.linkedin.com/company/mccollins-media/"
                        target="_blank"
                      >
                        <Image
                          src="/assets/image/icons/linkedin.svg"
                          width={"22px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box
                        mb={3}
                        as={chakraLink}
                        href="https://twitter.com/mccollinsmedia?lang=en"
                        target="_blank"
                      >
                        <Image
                          src="/assets/image/icons/twiter.svg"
                          width={"27px"}
                          height="20px"
                          priority={true}
                        />
                      </Box>
                    </Flex>

                    <Box
                      bg={"#fff"}
                      p="8px 11px 6px 11px"
                      borderRadius="30px"
                      as={chakraLink}
                      href="https://api.whatsapp.com/send?phone=971559564135&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media"
                      target="_blank"
                      style={{
                        marginTop: "75px",
                        boxShadow: "-4px 10px 30px 7px rgba(0,0,0,0.09)",
                      }}
                    >
                      <Image
                        src="/assets/image/icons/whatsapp.svg"
                        width={"27px"}
                        height={"27px"}
                        priority={true}
                      />
                    </Box>
                    <Box
                      textAlign={"center"}
                      style={{ marginTop: "60px" }}
                      className="drawerSocialIcon"
                    >
                      <Text
                        fontSize={"18px"}
                        fontWeight="bold"
                        style={{ transform: "rotate(-90deg)", color: "#000" }}
                        color={props.color ? "#000" : "#FFDE11"}
                        mb={5}
                      >
                        Scroll
                      </Text>
                      <Image
                        src="/assets/image/icons/scroll.svg"
                        width={"9px"}
                        height="58px"
                        priority={true}
                      />
                    </Box>
                  </VStack>
                </Box>
              </Flex>
            </DrawerBody>
          </Container>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
