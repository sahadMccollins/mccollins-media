import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../components/Layout/InnerLayout";

const Nopage = () => {
  return (
    <Stack bg="#FFDE11" minH={"700px"} mt="-85px">
      <Box
        pb={"50px"}
        pt={"100px"}
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        <img src="/assets/image/banner/404.png" width={"500px"} />
        <Heading className="h2404">Page Not Found</Heading>
        <Text className="p404" pt="5" pb={10}>
          The requested URL was not found on this server
        </Text>
      </Box>
    </Stack>
  );
};

Nopage.getLayout = function getLayout(Nopage) {
  return <InnerLayout>{Nopage}</InnerLayout>;
};

export default Nopage;
