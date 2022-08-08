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
} from "@chakra-ui/react";
import Image from "next/image";

const ServicePageAccordian = () => {
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
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "20px", sm: "26px", xl: "40px" }}
                      display="flex"
                    >
                      <span
                        style={{
                          width: "30px",
                          background:
                            "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                        }}
                      ></span>
                      website development
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} width={{ base: "100%", sm: "80%" }}>
                  Creating a digital outlet for your brand and driving leads via
                  the website. Focus on Mobile Websites is key. We develop
                  Bilingual websites for the GCC Market.
                  <br />
                  <Button
                    colorScheme="yellow"
                    background={"#FFDE11"}
                    borderRadius="20px"
                    color="#000"
                    mt={4}
                    fontWeight="bold"
                  >
                    view more
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "20px", sm: "26px", xl: "40px" }}
                      display="flex"
                    >
                      <span
                        style={{
                          width: "30px",
                          background:
                            "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                        }}
                      ></span>
                      Social Media Marketing
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Storytellers for your brand ! Be it creating the strategy to
                  content development or engaging with your brands audience, our
                  team of Social Media Experts represent your brand
                  <br />
                  <Button
                    colorScheme="yellow"
                    background={"#FFDE11"}
                    borderRadius="20px"
                    color="#000"
                    mt={4}
                    fontWeight="bold"
                  >
                    view more
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "20px", sm: "26px", xl: "40px" }}
                      display="flex"
                    >
                      <span
                        style={{
                          width: "30px",
                          background:
                            "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                        }}
                      ></span>
                      digital marketing & seo
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  From driving footfall to your location, to your website or
                  tracking conversions, our team works towards making numbers
                  matter. Be it Digital Media Buying - Social Media Ads or PPC
                  Campaigns, we work in alignment with your KPIs.
                  <br />
                  <Button
                    colorScheme="yellow"
                    background={"#FFDE11"}
                    borderRadius="20px"
                    color="#000"
                    mt={4}
                    fontWeight="bold"
                  >
                    view more
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "20px", sm: "26px", xl: "40px" }}
                      display="flex"
                    >
                      <span
                        style={{
                          width: "30px",
                          background:
                            "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                        }}
                      ></span>
                      content production
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Creating multimedia content that works for your brand. Our
                  team of in-house content producers work on Photography,
                  Videography and Motion Graphics
                  <br />
                  <Button
                    colorScheme="yellow"
                    background={"#FFDE11"}
                    borderRadius="20px"
                    color="#000"
                    mt={4}
                    fontWeight="bold"
                  >
                    view more
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "20px", sm: "26px", xl: "40px" }}
                      display="flex"
                    >
                      <span
                        style={{
                          width: "30px",
                          background:
                            "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                        }}
                      ></span>
                      Design & Brand Dev
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Be it creating a brand from inception or building on well
                  established brand, our in-house team of Designers and
                  Copywriters,
                  <br />
                  <Button
                    colorScheme="yellow"
                    background={"#FFDE11"}
                    borderRadius="20px"
                    color="#000"
                    mt={4}
                    fontWeight="bold"
                  >
                    view more
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              {/* <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "20px", sm: "26px", xl: "40px" }}
                      display="flex"
                    >
                      <span
                        style={{
                          width: "30px",
                          background:
                            "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                        }}
                      ></span>
                      app development
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Creating a digital outlet for your brand and driving leads via
                  the website. Focus on Mobile Websites is key. We develop
                  <br />
                  <Button
                    colorScheme="yellow"
                    background={"#FFDE11"}
                    borderRadius="20px"
                    color="#000"
                    mt={4}
                    fontWeight="bold"
                  >
                    view more
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem> */}
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
              poster="/assets/image/servicePage/webShowcasePoster.jpeg"
              style={{
                borderRadius: "15px",
                zIndex: "9",
                position: "relative",
              }}
            >
              <source
                src="https://res.cloudinary.com/mccollins-media/video/upload/v1657020825/Mccollins%20Video/WEBSITE_SHOWCASE_VIDEO_1_h7ntf6.mp4"
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

export default ServicePageAccordian;
