import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroBanner from "../components/HeroBanner";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

const Contact = () => {
  const swiperRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
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
        name: name,
        email: email,
        contact: contact,
        lookingFor: lookingFor,
        project: project,
      }),
    };
    fetch("/api/form-submit", requestOptions).then(
      (response) => response.json(),
      setName(""),
      setContact(""),
      setEmail(""),
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
  };
  return (
    <Stack>
      <HeroBanner
        img="/assets/image/banner/about-banner.webp"
        breadcrumb="contact us"
        h2="ready to do something big?"
      />
      <Box>
        <Container maxWidth={"7xl"}>
          <Flex my={20} direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading
                style={{
                  background:
                    "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  width: "fit-content",
                  padding: "0 15px",
                }}
              >
                Contact
              </Heading>
              <Text fontWeight={"bold"} fontSize={"20px"} mt={5} mb={10}>
                Mobile: +971 4 445 6848
                <br />
                E-Mail: Info@Mccollinsmedia.Com
              </Text>
              <Heading
                style={{
                  background:
                    "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  width: "fit-content",
                  padding: "0 15px",
                }}
              >
                our address
              </Heading>
              <Text fontWeight={"bold"} fontSize={"20px"} mt={5} mb={10}>
                UAE:
                <br /> 209, Entance C, Loft Offices 1 <br />
                Dubai Media City, Dubai
                <br /> India:
                <br /> Calicut, Kerala
              </Text>
              <Heading
                style={{
                  background:
                    "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  width: "fit-content",
                  padding: "0 15px",
                }}
              >
                office hours
              </Heading>
              <Text fontWeight={"bold"} fontSize={"20px"} mt={5} mb={10}>
                Sunday - Thursday: 09:00 - 06:00
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading
                style={{
                  background:
                    "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  width: "fit-content",
                  padding: "0 15px",
                }}
              >
                Ready to get started?
              </Heading>
              <Text
                fontWeight={"bold"}
                fontSize={"16px"}
                color="#707070"
                mt={5}
                mb={10}
              >
                Your email address will not be published. Required fields are
                marked *
              </Text>
              {/* <form className="contact-form">
                <FormControl isRequired>
                  <FormLabel htmlFor="first-name">First Name</FormLabel>
                  <Input id="first-name" borderRadius={"50px"} />
                </FormControl>
                <FormControl isRequired mt={5}>
                  <FormLabel htmlFor="contact">Contact No</FormLabel>
                  <NumberInput max={50} min={10}>
                    <NumberInputField id="contact" borderRadius={"50px"} />
                  </NumberInput>
                </FormControl>
                <FormControl isRequired mt={5}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" borderRadius={"50px"} />
                </FormControl>
                <FormControl isRequired mt={5}>
                  <FormLabel htmlFor="first-name">Looking For?</FormLabel>
                  <Input id="first-name" borderRadius={"50px"} />
                </FormControl>
                <FormControl isRequired mt={5}>
                  <FormLabel htmlFor="first-name">Project Details</FormLabel>
                  <Input id="first-name" borderRadius={"50px"} />
                </FormControl>
                <Button
                  mt={5}
                  colorScheme="yellow"
                  background={"#FFDE11"}
                  type="submit"
                  borderRadius={"50px"}
                  fontSize={"18px"}
                  fontWeight="bold"
                >
                  Submit Inquiry
                </Button>
              </form> */}
              <form onSubmit={formHandler} className="contact-form">
                <FormControl isRequired>
                  <FormLabel htmlFor="first-name">First Name</FormLabel>
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
        </Container>
        <Box bg={"#FFDE11"}>
          <Container maxWidth={"7xl"} py={10} textAlign="center">
            <Heading fontSize={"5xl"}>
              we would love to hear about
              <br /> start your new project?
            </Heading>
            <Button my={5} bg="#fff" borderRadius={"20px"}>
              Start New Project
            </Button>
          </Container>
        </Box>
        <Container maxWidth={"7xl"} my="20">
          <Box position={"relative"} ml={{ base: 0, md: "10%" }}>
            <Heading
              borderLeft="20px solid #FFE962"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight={"bold"}
              pl="6"
            >
              WHAT OUR CLIENTS
              <br /> ARE SAYING?
            </Heading>
            <Box
              display={"flex"}
              alignItems="end"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box width={{ base: "100%", md: "60%" }}>
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  ref={swiperRef}
                >
                  <SwiperSlide>
                    <Box bg="#F7F7F7" p={"16"} mt="10">
                      <Text>
                        McCollins has helped launch cleaning Superstore from the
                        website development to social media and ad management.
                        We are very happy to have an extended team in McCollins.
                        The team takes ownership and I would be more than happy
                        to recommend them to other brands
                      </Text>
                      <Heading fontSize={"2xl"} mt="5">
                        Alexa - Marketing Manager
                      </Heading>
                      <Text fontSize={"20px"}>Cleaning Superstore</Text>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box bg="#F7F7F7" p={"16"} mt="10">
                      <Text>
                        McCollins has helped launch cleaning Superstore from the
                        website development to social media and ad management.
                        We are very happy to have an extended team in McCollins.
                        The team takes ownership and I would be more than happy
                        to recommend them to other brands
                      </Text>
                      <Heading fontSize={"2xl"} mt="5">
                        Alexa - Marketing Manager1
                      </Heading>
                      <Text fontSize={"20px"}>Cleaning Superstore</Text>
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </Box>
              <Box>
                <HStack spacing="0" cursor={"pointer"} zIndex="2">
                  <Box
                    background={"#000"}
                    p="8px 15px 10px 15px"
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                  >
                    <ChevronLeftIcon color={"#fff"} />
                  </Box>
                  <Box
                    background={"#6F6F6F"}
                    p="8px 15px 10px 15px"
                    onClick={() => swiperRef.current.swiper.slideNext()}
                  >
                    <ChevronRightIcon color={"#fff"} />
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box
              display={{ base: "none", md: "block" }}
              bg={"#FFE962"}
              width="350px"
              height={"400px"}
              position="absolute"
              bottom={"42px"}
              left="50%"
              textAlign={"center"}
            >
              <Image
                src={"/assets/image/design/4.png"}
                width="176px"
                height={"370px"}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Stack>
  );
};

export default Contact;
