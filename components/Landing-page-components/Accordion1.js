import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Accordion1 = () => {
  return (
    <div className="ClientPortfolio pd-common-container">
      <div className="icontainer">
        <div className="HdSt2">
          <div className="HdSt2T1">Freaquently Asked Questions</div>

          <div className="HdSt2T3">
            <span>&nbsp;</span>
          </div>
        </div>
        <div className="AccodionBox1">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <div className="fullWidth1">
                  <div className="AccordHeader">
                    <div className="AccordHeaderL">
                        <div>
                        <span>1</span>
                        </div>
                    </div>
                    <div className="AccordHeaderM">Is social media essential for my business?</div>
                    <div className="AccordHeaderR"><AccordionIcon /></div>
                  </div>
                  </div>
                  
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, social media is essential for visibility and engagement.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <div className="fullWidth1">
                  <div className="AccordHeader">
                    <div className="AccordHeaderL">
                        <div>
                        <span>2</span>
                        </div>
                    </div>
                    <div className="AccordHeaderM">When can I expect results from social media marketing?</div>
                    <div className="AccordHeaderR"><AccordionIcon /></div>
                  </div>
                  </div>
                  
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              Results typically appear within 3-6 months.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <div className="fullWidth1">
                  <div className="AccordHeader">
                    <div className="AccordHeaderL">
                        <div>
                        <span>3</span>
                        </div>
                    </div>
                    <div className="AccordHeaderM">How quickly do you respond to community management inquiries?</div>
                    <div className="AccordHeaderR"><AccordionIcon /></div>
                  </div>
                  </div>
                  
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              We respond within 3/4 hours.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <div className="fullWidth1">
                  <div className="AccordHeader">
                    <div className="AccordHeaderL">
                        <div>
                        <span>4</span>
                        </div>
                    </div>
                    <div className="AccordHeaderM">How can I determine the best social media platforms for my business?</div>
                    <div className="AccordHeaderR"><AccordionIcon /></div>
                  </div>
                  </div>
                  
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              We analyze your target audience and business goals to recommend the platforms.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <div className="fullWidth1">
                  <div className="AccordHeader">
                    <div className="AccordHeaderL">
                        <div>
                        <span>5</span>
                        </div>
                    </div>
                    <div className="AccordHeaderM">Do you handle all content creation for my social media, or do I need to supply materials?</div>
                    <div className="AccordHeaderR"><AccordionIcon /></div>
                  </div>
                  </div>
                  
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              We create and curate all content for you.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <div className="fullWidth1">
                  <div className="AccordHeader">
                    <div className="AccordHeaderL">
                        <div>
                        <span>6</span>
                        </div>
                    </div>
                    <div className="AccordHeaderM"> Does your agency provide video production, and do you use in-house resources or external partners?</div>
                    <div className="AccordHeaderR"><AccordionIcon /></div>
                  </div>
                  </div>
                  
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              We produce videos using our in-house team.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <div className="fullWidth1">
                  <div className="AccordHeader">
                    <div className="AccordHeaderL">
                        <div>
                        <span>7</span>
                        </div>
                    </div>
                    <div className="AccordHeaderM">Why is hiring an agency more beneficial than an in-house employee?</div>
                    <div className="AccordHeaderR"><AccordionIcon /></div>
                  </div>
                  </div>
                  
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              Agencies offer specialized skills and broader expertise.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default Accordion1;
