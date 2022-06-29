import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const BlogList = (props) => {
  return (
    <Box as={ChakraLink} href={props.url} _hover={{ textDecoration: "none" }}>
      <Image src={props.img} width="355px" height={"426px"} objectFit="cover" />
      <Heading fontSize={"2xl"} pr="60px" height={"90px"}>
        {props.heading}
      </Heading>
      <Box my={5} display="flex">
        <Text
          fontSize={"2xl"}
          bg="#FFDE11"
          width={"fit-content"}
          p={"5px 30px 5px 20px"}
        >
          {props.date}
        </Text>
        <Box
          as="span"
          style={{
            width: "20px",
            background: "#fff",
            transform: "rotate(25deg)",
            margin: "-10px",
          }}
        ></Box>
        <Box
          marginLeft={"auto"}
          cursor="pointer"
          alignSelf={"center"}
          marginRight="40px"
        >
          <ChevronRightIcon
            background={"#FFDE11"}
            borderRadius={"10px"}
            w="1.5em"
            h="1.5em"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogList;
