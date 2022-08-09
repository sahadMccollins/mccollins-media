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
  const favWorkData = [
    {
      name: "Dafza",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Rica",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Dafza",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Rica",
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
    <>
      <HeroBanner
        img="https://res.cloudinary.com/mccollins-media/image/upload/v1657138383/Mccollins%20Banner/home-banner_bwes6c.webp"
        h2="A Digital Pioneer In Changing The Game"
        content="We architect end-to-end experiences which create a meaningful digital footprint for your future."
      />

      <Stack
        position={"absolute"}
        width="100%"
        height={"730px"}
        background={"#F7F7F7"}
        zIndex="0"
      ></Stack>

      <TextBox
        heading={"WHO WE ARE"}
        content="We are McCollins Media, a story that began over 15 years ago on the principles of creativity, innovation, and result-driven thinking. We blend creative thinking and digital development with purposeful strategies to create a digital ecosystem like no other. We are passionate about being the leading digital marketing and web development services provider in the UAE and across all GCC countries."
      />

      {/* <ServiceTabs /> */}

      <ServiceAccordian />

      <TextBox
        heading="CASE STUDY"
        subHeading="learn how we executed campaigns to get results"
        content="13 Years in the making, pioneers to UAE’s digital scene, we are McCollins Media ! We enjoy working with earned media, where we get others to talk about your brand."
      />

      <CaseStudy data={favWorkData} />

      <ClientsLogo />

      {/* <TextBox
        bg="#F7F7F7"
        heading={"WHAT \n WE DO"}
        subHeading="Creating game-changing campaigns"
        content=" that help brands all across the GCC region grow and perform better. We bridge the gap between purpose-driven storytelling and data-driven improvements."
      /> */}

      {/* <ServiceAccordian /> */}

      <TextBox
        heading="WHAT WE WORK WITH"
        subHeadingOnly="As a technology-driven company, we adapt to the latest trends and combine them with consumer insights to help brands be on top of their game. "
      />

      <TechIcon />

      <hr />

      <Awards />
    </>
  );
}
