import { Stack } from "@chakra-ui/react";
import Awards from "../components/Awards";
import CaseStudy from "../components/CaseStudy";
import ClientsLogo from "../components/ClientsLogo";
import HeroBanner from "../components/HeroBanner";
import ServiceAccordian from "../components/ServiceAccordian";
import ServiceTabs from "../components/ServiceTabs";
import TechIcon from "../components/TechIcon";
import TextBox from "../components/TextBox";

export default function Home() {
  return (
    <>
      <HeroBanner
        img="/assets/image/banner/home-banner.webp"
        h2="digital brand activation agency"
        content="result driven agency with mobile first technology"
      />

      <Stack
        position={"absolute"}
        width="100%"
        height={"730px"}
        background={"#F7F7F7"}
        zIndex="0"
      ></Stack>

      <TextBox
        heading="Our Core Services"
        subHeading="what we are passionate about"
        content="13 Years in the making, pioneers to UAE’s digital scene, we are McCollins Media ! We enjoy working with earned media, where we get others to talk about your brand."
      />

      <ServiceTabs />

      <TextBox
        heading="Case study"
        subHeading="learn how we executed campaigns to get results"
        content="13 Years in the making, pioneers to UAE’s digital scene, we are McCollins Media ! We enjoy working with earned media, where we get others to talk about your brand."
      />

      <CaseStudy />

      <ClientsLogo />

      <TextBox
        bg="#F7F7F7"
        heading="WHAT WE DO"
        subHeading="in today’s market, work with a performance driven approach"
        content="Our team prides in daring to experiment with evolving digital trends, providing a personalized approach to our clients, and ensuring we create a result driven plan to achieve our brands objectives. We are a young and passionate full service in-house team based in Dubai Media City. Follow us on instagram to take a sneak peak into our daily lives @mccollinsmedia"
      />

      <ServiceAccordian />

      <TextBox
        heading="Technologies We work with"
        content="Transform your brand journey today. We grow brands, create experiences and solve problems."
      />

      <TechIcon />

      <Awards />
    </>
  );
}
