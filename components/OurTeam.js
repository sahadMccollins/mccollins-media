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
                  img="/assets/image/team/Mahmoud.jpg"
                  name="Mahmoud"
                  designation="Account Manager"
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
                  img="/assets/image/team/Nikhila.jpg"
                  name="Nikila"
                  designation="Account Executive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Leanne.jpg"
                  name="Leanne"
                  designation="Account Executive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Maha-Hussein.jpg"
                  name="Maha Hussein"
                  designation="Account Manager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/shabeer.jpg"
                  name="Shabeer"
                  designation="Content Creator"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/sahal.jpg"
                  name="Sahal"
                  designation="Content Creator"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Rishika.jpg"
                  name="Rishika"
                  designation="Account Executive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Alia.jpg"
                  name="Alia"
                  designation="Account Manager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/ashton.jpg"
                  name="Ashton"
                  designation="Content Producer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/ijas.jpg"
                  name="Ijas"
                  designation="Web & Mobile Developer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Alia.jpg"
                  name="Alia"
                  designation="Account Manager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Moutasem.jpg"
                  name="Moutasem"
                  designation="Account Executive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Maria.jpg"
                  name="Maria"
                  designation="Digital Designer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMemberSlide
                  img="/assets/image/team/Nelvin.jpg"
                  name="Nelvin"
                  designation="Admin"
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
