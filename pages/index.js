import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import HeroBanner from "../components/HeroBanner";
import ServiceTabs from "../components/ServiceTabs";
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
    </>
  );
}
