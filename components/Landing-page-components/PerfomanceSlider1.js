import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import { useMediaQuery } from "@chakra-ui/react";
const PerfomanceSlider1 = () => {
    const swiperRef = useRef(null);
  return (
    <div className="PerfomanceWrap pd-common-container">
      <div className="icontainer pt-0">
        <div className="PerfomanceGridWrap">
          <div className="perfomanceGrids irow">
            <div className="PrGridLeft">
              <div className="ImageWrp1">
                <Image
                  alt="McCollins Media"
                  src="/lp/result.png"
                  width={"102px"}
                  height={"479px"}
                />
              </div>
            </div>
            <div className="PrGridMiddle">
              <div className="PrGT1">
                3 Top performing Social Media case studies of our clients
              </div>
              <div className="irow">
                <div className="PrGridMiddle1">
                  <div className="SwiperSliderWarp ">
                    <Swiper
                     spaceBetween={20}
                     slidesPerView={1}
                     loop={true}
                     ref={swiperRef}
                    >
                      <SwiperSlide>
                        <div className="PerfomanceGraphWrap">
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">1234567</div>
                                <div className="PerfomanceG2">Spend</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">7890123</div>
                                <div className="PerfomanceG2">Sales</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">8701</div>
                                <div className="PerfomanceG2">Orders</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">4.8X</div>
                                <div className="PerfomanceG2">Roas</div>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="PerfomanceGraphWrap">
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">1234567</div>
                                <div className="PerfomanceG2">Spend</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">7890123</div>
                                <div className="PerfomanceG2">Sales</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">8701</div>
                                <div className="PerfomanceG2">Orders</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">4.8X</div>
                                <div className="PerfomanceG2">Roas</div>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="PerfomanceGraphWrap">
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">1234567</div>
                                <div className="PerfomanceG2">Spend</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">7890123</div>
                                <div className="PerfomanceG2">Sales</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">8701</div>
                                <div className="PerfomanceG2">Orders</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">4.8X</div>
                                <div className="PerfomanceG2">Roas</div>
                            </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="PrGridMiddle2">
                  <div className="VideoModalClick">
                    <Image
                      alt="McCollins Media"
                      src="/lp/video.jpg"
                      width={"662px"}
                      height={"330px"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfomanceSlider1;
