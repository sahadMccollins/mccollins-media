import React from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
const LpGrid1 = () => {
  return (
    <div className="LpGridBoxWrp LpGridBoxWrp1">
      <div className="LpGridBox pd-common ">
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
      </div>
     
      
    </div>
  );
};
export default LpGrid1;
