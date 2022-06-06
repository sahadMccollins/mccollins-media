import { Box, Container, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ClientsLogo from "./ClientsLogo";

const SocialBox = () => {
  return (
    <Box>
      <Container maxWidth={"7xl"}>
        <HStack justifyContent={"space-around"} textAlign="center" mb={20}>
          <Box>
            <Image
              src={"/assets/image/icons/socialFB.svg"}
              width="82px"
              height={"82px"}
            />
            <Text>facebook</Text>
          </Box>
          <Box>
            <Image
              src={"/assets/image/icons/socialInsta.svg"}
              width="82px"
              height={"82px"}
            />
            <Text>instagram</Text>
          </Box>
          <Box>
            <Image
              src={"/assets/image/icons/socialTiktok.svg"}
              width="82px"
              height={"82px"}
            />
            <Text>tiktok</Text>
          </Box>
          <Box>
            <Image
              src={"/assets/image/icons/socialSnap.svg"}
              width="82px"
              height={"82px"}
            />
            <Text>snapchat</Text>
          </Box>
          <Box>
            <Image
              src={"/assets/image/icons/socialLinkedin.svg"}
              width="82px"
              height={"82px"}
            />
            <Text>linkedin</Text>
          </Box>
          <Box>
            <Image
              src={"/assets/image/icons/socialGMB.svg"}
              width="82px"
              height={"82px"}
            />
            <Text>GMB</Text>
          </Box>
        </HStack>
      </Container>
      <ClientsLogo />
    </Box>
  );
};

export default SocialBox;
