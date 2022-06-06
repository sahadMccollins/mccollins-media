import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const InnerBanner = (props) => {
  return (
    <Flex
      mt="-85px"
      height={{ base: "100%", md: "100vh" }}
      minHeight="600px"
      pt="170px"
      direction={{ base: "column", md: "row" }}
    >
      <Box width={{ base: "100%", md: "55%" }} position="relative">
        <Box position={"absolute"} top={{ base: "37%", md: "6%" }} left={"70%"}>
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
        <Heading
          fontSize={{ base: "55px", md: "80px" }}
          color="#000"
          fontWeight="black"
        >
          {props.heading.split("\n").map((str) => (
            <div>{str}</div>
          ))}
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
          fontSize={{ base: "18px", md: "18px" }}
          fontWeight="bold"
          color={"#6F6F6F"}
          pr="5"
        >
          {props.content}
        </Text>
      </Box>
      <Box width={{ base: "100%", md: "45%" }}>
        <Image src={props.img} width="446px" height="467px" priority={true} />
      </Box>
    </Flex>
  );
};

export default InnerBanner;
