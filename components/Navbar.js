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
} from "@chakra-ui/react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Stack zIndex={"99"}>
      <Container maxWidth={"7xl"} mt="7">
        <Flex>
          <Box flexGrow={1} zIndex="99">
            <Image
              src="/assets/image/navbar/logo.png"
              alt="Mccolins Media logo"
              width="223"
              height="50"
            />
          </Box>
          <Box alignSelf={"center"}>
            {isLargerThan780 ? (
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
                  />
                  &nbsp;Lets talk
                </Button>
              </ButtonGroup>
            </DrawerHeader>

            <DrawerBody>
              {/* <Input placeholder="Type here..." /> */}
            </DrawerBody>
          </Container>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
