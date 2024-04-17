import { useState, React, useRef, useEffect } from "react";

const CgiVideoAutoplay = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play();
      }
    };

    // Attach the interaction event listener to the video element
    if (videoRef.current) {
      videoRef.current.addEventListener("click", handleInteraction);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      if (videoRef.current) {
        videoRef.current.removeEventListener("click", handleInteraction);
      }
    };
  }, []);
  return (
    <div className="VideoWrAP">
      <video autoPlay muted loop playsInline>
        <source src={props.src1} type="video/mp4" />
      </video>
    </div>
  );
};
export default CgiVideoAutoplay;
