import React from "react";
import Image from "next/image";
const AutoPlayVideo = (props) => {
  return (
    <div>
      <video
    playsInline
    autoPlay
    loop
    muted
    width="100%"
    className="LpMainVideo"
    poster="/assets/cloudinaryBackup/home-banner_bwes6c.webp"
  >
    <source
      src={props.src}
      type="video/mp4"
    />
  </video>
    </div>
    
  );
};
export default AutoPlayVideo;
