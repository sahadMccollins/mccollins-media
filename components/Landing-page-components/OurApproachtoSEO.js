import React, { useState } from "react";
import Image from "next/image";
import Fancybox from "../Fancybox";
import styles from "../../styles/landingPage.module.scss";
const OurApproachtoSEO = () => {
    const [ToggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
    const getActiveClass = (index, className) => {
      ToggleState === index ? className : "";
    };
  return (
    <div className="WebPortfolio pd-common bg-4">
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
        <div>
            <div className={`${styles.TabWrp}`}>
                <div className={`${styles.TabBox}`}>
                    <div className={`${styles.TabItem}`}>
                        <div className={`iconSt1 ${styles.TabRound} ${ToggleState===1? "active":""}`} onClick={() => toggleTab(1)}>
                            <div className={`${styles.TabRoundIcon} ${styles.icon2}`}>&nbsp;</div>
                        </div>
                    </div>
                    <div className={`${styles.TabItem}`}>
                        <div className={`iconSt1 ${styles.TabRound} ${ToggleState===2? "active":""}`} onClick={() => toggleTab(2)}>
                        <div className={`${styles.TabRoundIcon} ${styles.icon5}`}>&nbsp;</div>
                        </div>
                    </div>
                    <div className={`${styles.TabItem}`}>
                        <div className={`iconSt1 ${styles.TabRound} ${ToggleState===3? "active":""}`} onClick={() => toggleTab(3)}>
                        <div className={`${styles.TabRoundIcon} ${styles.icon4}`}>&nbsp;</div>
                        </div>
                    </div>
                    <div className={`${styles.TabItem}`}>
                        <div className={`iconSt1 ${styles.TabRound} ${ToggleState===4? "active":""}`} onClick={() => toggleTab(4)}>
                        <div className={`${styles.TabRoundIcon} ${styles.icon3}`}>&nbsp;</div>
                        </div>
                    </div>
                    <div className={`${styles.TabItem}`}>
                        <div className={`iconSt1 ${styles.TabRound} ${ToggleState===5? "active":""}`} onClick={() => toggleTab(5)}>
                        <div className={`${styles.TabRoundIcon} ${styles.icon1}`}>&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default OurApproachtoSEO;
