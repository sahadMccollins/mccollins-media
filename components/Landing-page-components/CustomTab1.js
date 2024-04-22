import React from "react";
import Image from "next/image";
const CustomTab1 = (props) => {
  return (
    <div className="CustomTab1 pd-common">
      <div className="icontainer">
        <div class="HdSt2">
          <div class="HdSt2T1">Our Services</div>
          <div class="HdSt2T2">
            Transforming digital experiences with immersive technology, stunning
            visuals, and innovation.
          </div>
          <div class="HdSt2T3">
            <span>&nbsp;</span>
          </div>
        </div>
        <div className="AccordBoxTp1">
          <div className="Accordion active">
            <div className="AccordionTitle">AR/VR/Metaverse</div>
            <div className="AccordionContent">
              <ul>
                <li>Augmented Reality</li>
                <li>Virtual Reality</li>
                <li>Metaverse</li>
                <li>AR Glasses</li>
                <li>Extended Reality</li>
              </ul>
            </div>
          </div>
          <div className="Accordion">
            <div className="AccordionTitle">Generative AI</div>
            <div className="AccordionContent">
              <ul>
                <li>AI Chatbot</li>
                <li>AI Photobooth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomTab1;
