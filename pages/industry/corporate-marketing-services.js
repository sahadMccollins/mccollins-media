import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import ClientsLogo from "../../components/ClientsLogo";
import InnerBanner from "../../components/InnerBanner";
import clientPromise from "../../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

const CorporateMarketing = ({ metaTags }) => {
  return (
    <Stack>
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
      <Container maxWidth={"7xl"}>
        <InnerBanner
          heading={`Corporate \n Marketing \n Services`}
          img="/assets/image/industryPage/new/NC (1).jpg"
          content="Leaders in Corporate Marketing Solutions"
        />
      </Container>
      <Box bg={"#F7F7F7"} py={20}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "40%" }}>
              <Box alignSelf="center" position={"relative"} textAlign="center">
                <Image
                  alt="McCollins Media"
                  src="/assets/image/industryPage/new/NC (4).jpg"
                  width="417px"
                  height="454px"
                  style={{ zIndex: "2" }}
                />
                <Box
                  position={"absolute"}
                  width="300px"
                  height={{ base: "65%", md: "75%" }}
                  bg={"#FFDE11"}
                  top="140px"
                  right="200px"
                  zIndex={0}
                ></Box>
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "60%" }} p={10}>
              <Box>
                <Flex direction={{ base: "column", lg: "row" }}>
                <h1 className="SEOTag"> #1 CORPORATE MARKETING</h1>
                  <Heading
                    // style={{
                    //   background:
                    //     "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                    //   width: "fit-content",
                    //   padding: "0 5px",
                    // }}
                    className="main-h3"
                  >
                    #1 CORPORATE &nbsp;
                  </Heading>
                  <Heading
                    // style={{
                    //   background:
                    //     "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                    //   width: "fit-content",
                    //   padding: "0 5px",
                    // }}
                    className="main-h3"
                  >
                    MARKETING
                  </Heading>
                </Flex>
                <Heading className="main-h3">AGENCY IN UAE</Heading>
              </Box>
              <Text mt={10}>
                When you take a company as a whole and promote its services and
                products through various forms of marketing, it is known as
                corporate marketing.
                <br />
                <br /> We have had the pleasure of working with several
                corporate conglomerates over the last decade from their
                branding, to social media marketing, website development,
                performance marketing and content development within the GCC
                Markets primarily - United Arab Emirates, Saudi Arabia, Kuwait,
                Qatar and Bahrain.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box position={"relative"}>
        <Box
          style={{ position: "absolute", left: "10%" }}
          top={{ base: "-2%", md: "1%" }}
          zIndex="9"
        >
          <Image
            alt="McCollins Media"
            src={"/assets/image/design/7.svg"}
            width="89px"
            height={"103px"}
          />
        </Box>
        {/* <Box
          style={{ position: "absolute", right: "10%" }}
          zIndex="9"
          top={{ base: "7%", md: "4%" }}
        >
          <Image
            alt="McCollins Media"
            src={"/assets/image/design/14.svg"}
            width="60px"
            height={"50px"}
          />
        </Box> */}
        <Container maxWidth={"7xl"}>
          <Heading
            color={"#ffde11"}
            textAlign="center"
            className="main-h3"
            pt="10"
            maxWidth="800px"
            margin={"auto"}
          >
            Some of the many evocative strategies that are used for corporate
            marketing are
          </Heading>
          <Flex mt={10} direction={{ base: "column", md: "row" }}>
            <Flex
              direction={"column"}
              justifyContent="space-evenly"
              width={{ base: "100%", md: "50%" }}
              pr={{ base: "0", md: 20 }}
            >
              <Box>
                <Heading mt={4} className="main-h3">
                  Corporate Branding
                </Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"1xl"}
                >
                  {/* <Text>creating content that tells a story</Text> */}
                </Box>
                <Text>
                  Creating a brand identity and story for your brand, creating
                  the brand journey and positioning. Competitor analysis , SWOT
                  Analysis to understand the market and how you can be
                  different.
                </Text>
              </Box>
              <Box>
                <Heading mt={4} className="main-h3">
                  Personalized Customer Experience
                </Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"1xl"}
                >
                  <Text>
                    {/* <Text>creating content that tells a story</Text> */}
                  </Text>
                </Box>
                <Text>
                  It's important for companies to personalize their interactions
                  with all their customers in order to drive aggressive lead
                  conversions. We can use CRM tools to increase and modify this
                  method. This enables employees to interact more meaningfully
                  and enable a personalized customer journey.
                </Text>
              </Box>
              <Box>
                <Heading mt={4} className="main-h3">
                  Social Media Marketing
                </Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"1xl"}
                >
                  <Text>
                    {/* <Text>creating content that tells a story</Text> */}
                  </Text>
                </Box>
                <Text>
                  Business to Business social media marketing can sometimes be
                  tricky. It is not the best practice to be on all social media
                  channels for the sake of it, but understand how each social
                  media channel contributes to your industry. We help you
                  understand that and create content accordingly.
                </Text>
              </Box>
            </Flex>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box
                alignSelf="center"
                position={"relative"}
                mt={{ base: "10", md: "0" }}
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/industryPage/new/NC (8).jpg"
                  width="480px"
                  height="768px"
                  objectFit="cover"
                  style={{ zIndex: "2" }}
                />
                <Box
                  position={"absolute"}
                  width="250px"
                  height="300px"
                  bg={"#FFDE11"}
                  bottom="-25"
                  right="110px"
                  zIndex={0}
                ></Box>
              </Box>
            </Box>
          </Flex>
          <Flex mt={20} direction={{ base: "column", md: "row-reverse" }}>
            <Flex
              direction={"column"}
              justifyContent="space-evenly"
              width={{ base: "100%", md: "50%" }}
              pr={{ base: "0", md: 20 }}
            >
              <Box>
                <Heading mt={4} className="main-h3">
                  Video Marketing
                </Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"1xl"}
                >
                  <Text>
                    {/* <Text>creating content that tells a story</Text> */}
                  </Text>
                </Box>
                <Text>
                  Video content is booming and rippling in the virtual world.
                  Companies need to convert blogs and written content into video
                  and rebuild it. The video should be attractive, short and
                  relevant to appeal to the viewer. This is the best way to
                  increase brand awareness and promote your products and
                  services to potential customers.
                </Text>
              </Box>
              <Box>
                <Heading mt={4} className="main-h3">
                  Search Engine Marketing and Google Ads
                </Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"1xl"}
                >
                  <Text>
                    {/* <Text>creating content that tells a story</Text> */}
                  </Text>
                </Box>
                <Text>
                  Google Ads is hands down one of the most effective ways to
                  promote a Corporate business. Search engine optimization helps
                  you put your business in good ranking in comparison to your
                  competitors
                </Text>
              </Box>
            </Flex>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box
                alignSelf="center"
                position={"relative"}
                mt={{ base: "10", md: "0" }}
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/industryPage/new/NC (19).jpg"
                  width="480px"
                  objectFit="cover"
                  height="768px"
                  style={{ zIndex: "2" }}
                />
                <Box
                  position={"absolute"}
                  width="250px"
                  height="300px"
                  bg={"#FFDE11"}
                  bottom="-25"
                  right="110px"
                  zIndex={0}
                ></Box>
              </Box>
            </Box>
          </Flex>
          <Flex my={20} direction={{ base: "column", md: "row" }}>
            <Flex
              direction={"column"}
              justifyContent="space-evenly"
              width={{ base: "100%", md: "50%" }}
              pr={{ base: "0", md: 20 }}
            >
              <Box>
                <Heading mt={4} className="main-h3">
                  Website Development and Chatbots
                </Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"1xl"}
                >
                  <Text>
                    {/* <Text>creating content that tells a story</Text> */}
                  </Text>
                </Box>
                <Text>
                  Have a solid website developed for your corporate business
                  which can work for you. Be sure to include chatbots in your
                  marketing plan as they can target your audience in the absence
                  of support personnel. They communicate with customers and
                  answer the questions they have. Your customers are personally
                  cared for and don't have to wait long for service.
                </Text>
              </Box>
            </Flex>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box
                alignSelf="center"
                position={"relative"}
                mt={{ base: "10", md: "0" }}
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/industryPage/new/NC (12).jpg"
                  width="451px"
                  height="384px"
                  objectFit="cover"
                  style={{ zIndex: "2" }}
                />
                <Box
                  position={"absolute"}
                  width="250px"
                  height="300px"
                  bg={"#FFDE11"}
                  bottom="-25"
                  right="135px"
                  zIndex={0}
                ></Box>
                <Box
                  style={{ position: "absolute", bottom: "0%", right: "0%" }}
                  zIndex="9"
                >
                  <Image
                    alt="McCollins Media"
                    src={"/assets/image/design/13.svg"}
                    width="89px"
                    height={"103px"}
                    objectFit="cover"
                  />
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
      <ClientsLogo />
    </Stack>
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

CorporateMarketing.getLayout = function getLayout(CorporateMarketing) {
  return <InnerLayout>{CorporateMarketing}</InnerLayout>;
};

export default CorporateMarketing;
