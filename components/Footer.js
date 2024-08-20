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
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
// import TagManager from "react-gtm-module";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const Footer = () => {
  const [phrase, setPhrase] = useState("");
  const [i, setI] = useState(0);
  const phraseRef = useRef(null);

  const phrases = ["Website", "Vision", "Objective"];

  const randomNum = (num, max) => {
    let j = Math.floor(Math.random() * max);

    while (num === j) {
      j = Math.floor(Math.random() * max);
    }
    return j;
  };

  const updatePhrase = () => {
    const newIndex = randomNum(i, phrases.length);
    setI(newIndex);
    const newPhrase = phrases[newIndex];
    phraseRef.current.style.opacity = 0;
    setTimeout(() => {
      setPhrase(newPhrase);
      phraseRef.current.style.opacity = 1;
    }, 500);
  };

  useEffect(() => {
    updatePhrase();
  }, []);

  useEffect(() => {
    const animationTime = getAnimationTime();
    const interval = setInterval(updatePhrase, animationTime);
    return () => clearInterval(interval);
  }, []);

  const getAnimationTime = () => {
    const compStyles = window.getComputedStyle(phraseRef.current);
    let animation = compStyles.getPropertyValue("animation");
    animation =
      animation || compStyles.getPropertyValue("-moz-animation-duration");
    animation =
      animation || compStyles.getPropertyValue("-webkit-animation-duration");
    const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
    return animationTime;
  };

  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [contactMain, setContactMain] = useState();
  const [contactStatus, setContactStatus] = useState();
  const [company, setCompany] = useState();
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
    return currentUrl.includes("landing-pages/");
  };

  const phoneNumber = isWebDesignDevelopmentPage()
    ? "+971 55 901 5305"
    : "+971 55 901 5305";

  const whatsappNumber = isWebDesignDevelopmentPage()
    ? "+971 55 901 5305"
    : "+971 55 901 5305";

  // const phoneNumber = isWebDesignDevelopmentPage()
  //   ? "+971 55 901 53052"
  //   : "+971 55 901 5305";

  // const whatsappNumber = isWebDesignDevelopmentPage()
  //   ? "+971 55 901 53052"
  //   : "+971 55 901 5305";

  const toast = useToast();

  const handlePhoneChange = (status, number, countryData) => {
    setContact(number);
    setContactMain(`+${countryData.dialCode} ${number}`);
    setContactStatus(status);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    if (contactStatus === true) {
      const data = {
        Company: company,
        FirstName: name,
        Email: email,
        Page: currentUrl,
        Phone: contactMain,
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

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name,
          email: email,
          contact: contactMain,
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
        setContactMain(""),
        setContactStatus(false),
        setEmail(""),
        setCompany(""),
        setLookingFor(""),
        setProject(""),
        setLoading(false)
        // toast({
        //   title: "Form Submited",
        //   description: "Thank you for getting in touch!",
        //   status: "success",
        //   duration: 9000,
        //   isClosable: true,
        // })
      );
      let formData = new FormData();
      formData.append("Firstname", name);
      formData.append("Email", email);
      formData.append("Phone", contactMain);
      formData.append("Company", company);
      formData.append("Services", lookingFor);
      formData.append("Message", project);

      fetch(
        "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          // Check if the response is OK (status 200)
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }

          // Parse the JSON and return the result
          return response.json();
        })
        .then((data) => {
          // Use the parsed JSON data
          console.log(data);

          // TagManager.dataLayer({
          //   dataLayer: {
          //     event: "conversion",
          //     send_to: "AW-10803441186/_QCnCMn-o_kYEKLcvZ8o",
          //   },
          // });
          import("react-gtm-module").then((TagManager) => {
            TagManager.dataLayer({
              dataLayer: {
                event: "conversion",
                send_to: "AW-10803441186/_QCnCMn-o_kYEKLcvZ8o",
              },
            });
          });

          // Now you can navigate to the thank-you page
          router.push("/thank-you-ft");
        })
        .catch((error) => console.error(error));
    } else {
      toast({
        title: "Phone field is not valid",
        description: "Please check the phone field",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    }

    setLoading(false);
  };

  return (
    <Stack bg={"#000"} pt="70px" pb="20px" className="footer">
      <Container maxWidth={"7xl"} pb="2">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          mb={5}
        >
          <Box width={{ base: "100%", md: "60%" }}>
            <Heading color={"#fff"} fontSize={"7xl"} className="FooterCustomT1">
              Got A Project? <br />
              <span style={{ color: "#FFDE11" }}>
                Let’s Discuss Your&nbsp;
                <span
                  id="Transform"
                  className=" TransfomText random-word"
                  ref={phraseRef}
                >
                  {phrase}
                </span>
              </span>
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
                    <br />
                    United Arab Emirates
                  </Text>
                </TabPanel>
                {/* <TabPanel>
                  <p>Calicut, Kerala</p>
                </TabPanel> */}
              </TabPanels>
            </Tabs>
            <Tabs color={"#fff"} mt="5">
              <TabList>
                <Tab fontSize={"xl"}>Office Hours</Tab>
              </TabList>
              <TabPanels>
                <TabPanel pl={"0"}>
                  <Text>Monday - Friday: 9.00 AM to 6.00 PM</Text>
                </TabPanel>
                {/* <TabPanel>
                  <p>Calicut, Kerala</p>
                </TabPanel> */}
              </TabPanels>
            </Tabs>
            {/* <Box fontSize={"18px"} color="#fff" mt={"5"}>
              <Text>
                <b>Phone: </b>
                <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
              </Text>
              <Text>
                <b>Email: </b>
                <Link href="mailto:info@mccollinsmedia.com">
                  info@mccollinsmedia.com
                </Link>
              </Text>
              <Text>
                <b>WhatsApp Us: </b>
                <Link
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media`}
                >
                  {whatsappNumber}
                </Link>
              </Text>
            </Box>*/}
            {/* <Flex mt={5}>
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
            </Flex> */}
          </Box>
          <Box
            width={{ base: "100%", md: "40%" }}
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
              <FormControl
                isRequired
                mt={5}
                style={{ alignSelf: "end" }}
                className="int-grp1"
              >
                <FormLabel htmlFor="contact">Contact No</FormLabel>
                {/* <NumberInput max={50} min={10} value={contact}>
                  <NumberInputField
                    id="contact"
                    onChange={(e) => setContact(e.target.value)}
                    borderRadius={"50px"}
                  />
                </NumberInput> */}
                <IntlTelInput
                  style={{ width: "100%" }}
                  defaultCountry="ae"
                  containerClassName="intl-tel-input"
                  inputClassName="form-control"
                  value={contact}
                  onPhoneNumberChange={handlePhoneChange}
                />
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
              <Flex>
                <FormControl isRequired mt={5} mr={5}>
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
              </Flex>
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
        <hr style={{ marginTop: "40px" }} />

        <Flex
          my={"20px"}
          justifyContent="space-between"
          alignItems={"center"}
          direction={{ base: "column", md: "row" }}
        >
          <Box
            mt={"30px"}
            textAlign={"center"}
            width={{ base: "100%", md: "25%" }}
          >
            <Image
              alt="McCollins Media"
              src="/assets/image/navbar/logo-yellow.svg"
              width="209px"
              height="46"
            />

            <Text color={"#fff"} mt={2} fontSize="12px" textAlign={"center"}>
              Connect with us to change <br /> your digital game.
            </Text>
          </Box>
          <Flex
            mt={"20px"}
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            width={{ base: "100%", md: "50%" }}
            className="footer-links"
          >
            {/* <Box>
              <Heading color={"#fff"} fontSize={"2xl"} fontWeight={"normal"}>
                Quick Link
              </Heading>
              <Box
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/industry">Industry</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/privacy-policy">Terms & Conditions</Link>
              </Box>
            </Box> */}
            <Box mx={{ base: "0", md: "auto" }}>
              <Heading color={"#fff"} fontSize={"2xl"} fontWeight={"normal"}>
                Services
              </Heading>
              <Box
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <Link href="/landing-pages/web-design-development-1">
                  Website Development
                </Link>
                <Link href="/landing-pages/social-media-marketing">
                  Social Media Marketing
                </Link>
                <Link href="/services/google-ads">Google Ads</Link>
                <Link href="/services/search-engine-optimization">
                  Search Engine Optimization
                </Link>
                <Link href="/film-production">Film Production</Link>
                {/* <Link href="/services/brand-development">
                  Brand Development
                </Link>
                <Link href="/landing-pages/perfomance-marketing">
                  Perfomance Marketing
                </Link> */}
              </Box>
            </Box>
            <Box mx={{ base: "0", md: "auto" }}>
              <Heading
                color={"#fff"}
                fontSize={"2xl"}
                fontWeight={"normal"}
                mt={{ base: "20px", md: "0" }}
              >
                Industry
              </Heading>
              <Box
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <Link href="/industry/corporate-marketing-services">
                  Corporate Marketing Services
                </Link>
                <Link href="/industry/food-and-beverage-marketing-services">
                  Food & Beverage Marketing
                </Link>
                <Link href="/industry/healthcare-marketing-services">
                  Healthcare Marketing Services
                </Link>
                <Link href="/industry/luxury-marketing-services">
                  Luxury Marketing Services
                </Link>
                <Link href="/industry/technology-marketing-services">
                  Technology Marketing Services
                </Link>
              </Box>
            </Box>
          </Flex>
          <Box
            width={{ base: "100%", md: "25%" }}
            ml={{ base: "auto", md: "30px " }}
            mt={"20px"}
          >
            <Heading
              color={"#fff"}
              fontSize={"2xl"}
              fontWeight={"normal"}
              mb={"2"}
            >
              Lets Talk
            </Heading>
            <Box fontSize={"18px"} color="#fff">
              <Text>
                <b>
                  <PhoneIcon />{" "}
                </b>
                <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
              </Text>
              <Text>
                <b>
                  <EmailIcon />{" "}
                </b>
                <Link href="mailto:info@mccollinsmedia.com">
                  info@mccollinsmedia.com
                </Link>
              </Text>
              <Text display={"flex"}>
                <img
                  width={"18px"}
                  height={"18px"}
                  style={{ objectFit: "contain", marginRight: "4px" }}
                  src="/assets/image/icons/whatsapp-24.png"
                />
                <Link
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media`}
                >
                  {whatsappNumber}
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
          {/* <Box mt={"30px"}>
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
              <Link href="/privacy-policy">Privacy Policy </Link> &nbsp;&nbsp; I
              &nbsp;&nbsp; Terms & Conditions
            </Text>
          </Box> */}
        </Flex>
        <hr />
        <Text color={"#fff"} mt={5} fontSize="12px" textAlign={"center"}>
          {" "}
          © 2024 All Rights Reserved
          {/* {isSmallerThan400 && <br />} */}
          <span style={{ color: "#FFDE11", cursor: "pointer" }}>
            &nbsp;McCollins Media
          </span>
        </Text>
      </Container>
    </Stack>
  );
};

export default Footer;
