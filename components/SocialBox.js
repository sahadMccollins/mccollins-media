import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
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
            mb={{ base: "10", md: "0" }}
          >
            <Box>
              <Image
                src={"/assets/image/icons/socialFB.svg"}
                width="82px"
                height={"82px"}
              />
              {/* <Text>facebook</Text> */}
            </Box>
            <Box>
              <Image
                src={"/assets/image/icons/socialInsta.svg"}
                width="82px"
                height={"82px"}
              />
              {/* <Text>instagram</Text> */}
            </Box>
            <Box>
              <Image
                src={"/assets/image/icons/socialTiktok.svg"}
                width="82px"
                height={"82px"}
              />
              {/* <Text>tiktok</Text> */}
            </Box>
          </Flex>
          <Flex
            flexDir={"row"}
            justifyContent={{ base: "space-evenly", md: "space-around" }}
            width="100%"
          >
            <Box>
              <Image
                src={"/assets/image/icons/socialSnap.svg"}
                width="82px"
                height={"82px"}
              />
              {/* <Text>snapchat</Text> */}
            </Box>
            <Box>
              <Image
                src={"/assets/image/icons/socialLinkedin.svg"}
                width="82px"
                height={"82px"}
              />
              {/* <Text>linkedin</Text> */}
            </Box>
            <Box>
              <Image
                src={"/assets/image/icons/socialGMBs.svg"}
                width="82px"
                height={"82px"}
              />
              {/* <Text>GMB</Text> */}
            </Box>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export default SocialBox;
