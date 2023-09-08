import React from "react";
import Image from "next/image";
const WebPortfolio = () => {
  return (
    <div className="WebPortfolio pd-common bg-3">
      <div className="icontainer">
        <div className="HdStyle1">
          <div className="Hd1">Businesses we have empowered digitally!</div>
          <div className="Hd2">
          Over the decade we have worked on some exciting web projects from Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia. Have a look at some of our work
          </div>
          <div className="Hd3">
            <span>&nbsp;</span>
          </div>
        </div>
        <div className="PortfolioBoxWrp">
          <div className="PortFolioBox">
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/a1.jpg"
                layout="responsive"
                width={"810"}
                height={"514"}
                priority={true}
              />
              <div className="ItemName">Doors Freestyle Grill </div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/a2.jpg"
                layout="responsive"
                width={"810"}
                height={"514"}
                priority={true}
              />
              <div className="ItemName">Dubai International Hotel</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/a3.jpg"
                layout="responsive"
                width={"810"}
                height={"514"}
                priority={true}
              />
              <div className="ItemName">Cleaning Superstore</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/a4.jpg"
                layout="responsive"
                width={"810"}
                height={"514"}
                priority={true}
              />
              <div className="ItemName">Prowork</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/a5.jpg"
                layout="responsive"
                width={"810"}
                height={"514"}
                priority={true}
              />
              <div className="ItemName">77asia</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/a7.jpg"
                layout="responsive"
                width={"810"}
                height={"514"}
                priority={true}
              />
              <div className="ItemName">Zilli Dubai</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebPortfolio;
