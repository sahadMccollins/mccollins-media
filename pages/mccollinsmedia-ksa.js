import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useMediaQuery,
  Image as Chakraimage,
  ButtonGroup,
} from "@chakra-ui/react";
import Image from "next/image";
import { en, ar } from "../i18n/mccollins-ksa";
import InnerLayout from "../components/Layout/InnerLayout";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "swiper/css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import VideoBanner from "../components/VideoBanner";

function TeamMemberSlide(props) {
  return (
    <Box position={"relative"} bottom={"-5px"}>
      <Image src={props.img} width="270px" height="400px" objectFit="cover" />
      <Box
        position={"absolute"}
        bottom="0"
        width={{ base: "270px", md: "100%" }}
        height="90px"
        background={"#000"}
        backgroundColor={"rgba(0,0,0,0.5)"}
        borderTopRightRadius="50px"
      >
        <Heading color={"#FFDE11"} fontSize="28px" mt={"15px"} mx={"15px"}>
          {props.name}
        </Heading>
        <Text color={"#fff"} mx={"15px"}>
          {props.designation}
        </Text>
      </Box>
      <Box
        position={"absolute"}
        width={{ base: "270px", md: "100%" }}
        bottom={4}
        textAlign="right"
        paddingRight={"20px"}
        cursor="pointer"
      ></Box>
    </Box>
  );
}

