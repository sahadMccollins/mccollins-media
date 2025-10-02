import React from "react";
import Image from "next/image";
import Fancybox from "../Fancybox";
const BrandingCaseStudies = () => {
  return (
    <div className="WebPortfolio pd-common bg-3">
      <div className="icontainer">
        <div className="HdStyle1">
          {/* <div className="Hd1">Businesses we have empowered digitally!</div> */}
          <div className="Hd1">Case Studies</div>
          <div className="Hd2">
            Over the decade we have worked on some exciting web projects from
            Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority
            Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia.
            Have a look at some of our work
          </div>
          <div className="Hd3">
            <span>&nbsp;</span>
          </div>
        </div>
        <div className="PortfolioBoxWrp BrandingCaseStudies">
          <Fancybox>
            <div className="PortFolioBox">
              <div className="PortFolioBoxItem">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/services/branddevelopment/McC_BrandDev_Web_22.jpg"
                  className="CommonLink1"
                >
                  <Image
                    src="/services/pr/1.jpg"
                    layout="responsive"
                    width={"650"}
                    height={"260"}
                    priority={true}
                  />
                </a>
              </div>
              <div className="PortFolioBoxItem">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/services/branddevelopment/McC_BrandDev_Web_19.jpg"
                  className="CommonLink1"
                >
                  <Image
                    src="/services/pr/2.jpg"
                    layout="responsive"
                    width={"650"}
                    height={"260"}
                    priority={true}
                  />
                </a>
              </div>
              <div className="PortFolioBoxItem">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/services/branddevelopment/McC_BrandDev_Web_14.jpg"
                  className="CommonLink1"
                >
                  <Image
                    src="/services/pr/3.jpg"
                    layout="responsive"
                    width={"650"}
                    height={"260"}
                    priority={true}
                  />
                </a>
              </div>
              <div className="PortFolioBoxItem">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/services/branddevelopment/McC_BrandDev_Web_12-min.jpg"
                  className="CommonLink1"
                >
                  <Image
                    src="/services/pr/4.jpg"
                    layout="responsive"
                    width={"650"}
                    height={"260"}
                    priority={true}
                  />
                </a>
              </div>
              <div className="PortFolioBoxItem">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/services/branddevelopment/McC_BrandDev_Web_17.jpg"
                  className="CommonLink1"
                >
                  <Image
                    src="/services/pr/5.jpg"
                    layout="responsive"
                    width={"650"}
                    height={"260"}
                    priority={true}
                  />
                </a>
              </div>
            </div>
          </Fancybox>
        </div>
      </div>
    </div>
  );
};
export default BrandingCaseStudies;
