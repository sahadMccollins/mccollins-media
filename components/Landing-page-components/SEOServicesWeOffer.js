import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/landingPage.module.scss";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
const SeoServicesWeOffer = () => {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [ToggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getActiveClass = (index, className) => {
    ToggleState === index ? className : "";
  };
  return (
    <div
      className={`ServicesWeOfferWrap pd-common ${styles.ServicesWeOfferWrap}`}
    >
      <div className={`icontainer ${styles.container}`}>
        <div className={`rowBox1 Ar1 ${styles.Style1}`}>
          <div class="rowBox1L">
            <div className="St12">Services</div>
            <div class="T3">SEO Services We Offer</div>
            <div className="T11">
              Want to generate more traffic to your website? We know how to
              drive long term growth
            </div>
          </div>
          <div className={`rowBox1R ${styles.full}`}>
            <div class="T4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
        </div>
        <div className={`${styles.ServicesGridWrap}`}>
          <div className={`${styles.ServicesGrids}`}>
            <div className={`${styles.ServicesGrid}`}>
              <Link href="#contactnow" scroll={false}>
                <div className={`${styles.ServicesGridItem}`}>
                  <div className={`${styles.ServicesGridItem1}`}>
                    <span
                      className={`${styles.GridItem1Icon} ${styles.GridItem1Icon1}`}
                    >
                      &nbsp;
                    </span>
                  </div>
                  <div className={`${styles.ServicesGridItem2}`}>
                    Global SEO
                  </div>
                  <div className={`${styles.ServicesGridItem3}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </Link>
            </div>
            <div className={`${styles.ServicesGrid}`}>
              <Link href="#contactnow" scroll={false}>
                <div className={`${styles.ServicesGridItem}`}>
                  <div className={`${styles.ServicesGridItem1}`}>
                    <span
                      className={`${styles.GridItem1Icon} ${styles.GridItem1Icon7}`}
                    >
                      &nbsp;
                    </span>
                  </div>
                  <div className={`${styles.ServicesGridItem2}`}>Local SEO</div>
                  <div className={`${styles.ServicesGridItem3}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </Link>
            </div>
            <div className={`${styles.ServicesGrid}`}>
              <Link href="#contactnow" scroll={false}>
                <div className={`${styles.ServicesGridItem}`}>
                  <div className={`${styles.ServicesGridItem1}`}>
                    <span
                      className={`${styles.GridItem1Icon} ${styles.GridItem1Icon6}`}
                    >
                      &nbsp;
                    </span>
                  </div>
                  <div className={`${styles.ServicesGridItem2}`}>
                    National SEO
                  </div>
                  <div className={`${styles.ServicesGridItem3}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </Link>
            </div>
            <div className={`${styles.ServicesGrid}`}>
              <Link href="#contactnow" scroll={false}>
                <div className={`${styles.ServicesGridItem}`}>
                  <div className={`${styles.ServicesGridItem1}`}>
                    <span
                      className={`${styles.GridItem1Icon} ${styles.GridItem1Icon5}`}
                    >
                      &nbsp;
                    </span>
                  </div>
                  <div className={`${styles.ServicesGridItem2}`}>
                    E-Commerce Marketing
                  </div>
                  <div className={`${styles.ServicesGridItem3}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </Link>
            </div>
            <div className={`${styles.ServicesGrid}`}>
              <Link href="#contactnow" scroll={false}>
                <div className={`${styles.ServicesGridItem}`}>
                  <div className={`${styles.ServicesGridItem1}`}>
                    <span
                      className={`${styles.GridItem1Icon} ${styles.GridItem1Icon2}`}
                    >
                      &nbsp;
                    </span>
                  </div>
                  <div className={`${styles.ServicesGridItem2}`}>
                    App Store Optimisarion
                  </div>
                  <div className={`${styles.ServicesGridItem3}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </Link>
            </div>
            <div className={`${styles.ServicesGrid}`}>
              <Link href="#contactnow" scroll={false}>
                <div className={`${styles.ServicesGridItem}`}>
                  <div className={`${styles.ServicesGridItem1}`}>
                    <span
                      className={`${styles.GridItem1Icon} ${styles.GridItem1Icon3}`}
                    >
                      &nbsp;
                    </span>
                  </div>
                  <div className={`${styles.ServicesGridItem2}`}>
                    Mobile app marketing
                  </div>
                  <div className={`${styles.ServicesGridItem3}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </Link>
            </div>
            <div className={`${styles.ServicesGrid}`}>
              <Link href="#contactnow" scroll={false}>
                <div className={`${styles.ServicesGridItem}`}>
                  <div className={`${styles.ServicesGridItem1}`}>
                    <span
                      className={`${styles.GridItem1Icon} ${styles.GridItem1Icon4}`}
                    >
                      &nbsp;
                    </span>
                  </div>
                  <div className={`${styles.ServicesGridItem2}`}>
                    Guest Posting
                  </div>
                  <div className={`${styles.ServicesGridItem3}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </Link>
            </div>

            <div className={`${styles.ServicesGrid}`}>
              <Link href="#contactnow" scroll={false}>
                <div className={`${styles.ServicesGridItem}`}>
                  <div className={`${styles.ServicesGridItem1}`}>
                    <span
                      className={`${styles.GridItem1Icon} ${styles.GridItem1Icon8}`}
                    >
                      &nbsp;
                    </span>
                  </div>
                  <div className={`${styles.ServicesGridItem2}`}>
                    Content Marketing
                  </div>
                  <div className={`${styles.ServicesGridItem3}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
            <div  className={`BtnWrp ${styles.BtnWrap}`}>
                <Link href="#contactnow" scroll={false}>Request A Free Quote</Link>
                <a href="tel:">Talk To Our Expert</a>
            </div>
        </div>
      </div>
    </div>
  );
};
export default SeoServicesWeOffer;
