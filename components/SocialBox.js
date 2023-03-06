import { Box, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ClientsLogo from "./ClientsLogo";

const SocialBox = () => {
  return (
    <Box>
      <Container maxWidth={"7xl"}>
        <HStack
          justifyContent={"space-around"}
          textAlign="center"
          mb={20}
          display="flex"
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex
            flexDir={"row"}
            justifyContent={{ base: "space-evenly", md: "space-around" }}
            width="100%"
          >
            <Box>
              <Image
                src={"/assets/image/icons/SocialFB.png"}
                width="150px"
                height={"150px"}
              />
            </Box>
            <Box>
              <Image
                src={"/assets/image/icons/socialInsta.png"}
                width="150px"
                height={"150px"}
              />
            </Box>
            <Box>
              <Image
                src={"/assets/image/icons/socialTiktok.png"}
                width="150px"
                height={"150px"}
              />
            </Box>
          </Flex>
          <Flex
            flexDir={"row"}
            justifyContent={{ base: "space-evenly", md: "space-around" }}
            width="100%"
          >
            <Box>
              <Image
                src={"/assets/image/icons/socialSnap.png"}
                width="150px"
                height={"150px"}
              />
            </Box>
            <Box>
              <Image
                src={"/assets/image/icons/socialLinkedin.png"}
                width="150px"
                height={"150px"}
              />
            </Box>
            <Box>
              <Image
                src={"/assets/image/icons/socialGMBs.png"}
                width="150px"
                height={"150px"}
              />
            </Box>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export default SocialBox;
