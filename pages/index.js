import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Awards from "../components/Awards";
import CaseStudy from "../components/CaseStudy";
import ClientsLogo from "../components/ClientsLogo";
import HeroBanner from "../components/HeroBanner";
import ServiceAccordian from "../components/ServiceAccordian";
import ServiceTabs from "../components/ServiceTabs";
import TechIcon from "../components/TechIcon";
import TextBox from "../components/TextBox";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <Stack
        position={"absolute"}
        width="100%"
        height={"730px"}
        background={"#F7F7F7"}
        zIndex="0"
      ></Stack>

      <TextBox />

      <ServiceTabs />

      <TextBox />

      <CaseStudy />

      <ClientsLogo />

      <TextBox />

      <ServiceAccordian />

      <TextBox />

      <TechIcon />

      <Awards />
    </>
  );
}
