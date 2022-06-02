import { Box, Container, Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import AwardSlide from "./AwardSlide";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef } from "react";

const Awards = () => {
  const swiperRef = useRef(null);
  return (
    <Stack mt={"100px"}>
      <Container maxWidth={"7xl"} pb="20" position={"relative"}>
        <Heading
          fontSize={"4xl"}
          position={{ base: "relative", md: "absolute" }}
          top={{ base: "0", md: 16 }}
          mb={{ base: "50px", md: 0 }}
          ml={{ base: "0", md: "120px" }}
          borderLeft="20px solid #FFE962"
          pl={6}
        >
          AWARDS &#38;
          <br /> ACCREDITATIONS
        </Heading>
        <Flex>
          <Box width="10%" style={{ base: "none", md: "block" }}>
            <Image
              src="/assets/image/awards/awardsAlp.png"
              width="101px"
              height="447px"
            />
          </Box>
          <Box width={{ base: "100%", md: "90%" }} alignSelf="end">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              ref={swiperRef}
            >
              <SwiperSlide>
                <AwardSlide />
              </SwiperSlide>
              <SwiperSlide>
                <AwardSlide />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Flex>
        <Box
          position={"relative"}
          width="45%"
          float={"right"}
          display={{ base: "none", md: "block" }}
        >
          <HStack
            position={"absolute"}
            bottom="0"
            left={"245px"}
            spacing="0"
            cursor={"pointer"}
            zIndex="2"
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
        </Box>
      </Container>
    </Stack>
  );
};

export default Awards;
