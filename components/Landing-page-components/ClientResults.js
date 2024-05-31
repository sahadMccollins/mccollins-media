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
          <div className="Hd1">Case Studies</div>
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
                                        src="/case/mob.png"
                                        width={"199px"}
                                        height={"139px"}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className={`${styles.flexAuto}`}>
                                    <div className={`${styles.LogoName} ${styles.color2}`}>
                                    Modern Oman Bakery 
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles.st11}`}>OBJECTIVE</div>
                            <div className={`${styles.st1}`}>Primary goal was to leverage digital marketing channels, specifically Google and Facebook campaigns,to increase sales and expand its customer base in Oman</div>
                            <div className={`${styles.st11}`}>CHALLENGE</div>
                            <div className={`${styles.st1}`}>Modern Oman Bakery struggled to boost sales in a competitive market, aiming to stand out and attract customers with unique offerings and stand out as the leader of this industry.</div>
                            <div className={`${styles.st11}`}>Strategy & Implementation</div>
                            <div className={`${styles.st1}`}>Utilize advanced targeting on Google and Facebook Ads to effectively reach the target audience. Narrow down demographics, interests, and behaviors for better ad targeting. Experiment with different criteria to find optimal audience segments. Implement lead nurturing strategies to engage potential students.</div>
                            <div>
                              <div className={`${styles.GridSt12}`}>
                                <div className={`${styles.GridSt12Flex}`}>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+222.37%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increased in Clicks</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+216.25%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increase in conversions</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+78.89%</div>
                                      <div className={`${styles.GridSt12T2}`}>Decreased In Cost Per Conversions</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <a href="#" className={`${styles.st3}`}>Contact Now</a>
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
                                  src="/case/c8.jpg"
                                  width={"394px"}
                                  height={"446px"}
                                  layout="responsive"
                                />
                              </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
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
                                        src="/case/r1.jpg"
                                        width={"250px"}
                                        height={"98px"}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className={`${styles.flexAuto}`}>
                                    <div className={`${styles.LogoName} ${styles.color2}`}>
                                    Richemont Master baker 
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles.st11}`}>OBJECTIVE</div>
                            <div className={`${styles.st1}`}>Drive enrollment to the Culinary Courses and get more leads to the UAE market.</div>
                            <div className={`${styles.st11}`}>CHALLENGE</div>
                            <div className={`${styles.st1}`}>Reach the right audience who have an interest in cooking Classes, Culinary Courses, and improving their cooking skills.</div>
                            <div className={`${styles.st11}`}>Strategy & Implementation</div>
                            <div className={`${styles.st1}`}>Utilize advanced targeting on Google and Facebook Ads to effectively reach the target audience. Narrow down demographics, interests, and behaviors for better ad targeting. Experiment with different criteria to find optimal audience segments. Implement lead nurturing strategies to engage potential students.</div>
                            <div>
                              <div className={`${styles.GridSt12}`}>
                                <div className={`${styles.GridSt12Flex}`}>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+49.39%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increased in Impressions</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+56.40%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increased in Clicks</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+379.97%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increase in conversions</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <a href="#" className={`${styles.st3}`}>Contact Now</a>
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
                                  src="/case/c9.jpg"
                                  width={"394px"}
                                  height={"446px"}
                                  layout="responsive"
                                />
                              </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
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
                                        src="/case/maison.jpg"
                                        width={"500px"}
                                        height={"69px"}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className={`${styles.flexAuto}`}>
                                    <div className={`${styles.LogoName} ${styles.color2}`}>
                                    Maison B more
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles.st11}`}>OBJECTIVE</div>
                            <div className={`${styles.st1}`}>Maison Bmore aimed to elevate its online presence and drive sales through targeted advertising, focusing on high-value products</div>
                            <div className={`${styles.st11}`}>CHALLENGE</div>
                            <div className={`${styles.st1}`}>Inconsistent results and sales due to a lack of effective marketing strategy.</div>
                            <div className={`${styles.st11}`}>Strategy & Implementation</div>
                            <div className={`${styles.st1}`}>Utilized Dynamic Search Ads and performance max campaigns across various ad units for efficient conversions.
Strategy & Implementation Utilized Dynamic Search Ads and performance max campaigns across various ad units for efficient conversions. Segmented ads by gender categories and employed diverse ad types for optimized campaign efficiency. Leveraged email marketing for strong retention and cross-selling to existing users.</div>
                            <div>
                              <div className={`${styles.GridSt12}`}>
                                <div className={`${styles.GridSt12Flex}`}>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+105%</div>
                                      <div className={`${styles.GridSt12T2}`}>Maison Bmore’s sales increased</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+14%</div>
                                      <div className={`${styles.GridSt12T2}`}>Conversion rates, with a 3.25 ROAS</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+378%</div>
                                      <div className={`${styles.GridSt12T2}`}>Notable lift in engagement rates</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <a href="#" className={`${styles.st3}`}>Contact Now</a>
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
                                  src="/case/c4.jpg"
                                  width={"394px"}
                                  height={"446px"}
                                  layout="responsive"
                                />
                              </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
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
                                        src="/case/heveya.png"
                                        width={"239px"}
                                        height={"74px"}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className={`${styles.flexAuto}`}>
                                    <div className={`${styles.LogoName} ${styles.color2}`}>
                                    Heveya 
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles.st11}`}>OBJECTIVE</div>
                            <div className={`${styles.st1}`}>Heveya aimed to enter the UAE market, targeting eco-conscious consumers.</div>
                            <div className={`${styles.st11}`}>CHALLENGE</div>
                            <div className={`${styles.st1}`}>Exploring a fresh market, they lacked understanding of their audience's preferences regarding product sustainability and quality</div>
                            <div className={`${styles.st11}`}>Strategy & Implementation</div>
                            <div className={`${styles.st1}`}>We achieved an 84% performance boost for this brand in Q4'23 & Q1'24 with targeted keywords organized into themed ad groups.