const MccollinsmediaKsa = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const [isSmallerThan780] = useMediaQuery("(max-width: 780px)");
  const swiperRef = useRef(null);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  const [isOpen, setOpen] = useState(false);

  const videoRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef.current.play();
  //   }, 100);
  // }, []);

  return (
    <Stack
      textAlign={locale === "en" ? "left" : "right"}
      mt={"-84px"}
      position="relative"
    >
      <Box
        width={"100%"}
        height="100vh"
        minHeight={"700px"}
        overflow={"hidden"}
      >
        <video
          loop
          muted
          autoPlay
          width="100%"
          controls
          // playsinline
          // loop
          // muted
          // width="100%"
          // className="video-banner"
          // ref={videoRef}
          // poster={
          //   isSmallerThan780 && "/assets/image/servicePage/serviceAccordian.jpg"
          // }
        >
          <source
            src={
              "https://res.cloudinary.com/mccollins-media/video/upload/v1657219431/Mccollins%20Video/Website_Development_cs3y2v.mp4"
            }
            type="video/mp4"
          />
        </video>
      </Box>
      <Container maxWidth={"7xl"} zIndex="9" style={{ margin: "auto" }}>
        <Flex
          height={{ base: "500px", md: "100vh" }}
          minHeight={{ base: "unset", md: "700px" }}
          alignItems="end"
          placeItems={"flex-end"}
          pb={"5%"}
        >
          <Box width={"100%"}>
            <Heading fontSize={{ base: "30px", md: "50px" }} color="#FFDE11">
              {t.heading}
            </Heading>
            <Button
              colorScheme="yellow"
              background={"#FFDE11"}
              borderRadius="20px"
              color="#000"
              mt={"5"}
              onClick={() => router.push("/contact")}
              display={{ base: "none", md: "flex" }}
              marginLeft={locale === "ar" ? "auto" : "unset"}
            >
              <Image
                src="/assets/image/icons/call.svg"
                width="25px"
                height="25px"
                priority={true}
              />
              &nbsp;&nbsp;contact us
            </Button>
            <Text
              mt="10"
              fontSize={{ base: "15px", md: "18px" }}
              fontWeight="bold"
              color={"#fff"}
              pr={locale === "ar" ? "0" : "5"}
              maxWidth={locale === "ar" ? "unset" : "700px"}
              // display={{ base: "none", md: "block" }}
              marginLeft={locale === "ar" ? "40%" : "unset"}
              margin={isSmallerThan780 && "0"}
            >
              {t.headingContent}
              <br />
              <br />
              {t.headingContent2}
            </Text>
          </Box>
        </Flex>
      </Container>

      <Box py={"0px "} style={{ marginTop: "0" }}>
        <video loop muted autoPlay width="100%" controls>
          <source
            src="https://res.cloudinary.com/mccollins-media/video/upload/v1657020825/Mccollins%20Video/WEBSITE_SHOWCASE_VIDEO_1_h7ntf6.mp4"
            type="video/mp4"
          />
        </video>
      </Box>

      {/* <Heading
        textAlign={"center"}
        pb="50px"
        dir={locale === "en" ? "ltr" : "rtl"}
        lang={locale === "en" ? "en" : "ar"}
      >
        {t.sec2Heading}
      </Heading> */}

      <Box
        bg={"#F7F7F7"}
        pt={{ base: "20", md: "20" }}
        pb={{ base: "0", md: "20" }}
        style={{ marginTop: "0" }}
      >
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box alignSelf="center" position={"relative"} textAlign="center">
                <Image
                  src="/assets/image/servicePage/ksa/web-dev.jpg"
                  width="500px"
                  height="312.5px"
                  style={{ zIndex: "2" }}
                />
                {/* <Box
                  position={"absolute"}
                  width="300px"
                  height={{ base: "70%", md: "75%" }}
                  bg={"#FFDE11"}
                  top="120px"
                  right="150px"
                  zIndex={0}
                ></Box> */}
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Heading
                  fontSize="4xl"
                  dir={locale === "en" ? "ltr" : "rtl"}
                  lang={locale === "en" ? "en" : "ar"}
                >
                  {t.webHeading}
                </Heading>
              </Box>
              <Text
                mt={10}
                dir={locale === "en" ? "ltr" : "rtl"}
                lang={locale === "en" ? "en" : "ar"}
              >
                {t.webContent}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box pt={{ base: "10", md: "20" }} pb={{ base: "0", md: "20" }}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row-reverse" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box alignSelf="center" position={"relative"} textAlign="center">
                <Image
                  src="/assets/image/servicePage/ksa/social-media.jpg"
                  width="500px"
                  height="312.5px"
                  style={{ zIndex: "2" }}
                />
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Heading
                  fontSize="4xl"
                  dir={locale === "en" ? "ltr" : "rtl"}
                  lang={locale === "en" ? "en" : "ar"}
                >
                  {t.socialHeading}
                </Heading>
              </Box>
              <Text
                mt={10}
                dir={locale === "en" ? "ltr" : "rtl"}
                lang={locale === "en" ? "en" : "ar"}
              >
                {t.socialContent}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box
        bg={"#F7F7F7"}
        pt={{ base: "10", md: "20" }}
        pb={{ base: "0", md: "20" }}
      >
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box alignSelf="center" position={"relative"} textAlign="center">
                <Image
                  src="/assets/image/servicePage/ksa/google-ads.jpg"
                  width="500px"
                  height="312.5px"
                  style={{ zIndex: "2" }}
                />
                {/* <Box
                  position={"absolute"}
                  width="300px"
                  height={{ base: "70%", md: "75%" }}
                  bg={"#FFDE11"}
                  top="120px"
                  right="150px"
                  zIndex={0}
                ></Box> */}
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Heading
                  fontSize="4xl"
                  dir={locale === "en" ? "ltr" : "rtl"}
                  lang={locale === "en" ? "en" : "ar"}
                >
                  {t.adsHeading}
                </Heading>
              </Box>
              <Text
                mt={10}
                dir={locale === "en" ? "ltr" : "rtl"}
                lang={locale === "en" ? "en" : "ar"}
              >
                {t.adsContent}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box pt={{ base: "10", md: "20" }} pb={{ base: "0", md: "20" }}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row-reverse" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box alignSelf="center" position={"relative"} textAlign="center">
                <Image
                  src="/assets/image/servicePage/ksa/seo.jpg"
                  width="500px"
                  height="312.5px"
                  style={{ zIndex: "2" }}
                />
                {/* <Box
                  position={"absolute"}
                  width="300px"
                  height={{ base: "70%", md: "75%" }}
                  bg={"#FFDE11"}
                  top="120px"
                  right="150px"
                  zIndex={0}
                ></Box> */}
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Heading
                  fontSize="4xl"
                  dir={locale === "en" ? "ltr" : "rtl"}
                  lang={locale === "en" ? "en" : "ar"}
                >
                  {t.seoHeading}
                </Heading>
              </Box>
              <Text
                mt={10}
                dir={locale === "en" ? "ltr" : "rtl"}
                lang={locale === "en" ? "en" : "ar"}
              >
                {t.seoContent}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxWidth={"7xl"} pb="20">
          <Flex direction={{ base: "column", md: "row" }}>
            <Box
              width="50%"
              zIndex={2}
              textAlign="center"
              display={{ base: "none", md: "block" }}
            >
              <Image
                position={"absolute"}
                src="/assets/image/design/2.svg"
                width={"105px"}
                height={"168px"}
                top={-10}
              />
            </Box>
            <Box width="100%" mb={"20px"} alignSelf="end" zIndex={2}>
              <Text
                fontSize={"35px"}
                dir={locale === "en" ? "ltr" : "rtl"}
                lang={locale === "en" ? "en" : "ar"}
              >
                <b>{t.mtTeam}</b>
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box width={"20%"} position="relative" textAlign={"left"}>
              <HStack
                position={"absolute"}
                bottom="0"
                right={0}
                spacing="0"
                cursor={"pointer"}
              >
                <Box
                  background={"#000"}
                  p="8px 15px 10px 15px"
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                  <ChevronLeftIcon color={"#fff"} />
                </Box>
                <Box
                  background={"#6F6F6F"}
                  p="8px 15px 10px 15px"
                  onClick={() => swiperRef.current.swiper.slideNext()}
                >
                  <ChevronRightIcon color={"#fff"} />
                </Box>
              </HStack>
              <Box
                position={"absolute"}
                bottom="42px"
                background={"#FFDE11"}
                w="400px"
                height={{ base: "300px", md: "475px" }}
                right={"-150px"}
              ></Box>
              <Image
                position={"absolute"}
                src="/assets/image/team/ourTeamAlp.png"
                width="80px"
                height="400px"
                bottom={{ base: "45px", md: "0" }}
              />
            </Box>
            <Box width={"80%"}>
              <Swiper
                spaceBetween={20}
                slidesPerView={isLargerThan780 ? 3.5 : 1}
                ref={swiperRef}
              >
                <SwiperSlide>
                  <TeamMemberSlide
                    img="/assets/image/team/Mahmoud.jpg"
                    name={t.team[0]}
                    // designation="Account Manager"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamMemberSlide
                    img="/assets/image/team/Maha-Hussein.jpg"
                    name={t.team[1]}
                    // designation="Account Executive"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamMemberSlide
                    img="/assets/image/team/Karim.jpg"
                    name={t.team[2]}
                    // designation="Account Executive"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamMemberSlide
                    img="/assets/image/team/Joe.jpg"
                    name={t.team[3]}
                    // designation="Account Manager"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamMemberSlide
                    img="/assets/image/team/George.jpg"
                    name={t.team[4]}
                    // designation="Content Creator"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamMemberSlide
                    img="/assets/image/team/Aziz.jpg"
                    name={t.team[5]}
                    // designation="Content Creator"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamMemberSlide
                    img="/assets/image/team/Sheril.jpg"
                    name={t.team[6]}
                    // designation="Account Executive"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamMemberSlide
                    img="/assets/image/team/Fadwa.jpg"
                    name={t.team[7]}
                    // designation="Account Manager"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TeamMemberSlide
                    img="/assets/image/team/asher.jpg"
                    name={t.team[8]}
                    // designation="Digital Designer"
                  />
                </SwiperSlide>
              </Swiper>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Stack>
  );
};

MccollinsmediaKsa.getLayout = function getLayout(MccollinsmediaKsa) {
  return (
    <InnerLayout color="yellow" hideIndia={true}>
      {MccollinsmediaKsa}
    </InnerLayout>
  );
};

export default MccollinsmediaKsa;
