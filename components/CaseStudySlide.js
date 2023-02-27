import { Box, Heading, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

const CaseStudySlide = (props) => {
  return (
    <Box position={"relative"} bottom={"-5px"}>
      <Image src={props.img} priority={true} width="270px" height="400px" />
      <Box
        position={"absolute"}
        bottom="0"
        width={{ base: "270px", md: "100%" }}
        height="90px"
        background={"#000"}
        backgroundColor={"rgba(0,0,0,0.5)"}
        borderTopRightRadius="50px"
      >
        <Heading color={"#FFDE11"} fontSize="28px" mt={"15px"} mx={"15px"}>
          {props.name}
        </Heading>
        <Text color={"#fff"} mx={"15px"}>
          {props.type}
        </Text>
      </Box>
      <Box
        position={"absolute"}
        width={{ base: "270px", md: "100%" }}
        bottom={4}
        textAlign="right"
        paddingRight={"20px"}
        cursor="pointer"
      >
        <ChevronRightIcon
          background={"#FFDE11"}
          borderRadius={"10px"}
          w="1.3em"
          h="1.3em"
        />
      </Box>
    </Box>
  );
};

export default CaseStudySlide;
