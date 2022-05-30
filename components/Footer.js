import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  return (
    <Stack bg={"#000"} pt="70px" pb="20px" className="footer">
      <Container maxWidth={"7xl"} pb="2">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          mb={5}
        >
          <Box width={{ base: "100%", md: "30%" }}>
            <Heading color={"#fff"} fontSize={"7xl"}>
              Got A<br /> Project? <br />
              <span style={{ color: "#FFDE11" }}>Let’s Talk.</span>
            </Heading>
            <Text color={"#fff"} fontSize={"2xl"}>
              reach out to our team and we’ll get back to you within a day.
            </Text>
            <Tabs color={"#fff"} mt="5">
              <TabList>
                <Tab fontSize={"xl"}>Dubai Office.</Tab>
                <Tab fontSize={"xl"}>India Office.</Tab>
              </TabList>
              <TabPanels>
                <TabPanel pl={"0"}>
                  <Text>209, Entance C, Loft Offices 1 Dubai Media City</Text>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Box fontSize={"18px"} color="#fff" mt={"5"}>
              <Text>
                <b>Phone. </b>+971 4 445 6848
              </Text>
              <Text>
                <b>Mobile. </b>+971 55 956 4135
              </Text>
              <Text>
                <b>Email. </b>info@mccollinsmedia.com
              </Text>
            </Box>
            <Flex mt={5}>
              <Box p={3} pl={0}>
                <Image
                  src="/assets/image/icons/tiktok.svg"
                  width={"18px"}
                  height="21px"
                />
              </Box>
              <Box p={3}>
                <Image
                  src="/assets/image/icons/insta.svg"
                  width={"21px"}
                  height="21px"
                />
              </Box>
              <Box p={3}>
                <Image
                  src="/assets/image/icons/fb.svg"
                  width={"9px"}
                  height="21px"
                />
              </Box>
              <Box p={3}>
                <Image
                  src="/assets/image/icons/linkedin.svg"
                  width={"22px"}
                  height="21px"
                />
              </Box>
              <Box p={3}>
                <Image
                  src="/assets/image/icons/twiter.svg"
                  width={"27px"}
                  height="20px"
                />
              </Box>
            </Flex>
          </Box>
          <Box width={{ base: "100%", md: "50%" }} color="#fff">
            <form>
              <FormControl isRequired>
                <FormLabel htmlFor="first-name">First name</FormLabel>
                <Input id="first-name" borderRadius={"50px"} />
              </FormControl>
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="contact">Contact No</FormLabel>
                <NumberInput max={50} min={10}>
                  <NumberInputField id="contact" borderRadius={"50px"} />
                </NumberInput>
              </FormControl>
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" borderRadius={"50px"} />
              </FormControl>
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="first-name">Looking For?</FormLabel>
                <Input id="first-name" borderRadius={"50px"} />
              </FormControl>
              <FormControl isRequired mt={5}>
                <FormLabel htmlFor="first-name">Project Details</FormLabel>
                <Input id="first-name" borderRadius={"50px"} />
              </FormControl>
              <Button
                mt={5}
                colorScheme="yellow"
                background={"#FFDE11"}
                type="submit"
                borderRadius={"50px"}
                fontSize={"18px"}
                fontWeight="bold"
              >
                Submit Inquiry
              </Button>
            </form>
          </Box>
        </Flex>
        <hr />
        <Flex mt={"50px"} justifyContent="space-between" alignItems={"center"}>
          <Box>
            <Image
              src="/assets/image/navbar/logo-yellow.png"
              alt="Mccolins Media logo"
              width="209px"
              height="46"
            />
          </Box>
          <Box>
            <Text color={"#fff"} fontSize="12px">
              © 2021 All Rights Reserved{" "}
              <span style={{ color: "#FFDE11", cursor: "pointer" }}>
                McCollins Media
              </span>
            </Text>
          </Box>
          <Box>
            <Text color={"#fff"} fontSize="12px" cursor={"pointer"}>
              Privacy Policy &nbsp;&nbsp; I &nbsp;&nbsp; Terms & Conditions
            </Text>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default Footer;
