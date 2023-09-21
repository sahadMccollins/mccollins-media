import React from "react";
import Image from "next/image";
import "react-intl-tel-input/dist/main.css";
import { useDisclosure } from "@chakra-ui/react";
import styles from "../../styles/landingPage.module.scss";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const PerfomanceSevices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="PerfomanceServicesWrap pd-common">
      <div className="icontainer">
        <div class="rowBox1 Ar1 fullWidthRow">
          <div class="rowBox1L">
            <div className="St12">What We Offer</div>
            <div class="T3">The best solutions for your Business</div>
          </div>
          <div class="rowBox1R">
            <div class="T4">
              From driving footfall to your location, to your website or
              tracking conversions, our team works towards making numbers
              matter. Be it Digital Media Buying - Social Media Ads or PPC
              Campaigns, we work in alignment with your KPIs.
            </div>
          </div>
        </div>
        <div className={`${styles.PrServicesBoxWrap}`}>
          <div className={`${styles.PrServicesBoxs}`}>
            <div className={`${styles.PrServicesBox}`}>
              <div
                className={`${styles.PrServicesBoxItem} ${styles.PrServicesBoxItem1}`}
                onClick={onOpen}
              >
                <div className={`${styles.PrServicesBoxItemHover}`}>
                  <div>
                    <div className={`${styles.PrServicesBoxItemT1}`}>
                      Campaign Planning
                    </div>
                    <div className={`${styles.PrServicesBoxItemT2}`}>
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.PrServicesBox}`}>
              <div
                className={`${styles.PrServicesBoxItem} ${styles.PrServicesBoxItem2}`}
                onClick={onOpen}
              >
                <div className={`${styles.PrServicesBoxItemHover}`}>
                  <div>
                    <div className={`${styles.PrServicesBoxItemT1}`}>
                      Keyword Research
                    </div>
                    <div className={`${styles.PrServicesBoxItemT2}`}>
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.PrServicesBox}`}>
              <div
                className={`${styles.PrServicesBoxItem} ${styles.PrServicesBoxItem3}`}
                onClick={onOpen}
              >
                <div className={`${styles.PrServicesBoxItemHover}`}>
                  <div>
                    <div className={`${styles.PrServicesBoxItemT1}`}>
                    Campaign
Setup
                    </div>
                    <div className={`${styles.PrServicesBoxItemT2}`}>
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.PrServicesBox}`}>
              <div
                className={`${styles.PrServicesBoxItem} ${styles.PrServicesBoxItem4}`}
                onClick={onOpen}
              >
                <div className={`${styles.PrServicesBoxItemHover}`}>
                  <div>
                    <div className={`${styles.PrServicesBoxItemT1}`}>
                    Ad Creation
                    </div>
                    <div className={`${styles.PrServicesBoxItemT2}`}>
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.PrServicesBox}`}>
              <div
                className={`${styles.PrServicesBoxItem} ${styles.PrServicesBoxItem5}`}
                onClick={onOpen}
              >
                <div className={`${styles.PrServicesBoxItemHover}`}>
                  <div>
                    <div className={`${styles.PrServicesBoxItemT1}`}>
                    Bid
Management
                    </div>
                    <div className={`${styles.PrServicesBoxItemT2}`}>
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.PrServicesBox}`}>
              <div
                className={`${styles.PrServicesBoxItem} ${styles.PrServicesBoxItem6}`}
                onClick={onOpen}
              >
                <div className={`${styles.PrServicesBoxItemHover}`}>
                  <div>
                    <div className={`${styles.PrServicesBoxItemT1}`}>
                    Performance
Monitoring
                    </div>
                    <div className={`${styles.PrServicesBoxItemT2}`}>
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.PrServicesBox}`}>
              <div
                className={`${styles.PrServicesBoxItem} ${styles.PrServicesBoxItem7}`}
                onClick={onOpen}
              >
                <div className={`${styles.PrServicesBoxItemHover}`}>
                  <div>
                    <div className={`${styles.PrServicesBoxItemT1}`}>
                    Optimization
                    </div>
                    <div className={`${styles.PrServicesBoxItemT2}`}>
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.PrServicesBox}`}>
              <div
                className={`${styles.PrServicesBoxItem} ${styles.PrServicesBoxItem8}`}
                onClick={onOpen}
              >
                <div className={`${styles.PrServicesBoxItemHover}`}>
                  <div>
                    <div className={`${styles.PrServicesBoxItemT1}`}>
                    Achieving Target
Audience
                    </div>
                    <div className={`${styles.PrServicesBoxItemT2}`}>
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Campaign Planning</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};
export default PerfomanceSevices;
