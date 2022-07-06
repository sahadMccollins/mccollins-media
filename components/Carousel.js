import React, { useRef } from "react";
import Fancybox from "./Fancybox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { IoPlayCircleSharp } from "react-icons/io5";

const Carousel = () => {
  const swiperRef = useRef(null);
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
          Sneak Peak into our Content Production Projects
        </Heading>
        <Text
          fontSize={"18px"}
          textAlign="center"
          pb={"20"}
          margin={"auto"}
          maxWidth="600px"
        >
          Have a look at some of the Content Production work we have done for
          our clients over these years
        </Text>
        <Swiper spaceBetween={20} slidesPerView={3} ref={swiperRef}>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              style={{ position: "relative" }}
              href="https://res.cloudinary.com/mccollins-media/video/upload/v1657020825/Mccollins%20Video/WEBSITE_SHOWCASE_VIDEO_1_h7ntf6.mp4"
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
          </SwiperSlide>
          <SwiperSlide>
            <a
              data-fancybox="gallery"
              style={{ position: "relative" }}
              href="https://res.cloudinary.com/mccollins-media/video/upload/v1657047733/Mccollins%20Video/Toshiba-Fullvdo-1min_xs4yve.mp4"
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
          </SwiperSlide>
        </Swiper>
      </Container>
    </Fancybox>
  );
};

export default Carousel;
