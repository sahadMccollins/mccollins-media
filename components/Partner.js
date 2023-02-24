import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Partner = () => {
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
              src="/assets/image/partner/ (1).png"
              width="120px"
              height="120px"
            />
          </Box>
          <Box>
            <Image
              src="/assets/image/partner/ (2).png"
              width="120px"
              height="120px"
            />
          </Box>
          <Box>
            <Image
              src="/assets/image/partner/ (3).png"
              width="120px"
              height="120px"
            />
          </Box>
          <Box>
            <Image
              src="/assets/image/partner/ (4).png"
              width="120px"
              height="120px"
            />
          </Box>
          <Box>
            <Image
              src="/assets/image/partner/ (5).png"
              width="120px"
              height="120px"
            />
          </Box>
          <Box display={{ base: "none", md: "block" }}></Box>
          <Box>
            <Image
              src="/assets/image/partner/ (6).png"
              width="120px"
              height="120px"
            />
          </Box>
          <Box>
            <Image
              src="/assets/image/partner/ (7).png"
              width="120px"
              height="120px"
            />
          </Box>
          <Box>
            <Image
              src="/assets/image/partner/ (8).png"
              width="120px"
              height="120px"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export default Partner;
