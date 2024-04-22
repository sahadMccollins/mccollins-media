import React, { useState } from "react";

const CustomTab1 = (props) => {
  const [activeAccordion, setActiveAccordion] = useState("AR/VR/Metaverse");

  const handleAccordionClick = (accordionTitle) => {
    setActiveAccordion(accordionTitle);
  };

  return (
    <div className="CustomTab1 pd-common">
      <div className="icontainer">
        <div className="HdSt2">
          <div className="HdSt2T1">Our Services</div>
          <div className="HdSt2T2">
            Transforming digital experiences with immersive technology, stunning
            visuals, and innovation.
          </div>
          <div className="HdSt2T3">
            <span>&nbsp;</span>
          </div>
        </div>
        <div className="AccordBoxTp1">
          <div
            className={`Accordion ${
              activeAccordion === "AR/VR/Metaverse" ? "active" : ""
            }`}
          >
            <div
              className="AccordionTitle"
              onClick={() => handleAccordionClick("AR/VR/Metaverse")}
            >
              AR/VR/Metaverse
            </div>
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
          <div
            className={`Accordion ${
              activeAccordion === "Generative AI" ? "active" : ""
            }`}
          >
            <div
              className="AccordionTitle"
              onClick={() => handleAccordionClick("Generative AI")}
            >
              Generative AI
            </div>
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
