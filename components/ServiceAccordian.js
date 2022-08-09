import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
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
import { useState } from "react";

const AccItem = (props) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            textAlign="left"
            fontSize={{ base: "20px", sm: "26px", xl: "40px" }}
          >
            {props.name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} width={{ base: "100%", sm: "80%" }}>
        {props.content}
      </AccordionPanel>
    </AccordionItem>
  );
};

const ServiceAccordian = () => {
  const router = useRouter();

  const [AccImg, setAccImg] = useState(
    "/assets/image/ServiceTabs/WebDevelopment.png"
  );
  return (
    <Stack className="serviceAcc" bg={"#F7F7F7"}>
      <Container maxWidth={"7xl"} pb="20">
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box
            width={{ base: "100%", lg: "50%" }}
            alignSelf="center"
            zIndex={99}
          >
            <Accordion defaultIndex={[0]}>
              <div
                onClick={(e) => {
                  setAccImg("/assets/image/ServiceTabs/WebDevelopment.png");
                }}
              >
                <AccItem
                  name="Web Development"
                  content="Creating a digital outlet for your brand and driving leads via the website. Focus on Mobile Websites is key. We develop Bilingual websites for the GCC Market."
                />
              </div>
              <div
                onClick={(e) => {
                  setAccImg(
                    "/assets/image/ServiceTabs/DigitalMarketing&SEO.png"
                  );
                }}
              >
                <AccItem
                  name="Performance Marketing"
                  content="From driving footfall to your location, to your website or tracking conversions, our team works towards making numbers matter. Be it Digital Media Buying - Social Media Ads or PPC Campaigns, we work in alignment with your KPIs."
                />
              </div>
              <div
                onClick={(e) => {
                  setAccImg(
                    "/assets/image/ServiceTabs/Social-Media-Marketing.png"
                  );
                }}
              >
                <AccItem
                  name="Social Media Marketing"
                  content="Storytellers for your brand ! Be it creating the strategy to content development or engaging with your brands audience, our team of Social Media Experts represent your brand"
                />
              </div>
              <div
                onClick={(e) => {
                  setAccImg("/assets/image/ServiceTabs/IphoneReels.png");
                }}
              >
                <AccItem
                  name="Content Production"
                  content="Creating multimedia content that works for your brand. Our team of in-house content producers work on Photography, Videography and Motion Graphics"
                />
              </div>
              <div
                onClick={(e) => {
                  setAccImg("/assets/image/ServiceTabs/Design&Brand.png");
                }}
              >
                <AccItem
                  name="Brand Experience"
                  content="Be it creating a brand from inception or building on well established brand, our in-house team of Designers and Copywriters,"
                />
              </div>
            </Accordion>
            <br />
            <Button
              colorScheme="yellow"
              background={"#FFDE11"}
              borderRadius="20px"
              color="#000"
              mt={4}
              ml={"16px"}
              fontWeight="bold"
              onClick={() => {
                router.push("/services");
              }}
            >
              view more
              <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
            </Button>
          </Box>

          <Box width={{ base: "100%", md: "50%" }} textAlign="center">
            <Image src={AccImg} width="457.5px" height="678.75px" />
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default ServiceAccordian;
