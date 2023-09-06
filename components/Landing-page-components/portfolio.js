import React from "react";
import Image from "next/image";
const WebPortfolio = () => {
  return (
    <div className="WebPortfolio pd-common bg-3">
      <div className="icontainer">
        <div className="HdStyle1">
          <div className="Hd1">Businesses we have empowered digitally!</div>
          <div className="Hd2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
          <div className="Hd3">
            <span>&nbsp;</span>
          </div>
        </div>
        <div className="PortfolioBoxWrp">
          <div className="PortFolioBox">
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/p1.jpg"
                layout="responsive"
                width={"810"}
                height={"766"}
                priority={true}
              />
              <div className="ItemName">Pioneer</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/p2.jpg"
                layout="responsive"
                width={"810"}
                height={"766"}
                priority={true}
              />
              <div className="ItemName">Voss</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/p3.jpg"
                layout="responsive"
                width={"810"}
                height={"766"}
                priority={true}
              />
              <div className="ItemName">Snaidero Kitchen</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/p4.jpg"
                layout="responsive"
                width={"810"}
                height={"766"}
                priority={true}
              />
              <div className="ItemName">Dubai Freezone</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/p5.jpg"
                layout="responsive"
                width={"810"}
                height={"766"}
                priority={true}
              />
              <div className="ItemName">Modern Oman Bakery</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/p6.jpg"
                layout="responsive"
                width={"810"}
                height={"766"}
                priority={true}
              />
              <div className="ItemName">Midea</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/p7.jpg"
                layout="responsive"
                width={"810"}
                height={"766"}
                priority={true}
              />
              <div className="ItemName">Thoshiba</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/p8.jpg"
                layout="responsive"
                width={"810"}
                height={"766"}
                priority={true}
              />
              <div className="ItemName">RTA</div>
            </div>
            <div className="PortFolioBoxItem">
              <Image
                src="/lp/p9.jpg"
                layout="responsive"
                width={"810"}
                height={"766"}
                priority={true}
              />
              <div className="ItemName">Costa Coffee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebPortfolio;
