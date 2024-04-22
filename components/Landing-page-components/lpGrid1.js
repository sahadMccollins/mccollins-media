import React from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
const LpGrid1 = () => {
  return (
    <div className="LpGridBoxWrp LpGridBoxWrp1">
      <div className="LpGridBox pd-common bg1">
        <div className="icontainer">
          <div className="Row2">
            <div className="c5">
                <div className="TExtHeaderWrap">
                    <div className="TExtHeader">
                        <div className="TExtHeaderL">
                            1
                        </div>
                        <div className="TExtHeaderR">Corporate website development</div>
                    </div>
                </div>
                <div className="T8">Our corporate website development services unlock the potential of your corporate identity. Our expertly tailored websites are designed to reflect your unique brand and values, offering seamless user experiences across all devices</div>
                
            </div>
            <div className="c55">
             <div className="ImageWrp1">
             <Image
                src="/cgi/k1.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className="LpGridBox pd-common bg2">
        <div className="icontainer">
          <div className="Row2">
          <div className="c555">
          <div className="ImageWrp1">
          <Image
                src="/cgi/k2.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
             </div>
            </div>
            <div className="c5555">
                <div className="TExtHeaderWrap">
                    <div className="TExtHeader">
                        <div className="TExtHeaderL">
                            2
                        </div>
                        <div className="TExtHeaderR">E-commerce website development</div>
                    </div>
                </div>
                <div className="T8">Our E-commerce website development services follow a strategic approach to design and functionality, guaranteeing a seamless shopping experience for your customers. This results in higher conversion rates and increased revenue for your business</div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="LpGridBox pd-common bg1">
        <div className="icontainer">
          <div className="Row2">
            <div className="c5">
                <div className="TExtHeaderWrap">
                    <div className="TExtHeader">
                        <div className="TExtHeaderL">
                            3
                        </div>
                        <div className="TExtHeaderR">Lead Generation Funnel Development</div>
                    </div>
                </div>
                <div className="T8">Our lead generation funnel development services are designed to empower your business with a steady stream of high-quality leads. Through a strategic approach to crafting, optimizing, and managing your lead generation funnels, we help you reach your target audience more efficiently and convert prospects into valuable customers.</div>
            </div>
            <div className="c55">
            <div className="ImageWrp1">
            <Image
                src="/cgi/k3.jpg"
                layout="responsive"
                width={"1000"}
                height={"611"}
                priority={true}
              />
             </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default LpGrid1;
