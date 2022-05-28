import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const ServiceTabsDetails = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Box width={"100%"}>
        <Image
          src="/assets/image/ServiceTabs/IphoneReels.png"
          width="100%"
          height="100%"
        />
      </Box>
      <Box width={"100%"} alignSelf="center">
        <Box display={"flex"}>
          <Heading>
            CONTENT <br />
            PRODUCTION
          </Heading>
          <Box
            width={"100px"}
            height={"7px"}
            background="#FFE962"
            alignSelf={{ md: "end", base: "center" }}
            marginBottom="10px"
            marginLeft={"20px"}
          ></Box>
        </Box>
        <Heading fontSize={"2xl"} color="#6F6F6F" my={"15px"}>
          creating content that tells a story
        </Heading>
        <Text w={{ base: "100%", md: "75%" }}>
          Creating exclusive brand content is a great way to communicate a story
          about your brand. In the digital space, this is a content process of
          CREATING
        </Text>
        <SimpleGrid columns={2} spacing={5} mt="50px" fontWeight={"bold"}>
          <Text>photography</Text>
          <Text>cinemagraphs</Text>
          <Text>food photography</Text>
          <Text>stop motion videos</Text>
          <Text>mobile first content</Text>
          <Text>brand montage videos</Text>
          <Text>videography</Text>
          <Text>corporate videos</Text>
          <Text>360 images and videos</Text>
          <Text>product videos</Text>
        </SimpleGrid>
        <Button
          colorScheme="yellow"
          background={"#FFDE11"}
          borderRadius="20px"
          color="#000"
          mt={7}
          fontWeight="bold"
        >
          view more <ChevronRightIcon mt={3} width="1.3em" height="1.3em" />
        </Button>
      </Box>
    </Flex>
  );
};

export default ServiceTabsDetails;
