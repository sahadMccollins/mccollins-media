import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/landingPage.module.scss";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
const OurApproachtoSEO = () => {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [ToggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getActiveClass = (index, className) => {
    ToggleState === index ? className : "";
  };
  return (
    <div className="WebPortfolio pd-common bg-4 OurApMob">
      <div className={`icontainer`}>
        <div className={`rowBox1 Ar1 ${styles.Style1}`}>
          <div class="rowBox1L">
            <div className="St12">SEO</div>
            <div class="T3">Our approach to SEO</div>
          </div>
          <div className={`rowBox1R ${styles.full}`}>
            <div class="T4">
              Our Five - step process to SEO ensures that your business gets the
              most out of our services. Although, when it comes to SEO, every
              business has its own unique set of Challenges, our decade - long
              experience has indicate that the five - step process will result
              in long term success thanks to the continuous stream Of high
              converting organic traffic.
            </div>
          </div>
        </div>
        {!isSmallerThan1000 && (
          <div>
            <div className={`${styles.TabWrp}`}>
              <div className={`${styles.TabBox}`}>
                <div className={`${styles.TabItem}`}>
                  <div
                    className={`iconSt1 ${styles.TabRound} ${
                      ToggleState === 1 ? "active" : ""
                    }`}
                    onClick={() => toggleTab(1)}
                    onMouseEnter={() => toggleTab(1)}
                  >
                    <div className={`${styles.TabRoundIcon} ${styles.icon2}`}>
                      &nbsp;
                    </div>
                  </div>
                </div>
                <div className={`${styles.TabItem}`}>
                  <div
                    className={`iconSt1 ${styles.TabRound} ${
                      ToggleState === 2 ? "active" : ""
                    }`}
                    onClick={() => toggleTab(2)}
                    onMouseEnter={() => toggleTab(2)}
                  >
                    <div className={`${styles.TabRoundIcon} ${styles.icon5}`}>
                      &nbsp;
                    </div>
                  </div>
                </div>
                <div className={`${styles.TabItem}`}>
                  <div
                    className={`iconSt1 ${styles.TabRound} ${
                      ToggleState === 3 ? "active" : ""
                    }`}
                    onClick={() => toggleTab(3)}
                    onMouseEnter={() => toggleTab(3)}
                  >
                    <div className={`${styles.TabRoundIcon} ${styles.icon4}`}>
                      &nbsp;
                    </div>
                  </div>
                </div>
                <div className={`${styles.TabItem}`}>
                  <div
                    className={`iconSt1 ${styles.TabRound} ${
                      ToggleState === 4 ? "active" : ""
                    }`}
                    onClick={() => toggleTab(4)}
                    onMouseEnter={() => toggleTab(4)}
                  >
                    <div className={`${styles.TabRoundIcon} ${styles.icon3}`}>
                      &nbsp;
                    </div>
                  </div>
                </div>
                <div className={`${styles.TabItem}`}>
                  <div
                    className={`iconSt1 ${styles.TabRound} ${
                      ToggleState === 5 ? "active" : ""
                    }`}
                    onClick={() => toggleTab(5)}
                    onMouseEnter={() => toggleTab(5)}
                  >
                    <div className={`${styles.TabRoundIcon} ${styles.icon1}`}>
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={`AccrRowWrap ${styles.MobAccordionWrap} ${ToggleState === 1 ? "active" : ""}`}>
          {isSmallerThan1000 && (
            <div
              className={`${styles.AccordionItem} MobAccordionItem`}
              onClick={() => toggleTab(1)}
            >
              <div className={`${styles.AccordionFlex1}`}>
                <div className={`${styles.AccordionFlex1Left} ${styles.color1}`}>1</div>
                <div className={`${styles.AccordionFlex1Right}`}>Custom Strategy Building</div>
              </div>
            </div>
          )}
          {ToggleState === 1 && (
            <div className={`${styles.TabContentWrap} AccordionContent`}>
              <div className={`${styles.TabContent}`}>
                <div className={`${styles.TabContentFlex}`}>
                  <div className={`${styles.TabContentItem}`}>
                    <Image
                      src="/a1.png"
                      layout="responsive"
                      width={"623"}
                      height={"461"}
                      priority={true}
                      className=""
                    />
                  </div>
                  <div className={`${styles.TabContentItem}`}>
                    <div className={`${styles.TabContentBox}`}>
                      <div className={`${styles.TabT1}`}>
                        Custom Strategy Building
                      </div>
                      <div className={`${styles.TabT2}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                      </div>
                      <div className={`${styles.PointBoxWrp}`}>
                        <div className={`${styles.PointBoxFlex}`}>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Project Brief
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define client information & Business goals
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Keyword Research
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define potential target keywords
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Seo Audit
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Create a current baseline for SEO
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Competitive Analysis{" "}
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define SEO competitors
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.BannerBtn2}`}>
                        <Link href="#contactnow" scroll={false}>
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`AccrRowWrap ${styles.MobAccordionWrap} ${ToggleState === 2 ? "active" : ""}`}>
          {isSmallerThan1000 && (
            <div
              className={`${styles.AccordionItem} MobAccordionItem`}
              onClick={() => toggleTab(2)}
            >
              <div className={`${styles.AccordionFlex1}`}>
                <div className={`${styles.AccordionFlex1Left} ${styles.color2}`}>2</div>
                <div className={`${styles.AccordionFlex1Right}`}>Custom Strategy Building</div>
              </div>
            </div>
          )}
          {ToggleState === 2 && (
            <div className={`${styles.TabContentWrap} AccordionContent`}>
              <div className={`${styles.TabContent}`}>
                <div className={`${styles.TabContentFlex}`}>
                  <div className={`${styles.TabContentItem}`}>
                    <Image
                      src="/a1.png"
                      layout="responsive"
                      width={"623"}
                      height={"461"}
                      priority={true}
                      className=""
                    />
                  </div>
                  <div className={`${styles.TabContentItem}`}>
                    <div className={`${styles.TabContentBox}`}>
                      <div className={`${styles.TabT1}`}>
                        Custom Strategy Building 2
                      </div>
                      <div className={`${styles.TabT2}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                      </div>
                      <div className={`${styles.PointBoxWrp}`}>
                        <div className={`${styles.PointBoxFlex}`}>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Project Brief
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define client information & Business goals
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Keyword Research
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define potential target keywords
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Seo Audit
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Create a current baseline for SEO
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Competitive Analysis{" "}
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define SEO competitors
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.BannerBtn2}`}>
                        <Link href="#contactnow" scroll={false}>
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`AccrRowWrap ${styles.MobAccordionWrap} ${ToggleState === 3 ? "active" : ""}`}>
          {isSmallerThan1000 && (
            <div
              className={`${styles.AccordionItem} MobAccordionItem`}
              onClick={() => toggleTab(3)}
              
            >
              <div className={`${styles.AccordionFlex1}`}>
                <div className={`${styles.AccordionFlex1Left} ${styles.color2}`}>3</div>
                <div className={`${styles.AccordionFlex1Right}`}>Custom Strategy Building</div>
              </div>
            </div>
          )}
          {ToggleState === 3 && (
            <div className={`${styles.TabContentWrap} AccordionContent`}>
              <div className={`${styles.TabContent}`}>
                <div className={`${styles.TabContentFlex}`}>
                  <div className={`${styles.TabContentItem}`}>
                    <Image
                      src="/a1.png"
                      layout="responsive"
                      width={"623"}
                      height={"461"}
                      priority={true}
                      className=""
                    />
                  </div>
                  <div className={`${styles.TabContentItem}`}>
                    <div className={`${styles.TabContentBox}`}>
                      <div className={`${styles.TabT1}`}>
                        Custom Strategy Building 3
                      </div>
                      <div className={`${styles.TabT2}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                      </div>
                      <div className={`${styles.PointBoxWrp}`}>
                        <div className={`${styles.PointBoxFlex}`}>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Project Brief
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define client information & Business goals
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Keyword Research
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define potential target keywords
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Seo Audit
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Create a current baseline for SEO
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Competitive Analysis{" "}
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define SEO competitors
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.BannerBtn2}`}>
                        <Link href="#contactnow" scroll={false}>
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`AccrRowWrap ${styles.MobAccordionWrap} ${ToggleState === 4 ? "active" : ""}`}>
          {isSmallerThan1000 && (
            <div
              className={`${styles.AccordionItem} MobAccordionItem`}
              onClick={() => toggleTab(4)}
            >
              <div className={`${styles.AccordionFlex1}`}>
                <div className={`${styles.AccordionFlex1Left} ${styles.color2}`}>4</div>
                <div className={`${styles.AccordionFlex1Right}`}>Custom Strategy Building</div>
              </div>
            </div>
          )}
          {ToggleState === 4 && (
            <div className={`${styles.TabContentWrap} AccordionContent`}>
              <div className={`${styles.TabContent}`}>
                <div className={`${styles.TabContentFlex}`}>
                  <div className={`${styles.TabContentItem}`}>
                    <Image
                      src="/a1.png"
                      layout="responsive"
                      width={"623"}
                      height={"461"}
                      priority={true}
                      className=""
                    />
                  </div>
                  <div className={`${styles.TabContentItem}`}>
                    <div className={`${styles.TabContentBox}`}>
                      <div className={`${styles.TabT1}`}>
                        Custom Strategy Building 4
                      </div>
                      <div className={`${styles.TabT2}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                      </div>
                      <div className={`${styles.PointBoxWrp}`}>
                        <div className={`${styles.PointBoxFlex}`}>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Project Brief
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define client information & Business goals
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Keyword Research
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define potential target keywords
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Seo Audit
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Create a current baseline for SEO
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Competitive Analysis{" "}
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define SEO competitors
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.BannerBtn2}`}>
                        <Link href="#contactnow" scroll={false}>
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`AccrRowWrap ${styles.MobAccordionWrap} ${ToggleState === 5 ? "active" : ""}`}>
          {isSmallerThan1000 && (
            <div
              className={`${styles.AccordionItem} MobAccordionItem`}
              onClick={() => toggleTab(5)}
            >
              <div className={`${styles.AccordionFlex1}`}>
                <div className={`${styles.AccordionFlex1Left} ${styles.color2}`}>5</div>
                <div className={`${styles.AccordionFlex1Right}`}>Custom Strategy Building</div>
              </div>
            </div>
          )}
          {ToggleState === 5 && (
            <div className={`${styles.TabContentWrap} AccordionContent`}>
              <div className={`${styles.TabContent}`}>
                <div className={`${styles.TabContentFlex}`}>
                  <div className={`${styles.TabContentItem}`}>
                    <Image
                      src="/a1.png"
                      layout="responsive"
                      width={"623"}
                      height={"461"}
                      priority={true}
                      className=""
                    />
                  </div>
                  <div className={`${styles.TabContentItem}`}>
                    <div className={`${styles.TabContentBox}`}>
                      <div className={`${styles.TabT1}`}>
                        Custom Strategy Building
                      </div>
                      <div className={`${styles.TabT2}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                      </div>
                      <div className={`${styles.PointBoxWrp}`}>
                        <div className={`${styles.PointBoxFlex}`}>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Project Brief
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define client information & Business goals
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Keyword Research
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define potential target keywords
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Seo Audit
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Create a current baseline for SEO
                          </div>
                          <div
                            className={`${styles.PointBoxItem} ${styles.PointBoxItemBold}`}
                          >
                            Competitive Analysis{" "}
                          </div>
                          <div className={`${styles.PointBoxItem}`}>
                            Define SEO competitors
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.BannerBtn2}`}>
                        <Link href="#contactnow" scroll={false}>
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

       
      </div>
    </div>
  );
};
export default OurApproachtoSEO;
