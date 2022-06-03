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
    <Stack className="serviceAcc" bg={"#F7F7F7"} position="relative">
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
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
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
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
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
                    view more{" "}
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
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
                    view more{" "}
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
                      display="flex"
                    >
                      <span
                        style={{
                          width: "30px",
                          background:
                            "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                        }}
                      ></span>
                      perfomance marketing
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
                    view more{" "}
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
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
                    view more{" "}
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
                      display="flex"
                    >
                      <span
                        style={{
                          width: "30px",
                          background:
                            "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                        }}
                      ></span>
                      branding
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
                    view more{" "}
                    <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
                  </Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box
            width={{ base: "100%", md: "40%" }}
            alignSelf="center"
            position={"relative"}
          >
            <Image
              src="/assets/image/servicePage/serviceAccordian.jpg"
              width="317px"
              height="354px"
              style={{ zIndex: "2" }}
            />
            <Box
              position={"absolute"}
              width="250px"
              height="300px"
              bg={"#FFDE11"}
              top="100px"
              right="130px"
              zIndex={0}
            ></Box>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default ServicePageAccordian;
