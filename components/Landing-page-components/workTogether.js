import React from "react";
import Image from "next/image";
const WorkTogether = () => {
  return (
    <div className="WorkTogether pd-common bg-3">
      <div className="icontainer">
        <div className="HdStyle1 st1">
          <div className="Hd1">Let’s Work Together</div>
          <div className="Hd3">
            <span>&nbsp;</span>
          </div>
          <div className="Hd2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
          
        </div>
        <div className="WorkStepWrap">
            <div className="WorkSteps">
                <div className="WorkStep">
                    <div>
                        <div className="WorkStepHeader "><span className="ic1"></span>WE DISCUSS</div>
                        <div className="WorkStepCnt">We’re a full-service digital marketing agency that hustles hard to makes users happy while infusing everything we do with the heart.</div>
                    </div>
                </div>
                <div className="WorkStep">
                    <div>
                        <div className="WorkStepHeader"><span className="ic2"></span>WE DEVELOP</div>
                        <div className="WorkStepCnt">We see beyond the insights and take you to the eye stand.</div>
                    </div>
                </div>
                <div className="WorkStep">
                    <div>
                        <div className="WorkStepHeader"><span className="ic3"></span>WE DELIVER</div>
                        <div className="WorkStepCnt">As a multifaceted digital marketing agency, we craft beautiful solutions that outdo business goals and garner recognition.</div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};
export default WorkTogether;
