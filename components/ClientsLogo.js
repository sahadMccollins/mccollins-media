import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import FadeUp from "./Motion/FadeUp";

const ClientsLogo = () => {
  return (
    <Stack
      background={"#FFDE11"}
      position="relative"
      className={"clientsLogoStack"}
    >
      <Container maxWidth={"7xl"} py="20">
        <Box
          position={"absolute"}
          right="0"
          top={{ base: "45", md: "100" }}
          width={{ base: "25%", md: "unset" }}
        >
          <Image
            alt="McCollins Media"
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
              className="main-h2"
              fontWeight={"black"}
            >
              CLIENTS WE WORK WITH
              <span style={{ color: "#fff", fontSize: "20px" }}>■</span>
            </Heading>
          </Flex>
        </FadeUp>
        <FadeUp>
          <SimpleGrid
            columns={{ base: 3, md: 4 }}
            spacingX="40px"
            spacingY="60px"
            alignItems={"center"}
            mt="75px"
          >
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(5).png"
                width={"330px"}
                height={"72px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(6).png"
                width={"118px"}
                height={"118px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(7).png"
                width={"225px"}
                height={"37px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(10).png"
                width={"218px"}
                height={"34px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(4).png"
                width={"230px"}
                height={"96px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(3).png"
                width={"220px"}
                height={"30px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(2).png"
                width={"260px"}
                height={"39px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(9).png"
                width={"140px"}
                height={"206px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(11).png"
                width={"352px"}
                height={"78px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(12).png"
                width={"244px"}
                height={"65px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(1).png"
                width={"166px"}
                height={"124px"}
              />
            </Box>
            <Box justifySelf={"center"}>
              <Image
                alt="McCollins Media"
                src="/assets/image/clientLogo/clientLogo-(8).png"
                width={"182px"}
                height={"86px"}
              />
            </Box>
          </SimpleGrid>
        </FadeUp>
      </Container>
    </Stack>
  );
};

export default ClientsLogo;
