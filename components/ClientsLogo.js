import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import FadeUp from "./Motion/FadeUp";
import ZoomInWithBounce from "./Motion/ZoomInWithBounce";

const ClientsLogo = () => {
  return (
    <Stack
      background={"#FFDE11"}
      position="relative"
      style={{ marginTop: "0 !important" }}
    >
      <Container maxWidth={"7xl"} py="20">
        <Box
          position={"absolute"}
          right="0"
          top={{ base: "45", md: "100" }}
          width={{ base: "25%", md: "unset" }}
        >
          <Image
            src="/assets/image/design/5.svg"
            height={"56px"}
            width="302px"
          />
        </Box>
        <FadeUp>
          <Flex
            display={"flex"}
            alignItems="self-end"
            direction={{ base: "column", md: "row" }}
          >
            <Heading
              borderLeft={"10px solid #fff"}
              pl="20px"
              color={"#000"}
              width={{ base: "100%", md: "50%" }}
              fontSize={{ base: "35px", md: "45px" }}
              fontWeight={"black"}
            >
              CLIENTS WE WORK WITH
              <span style={{ color: "#fff", fontSize: "20px" }}>■</span>
            </Heading>
            {/* <Button borderRadius={20} mt="20px" background={"#fff"}>
            view all <ChevronRightIcon w={"1.3em"} h={"1.3em"} />
          </Button> */}
          </Flex>
        </FadeUp>
        <SimpleGrid
          columns={{ base: 3, md: 4 }}
          spacingX="40px"
          spacingY="60px"
          alignItems={"center"}
          mt="75px"
        >
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.10">
              <Image
                src="/assets/image/clientLogo/clientLogo-(5).png"
                width={"330px"}
                height={"72px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.20">
              <Image
                src="/assets/image/clientLogo/clientLogo-(6).png"
                width={"118px"}
                height={"118px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.30">
              <Image
                src="/assets/image/clientLogo/clientLogo-(7).png"
                width={"225px"}
                height={"37px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.40">
              <Image
                src="/assets/image/clientLogo/clientLogo-(10).png"
                width={"218px"}
                height={"34px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.30">
              <Image
                src="/assets/image/clientLogo/clientLogo-(4).png"
                width={"230px"}
                height={"96px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.40">
              <Image
                src="/assets/image/clientLogo/clientLogo-(3).png"
                width={"220px"}
                height={"30px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.50">
              <Image
                src="/assets/image/clientLogo/clientLogo-(2).png"
                width={"260px"}
                height={"39px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.60">
              <Image
                src="/assets/image/clientLogo/clientLogo-(9).png"
                width={"140px"}
                height={"206px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.50">
              <Image
                src="/assets/image/clientLogo/clientLogo-(11).png"
                width={"352px"}
                height={"78px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.60">
              <Image
                src="/assets/image/clientLogo/clientLogo-(12).png"
                width={"244px"}
                height={"65px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.70">
              <Image
                src="/assets/image/clientLogo/clientLogo-(1).png"
                width={"166px"}
                height={"124px"}
              />
            </ZoomInWithBounce>
          </Box>
          <Box justifySelf={"center"}>
            <ZoomInWithBounce delay="0.80">
              <Image
                src="/assets/image/clientLogo/clientLogo-(8).png"
                width={"182px"}
                height={"86px"}
              />
            </ZoomInWithBounce>
          </Box>
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export default ClientsLogo;
