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
          style={{ position: "absolute", top: "5%", left: "10%" }}
          zIndex="9"
        >
          <Image
            src={"/assets/image/design/7.svg"}
            width="89px"
            height={"103px"}
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
            <Box width={{ base: "100%", md: "50%" }} pr={{ base: "0", md: 20 }}>
              <Heading mt={4}>CONTENT MARKETING AND ENGAGEMENT</Heading>
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
                Are you introducing a new juice or a new food item into the
                market? There’s no better way to create a buzz around it than
                with content. Content that’s effective will make a potential
                customer want to look at it. And with such wonderful brands in
                our kitty, we know what content will work the best.
              </Text>
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
                Are you introducing a new juice or a new food item into the
                market? There’s no better way to create a buzz around it than
                with content. Content that’s effective will make a potential
                customer want to look at it. And with such wonderful brands in
                our kitty, we know what content will work the best.
              </Text>
              <Heading mt={4}>Branding</Heading>
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
                Are you introducing a new juice or a new food item into the
                market? There’s no better way to create a buzz around it than
                with content. Content that’s effective will make a potential
                customer want to look at it. And with such wonderful brands in
                our kitty, we know what content will work the best.
              </Text>
            </Box>
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
            <Box width={{ base: "100%", md: "50%" }} pr={{ base: "0", md: 20 }}>
              <Heading mt={4}>SOCIAL MEDIA MARKETING</Heading>
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
                In today’s world, there’s no brand without social media. As an
                industry that has to cater to billions of people, your social
                media presence has to be known. For that, the information that
                you put up on your pages have to be well-thought out and then
                published. As an agency that specializes in social media
                marketing, we understand the know-hows of this strategy. Social
                Media helps build the NEED for a customer to order in that
                burger or dine at a restaurant for the story that you sell.
              </Text>
              <Heading mt={4}>PERFORMANCE MARKETING</Heading>
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
                Gone are the days where organic numbers would bring someone
                through the door of your restaurant. Today we need Social Media
                Ads like Snapchat, TikTok, Facebook, Instagram to drive people
                to explore the menu of a restaurant or visit one of your
                concepts. Google Ads help you compete with your competition and
                take the market share. Search Engine Optimization helps you list
                yourself as the “Best Steakhouse in Dubai” or “Best Burger in
                Riyadh” for example.
              </Text>
            </Box>
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
            <Box width={{ base: "100%", md: "50%" }} pr={{ base: "0", md: 20 }}>
              <Heading mt={4}>
                BLOGGER COLLABORATION AND INFLUENCE MARKETING
              </Heading>
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
                In today’s world, there’s no brand without social media. As an
                industry that has to cater to billions of people, your social
                media presence has to be known. For that, the information that
                you put up on your pages have to be well-thought out and then
                published. As an agency that specializes in social media
                marketing, we understand the know-hows of this strategy. Social
                Media helps build the NEED for a customer to order in that
                burger or dine at a restaurant for the story that you sell.
              </Text>
            </Box>
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
