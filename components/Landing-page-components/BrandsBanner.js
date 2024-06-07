import React from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useMediaQuery } from "@chakra-ui/react";
import Form2 from "./Form2";

const BrandsBanner = () => {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  return (
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
          poster="/assets/image/servicePage/designAndBrand.jpg"
        >
          <source src="/assets/cloudinaryBackup/BRANDING_-_z6r43b.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="image-title SEOTitleBox" id="contactnow">
        <div className="widthFull">
          <div className="icontainer">
            <div className="irow">
              <div className="icol-md-9">
                <div className="T1">
                brand development
                </div>
                <div className="T2">
                Brand identity is everything, and we bring in unimaginable creativity through brand execution, logo creation, website redesign, social media content creation, and more.
                </div>
                {!isSmallerThan1000 && (
                  <div className="BtnWrap1">
                    <a href="/contact" className="BtnSt1">
                      Get Your Free Proposals
                    </a>
                  </div>
                )}
                <div className="FtrBx1Wrp">
                  <div className="FtrBx1">
                    <div className="FtrBx1Item color1">
                      <div>
                        <div className="FtrBx1ItemT1">$2B</div>
                        <div className="FtrBx1ItemT2">
                          Billion revenue For our clients
                        </div>
                      </div>
                    </div>
                    <div className="FtrBx1Item color2">
                      <div>
                        <div className="FtrBx1ItemT1">30</div>
                        <div className="FtrBx1ItemT2">
                          Published Client wins
                        </div>
                      </div>
                    </div>
                    <div className="FtrBx1Item color3">
                      <div>
                        <div className="FtrBx1ItemT1">150+</div>
                        <div className="FtrBx1ItemT2">
                          5 - Star client Reviews{" "}
                        </div>
                      </div>
                    </div>
                    <div className="FtrBx1Item color4">
                      <div>
                        <div className="FtrBx1ItemT1">4</div>
                        <div className="FtrBx1ItemT2">
                          Agency of the Year awards
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icol-md-3 pd-top-20">
                <Form2/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandsBanner;
