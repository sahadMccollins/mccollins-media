import React from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
const LpGrid2 = () => {
  return (
    <div className="BrandBoxWrap">
      <div className="BrandBox mbg1 BrandBoxTp1">
        <div className="icontainer">
          <div className="mrow AlignCenter">
            <div className="mcol-md-6">
              <div className="BtTxt1">Core Branding Disciplines</div>
            </div>
            <div className="mcol-md-6">
              <Image
                src="/services/new/image1.jpg"
                layout="responsive"
                width={"872"}
                height={"989"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="BrandBox mbg1 BrandBoxTp2">
        <div className="icontainer">
          <div className="mrow AlignCenter">
            <div className="mcol-md-6 desktop">
              <Image
                src="/services/new/image2.jpg"
                layout="responsive"
                width={"894"}
                height={"864"}
                priority={true}
              />
            </div>
            <div className="mcol-md-6">
              <div className="BtTxt1">Brand Architecture and Positioning</div>
               <div className="BtTxt2">Define the structural DNA of your brand , ensuring clarity , hierarchy , and competitive distinction </div>
            </div>
            <div className="mcol-md-6 mob">
              <Image
                src="/services/new/image2.jpg"
                layout="responsive"
                width={"894"}
                height={"864"}
                priority={true}
              />
            </div>
            
          </div>
        </div>
      </div>
      <div className="BrandBox mbg1 BrandBoxTp1">
        <div className="icontainer">
          <div className="mrow AlignCenter">
            <div className="mcol-md-6">
              <div className="BtTxt1">Visual Identity Systems</div>
              <div className="BtTxt2">Logos , typefaces , & iconography developed as enduring symbols of recognition and influence.</div>
            </div>
            <div className="mcol-md-6">
              <Image
                src="/services/new/image3.jpg"
                layout="responsive"
                width={"897"}
                height={"900"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="BrandBox mbg1 BrandBoxTp2">
        <div className="icontainer">
          <div className="mrow AlignCenter">
            <div className="mcol-md-6 desktop">
              <Image
                src="/services/new/image4.jpg"
                layout="responsive"
                width={"882"}
                height={"894"}
                priority={true}
              />
            </div>
            <div className="mcol-md-6">
              <div className="BtTxt1">Comprehensive Brand Guidelines</div>
               <div className="BtTxt2">Codified frameworks that regulate brand tonality , visual language , and application across every channel</div>
            </div>
            <div className="mcol-md-6 mob">
              <Image
                src="/services/new/image4.jpg"
                layout="responsive"
                width={"882"}
                height={"894"}
                priority={true}
              />
            </div>
            
          </div>
        </div>
      </div>
      <div className="BrandBox mbg1 BrandBoxTp1">
        <div className="icontainer">
          <div className="mrow AlignCenter">
            <div className="mcol-md-6">
              <div className="BtTxt1">Packaging and Enviornmental Branding</div>
              <div className="BtTxt2">Design solutions that elevate shelf presence , retail experiences , and physical brand touchpoints.</div>
            </div>
            <div className="mcol-md-6">
              <Image
                src="/services/new/image5.jpg"
                layout="responsive"
                width={"930"}
                height={"942"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="BrandBox mbg1 BrandBoxTp2">
        <div className="icontainer">
          <div className="mrow AlignCenter">
            <div className="mcol-md-6 desktop">
              <Image
                src="/services/new/image6.jpg"
                layout="responsive"
                width={"993"}
                height={"918"}
                priority={true}
              />
            </div>
            <div className="mcol-md-6">
              <div className="BtTxt1">Campaign identity and integrated design systems</div>
               <div className="BtTxt2">Cohesive design narratives for product launches , brand campaigns , and omnichannel activations .</div>
            </div>
            <div className="mcol-md-6 mob">
              <Image
                src="/services/new/image6.jpg"
                layout="responsive"
                width={"993"}
                height={"918"}
                priority={true}
              />
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default LpGrid2;
