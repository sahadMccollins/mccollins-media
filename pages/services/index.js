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
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import ServicePageAccordian from "../../components/ServicePageAccordian";
import TextBox2 from "../../components/TextBox2";
import { useRouter } from "next/router";

const Index = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const router = useRouter();
  return (
    <Stack>
      <Container maxWidth={"7xl"} mb={{ base: "150px", md: "unset" }}>
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
            <Heading fontSize={{ base: "60px", md: "70px" }} fontWeight="black">
              what we do and {isLargerThan780 ? <br /> : ""}
              how we do it.
            </Heading>
            <Button
              colorScheme="yellow"
              background={"#FFDE11"}
              borderRadius="20px"
              color="#000"
              mt={"5"}
              onClick={() => router.push("/contact")}
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
            zIndex="2"
          >
            <Image
              src="/assets/image/servicePage/ourServicesAlp.svg"
              height={"750px"}
              width={"122px"}
            />
          </Box>
        </Box>
      </Container>

      <ServicePageAccordian />
      <TextBox2
        heading={
          "Your extended marketing arm ! \n Be a part of the Digital Revolution"
        }
        // subHeading={"creating content that tells a story"}
        content={
          "Our team prides in daring to experiment with evolving digital trends, providing a personalized approach to our clients, and ensuring we create a result driven plan to achieve our brands objectives. We are a young and passionate full service in-house team based in Dubai Media City. "
        }
        content2={
          "Our Key services include Social Media Marketing, Website , Search Engine Optimization & Search Engine Marketing and Content Development – Videography & Photography!"
        }
      />
    </Stack>
  );
};

Index.getLayout = function getLayout(Index) {
  return <InnerLayout>{Index}</InnerLayout>;
};

export default Index;
