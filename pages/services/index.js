import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import ServicePageAccordian from "../../components/ServicePageAccordian";
import TextBox2 from "../../components/TextBox2";
import { useRouter } from "next/router";
import FadeUp from "../../components/Motion/FadeUp";
import ZoomInWithBounce from "../../components/Motion/ZoomInWithBounce";
import clientPromise from "../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

const Index = ({ metaTags }) => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const router = useRouter();
  return (
    <>
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>

      <Stack>
        <Container maxWidth={"7xl"} mb={{ base: "150px", md: "unset" }}>
          <Box height="100vh" minHeight={"700px"} mt="-85px">
            <Box
              width={{ base: "100%", md: "70%" }}
              pt="170px"
              position={"relative"}
            >
              <Box
                position={"absolute"}
                top={{ base: "55%", md: "25%" }}
                left={"70%"}
              >
                <ZoomInWithBounce>
                  <Image
                    alt="McCollins Media"
                    src="/assets/image/design/3.svg"
                    width={"89px"}
                    height={"104px"}
                    priority={true}
                  />
                </ZoomInWithBounce>
              </Box>
              <FadeUp>
                <Heading className="main-h2" color="#FFDE11">
                  our services
                </Heading>
              </FadeUp>
              <FadeUp>
                <Heading className="bnrBigHd" fontWeight="black">
                  what we do and {isLargerThan780 ? <br /> : ""}
                  how we do it.
                </Heading>
              </FadeUp>
              <FadeUp delay="0.3">
                <Button
                  colorScheme="yellow"
                  background={"#FFDE11"}
                  borderRadius="20px"
                  color="#000"
                  mt={"5"}
                  onClick={() => router.push("/contact")}
                >
                  <Image
                    alt="McCollins Media"
                    src="/assets/image/icons/call.svg"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;&nbsp;contact us
                </Button>
              </FadeUp>
              <FadeUp delay={0.5}>
                <Text mt="10" fontWeight="bold" color={"#6F6F6F"}>
                  our key services include social media marketing, website ,
                  search engine optimization & search engine marketing and
                  content development videography & photography!
                </Text>
              </FadeUp>
            </Box>
            <Box
              position={"absolute"}
              top="130px"
              right={"20%"}
              display={{ base: "none", md: "block" }}
              zIndex="2"
            >
              <FadeUp>
                <Image
                  alt="McCollins Media"
                  src="/assets/image/servicePage/ourServicesAlp.svg"
                  height={"750px"}
                  width={"122px"}
                />
              </FadeUp>
            </Box>
          </Box>
        </Container>

        <ServicePageAccordian />
        <TextBox2
          heading={
            "Your extended marketing arm ! \n Be a part of the Digital Revolution"
          }
          // subHeading={"creating content that tells a story"}
          content={
            "Our team prides in daring to experiment with evolving digital trends, providing a personalized approach to our clients, and ensuring we create a result driven plan to achieve our brands objectives. We are a young and passionate full service in-house team based in Dubai Media City. "
          }
          content2={
            "Our Key services include Social Media Marketing, Website , Search Engine Optimization & Search Engine Marketing and Content Development – Videography & Photography!"
          }
        />
      </Stack>
    </>
  );
};

Index.getLayout = function getLayout(Index) {
  return <InnerLayout>{Index}</InnerLayout>;
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

export default Index;
