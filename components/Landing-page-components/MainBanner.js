
import React from "react";
const MainBanner1 = () => {
    return(
        <div>
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
        </div>
    )
}
export default MainBanner1;