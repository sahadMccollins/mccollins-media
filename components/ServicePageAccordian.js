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

const ServicePageAccordian = () => {
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
                    <Text>
                      Creating a digital outlet for your brand and driving leads
                      via the website. Focus on Mobile Websites is key. We
                      develop Bilingual websites for the GCC Market.
                      <br />
                      <Button
                        colorScheme="yellow"
                        background={"#FFDE11"}
                        borderRadius="20px"
                        color="#000"
                        mt={4}
                        fontWeight="bold"
                        onClick={() =>
                          router.push("/services/web-design-and-development")
                        }
                      >
                        view more
                        <ChevronRightIcon
                          mt="2px"
                          width="1.3em"
                          height="1.3em"
                        />
                      </Button>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
              <FadeUp>
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
                    <Text>
                      Storytellers for your brand ! Be it creating the strategy
                      to content development or engaging with your brands
                      audience, our team of Social Media Experts represent your
                      brand
                      <br />
                      <Button
                        colorScheme="yellow"
                        background={"#FFDE11"}
                        borderRadius="20px"
                        color="#000"
                        mt={4}
                        fontWeight="bold"
                        onClick={() =>
                          router.push("/services/social-media-agency-dubai")
                        }
                      >
                        view more
                        <ChevronRightIcon
                          mt="2px"
                          width="1.3em"
                          height="1.3em"
                        />
                      </Button>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
              <FadeUp>
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
                        Google Ads
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      From driving footfall to your location, to your website or
                      tracking conversions, our team works towards making
                      numbers matter. Be it Digital Media Buying - Social Media
                      Ads or PPC Campaigns, we work in alignment with your KPIs.
                      <br />
                      <Button
                        colorScheme="yellow"
                        background={"#FFDE11"}
                        borderRadius="20px"
                        color="#000"
                        mt={4}
                        fontWeight="bold"
                        onClick={() => router.push("/services/google-ads")}
                      >
                        view more
                        <ChevronRightIcon
                          mt="2px"
                          width="1.3em"
                          height="1.3em"
                        />
                      </Button>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
              <FadeUp>
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
                        search engine optimization
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      As a Performance driven, Search Engine Optimization agency
                      in Dubai, we specialize in providing SEO services to
                      businesses. Our primary goal is to support businesses to
                      improve their online visibility and increase organic
                      traffic to their websites.
                      <br />
                      <Button
                        colorScheme="yellow"
                        background={"#FFDE11"}
                        borderRadius="20px"
                        color="#000"
                        mt={4}
                        fontWeight="bold"
                        onClick={() =>
                          router.push("/services/search-engine-optimization")
                        }
                      >
                        view more
                        <ChevronRightIcon
                          mt="2px"
                          width="1.3em"
                          height="1.3em"
                        />
                      </Button>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
              <FadeUp>
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
                        Film
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
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
                        onClick={() => router.push("/services/film")}
                      >
                        view more
                        <ChevronRightIcon
                          mt="2px"
                          width="1.3em"
                          height="1.3em"
                        />
                      </Button>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </FadeUp>
              <FadeUp>
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
                        Brand Development
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
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
                        onClick={() => router.push("/services/branding")}
                      >
                        view more
                        <ChevronRightIcon
                          mt="2px"
                          width="1.3em"
                          height="1.3em"
                        />
                      </Button>
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
