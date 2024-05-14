import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import FormBox from "../components/FormBox";
import HeroBanner from "../components/HeroBanner";
import FadeUp from "../components/Motion/FadeUp";
import Testimonials from "../components/Testimonials";
import clientPromise from "../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";
const Contact = ({ metaTags }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
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
                      Mobile:{" "}
                      <Link href="tel:+97144456848">+971 55 956 4135</Link>
                      <br />
                      E-Mail:{" "}
                      <Link href="mailto:info@mccollinsmedia.com">
                        info@mccollinsmedia.com
                      </Link>
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
              <Box id="formSec">
                <FormBox />
              </Box>
            </Flex>
          </Container>
          <Box bg={"#FFDE11"}>
            <Container maxWidth={"7xl"} py={10} textAlign="center">
              <FadeUp>
                <Heading fontSize={"5xl"}>
                  We would love to hear about
                  <br /> your new project.Begin a conversation.
                </Heading>
              </FadeUp>
              <FadeUp>
                <Button
                  my={5}
                  bg="#fff"
                  borderRadius={"20px"}
                  onClick={() => router.push("https://calendly.com/manjeet-0rp5/30min")}
                  // onClick={() => {
                  //   const section = document.getElementById("formSec");
                  //   section.scrollIntoView({ behavior: "smooth" });
                  // }}
                >
                 Schedule an appointment
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

export async function getServerSideProps(context) {
  const { req } = context;
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let metaTags = await db.collection("meta").find({ name: req.url }).toArray();
  metaTags = JSON.parse(JSON.stringify(metaTags));
  console.log(metaTags);

  return {
    props: { metaTags },
  };
}

export default Contact;
