import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import FormBox from "../components/FormBox";
import HeroBanner from "../components/HeroBanner";
import Testimonials from "../components/Testimonials";

const Contact = () => {
  return (
    <Stack>
      <HeroBanner
        img="/assets/image/banner/about-banner.webp"
        breadcrumb="contact us"
        h2="ready to do something big?"
      />
      <Box>
        <Container maxWidth={"7xl"}>
          <Flex my={20} direction={"column"}>
            <Flex width={"100%"} justifyContent="space-between">
              <Box>
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
              </Box>
              <Box>
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
                  209, Entance C, Loft Offices 1 <br />
                  Dubai Media City, Dubai
                  {/* <br /> India:
                  <br /> Calicut, Kerala */}
                </Text>
              </Box>
              <Box>
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
            </Flex>
            <FormBox />
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
        <Testimonials />
      </Box>
    </Stack>
  );
};

export default Contact;
