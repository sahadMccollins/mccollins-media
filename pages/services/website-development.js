import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";

import TextBox2 from "../../components/TextBox2";
import TextBox from "../../components/TextBox";
import FavWork from "../../components/FavWork";
import TechIcon from "../../components/TechIcon";
import ClientsLogo from "../../components/ClientsLogo";
import ServiceTabsDetails from "../../components/ServiceTabsDetails";
import VideoBanner from "../../components/VideoBanner";
import { motion } from "framer-motion";

const WebsiteDevelopment = () => {
  return (
    <Stack position={"relative"}>
      <VideoBanner
        heading={`web \n development`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657219431/Mccollins%20Video/Website_Development_cs3y2v.mp4"
        content="Every brand in today's time must have a website to showcase itself to its audience. Having a mobile friendly website is even more important. Our team of in-house developers specialize in various backends be it Wordpress, WooCommerce, Magento, React or Shopify to name a few. Our agency is Partners with several leading platforms"
        poster="/assets/image/servicePage/serviceAccordian.jpg"
      />

      <Container maxWidth={"7xl"} style={{ margin: "auto" }}>
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
                <Tab>Php Website Development</Tab>
                <Tab>Magento Development</Tab>
                <Tab>Drupal Development</Tab>
                <Tab>Shopify Development</Tab>
                <Tab>E-commerce Development</Tab>
                <Tab>Hosting Services</Tab>
                <Tab>Landing Page Development</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <ServiceTabsDetails />
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </Stack>
      </Container>
      <Box
        background={{
          base: "linear-gradient(to bottom,#ffde11 26%,#fff 26%)",
          md: "linear-gradient(to bottom,#ffde11 50%,#fff 50%)",
        }}
        position={"relative"}
      >
        <Box style={{ position: "absolute", top: "-50px", left: "10%" }}>
          <Image
            src={"/assets/image/design/6.svg"}
            width="68px"
            height={"130px"}
          />
        </Box>
        <Box style={{ position: "absolute", top: "10%", right: "0px" }}>
          <Image
            src={"/assets/image/design/8.svg"}
            width="161px"
            height={"138px"}
          />
        </Box>
        <Box
          style={{ position: "absolute" }}
          right={{ base: "3%", md: "80%" }}
          top={{ base: "40%", md: "30%" }}
        >
          <Image
            src={"/assets/image/design/7.svg"}
            width="43px"
            height={"43px"}
          />
        </Box>
        <Box
          style={{ position: "absolute", top: "54%", left: "10%" }}
          display={{ base: "none", md: "block" }}
        >
          <Image
            src={"/assets/image/design/1.svg"}
            width="158px"
            height={"215px"}
          />
        </Box>
        <Box
          style={{ position: "absolute", top: "55%", right: "10%" }}
          display={{ base: "none", md: "block" }}
        >
          <Image
            src={"/assets/image/design/3.svg"}
            width="89px"
            height={"103px"}
          />
        </Box>

        <Container maxWidth={"7xl"}>
          <Box>
            <motion.div
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
            </motion.div>

            <Box
              textAlign={"center"}
              mt={{ base: "0", md: "-300px" }}
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
          <TextBox2 />
          <TextBox
            heading="Case study"
            smallHeading="website design & development"
            subHeading="learn how we executed campaigns to get results"
            content="Over the decade we have worked on some exciting web projects from Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia. Have a look at some of our work"
          />
        </Container>
      </Box>
      <FavWork />
      <TextBox
        heading="Technologies We work with"
        subHeadingOnly="Transform your brand journey today. We grow brands, create experiences and solve problems."
      />
      <TechIcon />
      <ClientsLogo />
    </Stack>
  );
};

WebsiteDevelopment.getLayout = function getLayout(WebsiteDevelopment) {
  return <InnerLayout color="yellow">{WebsiteDevelopment}</InnerLayout>;
};

export default WebsiteDevelopment;
