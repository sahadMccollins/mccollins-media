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
import { useRouter } from "next/router";

const foodAndBeverageMarketing = () => {
  const router = useRouter();
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <Box
          style={{ position: "absolute", top: "9.5%", left: "60%" }}
          zIndex="9"
        >
          <Image
            alt="McCollins Media"
            src={"/assets/image/design/1.svg"}
            width="118px"
            height={"165px"}
          />
        </Box>
        <Flex
          mt="-85px"
          height={{ base: "100%", md: "100vh" }}
          minHeight="750px"
          pt="170px"
          direction={{ base: "column", md: "row" }}
        >
          <Box width={{ base: "100%", md: "40%" }} position="relative">
            <Box
              position={"absolute"}
              top={{ base: "50%", md: "6%" }}
              left={"70%"}
            >
              <Image
                alt="McCollins Media"
                src="/assets/image/design/3.svg"
                width={"89px"}
                height={"104px"}
                priority={true}
              />
            </Box>
            <Heading className="main-h2" color="#FFDE11">
              our services
            </Heading>
            <Heading className="bnrBigHd" color="#000" fontWeight="black">
              food & <br /> beverage <br /> marketing
            </Heading>
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
            <Text mt="10" fontWeight="bold" color={"#6F6F6F"} pr="5">
              the food and beverage industry has been booming in recent years.
              While the target market for this industry changes from brand to
              brand, the strategies used are more or less the same.
            </Text>
          </Box>
          <Box width={{ base: "100%", md: "60%" }}>
            <Image
              alt="McCollins Media"
              src={"/assets/image/industryPage/foodAndBeverage.png"}
              width="1063px"
              height="625px"
              priority={true}
            />
          </Box>
        </Flex>
      </Container>
      <Box bg={"#F7F7F7"} py={20}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "40%" }}>
              <Box alignSelf="center" position={"relative"} textAlign="center">
                <Image
                  alt="McCollins Media"
                  src="/assets/image/industryPage/new/NC (5).jpg"
                  width="417px"
                  height="454px"
                  style={{ zIndex: "2" }}
                />
                <Box
                  position={"absolute"}
                  width="300px"
                  height={{ base: "70%", md: "75%" }}
                  bg={"#FFDE11"}
                  top="140px"
                  right="200px"
                  zIndex={0}
                ></Box>
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "60%" }} p={10}>
              <Box>
                <Heading className="main-h3">ONE OF THE MOST </Heading>
                <Flex direction={{ base: "column", lg: "row" }}>
                  <Heading
                    style={{
                      background:
                        "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                      width: "fit-content",
                      padding: "0 5px",
                    }}
                    className="main-h3"
                  >
                    FAMOUS AND
                  </Heading>
                  <Heading
                    style={{
                      background:
                        "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                      width: "fit-content",
                      padding: "0 5px",
                    }}
                    className="main-h3"
                  >
                    IN-DEMAND
                  </Heading>
                </Flex>
                <Heading className="main-h3">INDUSTRIES IN THE WORLD,</Heading>
              </Box>
              <Text mt={10}>
                the food and beverage industry has been booming in recent years.
                While the target market for this industry changes from brand to
                brand, the strategies used are more or less the same. These
                strategies are made while keeping in mind that they have to
                interact, attract, and assure customers about the goodness of
                the brands.
                <br />
                <br /> As marketing partners for brands like Wagamama, Mister
                Baker, and Marrybrown, Trader Vics, Shakeys Pizza, Paavos Pizza
                and more , we are capable of identifying the problem you are
                facing in your strategies, overcoming them, and devising new
                techniques and tactics to induce more customers.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box position={"relative"}>
        <Box
          style={{ position: "absolute", left: "10%" }}
          zIndex="9"
          top={{ base: "-1%", md: "5%" }}
        >
          <Image
            alt="McCollins Media"
            src={"/assets/image/design/7.svg"}
            width="89px"
            height={"103px"}
          />
        </Box>
        <Container maxWidth={"7xl"}>
          <Heading
            color={"#ffde11"}
            textAlign="center"
            className="main-h2"
            mt={"20"}
          >
            digital marketing services
          </Heading>
          <Text
            textAlign={"center"}
            fontSize="2xl"
            fontWeight={"bold"}
            mt="5"
            px={{ base: "0", md: "15%" }}
          >
            although there are many methods that can be used to market a food
            and beverage brand successfully, here are some services that we
            swear by:
          </Text>
          <Flex
            mt={10}
            direction={{ base: "column", md: "row" }}
            alignItems="center"
          >
            <Box width={{ base: "100%", md: "50%" }} pr={{ base: "0", md: 20 }}>
              <Heading mt={4} className="main-h3">
                Content Marketing & Engagement
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
                Are you introducing a new juice or a new food item into the
                market? There’s no better way to create a buzz around it than
                with content. Content that’s effective will make a potential
                customer want to look at it. And with such wonderful brands in
                our kitty, we know what content will work the best.
              </Text>
              <Heading mt={4} className="main-h3">
                Website Design and Development
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
                Are you introducing a new juice or a new food item into the
                market? There’s no better way to create a buzz around it than
                with content. Content that’s effective will make a potential
                customer want to look at it. And with such wonderful brands in
                our kitty, we know what content will work the best.
              </Text>
              <Heading mt={4} className="main-h3">
                Branding
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
                Are you introducing a new juice or a new food item into the
                market? There’s no better way to create a buzz around it than
                with content. Content that’s effective will make a potential
                customer want to look at it. And with such wonderful brands in
                our kitty, we know what content will work the best.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box
                alignSelf="center"
                position={"relative"}
                mt={{ base: "10", md: "0" }}
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/industryPage/new/NC (9).jpg"
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
                  right={{ base: "135px", md: "110px" }}
                  zIndex={0}
                ></Box>
              </Box>
            </Box>
          </Flex>
          <Flex
            mt={20}
            direction={{ base: "column", md: "row-reverse" }}
            alignItems="center"
          >
            <Box width={{ base: "100%", md: "50%" }} pr={{ base: "0", md: 20 }}>
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
                In today’s world, there’s no brand without social media. As an
                industry that has to cater to billions of people, your social
                media presence has to be known. For that, the information that
                you put up on your pages have to be well-thought out and then
                published. As an agency that specializes in social media
                marketing, we understand the know-hows of this strategy. Social
                Media helps build the NEED for a customer to order in that
                burger or dine at a restaurant for the story that you sell.
              </Text>
              <Heading mt={4} className="main-h3">
                Performance Marketing
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
              <Box
                alignSelf="center"
                position={"relative"}
                mt={{ base: "10", md: "0" }}
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/industryPage/new/NC (20).jpg"
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
                  right={{ base: "135px", md: "110px" }}
                  zIndex={0}
                ></Box>
              </Box>
            </Box>
          </Flex>
          <Flex
            my={20}
            direction={{ base: "column", md: "row" }}
            alignItems="center"
          >
            <Box width={{ base: "100%", md: "50%" }} pr={{ base: "0", md: 20 }}>
              <Heading mt={4} className="main-h3">
                Blogger Collaboration & Influence Marketing
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
              <Box
                alignSelf="center"
                position={"relative"}
                mt={{ base: "10", md: "0" }}
              >
                <Image
                  alt="McCollins Media"
                  src="/assets/image/industryPage/new/NC (13).jpg"
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
                    alt="McCollins Media"
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

foodAndBeverageMarketing.getLayout = function getLayout(
  foodAndBeverageMarketing
) {
  return <InnerLayout>{foodAndBeverageMarketing}</InnerLayout>;
};

export default foodAndBeverageMarketing;