Using both Search and Performance Max campaigns, we balanced cost per purchase with Search, while maximizing conversions with Performance Max.
We also analyzed past data to identify top-selling products and categories, launching a new Performance Max campaign with increased budget and feed enablement.</div>
                            <div>
                              <div className={`${styles.GridSt12}`}>
                                <div className={`${styles.GridSt12Flex}`}>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+17%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increase repeat purchase rate</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+108%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increased in AOV</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+28%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increase in conversions</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <a href="#" className={`${styles.st3}`}>Contact Now</a>
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
                                  src="/case/c5.jpg"
                                  width={"394px"}
                                  height={"446px"}
                                  layout="responsive"
                                />
                              </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
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
                                        src="/case/master.png"
                                        width={"284px"}
                                        height={"83px"}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className={`${styles.flexAuto}`}>
                                    <div className={`${styles.LogoName} ${styles.color2}`}>
                                    Master Baker Studio 
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles.st11}`}>OBJECTIVE</div>
                            <div className={`${styles.st1}`}>Masterbaker Studio aimed to boost website traffic and sales by targeting passionate bakers with premium ingredients like flour, chocolate, butters, and creams.</div>
                            <div className={`${styles.st11}`}>CHALLENGE</div>
                            <div className={`${styles.st1}`}>They are struggling to scale their brand online & increase the sales MoM consistently</div>
                            <div className={`${styles.st11}`}>Strategy & Implementation</div>
                            <div className={`${styles.st1}`}>To effectively display Masterbaker's extensive inventory, we utilized Dynamic Search Ads and Performance Max campaigns with Feed-only on Google Ads. Additionally, on Meta Ads, we employed Dynamic prospecting ads and catalog ads targeting lookalike and retargeting audiences.
To prevent ad fatigue, we regularly refreshed the first card creatives when frequency exceeded the standard benchmark threshold. Furthermore, implementing negative keywords and placements at the account level helped optimize spending and achieve lower cost per acquisition.</div>
                            <div>
                              <div className={`${styles.GridSt12}`}>
                                <div className={`${styles.GridSt12Flex}`}>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+32%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increased in conversion/purchase</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+14%</div>
                                      <div className={`${styles.GridSt12T2}`}>Conversion rates, with a 3.25 ROAS</div>
                                    </div>
                                  </div>
                                  <div className={`${styles.GridSt12Column}`}>
                                    <div>
                                      <div className={`${styles.GridSt12T1}`}>+28%</div>
                                      <div className={`${styles.GridSt12T2}`}>Increased in ROAS</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <a href="#" className={`${styles.st3}`}>Contact Now</a>
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
                                  src="/case/c6.jpg"
                                  width={"394px"}
                                  height={"446px"}
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
