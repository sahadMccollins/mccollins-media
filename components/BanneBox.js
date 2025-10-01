import { useState, React, useEffect } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";



const BannerBox = (props) => {

  const isDesktop = useMediaQuery("(min-width: 960px)");


  return (
    <div className="HeroWrp position-relative bg-theme">
      <div>
        {isDesktop && (
          <Image
            src={props.Banner}
            layout="responsive"
            width={"1440"}
            height={"900"}
            priority={true}
            className="MainBanner DImage"
          />
        )}
        {!isDesktop && (
          <Image
            src={props.MobileBanner}
            layout="responsive"
            width={"884"}
            height={"1185"}
            priority={true}
            className="MainBanner DImage"
          />
        )}

     
      </div>
    </div>
  );
};

export default BannerBox;
