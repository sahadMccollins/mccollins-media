import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const FAQ1 = ({ faqs = [] }) => {
  return (
    <div className="ClientPortfolio pd-common-container">
      <div className="icontainer">
        <div className="HdSt2">
          <div className="HdSt2T1">Frequently Asked Questions</div>
          <div className="HdSt2T3">
            <span>&nbsp;</span>
          </div>
        </div>

        <div className="AccodionBox1">
          <Accordion allowToggle>
            {faqs.map((faq, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <div className="fullWidth1">
                      <div className="AccordHeader">
                        <div className="AccordHeaderL">
                          <div>
                            <span>{index + 1}</span>
                          </div>
                        </div>
                        <div className="AccordHeaderM">{faq.question}</div>
                        <div className="AccordHeaderR">
                          <AccordionIcon />
                        </div>
                      </div>
                    </div>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ1;
