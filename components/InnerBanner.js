import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import FadeUp from "./Motion/FadeUp";

const InnerBanner = (props) => {
  const router = useRouter();
  return (
    <Flex
      mt="-85px"
      height={{ base: "100%", md: "100vh" }}
      minHeight="600px"
      pt="170px"
      direction={{ base: "column", md: "row" }}
    >
      <Box width={{ base: "100%", md: "55%" }}>
        <FadeUp>
          <Heading className="main-h2" color="#FFDE11">
            {props.name ? props.name : "our services"}
          </Heading>
          <Box position="relative">
            <Heading className="bnrBigHd" color="#000" fontWeight="black">
              {props.heading &&
                props.heading
                  .split("\n")
                  .map((str) => <div key={str}>{str}</div>)}
            </Heading>
            <Box
              position={"absolute"}
              top={{ base: "unset", md: "0" }}
              left={"70%"}
            >
              <Image
                alt="McCollins Media"
                src="/assets/image/design/3.svg"
                width={"89px"}
                height={"104px"}
                priority={true}
              />
            </Box>
          </Box>
          <Button
            colorScheme="yellow"
            background={"#FFDE11"}
            borderRadius="20px"
            color="#000"
            mt={"5"}
            onClick={() => router.push("/contact")}
          >
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/call.svg"
              width="25px"
              height="25px"
              priority={true}
            />
            &nbsp;&nbsp;contact us
          </Button>
        </FadeUp>
        <FadeUp delay={"0.3"}>
          <Text mt="10" fontWeight="bold" color={"#6F6F6F"} pr="5">
            {props.content}
          </Text>
        </FadeUp>
      </Box>
      <Box width={{ base: "100%", md: "45%" }} mt={{ base: "10", md: "0" }}>
        <Image
          alt="McCollins Media"
          src={props.img}
          width="446px"
          height="467px"
          priority={true}
        />
      </Box>
    </Flex>
  );
};

export default InnerBanner;
