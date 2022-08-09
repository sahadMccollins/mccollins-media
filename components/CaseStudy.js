import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

import "swiper/css";
import CaseStudySlide from "./CaseStudySlide";
import { useRef } from "react";

const CaseStudy = (props) => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const swiperRef = useRef(null);
  return (
    <Stack>
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
          <Box width="100%" mb={"20px"} alignSelf="end">
            <Text fontSize={"40px"}>
              we make &nbsp;
              <b>
                brands, websites <br /> apps{" "}
                <span style={{ color: "#FFDE11" }}> &#38; </span>
                social media
              </b>
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box width={"20%"} position="relative">
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
              src="/assets/image/caseStudy/caseStudyAlp.png"
              width="80px"
              height="400px"
              bottom={{ base: "45px", md: "0" }}
            />
          </Box>
          <Box width={"80%"}>
            <Swiper
              spaceBetween={20}
              slidesPerView={isLargerThan780 ? 3.5 : 1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              loop={true}
              ref={swiperRef}
            >
              {props.data.map((slide) => (
                <SwiperSlide key={slide.img}>
                  <a
                    data-fancybox="gallery"
                    style={{ position: "relative" }}
                    href={slide.img}
                  >
                    <CaseStudySlide
                      img={slide.img}
                      name={slide.name}
                      type={slide.type}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default CaseStudy;
