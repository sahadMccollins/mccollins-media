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
            Over the past decade, we have partnered with a wide range of brands on their brand development journeys—helping them shape identities, build trust, and create meaningful connections with their audiences. From strategy and design to storytelling and positioning, our work has empowered brands to stand out and grow stronger in competitive markets.
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
              <div className="PortFolioBoxItem d-none">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/services/branddevelopment/McC_BrandDev_Web_21.jpg"
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
                  href="/services/branddevelopment/McC_BrandDev_Web_16-min.jpg"
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
              <div className="PortFolioBoxItem d-none">
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
              <div className="PortFolioBoxItem d-none">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/services/branddevelopment/McC_BrandDev_Web_18-min.jpg"
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
