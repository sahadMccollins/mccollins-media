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

const AccItem = (props) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            textAlign="left"
            fontSize={{ base: "26px", sm: "unset", xl: "48px" }}
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
  return (
    <Stack className="serviceAcc" bg={"#F7F7F7"}>
      <Container maxWidth={"7xl"} pb="20">
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box width={{ base: "100%", lg: "50%" }}>
            <Accordion defaultIndex={[0]}>
              <AccItem
                name="Brand Experience"
                content="Brand identity is everything, and we bring in unimaginable creativity through brand execution, logo creation, website redesign, social media content creation, and more."
              />
              <AccItem
                name="Web Development"
                content="Your website is your digital store, that is why we make it stand out, represent you, and most importantly, help your brand grow."
              />
              <AccItem
                name="Web App Development"
                content="We create an ideal user journey through a well-planned UI/UX experience and a unique website built on Shopify, Magento, React, Woocommerce, WordPress, and more."
              />
              <AccItem
                name="Digital Marketing"
                content="We blend consumer insights and result-driven strategies for your brand through SEO, SEM, SMM, Content Creation, and more to attract your audience."
              />
              <AccItem
                name="360 Brand Development"
                content="From Photo & Video content creation to website redesign & development, and Social Media Branding, we engage with your audience by telling your brand's story!"
              />
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
                router.push("/services/website-development");
              }}
            >
              view more
              <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
            </Button>
          </Box>

          <Box width={{ base: "100%", md: "50%" }} alignSelf="center">
            <Image
              src="/assets/image/ServiceTabs/webDev.png"
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
