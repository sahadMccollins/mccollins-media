import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const TechIcon = () => {
  return (
    <Stack>
      <Container maxWidth={"7xl"} pb="20">
        <SimpleGrid
          columns={{ base: 2, md: 5 }}
          spacingX="40px"
          spacingY="60px"
          alignItems={"center"}
          mt="75px"
          textAlign={"center"}
        >
          <Box>
            <Image
              src="/assets/image/techLogo/angular.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              angular
            </Text>
          </Box>
          <Box>
            <Image
              src="/assets/image/techLogo/flutter.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              flutter
            </Text>
          </Box>
          <Box>
            <Image
              src="/assets/image/techLogo/codeIgniter.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              codeigniter
            </Text>
          </Box>
          <Box>
            <Image
              src="/assets/image/techLogo/magento.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              magento
            </Text>
          </Box>
          <Box>
            <Image
              src="/assets/image/techLogo/shopify.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              shopify
            </Text>
          </Box>
          <Box>
            <Image
              src="/assets/image/techLogo/vue.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              vue
            </Text>
          </Box>
          <Box>
            <Image
              src="/assets/image/techLogo/prestashop.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              prestashop
            </Text>
          </Box>
          <Box>
            <Image
              src="/assets/image/techLogo/android.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              android
            </Text>
          </Box>
          <Box>
            <Image
              src="/assets/image/techLogo/wordpress.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              wordpress
            </Text>
          </Box>
          <Box>
            <Image
              src="/assets/image/techLogo/swift.png"
              width="97px"
              height="97px"
            />
            <Text mt={5} fontSize={"2xl"} fontWeight={"bold"}>
              swift
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
      <hr />
    </Stack>
  );
};

export default TechIcon;
