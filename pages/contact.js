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
import FadeUp from "../components/Motion/FadeUp";
import Testimonials from "../components/Testimonials";

const Contact = () => {
  return (
    <>
      <Stack>
        <HeroBanner
          img="/assets/image/banner/about-banner.webp"
          breadcrumb="contact us"
          h2="ready to do something big?"
        />
        <Box>
          <Container maxWidth={"7xl"}>
            <Flex my={20} direction={"column"}>
              <Flex
                width={"100%"}
                justifyContent="space-between"
                flexDirection={{ base: "column", md: "row" }}
              >
                <FadeUp>
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
                      E-Mail: info@mccollinsmedia.com
                    </Text>
                  </Box>
                </FadeUp>
                <FadeUp>
                  <Box>
                    <Heading
                      style={{
                        background:
                          "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                        width: "fit-content",
                        padding: "0 15px",
                      }}
                    >
                      Our Address
                    </Heading>
                    <Text fontWeight={"bold"} fontSize={"20px"} mt={5} mb={10}>
                      G04, Loft Office 2, Entrance C, <br /> Dubai Media City,
                      Dubai
                      {/* <br /> India:
                  <br /> Calicut, Kerala */}
                    </Text>
                  </Box>
                </FadeUp>
                <FadeUp>
                  <Box>
                    <Heading
                      style={{
                        background:
                          "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                        width: "fit-content",
                        padding: "0 15px",
                      }}
                    >
                      Office Hours
                    </Heading>
                    <Text fontWeight={"bold"} fontSize={"20px"} mt={5} mb={10}>
                      Monday - Friday: 9.00 AM to 6.00 PM
                    </Text>
                  </Box>
                </FadeUp>
              </Flex>
              <FormBox />
            </Flex>
          </Container>
          <Box bg={"#FFDE11"}>
            <Container maxWidth={"7xl"} py={10} textAlign="center">
              <FadeUp>
                <Heading fontSize={"5xl"}>
                  we would love to hear about
                  <br /> start your new project?
                </Heading>
              </FadeUp>
              <FadeUp>
                <Button my={5} bg="#fff" borderRadius={"20px"}>
                  Start New Project
                </Button>
              </FadeUp>
            </Container>
          </Box>
          <Testimonials />
        </Box>
      </Stack>
    </>
  );
};

export default Contact;
