import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

import "swiper/css";
import { useRef } from "react";

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

const OurTeam = () => {
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
          <Box width="100%" mb={"20px"} alignSelf="end" zIndex={2}>
            <Text fontSize={"35px"}>
              <b>
                we grow brands, <br /> create experiences and solve problems.
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
                  img="/assets/image/team/meghna.jpg"
                  name="Meghna Kothari"
                  designation="Director"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/shome.jpg"
                  name="Shome BAG"
                  designation="Associate Business Director"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/asher.jpg"
                  name="Azhar"
                  designation="Digital Designer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Fadwa.jpg"
                  name="Fadwa"
                  designation="Account Manager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Joeseph.jpg"
                  name="Joseph"
                  designation="Senior Copywriter"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/asher.jpg"
                  name="Azhar"
                  designation="Studio Lead"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/youssef.jpg"
                  name="Youssef"
                  designation="Performance Manager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/George.jpg"
                  name="George "
                  designation="Account Manager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Kavya.jpg"
                  name="Kavya"
                  designation="Account Executive"
                />
              </SwiperSlide>
              {/* <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Arjun.jpg"
                  name="Arjun"
                  designation="SEO Lead"
                />
              </SwiperSlide> */}
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/ijas.jpg"
                  name="Ijas"
                  designation="Web Lead"
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default OurTeam;
