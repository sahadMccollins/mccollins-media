import {
  Box,
  Container,
  Stack,
  Image as Chakraimage,
  useMediaQuery,
  Heading,
  ButtonGroup,
  Button,
  Flex,
  Text,
  OrderedList,
} from "@chakra-ui/react";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import { useState } from "react";

import "../../node_modules/react-modal-video/css/modal-video.min.css";
import TextBox from "../../components/TextBox";
import ClientsLogo from "../../components/ClientsLogo";
import VideoBanner from "../../components/VideoBanner";
import { useRouter } from "next/router";
import CaseStudy from "../../components/CaseStudy";
import FadeUp from "../../components/Motion/FadeUp";
import ZoomInWithBounce from "../../components/Motion/ZoomInWithBounce";
import IntrestedInBox from "../../components/IntrestedInBox";
import SeoIcon from "../../components/SeoIcon";

const SEO = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  return (
    <Stack position={"relative"}>
      <VideoBanner
        heading={`search engine \n  optimization`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657600388/Mccollins%20Video/Search_engine_marketing-_kg3pi4.mp4"
        content="Get your brand noticed at the right place at the right time. Let us help you rank high on Google search"
        poster="/assets/image/servicePage/DM&SEO.jpg"
      />
      <Container maxWidth={"4xl"} style={{ margin: "auto" }}>
        <FadeUp>
          <Text mt={10} className="main-p" textAlign={"center"}>
            As a Performance driven, Search Engine Optimization agency in Dubai,
            we specialize in providing SEO services to businesses. Our primary
            goal is to support businesses to improve their online visibility and
            increase organic traffic to their websites.
          </Text>
        </FadeUp>
      </Container>
      <Container maxWidth={"7xl"} style={{ margin: "auto" }}>
        <Flex direction={{ base: "column", md: "row" }} my={10}>
          <Box
            width={{ base: "100%", md: "50%" }}
            alignSelf="center"
            mr={{ base: 0, md: 10 }}
          >
            <ZoomInWithBounce>
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/subPage/SEO-01.jpg"}
                width="585px"
                height={"528px"}
                objectFit="cover"
              />
            </ZoomInWithBounce>
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            alignSelf="center"
            mt={{ base: 5, md: 0 }}
            className="sub-service"
          >
            <FadeUp>
              <Heading as={"h5"} className="main-h5">
                As an SEO provider, we typically provide a range of services to
                achieve these goals, including:
              </Heading>
            </FadeUp>
            <OrderedList my={"6"} className="main-p">
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} className="main-p">
                    <b>On-page optimization:</b> Optimizing the content, meta
                    tags, and other elements on the website to make it more
                    relevant and accessible to search engines.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Off-page optimization: </b> Building high-quality
                    backlinks from other websites to improve the website's
                    authority and relevance.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Keyword research: </b> Identifying the most relevant and
                    high-traffic keywords for the business and optimizing the
                    website's content to target those keywords.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Content creation: </b> Creating high-quality, relevant,
                    and engaging content that appeals to the target audience and
                    helps drive traffic to the website.
                  </Text>
                </FadeUp>
              </li>
              <li>
                <FadeUp>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Analytics and reporting:</b> Monitoring the website's
                    performance, tracking the progress of the SEO campaign, and
                    providing regular reports to the client.
                  </Text>
                </FadeUp>
              </li>
            </OrderedList>
            <FadeUp>
              <Text className="main-p" ml={8}>
                We also provide other related services, such as social media
                marketing, pay-per-click (PPC) advertising, and website design
                and development.
              </Text>
            </FadeUp>
          </Box>
        </Flex>
      </Container>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <TextBox
        heading="Case study"
        smallHeading={"Search engine optimization"}
        subHeading="Learn how we executed campaigns to get results"
        content="Over the decade we have worked on some exciting web projects from Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority Dubai to Samsung, LG, Pioneer or Zamil Industries in Saudi Arabia. Have a look at some of our work"
      />
      <CaseStudy />
      <TextBox
        heading="Technologies We work with"
        content="Transform your brand journey today. We grow brands, create experiences and solve problems."
      />
      <Box mt={"-30px !important"}>
        <SeoIcon />
      </Box>
      <IntrestedInBox />
      <ClientsLogo />
    </Stack>
  );
};

SEO.getLayout = function getLayout(SEO) {
  return <InnerLayout color="yellow">{SEO}</InnerLayout>;
};
export default SEO;
