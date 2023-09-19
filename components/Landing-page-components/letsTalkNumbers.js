import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/landingPage.module.scss";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
const LetsTalkNumbers = () => {
  return (
    <div className={`pd-common ${styles.LetsTalkBoxWrap}`}>
        <div className={`icontainer ${styles.container}`}>
            <div className={`GridBox50 ${styles.GridBox50}`}>
                <div className={`GridBox50c ${styles.GridBox50c}`}>
                <Image
                      src="/lp/numbers.jpg"
                      layout="responsive"
                      width={"645"}
                      height={"571"}
                      priority={true}
                      className=""
                    />
                </div>
                <div className={`GridBox50c ${styles.GridBox50c} ${styles.bgchange}`}>
                    <div className={`${styles.PadBox}`}>
                        <div className={`${styles.PadBoxT1}`}>Let’s Talk Numbers</div>
                        <div className={`${styles.PadBoxT2}`}>Experience The Mindset In Building Success</div>
                        <div className={`${styles.PadBoxT3}`}>To drive the expect results, it is vital to have a clear path and stay<br/> focused that will assist you in achieving your goals </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={` ${styles.NumbersBox1Wrap}`}>
                    <div className={` ${styles.NumbersBox1}`}>
                        <div className={`gridBg color1 ${styles.NumbersBox1Item} ${styles.color1}`}>
                            <div className={` ${styles.Box1ItemT1}`}>2L+</div>
                            <div className={` ${styles.Box1ItemT2}`}>Keyword Rank</div>
                        </div> 
                        <div className={`gridBg color2 ${styles.NumbersBox1Item} ${styles.color2}`}>
                            <div className={` ${styles.Box1ItemT1}`}>700+</div>
                            <div className={` ${styles.Box1ItemT2}`}>Project Successfully Completed </div>
                        </div> 
                        <div className={`gridBg color3 ${styles.NumbersBox1Item} ${styles.color3}`}>
                            <div className={` ${styles.Box1ItemT1}`}>5.5M</div>
                            <div className={` ${styles.Box1ItemT2}`}>Organic Traffic Generate</div>
                        </div> 
                        <div className={`gridBg color4 ${styles.NumbersBox1Item} ${styles.color4}`}>
                            <div className={` ${styles.Box1ItemT1}`}>1281</div>
                            <div className={` ${styles.Box1ItemT2}`}>Happy Customers</div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default LetsTalkNumbers;
