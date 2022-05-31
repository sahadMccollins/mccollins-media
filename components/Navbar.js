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
} from "@chakra-ui/react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Stack zIndex={"99"}>
      <Container maxWidth={"7xl"} mt="7" position="relative">
        <Flex>
          <Box flexGrow={1} zIndex="99">
            <Image
              src="/assets/image/navbar/logo.png"
              alt="Mccolins Media logo"
              width="223"
              height="50"
              priority={true}
            />
          </Box>
          <Box alignSelf={"center"}>
            {isLargerThan780 ? (
              <>
                <Flex>
                  <ButtonGroup gap="4" zIndex="99">
                    <Button
                      colorScheme="whiteAlpha"
                      borderRadius="20px"
                      color="#000"
                    >
                      <Image
                        src="/assets/image/icons/call.png"
                        width="25px"
                        height="25px"
                      />
                      &nbsp;Call
                    </Button>
                    <Button
                      colorScheme="whiteAlpha"
                      borderRadius="20px"
                      color="#000"
                    >
                      <Image
                        src="/assets/image/icons/chat.png"
                        width="25px"
                        height="25px"
                        marginRight="10px"
                        priority={true}
                      />
                      &nbsp;Lets talk
                    </Button>
                  </ButtonGroup>
                  <Box
                    className={styles.hamBurger}
                    ref={btnRef}
                    colorScheme="teal"
                    onClick={onOpen}
                    zIndex="99"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </Box>
                </Flex>
                <VStack
                  position={"absolute"}
                  zIndex="99"
                  right={0}
                  marginTop="6%"
                >
                  <Box>
                    <Image
                      src="/assets/image/icons/tiktok.png"
                      width={"18px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box>
                    <Image
                      src="/assets/image/icons/insta.png"
                      width={"21px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box>
                    <Image
                      src="/assets/image/icons/fb.png"
                      width={"9px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box>
                    <Image
                      src="/assets/image/icons/linkedin.png"
                      width={"22px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box>
                    <Image
                      src="/assets/image/icons/twiter.png"
                      width={"27px"}
                      height="20px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    bg={"#fff"}
                    p="8px 11px 6px 11px"
                    borderRadius="30px"
                    style={{ marginTop: "75px" }}
                  >
                    <Image
                      src="/assets/image/icons/whatsapp.png"
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
                      color="#FFDE11"
                      mb={5}
                    >
                      Scroll
                    </Text>
                    <Image
                      src="/assets/image/icons/scroll.png"
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
                ref={btnRef}
                colorScheme="teal"
                onClick={onOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </Box>
            )}
          </Box>
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
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
                    src="/assets/image/icons/call.png"
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
                    src="/assets/image/icons/chat.png"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;Lets talk
                </Button>
              </ButtonGroup>
            </DrawerHeader>
            <DrawerBody mt={"80px"} textAlign="right">
              <Flex direction={"row"}>
                <Box width={"90%"}>1</Box>
                <Box width={"10%"}>
                  <VStack zIndex="99" right={0} marginTop="6%">
                    <Box className="drawerSocialIcon">
                      <Box mb={3}>
                        <Image
                          src="/assets/image/icons/tiktok.png"
                          width={"18px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box mb={3}>
                        <Image
                          src="/assets/image/icons/insta.png"
                          width={"21px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box mb={3}>
                        <Image
                          src="/assets/image/icons/fb.png"
                          width={"9px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box mb={3}>
                        <Image
                          src="/assets/image/icons/linkedin.png"
                          width={"22px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box mb={3}>
                        <Image
                          src="/assets/image/icons/twiter.png"
                          width={"27px"}
                          height="20px"
                          priority={true}
                        />
                      </Box>
                    </Box>

                    <Box
                      bg={"#fff"}
                      p="8px 11px 6px 11px"
                      borderRadius="30px"
                      style={{ marginTop: "75px" }}
                    >
                      <Image
                        src="/assets/image/icons/whatsapp.png"
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
                        color="#FFDE11"
                        mb={5}
                      >
                        Scroll
                      </Text>
                      <Image
                        src="/assets/image/icons/scroll.png"
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
