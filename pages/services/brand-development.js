import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ClientsLogo from "../../components/ClientsLogo";
import FavWork from "../../components/FavWork";
import IntrestedInBox from "../../components/IntrestedInBox";
import InnerLayout from "../../components/Layout/InnerLayout";
import ServicePoint from "../../components/ServicePoint";
import TextBox from "../../components/TextBox";
import VideoBanner from "../../components/VideoBanner";
import clientPromise from "../../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import BrandsBanner from "../../components/Landing-page-components/BrandsBanner";
import BannerBox from "../../components/BanneBox";
import FAQ1 from "../../components/Landing-page-components/FAQ1";
const DesignAndBrandDevelopment = ({ metaTags }) => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
 const faqsData = [
  {
    question: "What does brand development include?",
    answer:
      " We cover brand strategy, visual identity (logo, colors, typography), tone of voice, brand guidelines, packaging, and digital-first brand storytelling.",
  },
  {
    question: "Do you only design logos or the full brand identity?",
    answer:
      " We don’t just stop at logos. We build holistic brand identities that look great, speak consistently, and resonate with your target audience.",
  },
  {
    question: "Can you refresh or rebrand an existing company?",
    answer:
      "Yes. Whether you need a subtle refresh or a complete transformation, we specialize in rebranding while keeping your legacy intact.",
  },
  {
    question: "Do you create brand guidelines?",
    answer:
      "Absolutely. We provide a full brand book covering design elements, tone of voice, and content usage to keep your brand consistent across platforms.",
  },
  {
    question: "How do you ensure the brand aligns with my target audience?",
    answer:
      " Our process starts with research and workshops to understand your market, competition, and audience insights. Every design and narrative is built with them in mind.",
  },
  {
    question: "How long does it take to complete a branding project?",
    answer:
      "Typically, a full branding project takes 4–8 weeks depending on scope, but we also offer fast-track solutions for time-sensitive launches.",
  },
  {
    question: "Do you handle packaging and offline branding as well?",
    answer:
      "Yes. From digital to physical touchpoints, we design packaging, in-store visuals, and print collateral to create a seamless brand experience.",
  },
  {
    question: "Will my branding work across social media and digital platforms?",
    answer:
      " 100%. Our branding approach is digital-first, ensuring your identity looks as strong on Instagram and TikTok as it does on a billboard.",
  },
  {
    question: "Can you create Arabic and English brand identities?",
    answer:
      " Yes. We develop bilingual brand assets and tone of voice to resonate with diverse audiences in the GCC region.",
  },
  {
    question: "Do you also handle brand storytelling and positioning?",
    answer:
      " Yes. Beyond visuals, we define your brand voice, values, and story to emotionally connect with your audience.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "  From startups and SMEs to established brands across F&B, retail, real estate, lifestyle, and corporate sectors, our branding solutions scale to your needs.",
  },
];
  return (
    <Stack position={"relative"}>
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
      {/* <VideoBanner
        heading={`brand \n development`}
        video="/assets/cloudinaryBackup/BRANDING_-_z6r43b.mp4"
        content="Brand identity is everything, and we bring in unimaginable creativity through brand execution, logo creation, website redesign, social media content creation, and more."
        poster="/assets/image/servicePage/designAndBrand.jpg"
      /> */}
      <BrandsBanner />
      <Box bg={"#F7F7F7"} style={{ marginTop: "0" }}>
        <Container maxWidth={"7xl"}>
          <Flex direction={{ base: "column", md: "row" }} my={10}>
            <Box width={{ base: "100%", md: "50%" }} mr={"20"}>
              <Heading fontWeight={"bold"} className="main-h3">
                Brand Development
              </Heading>
              <Box
                my={8}
                background="#FFDE11"
                width={"fit-content"}
                p={"0px 10% 0px 10px"}
                fontWeight="bold"
                fontSize={"1xl"}
                color={"#000"}
              >
                {/* <Text>creating content that tells a story</Text> */}
              </Box>
              <Text>
                Creating a brand from the inception - logo to the entire
                adaptation of various deliverables are conceptualized in-house
                by our team of designers and copywriters
              </Text>
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              mt={{ base: "10", md: "unset" }}
            >
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                  }}
                ></span>
                <Heading className="main-h3">
                  Brand Identity Development
                </Heading>
              </Box>
              <Text>
                Logo design, Brand Elements, Brand Positioning, Color Themes to
                executing the design across all mediums.
              </Text>
              <Box display={"flex"}>
                <span
                  style={{
                    width: "20px",
                    marginRight: "10px",
                    background:
                      "linear-gradient(to bottom,#F7F7F7 49%,#ffde11 50%,#ffde11 70%,#F7F7F7 71%,#F7F7F7 100%)",
                  }}
                ></span>
                <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                  Design Projects
                </Heading>
              </Box>
              <Text>
                Be it a brochure or a menu or any specific design requirements,
                we take on branding projects based on the brief provided by the
                Clients
              </Text>
            </Box>
          </Flex>
        </Container>
        <ServicePoint
          heading={"BRANDING \n SERVICES"}
          contentHeading="Conceptualizing design solutions for your brand"
          content="From conceptualizing a logo for a new brand to a comprehensive design solution for an existing brand, our in-house team provides design solutions for brands"
          points={
            "Logo Development \n Copywriting \n Translation \n Printing Guidelines \n Brand Asset Development \n Brand Guideline Development"
          }
        />
      </Box>
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_1-min.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_1.jpg"
      />
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_2-min.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_2.jpg"
      />
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_3-min.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_3-min.jpg"
      />
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_4-min.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_4.jpg"
      />
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_5-min.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_5.jpg"
      />
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_6-min.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_6.jpg"
      />
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_7-min.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_7.jpg"
      />
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_8-min.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_8.jpg"
      />
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_9-min.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_9-min.jpg"
      />
      <BannerBox
        Banner="/services/branddevelopment/McC_BrandDev_Web_10.jpg"
        MobileBanner="/services/branddevelopment/McC_BrandDev_Mob_10.jpg"
      />
      <FAQ1 faqs={faqsData} />
      <IntrestedInBox />
      <ClientsLogo />
    </Stack>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let metaTags = await db.collection("meta").find({ name: req.url }).toArray();
  metaTags = JSON.parse(JSON.stringify(metaTags));
  console.log(metaTags);

  return {
    props: { metaTags },
  };
}

DesignAndBrandDevelopment.getLayout = function getLayout(
  DesignAndBrandDevelopment
) {
  return <InnerLayout color="yellow">{DesignAndBrandDevelopment}</InnerLayout>;
};

export default DesignAndBrandDevelopment;
