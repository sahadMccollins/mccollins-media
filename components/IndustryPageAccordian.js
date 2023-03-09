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
import { useRouter } from "next/router";

const IndustryPageAccordian = () => {
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
                      Corporate Marketing
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} width={{ base: "100%", sm: "80%" }}>
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
                    onClick={() =>
                      router.push("/industry/corporate-marketing-services")
                    }
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
                      Food And Beverage
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
                    onClick={() =>
                      router.push(
                        "/industry/food-and-beverage-marketing-services"
                      )
                    }
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
                      Healthcare Marketing
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
                    onClick={() =>
                      router.push("/industry/healthcare-marketing-services")
                    }
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
                      Luxury Marketing
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
                    onClick={() =>
                      router.push("/industry/luxury-marketing-services")
                    }
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
                      Technology Marketing
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
                    onClick={() =>
                      router.push("/industry/technology-marketing-services")
                    }
                  >
                    view more
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>
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

export default IndustryPageAccordian;
