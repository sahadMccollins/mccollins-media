import React, { useRef } from "react";
import Image from "next/image";
import styles from "../../styles/landingPage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import {useMediaQuery} from "@chakra-ui/react";

const ClientResults = () => {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const swiperRef = useRef(null);
  return (
    <div className="ClientResults bg-3 pd-common">
      <div className="icontainer">
        <div className="HdStyle1">
          <div className="Hd1">Our Clients Results</div>
          <div className="Hd2">Over the decade we have worked on some exciting web projects from Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia. Have a look at some of our work</div>
          <div className="Hd3">
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
      <div className={`icontainer ${styles.SliderWrap2}`}>
        <div className={`${styles.GridBoxWrap}`}>
          <div className={`${styles.SliderGridBox}`}>
          {!isSmallerThan1000 && (
            <div className={`${styles.SliderGridBoxL}`}>
              <span
                className={`${styles.SliderBtn} ${styles.NextBtn}`}
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <span className={`${styles.Ner1}`}>&nbsp;</span>
              </span>
            </div>
          )}
            <div className={`${styles.SliderGridBoxM}`}>
              <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                ref={swiperRef}
              >
                <SwiperSlide>
                  <div className={`${styles.SliderBox2Wrap}`}>
                    <div className={`${styles.SliderBox2}`}>
                      <div className={`irow ${styles.SliderBoxFlex}`}>
                        <div className={`${styles.Flex50}`}>
                          <div className="ContentWrap1">
                            <div>
                              <div className={`${styles.ContentHeader1}`}>
                                <div className={`${styles.ContentHeader1Flex}`}>
                                  <div className={`${styles.flexAuto}`}>
                                    <div className={`${styles.LogoWrap1}`}>
                                      <Image
                                        alt="McCollins Media"
                                        src="/assets/image/clientLogo/clientLogo-(9).png"
                                        width={"140px"}
                                        height={"206px"}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className={`${styles.flexAuto}`}>
                                    <div className={`${styles.LogoName} ${styles.color1}`}>
                                      Oakberry
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles.st1}`}>OAKBERRY is a global brand known for its Acai - from the Amazon. We have had the utmost pleasure working with OAKBERRY from Day 1 - when it entered the market in the Middle East, that too right before the pandemic.</div>
                            <div>
                              <div className={`${styles.GridSt12}`}>
                                <div className={`${styles.GridSt12Flex}`}>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+45%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increase  In Website Visitors</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+105%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increase  In Organic Search Traffic</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+37%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increase  In  Conversion Rate </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <a href="https://www.mccollinsmedia.com/case-study/oakberry" target="_blank" className={`${styles.st3}`}>View Case Study</a>
                              {isSmallerThan1000 && (
                                <a href="javascript:void(0);" className={`${styles.st3} ${styles.black}`} onClick={() => swiperRef.current.swiper.slideNext()}>Next Case Study</a>
                              )}
                            </div>
                          </div>
                        </div>
                        {!isSmallerThan1000 && (
                            <div className={`${styles.Flex50}`}>
                              <div className={`${styles.ImgWr1}`}>
                                <Image
                                  alt="McCollins Media"
                                  src="/lp/c1.jpg"
                                  width={"493px"}
                                  height={"509px"}
                                  layout="responsive"
                                />
                              </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              </div>
            </div>
            {!isSmallerThan1000 && (
            <div className={`${styles.SliderGridBoxR}`}>
              <span
                className={`${styles.SliderBtn} ${styles.PrevBtn}`}
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <span className={`${styles.Ner2}`}>&nbsp;</span>
              </span>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientResults;
