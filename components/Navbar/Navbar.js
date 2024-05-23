import React, { useEffect, useRef, useState } from "react";
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
  Link as ChakraLink,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  useToast,
} from "@chakra-ui/react";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import NavItem from "../Navbar/NavItem";
import axios from "axios";

const Navbar = (props) => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [company, setCompany] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [project, setProject] = useState("");

  const [loading, setLoading] = useState(false);

  const [hiddenInputValue, setHiddenInputValue] = useState("");
  const hiddenInputRef = useRef();

  useEffect(() => {
    // Initialize the hidden input value when the component mounts
    setHiddenInputValue(hiddenInputRef.current?.value);
  }, []);

  const handleHiddenInputChange = () => {
    // Update the state with the current hidden input value
    setHiddenInputValue(hiddenInputRef.current?.value);
  };
  const router = useRouter();
  const currentUrl = router.asPath;

  const isWebDesignDevelopmentPage = () => {
    return currentUrl === "/landing-pages/web-design-development-1";
  };

  const phoneNumber = isWebDesignDevelopmentPage()
    ? "+971 55 956 4135"
    : "+971 55 956 4135";

  const whatsappNumber = isWebDesignDevelopmentPage()
    ? "+971 55 956 4135"
    : "+971 55 956 4135";

  const toast = useToast();

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: name,
        email: email,
        contact: contact,
        company: company,
        services: lookingFor,
        text: project,
        date: new Date(),
      }),
    };
    fetch("/api/form-submit", requestOptions).then(
      (response) => response.json(),
      setName(""),
      setContact(""),
      setEmail(""),
      setLookingFor(""),
      setCompany(""),
      setProject(""),
      setLoading(false),
      toast({
        title: "Form Submited",
        description: "Thank you for getting in touch!",
        status: "success",
        duration: 9000,
        isClosable: true,
      }),
      onClose2()
    );

    let formData = new FormData();
    formData.append("Firstname", name);
    formData.append("Email", email);
    formData.append("Phone", contact);
    formData.append("Company", company);
    formData.append("Services", lookingFor);
    formData.append("Message", project);

    fetch(
      "https://script.google.com/macros/s/AKfycbzOFap7qdSzq18NRJxwNBdYdfyK3rpMRmIL7XFhxm68edSSyc4Cv9m3saiNq4HTiTfx/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => router.push("/Thank-you-for-contacting-us"))
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    const data = {
      Company: company,
      FirstName: name,
      Email: email,
      Page: currentUrl,
      Phone: contact,
      SelectedServices: lookingFor,
      Message: project,
      gclid: hiddenInputValue,
    };

    axios
      .post("/api/zoho/refresh-token", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        // Handle errors in obtaining the new access token
        console.error(error);
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <Stack zIndex={"99"}>
      <Container maxWidth={"8xl"} mt="7" position="relative">
        <Flex>
          <Box flexGrow={1} zIndex="99">
            <Link href="/" className="MainLogo1Link">
              <Image
                alt="McCollins Media"
                src={`/assets/image/navbar/${
                  props.color ? `logo-${props.color}` : "logo"
                }.svg`}
                width="223"
                height="50"
                priority={true}
                style={{ cursor: "pointer" }}
                className="MainLogo1"
              />
            </Link>
          </Box>
          <Box alignSelf={"start"}>
            {isLargerThan780 ? (
              <>
                <Flex>
                  <ButtonGroup gap="4" zIndex="99" mr={"10"}>
                    <Button
                      colorScheme={props.color ? "yellow" : "whiteAlpha"}
                      background={props.color ? "#FFDE11" : null}
                      borderRadius="20px"
                      color="#000"
                    >
                      <ChakraLink
                        href={`tel:${phoneNumber}`}
                        display={"flex"}
                        alignItems="center"
                      >
                        <Image
                          alt="McCollins Media"
                          src="/assets/image/icons/call.svg"
                          width="25px"
                          height="25px"
                        />
                        <span>&nbsp;&nbsp;{phoneNumber}</span>
                      </ChakraLink>
                    </Button>
                    <Button
                      colorScheme={props.color ? "yellow" : "whiteAlpha"}
                      background={props.color ? "#FFDE11" : null}
                      borderRadius="20px"
                      color="#000"
                      onClick={onOpen2}
                    >
                      <Image
                        alt="McCollins Media"
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
                    {props.color === "black" ? (
                      <Image
                        alt="McCollins Media"
                        src={"/assets/image/navbar/ham-burger.svg"}
                        width="31px"
                        height={"27px"}
                      />
                    ) : (
                      <Image
                        alt="McCollins Media"
                        src={"/assets/image/navbar/ham-burger-yellow.svg"}
                        width="31px"
                        height={"27px"}
                      />
                    )}
                  </Box>
                </Flex>
                <VStack
                  position={"absolute"}
                  zIndex="99"
                  right={0}
                  marginTop="6%"
                  className={props.color === "black" ? "drawerSocialIcon" : ""}
                >
                  <Box
                    mb={3}
                    as={ChakraLink}
                    href="https://www.tiktok.com/@mccollinsmedia"
                    target="_blank"
                  >
                    <Image
                      alt="McCollins Media"
                      src="/assets/image/icons/tiktok.svg"
                      width={"18px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    mb={3}
                    as={ChakraLink}
                    href="https://www.instagram.com/mccollinsmedia/?hl=en"
                    target="_blank"
                  >
                    <Image
                      alt="McCollins Media"
                      src="/assets/image/icons/insta.svg"
                      width={"21px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    mb={3}
                    as={ChakraLink}
                    href="https://www.facebook.com/mccollinsmedia/"
                    target="_blank"
                  >
                    <Image
                      alt="McCollins Media"
                      src="/assets/image/icons/fb.svg"
                      width={"9px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    mb={3}
                    as={ChakraLink}
                    href="https://www.linkedin.com/company/mccollins-media/"
                    target="_blank"
                  >
                    <Image
                      alt="McCollins Media"
                      src="/assets/image/icons/linkedin.svg"
                      width={"22px"}
                      height="21px"
                      priority={true}
                    />
                  </Box>
                  <Box
                    mb={3}
                    as={ChakraLink}
                    href="https://twitter.com/mccollinsmedia?lang=en"
                    target="_blank"
                  >
                    <Image
                      alt="McCollins Media"
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
                    as={ChakraLink}
                    href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media`}
                    target="_blank"
                    style={{
                      marginTop: "75px",
                      boxShadow: "-4px 10px 30px 7px rgba(0,0,0,0.09)",
                    }}
                  >
                    <Image
                      alt="McCollins Media"
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
                      color={props.color === "black" ? "#000" : "#FFDE11"}
                      mb={5}
                    >
                      Scroll
                    </Text>
                    <Image
                      alt="McCollins Media"
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
                {props.color === "black" ? (
                  <Image
                    alt="McCollins Media"
                    src={"/assets/image/navbar/ham-burger.svg"}
                    width="31px"
                    height={"27px"}
                  />
                ) : (
                  <Image
                    alt="McCollins Media"
                    src={"/assets/image/navbar/ham-burger-yellow.svg"}
                    width="31px"
                    height={"27px"}
                  />
                )}
              </Box>
            )}
          </Box>
        </Flex>
      </Container>

      {/* Sticky Header Start */}
      <Box className="header-section">
        <Container maxWidth={"8xl"}>
          <Flex>
            <Box flexGrow={1} zIndex="99">
              <Link href="/">
                <Image
                  alt="McCollins Media"
                  src={`/assets/image/navbar/logo-black.svg`}
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
                    <ButtonGroup gap="4" float={"right"} mr={"50px"}>
                      <Button
                        colorScheme="yellow"
                        background={"#FFDE11"}
                        borderRadius="20px"
                        color="#000"
                      >
                        <ChakraLink
                          href={`tel:${phoneNumber}`}
                          display={"flex"}
                          alignItems="center"
                        >
                          <Image
                            alt="McCollins Media"
                            src="/assets/image/icons/call.svg"
                            width="25px"
                            height="25px"
                          />
                          <span>&nbsp;&nbsp;{phoneNumber}</span>
                        </ChakraLink>
                      </Button>
                      <Button
                        colorScheme="yellow"
                        background={"#FFDE11"}
                        borderRadius="20px"
                        color="#000"
                        onClick={onOpen2}
                      >
                        <Image
                          alt="McCollins Media"
                          src="/assets/image/icons/chat.svg"
                          width="25px"
                          height="25px"
                          priority={true}
                        />
                        &nbsp;Lets talk
                      </Button>
                    </ButtonGroup>
                    <Box
                      className={styles.hamBurger}
                      colorScheme="teal"
                      onClick={onOpen}
                    >
                      <Image
                        alt="McCollins Media"
                        src={"/assets/image/navbar/ham-burger.svg"}
                        width="31px"
                        height={"27px"}
                      />
                    </Box>
                  </Flex>
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
      </Box>
      {/* Sticky Header End */}

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => onClose()}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent overflowY={"scroll"}>
          <Container className="headerSideBarCont">
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
                  <ChakraLink
                    href={`tel:${phoneNumber}`}
                    display={"flex"}
                    alignItems="center"
                  >
                    <Image
                      alt="McCollins Media"
                      src="/assets/image/icons/call.svg"
                      width="25px"
                      height="25px"
                    />
                    <span>&nbsp;&nbsp;Call</span>
                  </ChakraLink>
                </Button>
                <Button
                  colorScheme="yellow"
                  background={"#FFDE11"}
                  borderRadius="20px"
                  color="#000"
                  onClick={onOpen2}
                >
                  <Image
                    alt="McCollins Media"
                    src="/assets/image/icons/chat.svg"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;Lets talk
                </Button>
              </ButtonGroup>
            </DrawerHeader>
            <DrawerBody mt={"70px"} pl="0" textAlign="right">
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
                      onClick={() => {
                        setIsActive(!isActive);
                      }}
                      style={{ width: "100%", cursor: "pointer" }}
                    >
                      <Flex>
                        {isActive ? (
                          <ChevronDownIcon bg="#fff" placeSelf={"center"} />
                        ) : (
                          <ChevronRightIcon bg="#fff" placeSelf={"center"} />
                        )}
                        <Box flexGrow={1} bg="#fff"></Box>
                        <Link href="/services">
                          <a
                            onClick={() => {
                              onClose();
                            }}
                          >
                            services
                          </a>
                        </Link>
                      </Flex>
                    </li>
                    <ul
                      className={styles.ulDropdown}
                      style={{
                        display: isActive ? "block" : "none",
                      }}
                    >
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Website Development"
                          href="/services/web-design-and-development"
                        />
                      </li>
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Social Media Marketing"
                          href="/services/social-media-agency-dubai"
                        />
                      </li>
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Google Ads"
                          href="/services/google-ads"
                        />
                      </li>
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Search Engine Optimization"
                          href="/services/search-engine-optimization"
                        />
                      </li>
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem name="Film" href="/services/film" />
                      </li>

                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Brand Development"
                          href="/services/brand-development"
                        />
                      </li>

                      {/* <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="App Development"
                          href="/services/app-development"
                        />
                      </li> */}
                    </ul>
                    <li
                      className={
                        router.pathname == "/industry"
                          ? styles.sidebarActiveLi
                          : null
                      }
                      onClick={() => {
                        setIsActive2(!isActive2);
                      }}
                      style={{ width: "100%", cursor: "pointer" }}
                    >
                      <Flex>
                        {isActive2 ? (
                          <ChevronDownIcon bg="#fff" placeSelf={"center"} />
                        ) : (
                          <ChevronRightIcon bg="#fff" placeSelf={"center"} />
                        )}
                        <Box flexGrow={1} bg="#fff"></Box>
                        <div>industry</div>
                      </Flex>
                    </li>
                    <ul
                      className={styles.ulDropdown}
                      style={{
                        display: isActive2 ? "block" : "none",
                      }}
                    >
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Corporate Marketing"
                          href="/industry/corporate-marketing-services"
                        />
                      </li>
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Food And Beverage"
                          href="/industry/food-and-beverage-marketing-services"
                        />
                      </li>
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Healthcare Marketing"
                          href="/industry/healthcare-marketing-services"
                        />
                      </li>
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Luxury Marketing"
                          href="/industry/luxury-marketing-services"
                        />
                      </li>
                      <li
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <NavItem
                          name="Technology Marketing"
                          href="/industry/technology-marketing-services"
                        />
                      </li>
                    </ul>
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
                        as={ChakraLink}
                        href="https://www.tiktok.com/@mccollinsmedia"
                        target="_blank"
                      >
                        <Image
                          alt="McCollins Media"
                          src="/assets/image/icons/tiktok.svg"
                          width={"18px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box
                        mb={3}
                        as={ChakraLink}
                        href="https://www.instagram.com/mccollinsmedia/?hl=en"
                        target="_blank"
                      >
                        <Image
                          alt="McCollins Media"
                          src="/assets/image/icons/insta.svg"
                          width={"21px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box
                        mb={3}
                        as={ChakraLink}
                        href="https://www.facebook.com/mccollinsmedia/"
                        target="_blank"
                      >
                        <Image
                          alt="McCollins Media"
                          src="/assets/image/icons/fb.svg"
                          width={"9px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box
                        mb={3}
                        as={ChakraLink}
                        href="https://www.linkedin.com/company/mccollins-media/"
                        target="_blank"
                      >
                        <Image
                          alt="McCollins Media"
                          src="/assets/image/icons/linkedin.svg"
                          width={"22px"}
                          height="21px"
                          priority={true}
                        />
                      </Box>
                      <Box
                        mb={3}
                        as={ChakraLink}
                        href="https://twitter.com/mccollinsmedia?lang=en"
                        target="_blank"
                      >
                        <Image
                          alt="McCollins Media"
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
                      as={ChakraLink}
                      href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media`}
                      target="_blank"
                      style={{
                        marginTop: "75px",
                        boxShadow: "-4px 10px 30px 7px rgba(0,0,0,0.09)",
                      }}
                    >
                      <Image
                        alt="McCollins Media"
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
                        alt="McCollins Media"
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
      <Modal isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay />
        <ModalContent maxWidth={{ base: "90%", md: "60%" }}>
          <ModalHeader className="main-h3">Lets talk</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={formHandler}>
            <ModalBody>
              <FormControl isRequired>
                <FormLabel htmlFor="first-name">Name</FormLabel>
                <Input
                  id="first-name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  borderRadius={"50px"}
                />
              </FormControl>
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="contact">Contact No</FormLabel>
                <NumberInput max={50} min={10} value={contact}>
                  <NumberInputField
                    id="contact"
                    onChange={(e) => setContact(e.target.value)}
                    borderRadius={"50px"}
                  />
                </NumberInput>
              </FormControl>
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  borderRadius={"50px"}
                />
              </FormControl>
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="company">Company</FormLabel>
                <Input
                  id="company"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                  borderRadius={"50px"}
                />
              </FormControl>
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="looking-for">Looking For?</FormLabel>
                <Input
                  id="looking-for"
                  onChange={(e) => setLookingFor(e.target.value)}
                  value={lookingFor}
                  borderRadius={"50px"}
                />
              </FormControl>
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="project">Project Details</FormLabel>
                <Input
                  id="project"
                  onChange={(e) => setProject(e.target.value)}
                  value={project}
                  borderRadius={"50px"}
                />
              </FormControl>
              <input
                type="hidden"
                id="zc_gad"
                name="zc_gad"
                defaultValue={hiddenInputValue}
                ref={hiddenInputRef}
                onChange={handleHiddenInputChange}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                mt={5}
                colorScheme="yellow"
                background={"#FFDE11"}
                type="submit"
                borderRadius={"50px"}
                fontSize={"18px"}
                fontWeight="bold"
                isLoading={loading}
              >
                Submit Inquiry
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Navbar;
