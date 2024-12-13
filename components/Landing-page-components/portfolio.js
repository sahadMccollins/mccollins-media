import React from "react";
import Image from "next/image";
import Fancybox from "../Fancybox";
const WebPortfolio = () => {
  return (
    <div className="WebPortfolio pd-common bg-3">
      <div className="icontainer">
        <div className="HdStyle1">
          <div className="Hd1">Businesses we have empowered digitally!</div>
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
        <div className="PortfolioBoxWrp">
          <Fancybox>
            <div className="PortFolioBox">
              <div className="PortFolioBoxItem">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/voss-w.mp4"
                  className="CommonLink1"
                >
                  <Image
                    src="/lp/a8.jpg"
                    layout="responsive"
                    width={"810"}
                    height={"514"}
                    priority={true}
                  />
                  <div className="ItemName">VOSS</div>
                </a>
              </div>
              {/* <div className="PortFolioBoxItem">
              <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/abaka.mp4"
                  className="CommonLink1"
                >
                <Image
                  src="/lp/a1.jpg"
                  layout="responsive"
                  width={"810"}
                  height={"514"}
                  priority={true}
                />
                <div className="ItemName">Doors Freestyle Grill </div>
                </a>
              </div>
              <div className="PortFolioBoxItem">
              <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/abaka.mp4"
                  className="CommonLink1"
                >
                <Image
                  src="/lp/a2.jpg"
                  layout="responsive"
                  width={"810"}
                  height={"514"}
                  priority={true}
                />
                <div className="ItemName">Dubai International Hotel</div>
                </a>
              </div>
              <div className="PortFolioBoxItem">
              <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/abaka.mp4"
                  className="CommonLink1"
                >
                <Image
                  src="/lp/a3.jpg"
                  layout="responsive"
                  width={"810"}
                  height={"514"}
                  priority={true}
                />
                <div className="ItemName">Cleaning Superstore</div>
                </a>
              </div> */}

              <div className="PortFolioBoxItem">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/asia.mp4"
                  className="CommonLink1"
                >
                  <Image
                    src="/lp/a5.jpg"
                    layout="responsive"
                    width={"810"}
                    height={"514"}
                    priority={true}
                  />
                  <div className="ItemName">77asia</div>
                </a>
              </div>
              <div className="PortFolioBoxItem">
                <a
                  data-fancybox="gallery"
                  style={{ position: "relative" }}
                  href="/zilli-w.mp4"
                  className="CommonLink1"
                >
                  <Image
                    src="/lp/a7.jpg"
                    layout="responsive"
                    width={"810"}
                    height={"514"}
                    priority={true}
                  />
                  <div className="ItemName">Zilli Dubai</div>
                </a>
              </div>
            </div>
          </Fancybox>
        </div>
      </div>
    </div>
  );
};
export default WebPortfolio;
