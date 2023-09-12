import React from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
const LpGrid = () => {
  return (
    <div className="LpGridBoxWrp">
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
              <Image
                src="/lp/c1-min.png"
                layout="responsive"
                width={"796"}
                height={"549"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="LpGridBox pd-common bg2">
        <div className="icontainer">
          <div className="Row2">
          <div className="c555">
              <Image
                src="/lp/c2-min.png"
                layout="responsive"
                width={"700"}
                height={"761"}
                priority={true}
              />
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
              <Image
                src="/lp/c3-min.png"
                layout="responsive"
                width={"700"}
                height={"462"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="LpGridBox pd-common bg2 padExt">
        <div className="icontainer">
          <div className="Row2">
            <div className="c5555">
                <div className="TExtHeaderWrap">
                    <div className="TExtHeader">
                        <div className="TExtHeaderL">
                            4
                        </div>
                        <div className="TExtHeaderR">Tailored Websites for Your Unique Needs</div>
                    </div>
                </div>
                <div className="T81">Tired of One-Size-Fits-All Websites? Generic website templates can't effectively showcase what sets your business apart. Don't settle for mediocrity when you can have a website that's as unique as your brand.</div>
               
            </div>
            <div className="c5555">
                <div className="TExtHeaderWrap">
                    <div className="TExtHeader">
                        <div className="TExtHeaderL">
                            5
                        </div>
                        <div className="TExtHeaderR">Mobile-First Website Development</div>
                    </div>
                </div>
                <div className="T81">Our mobile-first website development services prioritize the mobile user experience. We ensure your website is designed and optimized for smartphones and tablets, with a focus on speed, functionality, and user-friendliness</div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LpGrid;
