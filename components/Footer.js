import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Link as chakraLink,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [company, setCompany] = useState();
  const [lookingFor, setLookingFor] = useState("");
  const [project, setProject] = useState("");

  const [loading, setLoading] = useState(false);

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
      }),
    };
    fetch("/api/form-submit", requestOptions).then(
      (response) => response.json(),
      setName(""),
      setContact(""),
      setEmail(""),
      setCompany(""),
      setLookingFor(""),
      setProject(""),
      setLoading(false),
      toast({
        title: "Form Submited",
        description: "Thank you for getting in touch!",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    );

    let formData = new FormData();
    formData.append("Firstname", name);
    formData.append("Email", email);
    formData.append("Phone", contact);
    formData.append("Company", company);
    formData.append("Services", lookingFor);
    formData.append("Message", project);

    fetch(
      "https://script.google.com/macros/s/AKfycbws5l_t6j39UZQ_unevk0qqn_IfYCbfKT7jI4UP6zb8mjX8QzNR/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <Stack bg={"#000"} pt="70px" pb="20px" className="footer">
      <Container maxWidth={"7xl"} pb="2">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          mb={5}
        >
          <Box width={{ base: "100%", md: "30%" }}>
            <Heading color={"#fff"} fontSize={"7xl"}>
              Got A<br /> Project? <br />
              <span style={{ color: "#FFDE11" }}>Let’s Talk.</span>
            </Heading>
            <Text color={"#fff"} fontSize={"2xl"}>
              Connect with us to change your digital game.
            </Text>
            <Tabs color={"#fff"} mt="5">
              <TabList>
                <Tab fontSize={"xl"}>Our Address</Tab>
              </TabList>
              <TabPanels>
                <TabPanel pl={"0"}>
                  <Text>
                    G04, Loft Office 2,
                    <br />
                    Entrance C, Dubai Media City
                  </Text>
                </TabPanel>
                {/* <TabPanel>
                  <p>Calicut, Kerala</p>
                </TabPanel> */}
              </TabPanels>
            </Tabs>
            <Box fontSize={"18px"} color="#fff" mt={"5"}>
              <Text>
                <b>Phone: </b>
                <Link href="tel:+97144456848">+971 4 445 6848</Link>
              </Text>
              <Text>
                <b>Email: </b>
                <Link href="mailto:info@mccollinsmedia.com">
                  info@mccollinsmedia.com
                </Link>
              </Text>
            </Box>
            <Flex mt={5}>
              <Box
                p={3}
                pl={0}
                as={chakraLink}
                href="https://www.tiktok.com/@mccollinsmedia"
                target="_blank"
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/icons/tiktok.svg"
                  width={"18px"}
                  height="21px"
                />
              </Box>
              <Box
                p={3}
                as={chakraLink}
                href="https://www.instagram.com/mccollinsmedia/?hl=en"
                target="_blank"
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/icons/insta.svg"
                  width={"21px"}
                  height="21px"
                />
              </Box>
              <Box
                p={3}
                as={chakraLink}
                href="https://www.facebook.com/mccollinsmedia/"
                target="_blank"
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/icons/fb.svg"
                  width={"9px"}
                  height="21px"
                />
              </Box>
              <Box
                p={3}
                as={chakraLink}
                href="https://www.linkedin.com/company/mccollins-media/"
                target="_blank"
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/icons/linkedin.svg"
                  width={"22px"}
                  height="21px"
                />
              </Box>
              <Box
                p={3}
                as={chakraLink}
                href="https://twitter.com/mccollinsmedia?lang=en"
                target="_blank"
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/icons/twiter.svg"
                  width={"27px"}
                  height="20px"
                />
              </Box>
            </Flex>
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            mt={{ base: "50px", md: "0" }}
            color="#fff"
          >
            <form onSubmit={formHandler}>
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
            </form>
          </Box>
        </Flex>
        <Box className="footerQuicklink">
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </Box>
        <hr />
        <Flex
          mt={"20px"}
          justifyContent="space-between"
          alignItems={"center"}
          direction={{ base: "column", md: "row" }}
        >
          <Box mt={"30px"}>
            <Image
              alt="McCollins Media"
              src="/assets/image/navbar/logo-yellow.svg"
              width="209px"
              height="46"
            />
          </Box>
          <Box mt={"30px"}>
            <Text color={"#fff"} fontSize="12px" textAlign={"center"}>
              © 2023 All Rights Reserved
              {isSmallerThan400 && <br />}
              <span style={{ color: "#FFDE11", cursor: "pointer" }}>
                &nbsp; McCollins Media
              </span>
            </Text>
          </Box>
          <Box mt={"30px"}>
            <Text color={"#fff"} fontSize="12px" cursor={"pointer"}>
              Privacy Policy &nbsp;&nbsp; I &nbsp;&nbsp; Terms & Conditions
            </Text>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default Footer;
