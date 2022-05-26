import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Image,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <header>
      <Box style={{ position: "relative", zIndex: 99 }} paddingTop="14">
        <Container maxW="7xl" display="flex">
          <Box position="relative" flexGrow="1">
            <Image
              src="/assets/image/navbar/logo.png"
              width="223px"
              height="50px"
            />
          </Box>
          <ButtonGroup gap="4">
            <Button colorScheme="whiteAlpha" borderRadius="20px" color="#000">
              <Image
                src="/assets/image/navbar/call.png"
                width="25px"
                height="25px"
                marginRight="10px"
              />
              Call
            </Button>
            <Button colorScheme="whiteAlpha" borderRadius="20px" color="#000">
              <Image
                src="/assets/image/navbar/chat.png"
                width="25px"
                height="25px"
                marginRight="10px"
              />
              Lets talk
            </Button>
          </ButtonGroup>
        </Container>
      </Box>
    </header>
  );
};

export default Navbar;
