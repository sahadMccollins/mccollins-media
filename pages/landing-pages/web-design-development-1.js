
import React, { useEffect, useRef } from "react";
import MainBanner1 from "../../components/Landing-page-components/MainBanner";
const LandingPage1 = () => {
    return(
        <div>
            <div>ijas</div>
            <video
          playsInline
          autoPlay
          loop
          muted
          width="100%"
          className="LpMainVideo"
          poster="/assets/image/servicePage/serviceAccordian.jpg"
        >
          <source src="/mccollins-media-video-compressed.mp4" type="video/mp4" />
        </video>
            <MainBanner1/>
        </div>
    )
}
export default LandingPage1;