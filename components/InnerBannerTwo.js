import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const InnerBannerTwo = (props) => {
  return (
    <Box className="ibt-box">
      <Heading className="ibt-h2" style={{ textTransform: "uppercase" }}>
        {props.h1}
      </Heading>
    </Box>
  );
};

export default InnerBannerTwo;
