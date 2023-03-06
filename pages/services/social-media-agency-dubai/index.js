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
import SocialBox from "../../../components/SocialBox";
import ClientsLogo from "../../../components/ClientsLogo";
import VideoBanner from "../../../components/VideoBanner";
import { useRouter } from "next/router";
import VideoCaseStudy from "../../../components/VideoCaseStudy";

const SocialMediaMarketing = () => {
  const router = useRouter();
  // const favWorkData = [
  //   {
  //     name: "DAFZA",
  //     img: "/assets/image/caseStudy/caseStudy1.jpg",
  //     type: "Web Devlopment",
  //   },
  //   {
  //     name: "Costa Coffee",
  //     img: "/assets/image/caseStudy/caseStudy2.jpg",
  //     type: "Web Devlopment",
  //   },
  //   {
  //     name: "Fujifilm",
  //     img: "/assets/image/caseStudy/caseStudy3.jpg",
  //     type: "Web Devlopment",
  //   },
  //   {
  //     name: "DAFZA",
  //     img: "/assets/image/caseStudy/caseStudy1.jpg",
  //     type: "Web Devlopment",
  //   },
  //   {
  //     name: "Costa Coffee",
  //     img: "/assets/image/caseStudy/caseStudy2.jpg",
  //     type: "Web Devlopment",
  //   },
  //   {
  //     name: "Fujifilm",
  //     img: "/assets/image/caseStudy/caseStudy3.jpg",
  //     type: "Web Devlopment",
  //   },
  // ];

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
      <Box pb={12}>
        <Container maxWidth={"7xl"} position="relative">
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
                <Text fontSize={"20px"} className="main-p">
                  Get ahead with our result-driven approach to social media
                  management.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="2" className="main-p">
                  Create powerful social media campaigns that drive brand
                  awareness and conversions.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="2" className="main-p">
                  Manage your social media accounts in a simple, intuitive way.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="2" className="main-p">
                  Collaborate with bloggers to develop content that drives
                  conversions and enhances your brand.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="2" className="main-p">
                  Expand your reach through effective digital marketing
                  strategies that integrate across all platforms.
                </Text>
              </li>
            </OrderedList>
            <Text className="main-p">
              We aim to be the best social media agency in Dubai - also catering
              to Saudi Arabia, Kuwait, Qatar, Oman, Bahrain and more. Apart from
              our Social Media Services, we also provide Content Development
              Services, Blogger Outreach Program Services and Web Development
              Services
            </Text>
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
      {/* <TextBox
        heading="CASE STUDY"
        smallHeading="social media designs"
        subHeading="sneak peak into our social media marketing projects"
        content="Have a look at some of the Social Media Marketing work we have done for our clients over these years"
      />
      <CaseStudy data={favWorkData} /> */}
      <Box mt={10}>
        <VideoCaseStudy />
      </Box>
      <Stack bg={"#fff"}>
        <Container maxWidth={"7xl"} py="50" zIndex={2} position="relative">
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%" }} alignSelf="center">
              <Heading
                borderLeft="20px solid #FFE962"
                fontSize={"5xl"}
                fontWeight={"black"}
                pl="6"
              >
                Social media Platform
              </Heading>
            </Box>
          </Flex>
        </Container>
      </Stack>
      <SocialBox />
      <ClientsLogo />
    </Stack>
  );
};

SocialMediaMarketing.getLayout = function getLayout(SocialMediaMarketing) {
  return <InnerLayout color="yellow">{SocialMediaMarketing}</InnerLayout>;
};

export default SocialMediaMarketing;
