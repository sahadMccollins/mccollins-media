import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceTabsDetails = (props) => {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Box width={"100%"} pr="75px">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            alt="McCollins Media"
            src={props.img}
            width="610px"
            height="905px"
          />
        </motion.div>
      </Box>
      <Box width={"100%"} alignSelf="center">
        <Box display={"flex"}>
          <Heading>
            {props.heading
              ? props.heading
                  .split("\n")
                  .map((str) => <div key={str}>{str}</div>)
              : null}
          </Heading>
          <Box
            width={"100px"}
            height={"7px"}
            background="#FFE962"
            alignSelf={{ md: "end", base: "end" }}
            marginBottom="10px"
            marginLeft={"20px"}
            placeSelf="end"
          ></Box>
        </Box>
        <Heading fontSize={"2xl"} color="#6F6F6F" my={"15px"}>
          {props.subHeading}
        </Heading>
        <Text w={{ base: "100%", md: "75%" }}>{props.desc}</Text>
        <SimpleGrid columns={2} spacing={5} mt="50px" fontWeight={"bold"}>
          {props.points &&
            props.points.split("\n").map((str) => <Text key={str}>{str}</Text>)}
        </SimpleGrid>
        <Button
          colorScheme="yellow"
          background={"#FFDE11"}
          borderRadius="20px"
          color="#000"
          mt={7}
          fontWeight="bold"
        >
          view more <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
        </Button>
      </Box>
    </Flex>
  );
};

export default ServiceTabsDetails;
