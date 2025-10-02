import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import FadeUp from "./Motion/FadeUp";
import ZoomInWithBounce from "./Motion/ZoomInWithBounce";

const WebAccordion = () => {
  const router = useRouter();
  return (
    <Stack
      className="serviceAcc"
      bg={"#F7F7F7"}
      position="relative"
      style={{ marginTop: "0" }}
    >
      <Container maxWidth={"7xl"} pb="20">
        <Box
          position={"absolute"}
          right="30%"
          top={"30px"}
          zIndex="2"
          display={{ base: "none", md: "block" }}
        >
          <Image
            alt="McCollins Media"
            src="/assets/image/design/1.svg"
            width="150px"
            height="172px"
          />
        </Box>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          mt={10}
        >
          <Box width={{ base: "100%", lg: "50%" }}>
            <Accordion defaultIndex={[0]}>
              <FadeUp>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left" className="main-h3" display="flex">
                        <span
                          style={{
                            width: "30px",
                            background:
                              "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                          }}
                        ></span>
                        Corporate Website Development
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} width={{ base: "100%", sm: "80%" }}>
                    <Text>
                     Our corporate website development services unlock the potential of your corporate identity. Our expertly tailored websites are designed to reflect your unique brand and values, offering seamless user experiences across all devices
                      
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
              <FadeUp>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left" className="main-h3" display="flex">
                        <span
                          style={{
                            width: "30px",
                            background:
                              "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                          }}
                        ></span>
                       E-commerce Website Development
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                    Our E-commerce website development services follow a strategic approach to design and functionality, guaranteeing a seamless shopping experience for your customers. This results in higher conversion rates and increased revenue for your business
                     
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
              <FadeUp>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left" className="main-h3" display="flex">
                        <span
                          style={{
                            width: "30px",
                            background:
                              "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                          }}
                        ></span>
                       Lead Generation Funnel Development
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                     Our lead generation funnel development services are designed to empower your business with a steady stream of high-quality leads. Through a strategic approach to crafting, optimizing, and managing your lead generation funnels, we help you reach your target audience more efficiently and convert prospects into valuable customers.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
              <FadeUp>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left" className="main-h3" display="flex">
                        <span
                          style={{
                            width: "30px",
                            background:
                              "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                          }}
                        ></span>
                       Tailored Websites for Your Unique Needs
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      Tired of One-Size-Fits-All Websites? Generic website templates can't effectively showcase what sets your business apart. Don't settle for mediocrity when you can have a website that's as unique as your brand.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
              <FadeUp>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box textAlign="left" className="main-h3" display="flex">
                        <span
                          style={{
                            width: "30px",
                            background:
                              "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                          }}
                        ></span>
                       Mobile-First Website Development
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      Our mobile-first website development services prioritize the mobile user experience. We ensure your website is designed and optimized for smartphones and tablets, with a focus on speed, functionality, and user-friendliness
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
            </Accordion>
          </Box>

          <Box
            width={{ base: "100%", md: "50%" }}
            mt={{ base: "10", md: "0" }}
            alignSelf="center"
            position={"relative"}
          >
            <video
              controls
              preload="none"
              poster="/assets/image/servicePage/webShowcasePoster.jpg"
              style={{
                borderRadius: "15px",
                zIndex: "9",
                position: "relative",
              }}
            >
              <source
                src="/assets/cloudinaryBackup/WEBSITE_SHOWCASE_VIDEO_1_h7ntf6.mp4"
                type="video/mp4"
              />
            </video>
            <Box
              position={"absolute"}
              display={{ base: "none", md: "block" }}
              width="450px"
              height="300px"
              bg={"#FFDE11"}
              top="70px"
              right="-20px"
              zIndex={0}
              borderRadius="15px"
            ></Box>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default WebAccordion;
