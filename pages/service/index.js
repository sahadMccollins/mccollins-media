import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../../components/InnerLayout";
import Image from "next/image";
import ServicePageAccordian from "../../components/ServicePageAccordian";

const index = () => {
  //   const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  return (
    <Stack>
      <Container maxWidth={"7xl"}>
        <Box height="100vh" minHeight={"700px"} mt="-85px">
          <Box
            width={{ base: "100%", md: "70%" }}
            pt="170px"
            position={"relative"}
          >
            <Box
              position={"absolute"}
              top={{ base: "55%", md: "25%" }}
              left={"70%"}
            >
              <Image
                src="/assets/image/design/3.svg"
                width={"89px"}
                height={"104px"}
                priority={true}
              />
            </Box>
            <Heading fontSize={"50px"} color="#FFDE11">
              our services
            </Heading>
            <Heading fontSize={{ base: "60px", md: "70px" }} fontWeight="bold">
              what we do and {isLargerThan780 ? <br /> : ""}
              how we do it.
            </Heading>
            <Button
              colorScheme="yellow"
              background={"#FFDE11"}
              borderRadius="20px"
              color="#000"
              mt={"5"}
            >
              <Image
                src="/assets/image/icons/call.svg"
                width="25px"
                height="25px"
                priority={true}
              />
              &nbsp;&nbsp;contact us
            </Button>
            <Text
              mt="10"
              fontSize={{ base: "24px", md: "30px" }}
              fontWeight="bold"
              color={"#6F6F6F"}
            >
              our key services include social media marketing, website , search
              engine optimization & search engine marketing and content
              development videography & photography!
            </Text>
          </Box>
          <Box
            position={"absolute"}
            top="130px"
            right={"20%"}
            display={{ base: "none", md: "block" }}
          >
            <Image
              src="/assets/image/servicePage/ourServicesAlp.svg"
              height={"750px"}
              width={"122px"}
              priority={true}
            />
          </Box>
        </Box>
      </Container>

      <ServicePageAccordian />
    </Stack>
  );
};

index.getLayout = function getLayout(index) {
  return <InnerLayout>{index}</InnerLayout>;
};

export default index;
