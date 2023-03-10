import { Container, Stack, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useRef } from "react";

const SeoIcon = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const swiperRef = useRef(null);
  return (
    <Stack>
      <Container maxWidth={"7xl"} pb="20">
        <Swiper
          spaceBetween={20}
          slidesPerView={isLargerThan780 ? 5 : 2}
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
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-01.png"
              width="200px"
              height="200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-02.png"
              width="200px"
              height="200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-03.png"
              width="200px"
              height="200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-04.png"
              width="200px"
              height="200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-05.png"
              width="200px"
              height="200px"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-06.png"
              width="200px"
              height="200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-07.png"
              width="200px"
              height="200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-08.png"
              width="200px"
              height="200px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-09.png"
              width="200px"
              height="200px"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Stack>
  );
};

export default SeoIcon;
