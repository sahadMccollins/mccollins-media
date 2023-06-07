import React, { useRef } from "react";
import Fancybox from "./Fancybox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Container, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { IoPlayCircleSharp } from "react-icons/io5";

const Carousel = () => {
  const swiperRef = useRef(null);

  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  return (
    <Fancybox>
      <Container maxWidth={"7xl"} style={{ margin: "auto" }} py={"10"}>
        <Heading
          fontSize={{ base: "2xl", md: "5xl" }}
          textAlign="center"
          my={5}
          mx={"auto"}
          maxWidth={"720px"}
        >
          Featured Projects
        </Heading>
        <Text
          fontSize={"18px"}
          textAlign="center"
          pb={"20"}
          margin={"auto"}
          maxWidth="600px"
        >
          Some of our favorites ! From Automobiles to Technology Brands and for
          our love of food, here are some handpicked content pieces for you to
          explore.
        </Text>
        <Swiper
          spaceBetween={20}
          slidesPerView={isLargerThan780 ? 3 : 1}
          ref={swiperRef}
        >
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              style={{ position: "relative" }}
              href="/assets/cloudinaryBackup/WEBSITE_SHOWCASE_VIDEO_1_h7ntf6.mp4"
            >
              <img
                alt="snaidero"
                width="100%"
                height="345px"
                src="/assets/image/servicePage/contentProduction/snaidero-min.jpg"
              />
              <IoPlayCircleSharp
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                  fontSize: "70px",
                  color: "#fff",
                }}
              />
            </a>
            <Box bg="#f9f9f9" p={"30px 25px 25px"} borderRadius={"0 0 5px 5px"}>
              <Heading fontSize={"3xl"}>Snaidero Kitchens</Heading>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="/assets/image/servicePage/contentProduction/organic-honey--min.jpg"
            >
              <img
                alt=""
                width="100%"
                height="345px"
                src="/assets/image/servicePage/contentProduction/organic-honey--min.jpg"
              />
            </a>
            <Box bg="#f9f9f9" p={"30px 25px 25px"} borderRadius={"0 0 5px 5px"}>
              <Heading fontSize={"3xl"}>Organic Honey </Heading>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="/assets/image/servicePage/contentProduction/burgerboulivard-2-min.jpg"
            >
              <img
                alt=""
                width="100%"
                height="345px"
                src="/assets/image/servicePage/contentProduction/burgerboulivard-2-min.jpg"
              />
            </a>

            <Box bg="#f9f9f9" p={"30px 25px 25px"} borderRadius={"0 0 5px 5px"}>
              <Heading fontSize={"3xl"}>Burger Boulevard </Heading>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              href="/assets/image/servicePage/contentProduction/dessertino-min.jpg"
            >
              <img
                alt=""
                width="100%"
                height="345px"
                src="/assets/image/servicePage/contentProduction/dessertino-min.jpg"
              />
            </a>
            <Box bg="#f9f9f9" p={"30px 25px 25px"} borderRadius={"0 0 5px 5px"}>
              <Heading fontSize={"3xl"}>Dessertino</Heading>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              style={{ position: "relative" }}
              href="/assets/cloudinaryBackup/Toshiba-Fullvdo-1min_xs4yve.mp4"
            >
              <img
                alt=""
                width="100%"
                height="345px"
                src="/assets/image/servicePage/contentProduction/thoshiba-min.jpg"
              />
              <IoPlayCircleSharp
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                  fontSize: "70px",
                  color: "#fff",
                }}
              />
            </a>
            <Box bg="#f9f9f9" p={"30px 25px 25px"} borderRadius={"0 0 5px 5px"}>
              <Heading fontSize={"3xl"}>Toshiba Middle East </Heading>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Fancybox>
  );
};

export default Carousel;
