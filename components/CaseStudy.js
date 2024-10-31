import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { Box, Text, Button, useMediaQuery, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import FadeUp from "./Motion/FadeUp";
import Image from "next/image";

const CaseStudySlide = (props) => {
  const router = useRouter();
  return (
    <Box
      w="320px"
      h="450px"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      borderRadius="lg"
      position="relative"
      margin={"auto"}
      transition="transform 0.3s ease-in-out"
      _after={{
        content: '""',
        display: "block",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "60%",
        background: "linear-gradient(to top, #050505, rgba(255,222,17,0))",
        borderRadius: "lg",
        opacity: 0.8,
        zIndex: 5,
      }}
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Image
        src={props.img}
        alt="Mccollins Media"
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: "10px" }}
      />
      <Heading
        position="absolute"
        bottom="120px"
        left="20px"
        color="white"
        className="main-h5"
        fontWeight="bold"
        zIndex={9}
      >
        {props.name}
      </Heading>
      <Text
        position="absolute"
        bottom="80px"
        left="20px"
        color="white"
        className="main-p"
        fontWeight="medium"
        zIndex={9}
      >
        {props.service}
      </Text>
      <Button
        colorScheme="yellow"
        background={"#FFDE11"}
        borderRadius="20px"
        color="#000"
        position="absolute"
        bottom="30px"
        left="20px"
        variant="solid"
        onClick={() => router.push(`/case-study/${props.loc}`)}
        zIndex={9}
      >
        {props.topic}
      </Button>
    </Box>
  );
};

const CaseStudy = () => {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan1250] = useMediaQuery("(min-width: 1250px)");

  let swiperInstance = null;

  const onSwiper = (swiper) => {
    swiperInstance = swiper;
  };

  const handleMousewheel = (e) => {
    const direction = e.deltaY > 0 ? "next" : "prev";
    e.stopPropagation();
    if (typeof window !== "undefined") {
      const swiperSld = document.querySelector(".swiper").swiper;
      if (direction === "next") {
        swiperSld.slidePrev();
      } else {
        swiperSld.slideNext();
      }
    }
  };

  // if (typeof window !== "undefined") {
  //   var swiperDiv = document.querySelector("#swiperDiv");
  //   if (swiperDiv) {
  //     swiperDiv.addEventListener(
  //       "wheel",
  //       function (e) {
  //         e.preventDefault();
  //       },
  //       { passive: false }
  //     );
  //   }
  // }

  return (
    <Box
      className="swiper-container caseStudySwiper"
      pb={"50px"}
      // onWheel={handleMousewheel}
      id="swiperDiv"
    >
      <FadeUp>
        <Swiper
          modules={[Pagination]}
          slidesPerView={isLargerThan1250 ? 4 : isLargerThan900 ? 3 : 1}
          spaceBetween={50}
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          initialSlide={5}
          onSwiper={onSwiper}
        >
          <SwiperSlide>
            <CaseStudySlide
              name="CRYO"
              img="/assets/image/caseStudy/caseStudy6.jpg"
              service="Digital Marketing"
              topic="Case Study"
              loc="cryo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CaseStudySlide
              name="OAKBERRY"
              img="/assets/image/caseStudy/caseStudy4.jpg"
              service="Digital Marketing"
              topic="Case Study"
              loc="oakberry"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CaseStudySlide
              name="Cleaning Superstore"
              img="/assets/image/caseStudy/caseStudy5.jpg"
              service="Digital Marketing"
              topic="Case Study"
              loc="cleaning-super-store"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CaseStudySlide
              img="/assets/image/caseStudy/caseStudy7.jpg"
              name="Pioneer"
              service="Digital Marketing"
              topic="Case Study"
              loc="pioneer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CaseStudySlide
              img="/assets/image/caseStudy/caseStudy8.jpg"
              name="Toshiba"
              service="Digital Marketing"
              topic="Case Study"
              loc="toshiba"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CaseStudySlide
              img="/assets/image/caseStudy/caseStudy1.jpg"
              name="Dubai Airport Freezone"
              service="Digital Marketing"
              topic="Case Study"
              loc="dubai-airport-freezone"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CaseStudySlide
              img="/assets/image/caseStudy/caseStudy9.jpg"
              name="Snaidro Kitchen"
              service="Digital Marketing"
              topic="Case Study"
              loc="snaidero-kitchen"
            />
          </SwiperSlide>
        </Swiper>
      </FadeUp>
    </Box>
  );
};

export default CaseStudy;
