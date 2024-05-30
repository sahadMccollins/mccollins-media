import React from "react";
import Image from "next/image";

const OurPartners1 = () => {
  return (
    <div className="ClientPortfolio pd-common-container">
      <div className="icontainer">
        <div className="HdSt2">
          <div className="HdSt2T1">Our Partners</div>
          <div className="HdSt2T2">
            In an industry that emphasizes inputs, we promise to deliver
            outputs!
          </div>
          <div className="HdSt2T3">
            <span>&nbsp;</span>
          </div>
        </div>
        <div className="PortFolioWrp">
          <div className="Portfolios">
            <div className="PortfolioItem">
              <div className="imgWrap">
              <Image
                alt="McCollins Media"
                src="/assets/image/o1.jpg"
                width={"300px"}
                height={"101px"}
              />
              </div>
            </div>
            <div className="PortfolioItem">
              <div className="imgWrap">
              <Image
                alt="McCollins Media"
                src="/assets/image/o2.jpg"
                width={"300px"}
                height={"101px"}
              />
              </div>
            </div>
            <div className="PortfolioItem">
              <div className="imgWrap">
              <Image
                alt="McCollins Media"
                src="/assets/image/o3.jpg"
                width={"300px"}
                height={"101px"}
              />
              </div>
            </div>
            <div className="PortfolioItem">
              <div className="imgWrap">
              <Image
                alt="McCollins Media"
                src="/assets/image/o4.jpg"
                width={"300px"}
                height={"101px"}
              />
              </div>
            </div>
            <div className="PortfolioItem">
              <div className="imgWrap">
              <Image
                alt="McCollins Media"
                src="/assets/image/o5.jpg"
                width={"300px"}
                height={"101px"}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurPartners1;
