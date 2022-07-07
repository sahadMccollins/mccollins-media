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

const CorporateMarketing = () => {
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <InnerBanner
          heading={`Corporate \n Marketing \n Services`}
          img="/assets/image/servicePage/contentProduction.jpg"
          content="Get your brand noticed at the right place at the right time. Let us help you rank high on Google search and place strategic Google Ads to see those leads convert."
        />
      </Container>
      <Box bg={"#F7F7F7"} py={20}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "40%" }}>
              <Box alignSelf="center" position={"relative"} textAlign="center">
                <Image
                  src="/assets/image/industryPage/foodAndBeverage2.jpg"
                  width="417px"
                  height="454px"
                  style={{ zIndex: "2" }}
                />
                <Box
                  position={"absolute"}
                  width="300px"
                  height="350px"
                  bg={"#FFDE11"}
                  top="140px"
                  right="200px"
                  zIndex={0}
                ></Box>
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "60%" }} p={10}>
              <Box>
                <Heading
                  style={{
                    background:
                      "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                    width: "fit-content",
                    padding: "0 5px",
                  }}
                  fontSize="4xl"
                >
                  #1 CORPORATE MARKETING
                </Heading>
                <Heading fontSize="4xl">AGENCY IN UAE</Heading>
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
          style={{ position: "absolute", top: "1%", left: "10%" }}
          zIndex="9"
        >
          <Image
            src={"/assets/image/design/7.svg"}
            width="89px"
            height={"103px"}
          />
        </Box>
        <Box
          style={{ position: "absolute", top: "4%", right: "10%" }}
          zIndex="9"
        >
          <Image
            src={"/assets/image/design/14.svg"}
            width="60px"
            height={"50px"}
          />
        </Box>
        <Container maxWidth={"7xl"}>
          <Heading
            color={"#ffde11"}
            textAlign="center"
            fontSize={"4xl"}
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
                <Heading mt={4}>Corporate Branding</Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"20px"}
                >
                  <Text>creating content that tells a story</Text>
                </Box>
                <Text>
                  Creating a brand identity and story for your brand, creating
                  the brand journey and positioning. Competitor analysis , SWOT
                  Analysis to understand the market and how you can be
                  different.
                </Text>
              </Box>
              <Box>
                <Heading mt={4}>Personalized Customer Experience</Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"20px"}
                >
                  <Text>creating content that tells a story</Text>
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
                <Heading mt={4}>Social Media Marketing</Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"20px"}
                >
                  <Text>creating content that tells a story</Text>
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
              <Box alignSelf="center" position={"relative"}>
                <Image
                  src="/assets/image/industryPage/foodAndBeverage3.jpg"
                  width="480px"
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
          <Flex mt={20} direction={{ base: "column", md: "row-reverse" }}>
            <Flex
              direction={"column"}
              justifyContent="space-evenly"
              width={{ base: "100%", md: "50%" }}
              pr={{ base: "0", md: 20 }}
            >
              <Box>
                <Heading mt={4}>Video Marketing</Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"20px"}
                >
                  <Text>creating content that tells a story</Text>
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
                <Heading mt={4}>Search Engine Marketing and Google Ads</Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"20px"}
                >
                  <Text>creating content that tells a story</Text>
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
              <Box alignSelf="center" position={"relative"}>
                <Image
                  src="/assets/image/industryPage/foodAndBeverage4.jpg"
                  width="480px"
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
                <Heading mt={4}>Website Development and Chatbots</Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"20px"}
                >
                  <Text>creating content that tells a story</Text>
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
              <Box alignSelf="center" position={"relative"}>
                <Image
                  src="/assets/image/industryPage/foodAndBeverage5.jpg"
                  width="451px"
                  height="384px"
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
                    src={"/assets/image/design/13.svg"}
                    width="89px"
                    height={"103px"}
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

CorporateMarketing.getLayout = function getLayout(CorporateMarketing) {
  return <InnerLayout>{CorporateMarketing}</InnerLayout>;
};

export default CorporateMarketing;
