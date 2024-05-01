import React, { useState } from "react";
import Image from "next/image";
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
        <div className="icontainer">
        <div className="row1">
            <div className="col-md-4 FtrClmn">
            <Image
                src="/cgi/k4.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
              <div class="TExtHeaderR">Augmented Reality</div>
              <div class="TExtHeaderR1">Enhance reality with digital overlays.</div>
            </div>
            <div className="col-md-4 FtrClmn">
            <Image
                src="/cgi/k7.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
              <div class="TExtHeaderR">Virtual Reality</div>
              <div class="TExtHeaderR1">Immerse in simulated environments.</div>
            </div>
            <div className="col-md-4 FtrClmn">
            <Image
                src="/cgi/k10.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
              <div class="TExtHeaderR">Metaverse</div>
              <div class="TExtHeaderR1">Connect in a shared digital universe.</div>
            </div>
            <div className="col-md-4 FtrClmn">
            <Image
                src="/cgi/k2.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
              <div class="TExtHeaderR">AR Glasses</div>
              <div class="TExtHeaderR1">Wearable devices for augmented reality experiences.</div>
            </div>
            <div className="col-md-4 FtrClmn">
            <Image
                src="/cgi/k3.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
              <div class="TExtHeaderR">Extended Reality</div>
              <div class="TExtHeaderR1">Merge virtual and physical worlds seamlessly.</div>
            </div>
            <div className="col-md-4 FtrClmn">
            <Image
                src="/cgi/k6.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
              <div class="TExtHeaderR">AI Chatbot</div>
              <div class="TExtHeaderR1">Intelligent virtual conversational assistant.</div>
            </div>
            <div className="col-md-4 FtrClmn">
            <Image
                src="/cgi/k5.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
              <div class="TExtHeaderR">AI Photobooth</div>
              <div class="TExtHeaderR1">Automated photo experience with AI enhancements.</div>
            </div>
          </div>
          
        </div>
        {/* <div className="AccordBoxTp1">
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
              activeAccordion === "GenerativeAI" ? "active" : ""
            }`}
          >
            <div
              className="AccordionTitle"
              onClick={() => handleAccordionClick("GenerativeAI")}
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
          
        </div> */}
      </div>
    </div>
  );
};

export default CustomTab1;
