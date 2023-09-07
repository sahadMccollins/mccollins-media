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
                        <div className="TExtHeaderR">Corporate Websites</div>
                    </div>
                </div>
                <div className="T8">Unlock the potential of your corporate identity with our expertly tailored websites. Our designs reflect your unique brand and values, offering seamless user experiences across all devices.</div>
                
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
                        <div className="TExtHeaderR">E-Commerce Development </div>
                    </div>
                </div>
                <div className="T8">Our strategic approach to design and functionality ensures a seamless shopping experience for your customers, resulting in higher conversion rates and increased revenue</div>
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
                        <div className="TExtHeaderR">Application Development</div>
                    </div>
                </div>
                <div className="T8">Revolutionize your ideas into impactful apps with us. Our team excels in crafting user-centric mobile and web applications that drive results. From concept to launch, we ensure your app stands out and delivers</div>
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
                        <div className="TExtHeaderR">Tailored Websites for Your Unique Needs</div>
                    </div>
                </div>
                <div className="T81">Mobile-first development is our foundation. We prioritize responsive design, delivering seamless user experiences on all devices. Engage and convert your audience across the mobile landscape with us</div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LpGrid;
