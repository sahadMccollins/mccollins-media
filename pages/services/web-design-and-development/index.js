import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  OrderedList,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../../../components/Layout/InnerLayout";
import Image from "next/image";

import TextBox2 from "../../../components/TextBox2";
import TextBox from "../../../components/TextBox";
import FavWork from "../../../components/FavWork";
import TechIcon from "../../../components/TechIcon";
import ClientsLogo from "../../../components/ClientsLogo";
import ServiceTabsDetails from "../../../components/ServiceTabsDetails";
import VideoBanner from "../../../components/VideoBanner";
import { motion } from "framer-motion";
import VideoCaseStudy from "../../../components/VideoCaseStudy";
import ServiceIcon from "../../../components/ServiceIcon";
import FormBox from "../../../components/FormBox";
import Testimonials from "../../../components/Testimonials";

const WebsiteDevelopment = () => {
  const favWorkData = [
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
  ];
  return (
    <Stack position={"relative"}>
      <VideoBanner
        heading={`web \n development`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657219431/Mccollins%20Video/Website_Development_cs3y2v.mp4"
        content="Every brand in today's time must have a website to showcase itself to its audience. Having a mobile friendly website is even more important. Our team of in-house developers specialize in various backends be it Wordpress, WooCommerce, Magento, React or Shopify to name a few. Our agency is Partners with several leading platforms"
        poster="/assets/image/servicePage/serviceAccordian.jpg"
      />

      {/* <Container maxWidth={"7xl"} style={{ margin: "auto" }}>
        <Stack
          position={"relative"}
          zIndex="2"
          className="serviceTab"
          mb={{ base: "10", md: "unset" }}
        >
          <Container maxWidth={"7xl"} py="30">
            <Tabs>
              <TabList
                justifyContent={"space-between"}
                overflowX={"scroll"}
                overflowY={"hidden"}
              >
                <Tab>Wordpress Development</Tab>
                <Tab>Shopify Development</Tab>
                <Tab>Sitecore</Tab>
                <Tab>Website Landing Page</Tab>
                <Tab>Landing Page Development</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <ServiceTabsDetails
                    img="/assets/image/ServiceTabs/WebDevelopment.png"
                    heading={"Wordpress \n Development"}
                    subHeading={"creating content that tells a story"}
                    desc={
                      "Having your own website is an important piece of your ecommerce strategy. It is a great way for you to grow your brand, acquire loyal customers, gain new insights, and get creative with your marketing"
                    }
                    points={
                      "Fast Launch \n  Customer Insights \n  Easy Integration \n  Integrate Content Marketing \n  Social Media Integration \n  Third Party Plug-ins"
                    }
                  />
                </TabPanel>
                <TabPanel>
                  <ServiceTabsDetails
                    img="/assets/image/ServiceTabs/WebDevelopment.png"
                    heading={"Wordpress \n Development"}
                    subHeading={"creating content that tells a story"}
                    desc={
                      "Creating a digital outlet for your brand and driving leads via the website. Focus on Mobile Websites is key. We develop Bilingual websites for the GCC Market."
                    }
                    points={
                      "Corporate Website \n  E-commerce Website \n  Microsites \n  Annual Maintenance \n  SEO & SEM Support \n  Lead Generation Landing Pages"
                    }
                  />
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </Stack>
      </Container> */}
      <Box
        // background={{
        //   base: "linear-gradient(to bottom,#ffde11 26%,#fff 26%)",
        //   md: "linear-gradient(to bottom,#ffde11 50%,#fff 50%)",
        // }}
        position={"relative"}
        style={{ marginBottom: "100px" }}
      >
        <Container maxWidth={"7xl"}>
          <TextBox
            h2Fs="40px"
            heading="Technologies We work with"
            subHeadingOnly="Transform your brand journey today. We grow brands, create experiences and solve problems."
          />
          <ServiceIcon />
          <Box>
            {/* <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <Image
                src="/assets/image/servicePage/webDev1.png"
                width={"1358px"}
                height={"1131px"}
              />
            </motion.div> */}

            <Box
              textAlign={"center"}
              // mt={{ base: "0", md: "-300px" }}
              zIndex={2}
              position="relative"
            >
              <Heading fontSize={{ base: "65", md: "115px" }} color="#000">
                WEBSITE
              </Heading>
              <Heading
                fontSize={{ base: "48", md: "115px" }}
                color="#fff"
                className="webStrok"
              >
                DEVELOPMENT
              </Heading>
            </Box>
          </Box>

          <Container maxWidth={"7xl"} pb="2">
            <Flex
              direction={{ base: "column", md: "row" }}
              mt="8"
              justifyContent={"space-between"}
              position="relative"
            >
              <Box width={{ base: "100%", md: "45%" }}>
                <Heading fontSize={"24px"}>
                  Develop Websites That Drive Traffic And Conversion
                </Heading>
                <Box
                  my={8}
                  background="#FFDE11"
                  width={"fit-content"}
                  p={"0px 8% 0px 10px"}
                  fontWeight="bold"
                  fontSize={"20px"}
                >
                  <Text>A Voice For Your Brand</Text>
                </Box>
                <Text mb={5}>
                  Creating a website is an important part of any marketing
                  strategy, and it's no wonder that so many businesses are
                  turning to website development partners to help them create
                  their result driven website.
                  <br />
                  <br /> We have a team of in-house developers who can help you
                  create a website on any platform, from ecommerce websites to
                  corporate websites. With years of experience, our team will
                  work with you to develop a website that reflects your unique
                  brand and meets your needs. We understand that different
                  businesses need different features and accommodations, so
                  we'll work closely with you to develop a website that
                  perfectly fits your needs.
                </Text>
              </Box>
              <Box width={{ base: "100%", md: "45%" }} className="sub-service">
                <OrderedList my={"6"}>
                  <li>
                    <Text fontSize={"20px"}>
                      <b>Storefront Development : </b>Building and customizing
                      visual elements of your online such - be with the layout,
                      theme and design. Our Shopify developers work on the
                      latest trends and customize themes using HTML, CSS and
                      other tools
                    </Text>
                  </li>
                  <li>
                    <Text fontSize={"20px"} mt="5">
                      <b>App Development : </b>Take your business mobile. The
                      Shopify theme can then provide a mobile experience for
                      your brand.
                    </Text>
                  </li>
                  <li>
                    <Text fontSize={"20px"} mt="5">
                      <b>Shopify API Integration : </b>The APO allows us to
                      integrate with third party services like Payment gateway
                      providers, shipping partners and marketing tools like
                      Klaviyo etc
                    </Text>
                  </li>
                  <li>
                    <Text fontSize={"20px"} mt="5">
                      <b>Maintenance and support : </b>We also provide ongoing
                      maintenance and support to ensure that the online store is
                      running smoothly, and any issues are quickly resolved.
                    </Text>
                  </li>
                </OrderedList>
              </Box>
              <Box
                position={"absolute"}
                left={{ base: "60", md: "42%" }}
                bottom={"-28"}
                zIndex="2"
              >
                <Image
                  src="/assets/image/design/1.svg"
                  width="187px"
                  height="202px"
                />
              </Box>
            </Flex>
          </Container>

          {/* <TextBox
            heading="Case study"
            smallHeading="website design & development"
            subHeading="learn how we executed campaigns to get results"
            content="Over the decade we have worked on some exciting web projects from Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia. Have a look at some of our work"
          /> */}
        </Container>
      </Box>

      {/* <FavWork data={favWorkData} /> */}

      <TextBox2
        noMy={true}
        heading={"Develop a Website \n that works for you"}
        subHeading={"Mobile First Websites"}
        content="In the era of mobile first technology, website is the only effective outlet to communicate with your customers."
        content2={
          "Build a strong Mobile-first website and be in the pocket of your customers. Be it informational or e-commerce, we develop them in-house"
        }
      />

      <Container maxWidth={"7xl"} style={{ margin: "auto" }}>
        <VideoCaseStudy />
      </Container>
      <Box className="creative-head">
        <Heading
          as={"h3"}
          fontSize={{ base: "25px", md: "75px" }}
          mt={"10"}
          textAlign="center"
          color={"#fff"}
          textTransform="uppercase"
        >
          Create A Web Presence <br /> That Delivers Results
        </Heading>
      </Box>
      <Container
        maxWidth={"7xl"}
        style={{ margin: "auto", marginBottom: "40px" }}
      >
        <FormBox heading={"Request a Call Back"} />
      </Container>
      <ClientsLogo />
      <Box my="10">
        <Testimonials />
      </Box>
      <ClientsLogo />
    </Stack>
  );
};

WebsiteDevelopment.getLayout = function getLayout(WebsiteDevelopment) {
  return <InnerLayout color="yellow">{WebsiteDevelopment}</InnerLayout>;
};

export default WebsiteDevelopment;
