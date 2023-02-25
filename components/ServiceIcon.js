import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const ServiceIcon = () => {
  const router = useRouter();

  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const swiperRef = useRef(null);

  return (
    <Stack className="serviceIcon">
      <Container maxWidth={"7xl"} pb="20" mt={10}>
        <Swiper
          spaceBetween={20}
          slidesPerView={isLargerThan780 ? 3 : 1}
          loop={isLargerThan780 ? false : true}
          ref={swiperRef}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <Box
              onClick={() =>
                router.push(
                  "/services/web-design-and-development/shopify-website-development"
                )
              }
              className="icon"
            >
              <Image
                src="/assets/image/techLogo/shopify.svg"
                width="97px"
                height="97px"
                margin={"auto"}
              />
              <Text
                mt={5}
                fontSize={"2xl"}
                fontWeight={"bold"}
                textAlign="center"
              >
                shopify
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              onClick={() =>
                router.push("/services/web-design-and-development/sitecore")
              }
              className="icon"
            >
              <Image
                src="/assets/image/techLogo/site.png"
                width="97px"
                height="97px"
                margin={"auto"}
              />
              <Text
                mt={5}
                fontSize={"2xl"}
                fontWeight={"bold"}
                textAlign="center"
              >
                Sitecore
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              onClick={() =>
                router.push("/services/web-design-and-development/wordpress")
              }
              className="icon"
            >
              <Image
                src="/assets/image/techLogo/wordpress.svg"
                width="97px"
                height="97px"
                margin={"auto"}
              />
              <Text
                mt={5}
                fontSize={"2xl"}
                fontWeight={"bold"}
                textAlign="center"
              >
                Wordpress
              </Text>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Stack>
  );
};

export default ServiceIcon;
