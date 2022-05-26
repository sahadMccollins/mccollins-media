import { Box, Container, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box style={{ position: "relative", zIndex: 99 }}>
      <Container maxW="7xl">
        <Box position="relative">
          <Image src="/assets/image/navbar/logo.png" />
          hello
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
