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

const HealthCareMarketing = () => {
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <InnerBanner
          heading={`Healthcare \n Marketing \n Services`}
          img="/assets/image/servicePage/contentProduction.jpg"
          content="Healthcare Marketing Solutions catering to the Middle East"
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
                  Get a Best-Healthcare
                </Heading>
                <Heading fontSize="4xl">Marketing Plan</Heading>
              </Box>
              <Text mt={10}>
                Be it for a hospital, medicine suppliers, or even their
                agencies, creating strategies for all of them fall under
                healthcare marketing. These strategies are designed to attract
                new patients, raise awareness and provide valuable advice to the
                community.
                <br />
                <br /> Al Borg Laboratories and Al Tadawi Medical Center are
                some of our clients who have helped us pave our name in the
                healthcare marketing services sector.
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
            Strategies that can be devised for healthcare brands are:
          </Heading>
          <Flex mt={10} direction={{ base: "column", md: "row" }}>
            <Flex
              direction={"column"}
              justifyContent="space-evenly"
              width={{ base: "100%", md: "50%" }}
              pr={{ base: "0", md: 20 }}
            >
              <Box>
                <Heading mt={4}>Content Marketing and Lead Generation</Heading>
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
                  The material that you post or publish should be curated while
                  keeping your target audience in mind. It is always about what
                  interests them and not you. Rather than promoting your brand,
                  since it is healthcare we’re dealing with, talk about general
                  health awareness, and various tips for remaining healthy.
                </Text>
              </Box>
              <Box>
                <Heading mt={4}>Website Design and Development</Heading>
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
                  Your website talks about your brand. While a cluttered brand
                  can make the customers lose their interest, a clean and
                  precise website will attract more customers. A well-designed
                  healthcare website is a great communication tool for clinics
                  and hospitals to inform existing patients and new prospects.
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
          <Flex my={20} direction={{ base: "column", md: "row-reverse" }}>
            <Flex
              direction={"column"}
              justifyContent="space-evenly"
              width={{ base: "100%", md: "50%" }}
              pr={{ base: "0", md: 20 }}
            >
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
                  All businesses, including the healthcare industry, need to use
                  social media, which is essential in the healthcare industry.
                  Most of the news and information is disseminated through
                  social media, which is widely used and understood by most
                  people. Therefore, it can be an effective public health tool.
                  We have to learn to use this to our strength and make tactics.
                  Creating brand credibility so one can trust you as a
                  healthcare provider is key.
                </Text>
              </Box>
              <Box>
                <Heading mt={4}>Performance Marketing</Heading>
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
                  In a very competitive market, standing out as the top of mind
                  recall is of prime importance. Be it being first on google
                  search or search rankings on certain keywords being high, we
                  ensure your brand is positioned well - at the right place, at
                  the right time.
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
        </Container>
      </Box>
      <ClientsLogo />
    </Stack>
  );
};

HealthCareMarketing.getLayout = function getLayout(HealthCareMarketing) {
  return <InnerLayout>{HealthCareMarketing}</InnerLayout>;
};

export default HealthCareMarketing;
