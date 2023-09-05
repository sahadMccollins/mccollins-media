
import React from "react";
const MainBanner1 = () => {
    return(
        <div className="VideoBanner">
            

            <div className="image-background">&nbsp;</div>
            <div className="video-background">
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
            <div className="image-title">
                <div className="widthFull">
                    <div className="container">Ijas</div>
                </div>
            </div>
        </div>
    )
}
export default MainBanner1;