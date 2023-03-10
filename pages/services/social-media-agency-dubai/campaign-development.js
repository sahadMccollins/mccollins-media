import {
  Box,
  Container,
  Flex,
  Heading,
  OrderedList,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import CaseStudy from "../../../components/CaseStudy";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";
import WebShowcase from "../../../components/WebShowcase";

const CampaignDevelopment = () => {
  return (
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="Campaign Development" />
      <Box>
        <Container maxWidth={"4xl"} mt={10}>
          <Text mt={{ base: 5, md: 0 }} className="main-p" textAlign="center">
            At McCollins Media, we work with you on developing Digital
            campaigns. It is the process of creating a comprehensive plan for a
            digital marketing campaign that is designed to achieve specific
            marketing goals. It involves developing a strategy, selecting
            appropriate digital channels and tactics, creating content, and
            executing and monitoring the campaign. As we aim to be a leading
            digital marketing agency in the UAE, we provide a 360 approach to
            your Digital Marketing campaigns.
          </Text>
        </Container>
        <Container maxWidth={"7xl"} pb={"50px"} mt={10} justifyContent="center">
          <Flex gap={10} flexDir={{ base: "column", md: "row" }}>
            <Image
              alt="McCollins Media"
              src={"/assets/image/servicePage/subPage/camp-dev (1).jpg"}
              width="585px"
              height={"528px"}
              objectFit="cover"
            />
            <Image
              alt="McCollins Media"
              src={"/assets/image/servicePage/subPage/camp-dev (2).jpg"}
              width="585px"
              height={"528px"}
              objectFit="cover"
            />
          </Flex>
          {/* <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: 0, md: 10 }}
              alignSelf="center"
              className="main-p"
            >
              <Text mt={{ base: 5, md: 0 }} className="main-p">
                At McCollins Media, we work with you on developing Digital
                campaigns. It is the process of creating a comprehensive plan
                for a digital marketing campaign that is designed to achieve
                specific marketing goals. It involves developing a strategy,
                selecting appropriate digital channels and tactics, creating
                content, and executing and monitoring the campaign. As we aim to
                be a leading digital marketing agency in the UAE, we provide a
                360 approach to your Digital Marketing campaigns.
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} position="relative">
              <Image alt="McCollins Media"
                src={"/assets/image/servicePage/Magneto.jpg"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
            </Box>
          </Flex> */}
          <Flex direction={{ base: "column", md: "row" }} my={10}>
            {/* <Flex
              width={{ base: "100%", md: "50%" }}
              position="relative"
              mr={{ base: 0, md: 10 }}
              alignSelf="center"
              flexDir={"column"}
              gap={20}
            >
              <Image alt="McCollins Media"
                src={"/assets/image/servicePage/Magneto2.jpg"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
              <Image alt="McCollins Media"
                src={"/assets/image/servicePage/Woocommerce.jpg"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
            </Flex> */}
            <Box width={{ base: "100%", md: "100%" }}>
              <Heading as={"h3"} className={"main-h3"}>
                Here are the key steps involved in digital campaign development:
              </Heading>
              <OrderedList my={"6"}>
                <li>
                  <Text className="main-p">
                    <b>Defining the campaign objectives:</b> This involves
                    setting clear, specific, and measurable goals for the
                    campaign, such as increasing brand awareness, driving
                    website traffic, generating leads, or increasing sales.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>Identifying the target audience:</b> This involves
                    defining the target audience for the campaign, including
                    their demographics, psychographics, and behaviors.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>Developing a digital strategy:</b> This involves
                    selecting the digital channels and tactics that will be most
                    effective in reaching the target audience and achieving the
                    campaign objectives. Channels may include social media,
                    email marketing, search engine marketing, display
                    advertising, content marketing, or influencer marketing.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>Creating content:</b> This involves developing engaging
                    and relevant content that will resonate with the target
                    audience and drive them to take the desired action. Content
                    may include blog posts, videos, infographics, social media
                    posts, or email newsletters. We work on creating user
                    generated content be it from bloggers or influencers in the
                    UAE or GCC Market. Arabic content is key to this market as
                    well. As a leading social media marketing company in Dubai,
                    we work with our in-house content creation team to develop
                    sharable content. From developing social media content,
                    designed posts, Reels, TikTok Videos, Stop Motions to AR
                    Filters, CGI Videos and more - we do it all inhouse.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>Launching and executing the campaign:</b> This involves
                    implementing the digital strategy and launching the campaign
                    across the selected digital channels. This may involve
                    setting up advertising campaigns, creating and scheduling
                    social media posts, or sending out email newsletters. We
                    like to walk the talk. Being a performance marketing agency
                    in Dubai, we strive for a result driven approach for all our
                    campaigns. Across the board on META, Google, Snapchat,
                    TikTok, YouTube, Baidu, Yandex, WeChat or more - every brand
                    needs a tailored campaign according to the result they want
                    to achieve.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>Monitoring and optimizing the campaign:</b> This involves
                    tracking the performance of the campaign and making
                    adjustments as necessary to improve its effectiveness. This
                    may involve adjusting targeting, tweaking ad creative, or
                    refining messaging. We work on Google Data Studio to give
                    you a real time update on campaigns. Transparency is key and
                    we work with you as a team to achieve your KPI Metrics.
                  </Text>
                </li>
              </OrderedList>
              <Text className="main-p" ml={8}>
                Overall, digital campaign development requires a deep
                understanding of the target audience, a strong grasp of digital
                marketing channels and tactics, and an ability to develop and
                execute effective campaigns that drive results. Being in the
                market for over 15 years, we have a strong understanding of the
                Arab Market and what the target audience would like to expect
                from their favorite brands.
              </Text>
            </Box>
          </Flex>
        </Container>
        {/* <CaseStudy /> */}
      </Box>
    </Stack>
  );
};

CampaignDevelopment.getLayout = function getLayout(CampaignDevelopment) {
  return <InnerLayout>{CampaignDevelopment}</InnerLayout>;
};

export default CampaignDevelopment;
