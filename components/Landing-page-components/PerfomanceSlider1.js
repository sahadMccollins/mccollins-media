import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "../../node_modules/react-modal-video/css/modal-video.min.css";

const PerfomanceSlider1 = () => {
    const swiperRef = useRef(null);
    const [isOpen, setOpen] = useState(false);
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
                  <div className="VideoModalClick" onClick={() => setOpen(true)}>
                    <Image
                      alt="McCollins Media"
                      src="/lp/video.jpg"
                      width={"662px"}
                      height={"330px"}
                      layout="responsive"
                    />
                  </div>
                  <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="Pj6P8kQvpZw"
          onClose={() => setOpen(false)}
        />
                </div>
              </div>
              <div className="SliderBtnWrp">
                <span className="SliderBtn NextBtn" onClick={() => swiperRef.current.swiper.slideNext()}>
                    <span className="Ner1">&nbsp;</span>
                </span>
                <span className="SliderBtn PrevBtn" onClick={() => swiperRef.current.swiper.slidePrev()}>
                <span className="Ner2">&nbsp;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfomanceSlider1;
