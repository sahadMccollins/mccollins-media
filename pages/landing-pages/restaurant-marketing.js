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
  Select,
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

  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [restaurantName, setRestaurantName] = useState("");
  const [contactMain, setContactMain] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [customRole, setCustomRole] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: name,
        email: email,
        contact: contactMain,
        restaurantName: restaurantName,
        role: role === "other" ? customRole : role,
        date: new Date(),
      }),
    };

    fetch("/api/restaurant-marketing-form-submit", requestOptions).then(
      (response) => response.json(),
      setLoading(false),
      setName(""),
      setContact(""),
      setContactMain(""),
      setEmail(""),
      setRestaurantName(""),
      setRole(""),
      setCustomRole(""),
      router.push("/seat-confirmed")
    );

    let formData = new FormData();
    formData.append("FullName", name);
    formData.append("Email", email);
    formData.append("Phone", contactMain);
    formData.append("RestaurantName", restaurantName);
    formData.append("Role", role === "other" ? customRole : role);
  };

  const handlePhoneChange = (value) => {
    setContactMain(`+${value}`);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleFormOnBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
    setFormSubmit((formSubmit) => !formSubmit);
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole !== "other") {
      setCustomRole(""); // Clear custom role if "Other" is not selected
    }
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
          bgGradient={{
            base: "linear(to-t,rgb(233, 126, 99),rgb(237, 226, 222))",
            md: "none",
          }}
          // boxShadow="lg"
          w={{ base: "100%", md: "90%" }}
          mx="auto"
          // bg="gray.50"
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
            display={{ md: "block", base: "none" }}
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

          {formSubmit ? (
            <Box
              w="100%"
              // bg="gray.50"
              // minHeight="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                as="form"
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="xl"
                maxWidth="700px"
                width="100%"
                onSubmit={handleSubmit}
                zIndex={100}
              >
                <VStack spacing={4} align="stretch">
                  <Heading as="h2" size="lg" textAlign="center" mb={2}>
                    Reserve Your Spot for the Workshop
                  </Heading>
                  <Text textAlign="center" color="gray.600" mb={4}>
                    Be part of the future of restaurant marketing—fill in your
                    details to join us!
                  </Text>
                  <FormControl isRequired>
                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                    <PhoneInput
                      country="ae"
                      value={contact}
                      onChange={handlePhoneChange}
                      inputStyle={{
                        width: "100%",
                        height: "2.5rem",
                        borderRadius: "0.375rem",
                        border: "1px solid #E5EAEF",
                        fontSize: "14px",
                        color: "#2D3748",
                        outline: "none",
                        boxShadow: "0 0 0 1px transparent",
                        transition: "box-shadow 0.2s ease",
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      onFocus={(e) => {
                        e.target.style.boxShadow = "0 0 0 1px #3182ce";
                        e.target.style.borderColor = "#3182ce";
                      }}
                      onBlur={(e) => {
                        e.target.style.boxShadow = "none";
                        e.target.style.borderColor = "#E5EAEF";
                      }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="restaurant">Restaurant Name</FormLabel>
                    <Input
                      id="restaurant"
                      placeholder="Enter your restaurant name"
                      onChange={(e) => setRestaurantName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="role">Your Role</FormLabel>
                    <Select
                      id="role"
                      placeholder="Select your role"
                      onChange={handleRoleChange}
                    >
                      <option value="owner">Owner</option>
                      <option value="manager">Manager</option>
                      <option value="chef">Chef</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                  {role === "other" && (
                    <FormControl isRequired>
                      <FormLabel htmlFor="customRole">
                        Please Specify Your Role
                      </FormLabel>
                      <Input
                        id="customRole"
                        placeholder="Enter your role"
                        value={customRole}
                        onChange={(e) => setCustomRole(e.target.value)}
                      />
                    </FormControl>
                  )}
                  <Button
                    type="submit"
                    // colorScheme="orange"
                    size="lg"
                    // _hover={{ bg: "orange.500" }}
                    bg="#FF4522"
                    color="white"
                    _hover={{ bg: "red.600" }}
                    isLoading={loading}
                    loadingText="Submitting"
                  >
                    Secure My Spot
                  </Button>
                  <Button
                    isDisabled={loading}
                    variant="solid"
                    onClick={handleFormOnBtn}
                  >
                    Cancel
                  </Button>
                </VStack>
              </Box>
            </Box>
          ) : (
            <Container maxW="5xl">
              <Flex direction={{ base: "column", md: "row" }} gap={8}>
                {/* Left Content Section */}
                <Box flex={{ base: "1", md: "3" }} zIndex={5}>
                  <VStack align={{ base: "center", md: "start" }} spacing={6}>
                    {isMobile ? (
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "30px",
                          lineHeight: "1.2",
                        }}
                      >
                        <div>Join the Ultimate</div>
                        <div style={{ color: "#FF4522" }}>
                          Restaurant Marketing Workshop
                        </div>
                      </div>
                    ) : (
                      <Heading
                        size={{ base: "2xl", md: "3xl" }}
                        lineHeight={{ base: "1.4", md: "1.2" }}
                      >
                        Join the Ultimate
                        <Text
                          color="#FF4522"
                          as="span"
                          fontStyle="italic"
                          display="block"
                        >
                          Restaurant Marketing Workshop!
                        </Text>
                      </Heading>
                    )}

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

                    <Box
                      bg="#C6C5C1"
                      p={6}
                      borderRadius="md"
                      w="full"
                      maxW="md"
                    >
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
                          <Text>5th February 2025</Text>
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
                      // onClick={onOpen2}
                      onClick={handleFormOnBtn}
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
          )}
        </Box>
      </Box>

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
