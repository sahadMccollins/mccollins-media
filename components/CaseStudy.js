import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import "swiper/css";
import CaseStudySlide from "./CaseStudySlide";
import { useRef } from "react";

const CaseStudy = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const swiperRef = useRef(null);
  return (
    <Stack>
      <Container maxWidth={"7xl"} py="20">
        <Flex direction={{ base: "column", md: "row" }}>
          <Box width="50%"></Box>
          <Box width="100%" mb={"20px"}>
            <Text fontSize={"40px"}>
              we make
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
              src="/assets/image/caseStudy/caseStudyAlp.svg"
              height={"130%"}
              bottom={0}
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
              <SwiperSlide>
                <CaseStudySlide img="/assets/image/caseStudy/caseStudy1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudySlide img="/assets/image/caseStudy/caseStudy2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudySlide img="/assets/image/caseStudy/caseStudy3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudySlide img="/assets/image/caseStudy/caseStudy1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudySlide img="/assets/image/caseStudy/caseStudy2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudySlide img="/assets/image/caseStudy/caseStudy3.jpg" />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default CaseStudy;
