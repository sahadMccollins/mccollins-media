import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import Fancybox from "./Fancybox";

const WebShowcase = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Stack className="webshowcase">
      <Container maxW={"7xl"} mr={0} pr={0}>
        <Box>
          <Box
            mt={8}
            mb={5}
            background="#FFDE11"
            width={"fit-content"}
            p={"0px 6% 0px 10px"}
            fontWeight="bold"
            fontSize={"20px"}
          >
            <Text>WEB SHOWCASE</Text>
          </Box>
          <Heading>Some of our favorites</Heading>
          <Text className="main-p" maxW={"470px"} mt={5}>
            Over the decade we have worked on some exciting web projects from
            Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority
            Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia.
            Have a look at some of our work
          </Text>
          <Box mb={10}>
            <Fancybox>
              <Swiper
                slidesPerView={isLargerThan768 ? 3.5 : 1}
                spaceBetween={30}
              >
                <SwiperSlide>
                  <a
                    data-fancybox="gallery"
                    style={{ position: "relative" }}
                    href="/assets/image/webShowcase/(1).jpg"
                  >
                    <Image
                      src="/assets/image/webShowcase/(1).jpg"
                      width={"350px"}
                      height={"350px"}
                    />
                    <Box className="contentBox" mt={"-50px"}>
                      <Heading as={"h4"} fontSize="2xl">
                        Modern Oman Bakery
                      </Heading>
                    </Box>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    data-fancybox="gallery"
                    style={{ position: "relative" }}
                    href="/assets/image/webShowcase/(2).jpg"
                  >
                    <Image
                      src="/assets/image/webShowcase/(2).jpg"
                      width={"350px"}
                      height={"350px"}
                    />
                    <Box className="contentBox" mt={"-50px"}>
                      <Heading as={"h4"} fontSize="2xl">
                        Master Baker Studio
                      </Heading>
                    </Box>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    data-fancybox="gallery"
                    style={{ position: "relative" }}
                    href="/assets/image/webShowcase/(3).jpg"
                  >
                    <Image
                      src="/assets/image/webShowcase/(3).jpg"
                      width={"350px"}
                      height={"350px"}
                    />
                    <Box className="contentBox" mt={"-50px"}>
                      <Heading as={"h4"} fontSize="2xl">
                        Cleaning Super Store
                      </Heading>
                    </Box>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    data-fancybox="gallery"
                    style={{ position: "relative" }}
                    href="/assets/image/webShowcase/(3).jpg"
                  >
                    <Image
                      src="/assets/image/webShowcase/(4).jpg"
                      width={"350px"}
                      height={"350px"}
                    />
                    <Box className="contentBox" mt={"-50px"}>
                      <Heading as={"h4"} fontSize="2xl">
                        VOSS
                      </Heading>
                    </Box>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    data-fancybox="gallery"
                    style={{ position: "relative" }}
                    href="/assets/image/webShowcase/(3).jpg"
                  >
                    <Image
                      src="/assets/image/webShowcase/(5).jpg"
                      width={"350px"}
                      height={"350px"}
                    />
                    <Box className="contentBox" mt={"-50px"}>
                      <Heading as={"h4"} fontSize="2xl">
                        Zilli Dubai
                      </Heading>
                    </Box>
                  </a>
                </SwiperSlide>
              </Swiper>
            </Fancybox>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default WebShowcase;
