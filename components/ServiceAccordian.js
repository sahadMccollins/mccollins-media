import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

const ServiceAccordian = () => {
  return (
    <Stack className="serviceAcc">
      <Container maxWidth={"7xl"} pb="20">
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box width={{ base: "100%", lg: "50%" }}>
            <Accordion defaultIndex={[0]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
                    >
                      website development
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} width={{ base: "100%", sm: "80%" }}>
                  Creating a digital outlet for your brand and driving leads via
                  the website. Focus on Mobile Websites is key. We develop
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
                    >
                      app development
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Creating a digital outlet for your brand and driving leads via
                  the website. Focus on Mobile Websites is key. We develop
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
                    >
                      digital marketing & seo
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Creating a digital outlet for your brand and driving leads via
                  the website. Focus on Mobile Websites is key. We develop
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
                    >
                      perfomance marketing
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Creating a digital outlet for your brand and driving leads via
                  the website. Focus on Mobile Websites is key. We develop
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
                    >
                      content production
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Creating a digital outlet for your brand and driving leads via
                  the website. Focus on Mobile Websites is key. We develop
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      textAlign="left"
                      fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
                    >
                      branding
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Creating a digital outlet for your brand and driving leads via
                  the website. Focus on Mobile Websites is key. We develop
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box width={{ base: "100%", md: "50%" }}>
            <Image
              src="/assets/image/serviceTabs/webDev.jpg"
              width="860px"
              height="698px"
            />
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default ServiceAccordian;
