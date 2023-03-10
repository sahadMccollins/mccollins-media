import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";

const SeoIcon = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  return (
    <Stack>
      <Container maxWidth={"7xl"} pb="20">
        <Flex justifyContent={"center"} mt="75px" wrap={"wrap"}>
          <Box p={4}>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-01.png"
              width="200px"
              height="200px"
            />
          </Box>
          <Box p={4}>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-02.png"
              width="200px"
              height="200px"
            />
          </Box>
          <Box p={4}>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-03.png"
              width="200px"
              height="200px"
            />
          </Box>
          <Box p={4}>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-04.png"
              width="200px"
              height="200px"
            />
          </Box>
          <Box p={4}>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-05.png"
              width="200px"
              height="200px"
            />
          </Box>

          <Box p={4}>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-06.png"
              width="200px"
              height="200px"
            />
          </Box>
          <Box p={4}>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-07.png"
              width="200px"
              height="200px"
            />
          </Box>
          <Box p={4}>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-08.png"
              width="200px"
              height="200px"
            />
          </Box>
          <Box p={4}>
            <Image
              alt="McCollins Media"
              src="/assets/image/icons/seo/SEO -Wrok-LOGO-09.png"
              width="200px"
              height="200px"
            />
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default SeoIcon;
