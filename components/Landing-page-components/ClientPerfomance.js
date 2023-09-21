import React, { useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import dynamic from "next/dynamic";
import "../../node_modules/react-modal-video/css/modal-video.min.css";
import { useMediaQuery } from "@chakra-ui/react";

const ClientPerfomance = () => {
  const swiperRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  return (
    <div className="PerfomanceWrap pd-common-container">
      <div className="icontainer pt-0">
        <div className="PerfomanceGridWrap">
          <div className="perfomanceGrids irow">
            <div className="PrGridLeft">
              <div className="ImageWrp1">
                <Image
                  alt="McCollins Media"
                  src="/lp/result.png"
                  width={"102px"}
                  height={"479px"}
                />
              </div>
            </div>
            <div className="PrGridMiddle">
              <div className="PrGT1">
                3 Top performing Social Media case studies of our clients
              </div>
              <div className="Column3Row">
                        <div className="Column3">
                            <div className="PerfomanceGraphWrap color1">
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">1234567</div>
                                <div className="PerfomanceG2">Spend</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">7890123</div>
                                <div className="PerfomanceG2">Sales</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">8701</div>
                                <div className="PerfomanceG2">Orders</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">4.8X</div>
                                <div className="PerfomanceG2">Roas</div>
                            </div>
                            </div>
                        </div>
                        <div className="Column3">
                            <div className="PerfomanceGraphWrap color2">
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">1234567</div>
                                <div className="PerfomanceG2">Spend</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">7890123</div>
                                <div className="PerfomanceG2">Sales</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">8701</div>
                                <div className="PerfomanceG2">Orders</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">4.8X</div>
                                <div className="PerfomanceG2">Roas</div>
                            </div>
                            </div>
                        </div>
                        <div className="Column3">
                            <div className="PerfomanceGraphWrap color3">
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">1234567</div>
                                <div className="PerfomanceG2">Spend</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">7890123</div>
                                <div className="PerfomanceG2">Sales</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">8701</div>
                                <div className="PerfomanceG2">Orders</div>
                            </div>
                            <div className="PerfomanceG">
                                <div className="PerfomanceG1">4.8X</div>
                                <div className="PerfomanceG2">Roas</div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPerfomance;
