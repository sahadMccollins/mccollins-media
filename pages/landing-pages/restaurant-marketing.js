import React, { useEffect, useRef, useState } from "react";
import FooterNav from "../../components/Landing-page-components/FooterNav";
import Head from "next/head";
import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  VStack,
  useColorModeValue,
  HStack,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  useDisclosure,
  ModalFooter,
  InputGroup,
  InputLeftAddon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CalendarDays, ChevronRight, Clock, MapPin } from "lucide-react";
import axios from "axios";
import IntlTelInput from "react-intl-tel-input";
// import "react-intl-tel-input/dist/main.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const RestaurantMarketing = () => {
  useEffect(() => {
    document.body.className = "LandingPage Restaurant Marketing";
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [company, setCompany] = useState("");
  const [contactMain, setContactMain] = useState("");
  //   const [lookingFor, setLookingFor] = useState("");
  //   const [project, setProject] = useState("");

  const [loading, setLoading] = useState(false);

  const [hiddenInputValue, setHiddenInputValue] = useState("");
  const hiddenInputRef = useRef();
  const router = useRouter();
  const currentUrl = router.asPath;

  useEffect(() => {
    // Initialize the hidden input value when the component mounts
    setHiddenInputValue(hiddenInputRef.current?.value);
  }, []);

  const handleHiddenInputChange = () => {
    // Update the state with the current hidden input value
    setHiddenInputValue(hiddenInputRef.current?.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: name,
        email: email,
        contact: contactMain,
        company: company,
        date: new Date(),
      }),
    };

    fetch("/api/form-submit", requestOptions).then(
      (response) => response.json(),
      setName(""),
      setContact(""),
      setContactMain(""),
      setEmail(""),
      //   setLookingFor(""),
      setCompany(""),
      //   setProject(""),
      setLoading(false),
      // toast({
      //   title: "Form Submited",
      //   description: "Thank you for getting in touch!",
      //   status: "success",
      //   duration: 9000,
      //   isClosable: true,
      // }),
      router.push("/Thank-you-for-contacting-us"),
      onClose2()
    );

    let formData = new FormData();
    formData.append("Firstname", name);
    formData.append("Email", email);
    formData.append("Phone", contactMain);
    formData.append("Company", company);
    // formData.append("Services", lookingFor);
    // formData.append("Message", project);

    fetch(
      "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        TagManager.dataLayer({
          dataLayer: {
            event: "conversion",
            send_to: "AW-10803441186/fOI8CPypnfkYEKLcvZ8o",
            page: window.location.href,
          },
        });
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    const data = {
      Company: company,
      FirstName: name,
      Email: email,
      Page: currentUrl,
      Phone: contactMain,
      //   SelectedServices: lookingFor,
      //   Message: project,
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

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const handlePhoneChange = (status, number, countryData) => {
    setContact(number);
    setContactMain(`+${countryData.dialCode} ${number}`);
    // setContactStatus(status);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handlePhoneChange2 = (value) => {
    setContactMain(value);
  };

  return (
    <Box position="">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      {/* <SearchEngineBanner /> */}
      <Box w="100%" bg="gray.50" marginBottom="-30px">
        <Box
          // maxW="7xl"
          // bgGradient="linear(to-r, gray.50, red.100)"
          my={8}
          // boxShadow="lg"
          w={{ base: "100%", md: "80%" }}
          mx="auto"
          bg="gray.50"
          position="relative"
          py={12}
          px={{ base: 2, md: 8 }}
          // borderRadius="lg"
          overflow={"hidden"}
        >
          <Box
            position="absolute"
            top="20%"
            left="70%"
            transform="translate(-50%, -50%)"
            w="500px"
            h="500px"
            bgGradient="radial(circle, #FC480E 30%, rgba(252, 72, 14, 0.5) 70%, transparent 100%)"
            filter="blur(100px)"
            zIndex={1}
          />

          <img
            style={{
              position: "absolute",
              top: "10%",
              left: "70%",
              opacity: 0.2,
              width: "500px",
            }}
            src="/assets/image/design/Star.png"
          />
          <Container maxW="5xl">
            <Flex direction={{ base: "column", md: "row" }} gap={8}>
              {/* Left Content Section */}
              <Box flex={{ base: "1", md: "3" }} zIndex={5}>
                <VStack align={{ base: "center", md: "start" }} spacing={6}>
                  {/* <Heading size="3xl" lineHeight="1.2">
                    Join the Ultimate
                    <Text as="span" fontStyle="italic" display="block">
                      Restaurant Marketing
                    </Text>
                    Workshop!
                  </Heading> */}
                  <Heading
                    size={{ base: "2xl", md: "3xl" }}
                    lineHeight={{ base: "1.4", md: "1.2" }}
                  >
                    Join the Ultimate
                    <Text as="span" fontStyle="italic" display="block">
                      Restaurant Marketing
                    </Text>
                    Workshop!
                  </Heading>

                  <Box
                    flex={{ base: "1", md: "2" }}
                    maxW={{ md: "400px" }}
                    mt="37%"
                    zIndex={5}
                    display={{ base: "block", md: "none" }}
                  >
                    <Image
                      src="https://res.cloudinary.com/duel7c31l/image/upload/v1736743942/shutterstock_2024994161_pqcai9.png"
                      alt="Workshop discussion"
                      w="full"
                      h="auto"
                      filter="grayscale(100%)"
                      objectFit="cover"
                      borderRadius="md"
                    />
                  </Box>

                  <Text fontSize="xl" maxW="3xl">
                    Discover the{" "}
                    <Text as="span" fontStyle="italic">
                      top trends shaping Restaurant Marketing in 2025
                    </Text>{" "}
                    and learn how to stay ahead of the curve!
                  </Text>

                  <Box w="full" maxW="2xl">
                    <Heading size="lg" mb={4}>
                      What's in it for you?
                    </Heading>
                    <List spacing={3}>
                      {[
                        "Insights into the latest digital trends for the F&B industry",
                        "Expert tips on boosting your restaurant's online presence",
                        "Networking with industry leaders",
                      ].map((item, index) => (
                        <ListItem
                          key={index}
                          display="flex"
                          alignItems="center"
                        >
                          <Text mr={2} fontSize="xl">
                            ›
                          </Text>
                          <Text>{item}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Box bg="#C6C5C1" p={6} borderRadius="md" w="full" maxW="md">
                    <VStack align="start" spacing={3}>
                      <HStack>
                        <Box
                          as="span"
                          display="inline-flex"
                          justifyContent="center"
                          alignItems="center"
                          borderRadius="full"
                          w="24px"
                          h="24px"
                          bg="black"
                          p="5px"
                        >
                          <CalendarDays color="white" boxSize={6} />
                        </Box>
                        <Text>23rd January 2025</Text>
                      </HStack>
                      <HStack>
                        <Box
                          as="span"
                          display="inline-flex"
                          justifyContent="center"
                          alignItems="center"
                          borderRadius="full"
                          w="24px"
                          h="24px"
                          bg="black"
                          p="5px"
                        >
                          <Clock color="white" boxSize={6} />
                        </Box>
                        <Text>10:00 AM to 1:00 PM</Text>
                      </HStack>
                      <HStack>
                        <Box
                          as="span"
                          display="inline-flex"
                          justifyContent="center"
                          alignItems="center"
                          borderRadius="full"
                          w="24px"
                          h="24px"
                          bg="black"
                          p="5px"
                        >
                          <MapPin color="white" boxSize={6} />
                        </Box>
                        <Text>Sofitel Downtown Hotel, Dubai</Text>
                      </HStack>
                    </VStack>
                  </Box>

                  <Box maxW="2xl">
                    <Heading size="lg" mb={2}>
                      Seats are limited!
                    </Heading>
                    <Text fontStyle="italic">
                      Don't miss out on this exclusive opportunity.
                    </Text>
                  </Box>
                  <Button
                    size="lg"
                    bg="#FF4522"
                    color="white"
                    _hover={{ bg: "red.600" }}
                    px={{ base: 4, md: 8 }} // Adjusts padding for mobile and larger devices
                    py={{ base: 4, md: 8 }} // Adjusts padding for mobile and larger devices
                    onClick={onOpen2}
                  >
                    <VStack spacing={0}>
                      <Text fontStyle="italic">
                        RSVP now to secure your spot!
                      </Text>
                    </VStack>
                  </Button>

                  <Image
                    src="/assets/image/navbar/logo-black.svg"
                    alt="McCollins Media"
                    h="50px"
                    objectFit="contain"
                    mt={10}
                  />
                </VStack>
              </Box>

              {/* Right Image Section */}
              <Box
                flex={{ base: "1", md: "2" }}
                maxW={{ md: "400px" }}
                mt="37%"
                zIndex={5}
                display={{ base: "none", md: "block" }}
              >
                <Image
                  src="https://res.cloudinary.com/duel7c31l/image/upload/v1736743942/shutterstock_2024994161_pqcai9.png"
                  alt="Workshop discussion"
                  w="full"
                  h="auto"
                  filter="grayscale(100%)"
                  objectFit="cover"
                  borderRadius="md"
                />
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>

      {isOpen2 && !isMobile && (
        <Modal isOpen={isOpen2} onClose={onClose2}>
          <ModalOverlay />
          <ModalContent
            maxWidth={{ base: "90%", md: "60%" }}
            className="bgmodal"
          >
            <ModalHeader className="main-h3">Lets talk</ModalHeader>
            <ModalCloseButton />

            <form onSubmit={formHandler}>
              <ModalBody position="relative">
                <div className="mrow">
                  <div className="m-col-md-4">
                    <FormControl isRequired>
                      <FormLabel htmlFor="first-name">Name</FormLabel>
                      <Input
                        id="first-name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        borderRadius={"50px"}
                      />
                    </FormControl>
                  </div>
                  <div className="m-col-md-4">
                    <FormControl
                      isRequired
                      style={{ alignSelf: "end" }}
                      className="int-grp1"
                    >
                      <FormLabel htmlFor="contact">Contact No</FormLabel>
                      <IntlTelInput
                        style={{
                          width: "100%",
                          zIndex: 9999,
                        }}
                        defaultCountry="ae"
                        containerClassName="intl-tel-input"
                        inputClassName="form-control"
                        value={contact}
                        onPhoneNumberChange={handlePhoneChange}
                      />
                    </FormControl>
                  </div>
                  <div className="m-col-md-4">
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        id="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        borderRadius={"50px"}
                      />
                    </FormControl>
                  </div>
                  <div className="m-col-md-4">
                    <FormControl isRequired>
                      <FormLabel htmlFor="company">Company</FormLabel>
                      <Input
                        id="company"
                        onChange={(e) => setCompany(e.target.value)}
                        value={company}
                        borderRadius={"50px"}
                      />
                    </FormControl>
                  </div>

                  <div className="m-col-md-4">
                    <input
                      type="hidden"
                      id="zc_gad"
                      name="zc_gad"
                      defaultValue={hiddenInputValue}
                      ref={hiddenInputRef}
                      onChange={handleHiddenInputChange}
                    />
                  </div>
                </div>
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
      )}

      {isOpen2 && isMobile && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="custom-modal-header">
              <h3>Let's talk</h3>
              <button className="close-btn" onClick={onClose2}>
                ×
              </button>
            </div>

            <form onSubmit={formHandler}>
              {/* <div className="modal-body">
                <div className="input-group">
                  <div className="input-item">
                    <label>Name</label>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>

                  <div className="input-item">
                    <label>Contact No</label>
                    <IntlTelInput
                      style={{
                        width: "100%",
                        zIndex: 9999,
                      }}
                      defaultCountry="ae"
                      containerClassName="intl-tel-input"
                      inputClassName="form-control"
                      value={contact}
                      onPhoneNumberChange={handlePhoneChange}
                    />
                  </div>

                  <div className="input-item">
                    <label>Email</label>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>

                  <div className="input-item">
                    <label>Company</label>
                    <input
                      type="text"
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                      required
                    />
                  </div>
                </div>
              </div> */}

              <div className="mrow">
                <div className="m-col-md-4">
                  <FormControl isRequired>
                    <FormLabel htmlFor="first-name">Name</FormLabel>
                    <Input
                      id="first-name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      borderRadius={"50px"}
                    />
                  </FormControl>
                </div>
                <div className="m-col-md-4">
                  <FormControl
                    isRequired
                    style={{ alignSelf: "end" }}
                    className="int-grp1"
                  >
                    <FormLabel htmlFor="contact">Contact No</FormLabel>
                    <PhoneInput
                      country="ae" // Set default country
                      value={contact}
                      onChange={handlePhoneChange2}
                      inputStyle={{
                        borderRadius: "50px", // Same as the Input component
                        border: "1px solid #ccc", // Optional border color
                        fontSize: "14px", // Optional font size
                      }}
                    />
                    {/* <IntlTelInput
                      style={{
                        width: "100%",
                        // zIndex: 9999,
                      }}
                      defaultCountry="ae"
                      containerClassName="intl-tel-input"
                      inputClassName="form-control"
                      value={contact}
                      onPhoneNumberChange={handlePhoneChange}
                    /> */}

                    {/* <IntlTelInput
                      id="contact"
                      style={{ width: "100%" }}
                      defaultCountry="ae"
                      containerClassName="intl-tel-input"
                      inputClassName="form-control"
                      value={contact}
                      onPhoneNumberChange={(value) => handlePhoneChange(value)}
                    /> */}
                  </FormControl>
                </div>
                <div className="m-col-md-4">
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      borderRadius={"50px"}
                    />
                  </FormControl>
                </div>
                <div className="m-col-md-4">
                  <FormControl isRequired>
                    <FormLabel htmlFor="company">Company</FormLabel>
                    <Input
                      id="company"
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                      borderRadius={"50px"}
                    />
                  </FormControl>
                </div>

                <div className="m-col-md-4">
                  <input
                    type="hidden"
                    id="zc_gad"
                    name="zc_gad"
                    defaultValue={hiddenInputValue}
                    ref={hiddenInputRef}
                    onChange={handleHiddenInputChange}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button className="submit-btn" type="submit">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* <ClientPortFolio /> */}
      {/* <OurApproachtoSEO /> */}
      {/* <SeoServicesWeOffer /> */}
      {/* <LetsTalkNumbers /> */}
      {/* <ClientResults /> */}
      <FooterNav />
    </Box>
  );
};
export default RestaurantMarketing;
