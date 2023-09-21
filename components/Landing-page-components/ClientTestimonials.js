import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FadeUp from "../Motion/FadeUp";

const CleantTestimonials = () => {
  const swiperRef = useRef(null);
  return (
   <div className="ClientTestimonial pd-common">
     <Container maxWidth={"7xl"}>
      <Box position={"relative"} ml={{ base: 0, md: "10%" }}>
        <FadeUp>
          <Heading
            borderLeft="20px solid #FFDE11"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight={"bold"}
            pl="6"
          >
            What Our Clients<br/>
Are Saying?
          </Heading>
        </FadeUp>
        <Box
          display={"flex"}
          alignItems="end"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box width={{ base: "100%", md: "60%" }}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              ref={swiperRef}
            >
              <SwiperSlide>
                <FadeUp>
                  <Box bg="#ffffff" p={"16"} mt="10">
                    <Text>
                      McCollins has helped launch cleaning Superstore from the
                      website development to social media and ad management. We
                      are very happy to have an extended team in McCollins. The
                      team takes ownership and I would be more than happy to
                      recommend them to other brands
                    </Text>
                    <Heading fontSize={"2xl"} mt="5">
                      Alexa - Marketing Manager
                    </Heading>
                    <Text fontSize={"20px"}>Cleaning Superstore</Text>
                  </Box>
                </FadeUp>
              </SwiperSlide>
              <SwiperSlide>
                <Box bg="#ffffff" p={"16"} mt="10">
                  <Text>
                    McCollins has helped launch cleaning Superstore from the
                    website development to social media and ad management. We
                    are very happy to have an extended team in McCollins. The
                    team takes ownership and I would be more than happy to
                    recommend them to other brands
                  </Text>
                  <Heading fontSize={"2xl"} mt="5">
                    Alexa - Marketing Manager
                  </Heading>
                  <Text fontSize={"20px"}>Cleaning Superstore</Text>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box>
            <HStack spacing="0" cursor={"pointer"} zIndex="2">
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
        </Box>
        <Box
          display={{ base: "none", md: "block" }}
          bg={"#FFDE11"}
          width="350px"
          height={"400px"}
          position="absolute"
          bottom={"42px"}
          left="50%"
          textAlign={"center"}
        >
          <Image
            alt="McCollins Media"
            src={"/assets/image/design/4.png"}
            width="176px"
            height={"370px"}
          />
        </Box>
      </Box>
    </Container>
   </div>
  );
};

export default CleantTestimonials;
