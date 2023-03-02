import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import InnerLayout from "../../../components/Layout/InnerLayout";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ServicePoint from "../../../components/ServicePoint";
import FavWork from "../../../components/FavWork";
import TextBox from "../../../components/TextBox";
import SocialBox from "../../../components/SocialBox";
import ClientsLogo from "../../../components/ClientsLogo";
import VideoBanner from "../../../components/VideoBanner";
import { useRouter } from "next/router";

const SocialMediaMarketing = () => {
  const router = useRouter();
  const favWorkData = [
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
  ];

  const SmmPointRef = useRef(null);

  const scrollFun = () => {
    SmmPointRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Stack>
      <VideoBanner
        heading={`social \n media \n marketing`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657600385/Mccollins%20Video/Social_Media-_jmavct.mp4"
        content="Mobile First, Content Driven, Result Oriented extended marketing arm for your brand!"
        poster="/assets/image/servicePage/socialMediaMarketing.jpg"
      />
      <Box
        // style={{
        //   background: "linear-gradient(to bottom,#fff 50%,#ffde11 50%)",
        // }}
        // bg={{
        //   base: "linear-gradient(to bottom,#fff 59%,#ffde11 50%)",
        //   md: "linear-gradient(to bottom,#fff 56%,#ffde11 50%)",
        // }}
        pb={12}
      >
        <Container maxWidth={"7xl"} position="relative">
          {/* <Box
            style={{ position: "absolute", top: "50%", left: "25%" }}
            display={{ base: "none", md: "block" }}
          >
            <Image
              src={"/assets/image/design/1.svg"}
              width="158px"
              height={"215px"}
            />
          </Box> */}
          <Flex direction={{ base: "column", md: "row" }} position="relative">
            <Box style={{ position: "absolute", top: "10%", left: "-20%" }}>
              <Image
                src={"/assets/image/design/11.svg"}
                width="247px"
                height={"284px"}
              />
            </Box>
            <Box width={{ base: "100%", md: "35%" }}>
              <Image
                src="/assets/image/ServiceTabs/IphoneReels.png"
                width="610px"
                height="905px"
              />
            </Box>
            <Flex
              width={{ base: "100%", md: "30%" }}
              direction={"column"}
              alignItems="center"
              textAlign={"center"}
              mt={{ base: 0, lg: "120px" }}
            >
              {/* <Heading mt={10} fontSize="28px">
                Creating a Digital Community for your brand
              </Heading>
              <Box width={"80px"} my={7} height={"5px"} background="#000"></Box> */}
              <Text className="main-p" textAlign={"justify"}>
                Get your business ahead of the curve with our Social Media
                Management services. Develop targeted and effective social media
                campaigns that result in brand conversions. As a Social Media
                Marketing Agency in UAE, we stay up to date with the latest
                digital trends and strategies to enhance your online presence.
                <br />
                <br />
                Connect with a community of bloggers and content developers to
                increase your reach and impact. Being an SMM Agency in Dubai, we
                tap into the Arab market through our content development
                services that are tailored to meet the needs of this vibrant
                market.
              </Text>
              <Button
                colorScheme="black"
                background={"#000"}
                borderRadius="20px"
                color="#fff"
                mt={7}
                fontWeight="bold"
                onClick={scrollFun}
              >
                view more
                <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
              </Button>
            </Flex>
            <Box
              width={{ base: "100%", md: "35%" }}
              display={{ base: "none", md: "block" }}
            >
              <Image
                src="/assets/image/ServiceTabs/IphoneTiktok.png"
                width="610px"
                height="897px"
              />
              {/* <Text
                fontSize={"28px"}
                fontWeight={"bold"}
                color={"#000"}
                textAlign={"center"}
              >
                #TIKTOKS
              </Text> */}
            </Box>
          </Flex>
        </Container>
      </Box>
      <Container maxW={"7xl"} style={{ margin: "auto" }}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "50%" }}>
            <Image
              src={"/assets/image/servicePage/socialMediaMarketing.jpg"}
              width="550px"
              height={"450px"}
              objectFit="cover"
            />
          </Box>
          <Box width={{ base: "100%", md: "50%" }} alignSelf="center">
            <Heading
              as={"h5"}
              className="main-h5"
              mt={"5"}
              textAlign={{ base: "center", md: "left" }}
            >
              We are Partners with META, Google, Snapchat, TikTok, Yandex,
              Baidu, WeChat and more
            </Heading>
            <OrderedList my={"6"}>
              <li>
                <Text fontSize={"20px"}>
                  Get ahead with our result-driven approach to social media
                  management.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="2">
                  Create powerful social media campaigns that drive brand
                  awareness and conversions.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="2">
                  Manage your social media accounts in a simple, intuitive way.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="2">
                  Collaborate with bloggers to develop content that drives
                  conversions and enhances your brand.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="2">
                  Expand your reach through effective digital marketing
                  strategies that integrate across all platforms.
                </Text>
              </li>
            </OrderedList>
          </Box>
        </Flex>

        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          mt="10"
        >
          <Box width={{ base: "100%", md: "50%" }}>
            <Text mt={5}>
              We aim to be the best social media agency in Dubai - also catering
              to Saudi Arabia, Kuwait, Qatar, Oman, Bahrain and more. Apart from
              our Social Media Services, we also provide Content Development
              Services, Blogger Outreach Program Services and Web Development
              Services
            </Text>
            <Button
              colorScheme="black"
              background={"#000"}
              borderRadius="20px"
              color="#fff"
              mt={7}
              fontWeight="bold"
              onClick={scrollFun}
            >
              view more{" "}
              <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
            </Button>
          </Box>
          <Box width={{ base: "100%", md: "50%" }} textAlign="end">
            <Image
              src="/assets/image/ServicePage/ksa/social-media.jpg"
              width="550px"
              height={"300px"}
            />
          </Box>
        </Flex>
      </Container>

      <Box className="creative-head" pb={10} style={{ marginTop: "50px" }}>
        <Heading
          as={"h4"}
          fontSize={{ base: "25px", md: "50px" }}
          pt="20"
          textAlign="center"
          color={"#FFDE11"}
          textTransform="uppercase"
        >
          what we offer
        </Heading>
        <Container maxWidth="4xl">
          <Box className="intrestedH2">
            <Heading
              onClick={() =>
                router.push(
                  "/services/social-media-agency-dubai/content-creation "
                )
              }
            >
              Content Creation
            </Heading>
            <Heading
              onClick={() =>
                router.push(
                  "/services/social-media-agency-dubai/digital-media-buying"
                )
              }
            >
              Digital Media Buying
            </Heading>
          </Box>
        </Container>
      </Box>

      {/* <Box>
        <Container maxWidth={"7xl"} my={10}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Heading>
                #1 Social Media Agency <br />
                in the Middle East
              </Heading>
              <Text>
                Our Key services include Social Media Marketing, Website
                Development, Search Engine Optimization (SEO) & Search Engine
                Marketing (SEM) Services and Content Development – Videography &
                Photography!
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  }}
                ></span>
                <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                  performance marketing
                </Heading>
              </Box>
              <Text>
                Your brand must rank high amongst competitors when your
                customers search for your brand on Google. With Keyword
                Research, we understand what your customers are searching for.
              </Text>
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
                  }}
                ></span>
                <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                  content management
                </Heading>
              </Box>
              <Text ref={SmmPointRef}>
                Your brand must rank high amongst competitors when your
                customers search for your brand on Google. With Keyword
                Research, we understand what your customers are searching for.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box> */}
      {/* <ServicePoint
        heading="Digital Brand Activation"
        // subHeading="performance marketing"
        contentHeading={"Story tellers for your brand"}
        content="Creating a digital ecosystem for your brand. From creating a brand story to communicating with your audience, we activate your brand on the digital space"
        points={
          "Social Media Management \n Social Media Content Creation & Distribution \n Digital Media Buying \n Social Media Listening, Engagement and Reporting \n Social Media Campaigns Management \n Influencer Marketing Campaigns \n Cross Promotion of Online to Offline \n Social Media Chat Bot Development \n Lead Generation and Revenue Generation from Social Media"
        }
      /> */}
      {/* <Box bg={"#F7F7F7"} style={{ marginTop: "0px" }}>
        <Container maxWidth={"7xl"} mt={"5"} mb={"12"}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }}>
            BLOGGER OUTREACH PROGRAM
          </Heading>
          <Text mt={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris
          </Text>
        </Container>
      </Box> */}
      <TextBox
        heading="CASE STUDY"
        smallHeading="social media designs"
        subHeading="sneak peak into our social media marketing projects"
        content="Have a look at some of the Social Media Marketing work we have done for our clients over these years"
      />
      <FavWork data={favWorkData} />
      {/* <TextBox
        heading="Social media Platform"
        // content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      /> */}
      <Stack bg={"#fff"}>
        <Container maxWidth={"7xl"} py="50" zIndex={2} position="relative">
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%" }} alignSelf="center">
              <Heading
                borderLeft="20px solid #FFE962"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight={"black"}
                pl="6"
              >
                Social media Platform
              </Heading>
            </Box>
          </Flex>
        </Container>
      </Stack>
      <Box
        style={{ position: "absolute", top: "50%", left: "-4%" }}
        display={{ base: "none", md: "block" }}
      >
        <Image
          src={"/assets/image/design/12.svg"}
          width="130px"
          height={"130px"}
        />
      </Box>
      <SocialBox />
      <ClientsLogo />
    </Stack>
  );
};

SocialMediaMarketing.getLayout = function getLayout(SocialMediaMarketing) {
  return <InnerLayout color="yellow">{SocialMediaMarketing}</InnerLayout>;
};

export default SocialMediaMarketing;
