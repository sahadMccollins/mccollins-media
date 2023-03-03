import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
import { Box, Text, Button, useMediaQuery, Heading } from "@chakra-ui/react";

const CaseStudy = ({ data }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box className="swiper-container caseStudySwiper" pb={"50px"}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={isLargerThan768 ? 4 : 1}
        spaceBetween={50}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        initialSlide={5}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.name}>
            <Box
              w="320px"
              h="450px"
              bgImage={item.img}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="cover"
              borderRadius="lg"
              position="relative"
              margin={"auto"}
              transition="transform 0.3s ease-in-out"
              // _hover={{ transform: "scale(1.05)" }}
              _hover={{
                transform: "scale(1.05)",
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "65%",
                  background:
                    "linear-gradient(to bottom, #FFDE11, rgba(255,222,17,0))",
                  borderRadius: "lg",
                  opacity: 0.8,
                },
              }}
            >
              <Heading
                position="absolute"
                bottom="120px"
                left="20px"
                color="white"
                fontSize="2xl"
                fontWeight="bold"
              >
                {item.name}
              </Heading>
              <Text
                position="absolute"
                bottom="80px"
                left="20px"
                color="white"
                fontSize="2xl"
                fontWeight="medium"
              >
                {item.type}
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
              >
                Case Study
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CaseStudy;
