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

const luxuryMarketing = () => {
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <InnerBanner
          heading={`Luxury \n Marketing \n Services`}
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
                <Heading
                  style={{
                    background:
                      "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                    width: "fit-content",
                    padding: "0 5px",
                  }}
                  fontSize="4xl"
                >
                  Get a Best-Luxury
                </Heading>
                <Heading fontSize="4xl">Marketing Plan</Heading>
              </Box>
              <Text mt={10}>
                There’s a reason why luxury brands don’t advertise like the
                other brands in the world. Unlike those brands, they cater to a
                niche audience that only buys from them. They are not
                necessarily looking for more customers to engage with them.
                Marketing for luxurious brands is that, luxury. They want to
                inspire passion and proudness in people. Through their
                interaction with you, they want you to physically manifest the
                luxury shown by them.
                <br />
                <br /> After having worked with luxury brands like Mercedes
                Benz, YSL, and Lootah Perfumes, McCollins has had the pleasure
                of working with some of the finest luxury brands
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
            src={"/assets/image/design/7.svg"}
            width="89px"
            height={"103px"}
          />
        </Box>
        <Box
          style={{ position: "absolute", right: "10%" }}
          top={{ base: "7%", md: "4%" }}
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
            The route that can be used to market a Luxury Brand are:
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
                  fontSize={"1xl"}
                >
                  <Text>creating content that tells a story</Text>
                </Box>
                <ul>
                  <li>
                    Influencer marketing: Of course, influencer marketing can be
                    used to its exhaustion when it comes to luxury brands. Since
                    these people have followings in the thousands and millions,
                    their words will be taken seriously
                  </li>
                  <li>
                    Video marketing: Around 85% of people in the world view
                    videos on their devices on a monthly basis. And what better
                    way to get through to these people than with videos that are
                    just as luxurious as the brand?
                  </li>
                  <li>
                    SEO: You need to have a presence on search engine results
                    pages (SERPs) for relevant keywords and topics related to
                    your brand and industry and improve your rankings as much as
                    possible.
                  </li>
                </ul>
              </Box>
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
                  <Text>creating content that tells a story</Text>
                </Box>
                <Text>
                  Just like the brand, the website will also have to be classy,
                  quality-oriented and luxurious. The best way to achieve this
                  is through undertaking design ideas that are minimalist and
                  modern. The website can also have a slideshow of the brand’s
                  products to lure in customers. At the same time, it also has
                  to be kept in mind that the website has to be eye-catching and
                  professional.
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
                <Heading mt={4}>Social Media Marketing</Heading>
                <Box
                  my={4}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 10% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"1xl"}
                >
                  <Text>creating content that tells a story</Text>
                </Box>
                <Text>
                  There’s nothing like a luxury brand’s heritage and the story
                  behind it. Using this story for social media marketing is a
                  tactic that increases customer loyalty. As a luxury brand,
                  your online presence has to be classy and unique. Having a
                  presence that is mind-blowing will make people want to follow
                  you even if they can’t afford your products.y.
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

luxuryMarketing.getLayout = function getLayout(luxuryMarketing) {
  return <InnerLayout>{luxuryMarketing}</InnerLayout>;
};

export default luxuryMarketing;
