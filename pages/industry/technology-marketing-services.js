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

const TechnologyMarketing = () => {
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <InnerBanner
          heading={`Technology \n Marketing \n Services`}
          img="/assets/image/servicePage/contentProduction.jpg"
          content="Technology Marketing Solutions catering to the Middle East"
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
                <Flex direction={{ base: "column", lg: "row" }}>
                  <Heading
                    style={{
                      background:
                        "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                      width: "fit-content",
                      padding: "0 5px",
                    }}
                    fontSize={{ base: "3xl", md: "4xl" }}
                  >
                    MARKETING
                  </Heading>
                  <Heading
                    style={{
                      background:
                        "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                      width: "fit-content",
                      padding: "0 5px",
                    }}
                    fontSize={{ base: "3xl", md: "4xl" }}
                  >
                    EXPERTS
                  </Heading>
                </Flex>
                <Heading fontSize="4xl">WITHIN THE TECHNOLOGY SECTOR</Heading>
              </Box>
              <Text mt={10}>
                The world today revolves around technology. From a simple task
                like heating your food to playing a movie at home with surround
                sound technology, our life cannot move on without this.
                <br />
                <br /> While devising strategies for technology based brands,
                they have to boost customer engagement while talking about the
                greatness of the brand. With brands under this industry, it is
                not only about promotional tactics, but also increasing traffic
                to the stores, offline or online.
                <br />
                <br />
                As an agency with great experience in various industries, we
                forayed into technology marketing with brands like LG, Samsung,
                Fujifilm, and so many more.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box position={"relative"}>
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
          <Flex mt={10} direction={{ base: "column", md: "row" }}>
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
                  fontSize={"1xl"}
                >
                  <Text>
                    {/* <Text>creating content that tells a story</Text> */}
                  </Text>
                </Box>
                <Text>
                  With the help of social media, it becomes easy to increase
                  brand awareness for your business. Although executing
                  strategies that are devised for social media is a difficulty,
                  upon proper implementation, it brings immense growth. We
                  develop digital brand guidelines for your brand to ensure
                  consistency in the GCC market.
                  <br />
                  From a strategic and creative approach, we plan the annual
                  marketing plan for your brands covering content marketing,
                  blogger collaborations, distributors support, offline
                  promotions which leads to online promotions, brand activations
                  and so on.
                  <br />
                  Participating at key events like GITEX or product launches to
                  support our Technology clients.
                </Text>
              </Box>
              <Box>
                <Heading mt={4}>Content Marketing</Heading>
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
                  As far as a tech company is involved, when it comes to content
                  marketing, the company has to be sociable. People receive the
                  brand well if the discussion around it is guided well. Your
                  target audience has to be made part of the brand through the
                  content you put out and we will make sure that happens. Even
                  in the 21st century, there are people who still feel a
                  distance between themselves and technology. So, with the
                  content strategies we devise, we have to close the gap and
                  assure them that our technology will only serve them better
                  and make their lives easier.
                </Text>
              </Box>
            </Flex>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box
                alignSelf="center"
                position={"relative"}
                mt={{ base: 10, md: 0 }}
              >
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
                  right={{ base: "135px", md: "110px" }}
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
                <Heading mt={4}>Website Design and Development</Heading>
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
                  We develop websites with state of the art technology and
                  scalability for different markets. For technology brands,
                  showcasing products is key. Providing multimedia content to
                  showcase them, showing reviews or customer sentiments to
                  create an aspiration to own a piece of technology and to list
                  all technical specs.
                  <br /> The website is built in a way that it is SEO friendly
                  and Google Ads can drive traffic to the website.
                </Text>
              </Box>
            </Flex>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box
                alignSelf="center"
                position={"relative"}
                mt={{ base: 10, md: 0 }}
              >
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
                  style={{ position: "absolute", bottom: "-20%", left: "-25%" }}
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

TechnologyMarketing.getLayout = function getLayout(TechnologyMarketing) {
  return <InnerLayout>{TechnologyMarketing}</InnerLayout>;
};

export default TechnologyMarketing;
