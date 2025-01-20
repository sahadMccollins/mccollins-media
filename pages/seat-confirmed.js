import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  Box,
  Stack,
  Image as Chakraimage,
  Container,
  Heading,
  Text,
  ButtonGroup,
  Button,
  useMediaQuery,
  List,
  ListItem,
  ListIcon,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  CalendarDays,
  CalendarIcon,
  CheckCircleIcon,
  ChevronRight,
  Clock,
  DownloadIcon,
  MapPin,
  PhoneCallIcon,
  UsersIcon,
} from "lucide-react";
import axios from "axios";
import FooterNav from "../components/Landing-page-components/FooterNav";
import SearchEngineBanner from "../components/Landing-page-components/SearchEnginBanner";
import ThankYouBox1 from "../components/Thankyou-component";
import ZoomOut from "../components/Motion/ZoomOut";
import FadeUp from "../components/Motion/FadeUp";
import { QuestionIcon } from "@chakra-ui/icons";

const SeatConfirmed = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const router = useRouter();
  const accentColor = "#FFDE11";
  const bgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Box position="">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Stack>
        <Stack marginTop={"-85px"} position="relative">
          <Box>
            <ZoomOut>
              <Chakraimage
                src="/assets/image/banner/about-banner.webp"
                alt="mccollins media banner image"
                width="100vw"
                height={"100vh"}
                minHeight={isLargerThan780 ? "600px" : "500px"}
                objectFit="cover"
                className="herobanner"
              />
            </ZoomOut>
          </Box>
          <Box position={"absolute"} width="100%" bottom={"50px"} color="#fff">
            <Container maxWidth={"7xl"}>
              <Box width={{ base: "100%", md: "50%" }}>
                <FadeUp>
                  <FadeUp>
                    <Heading className="bannerH2" color="#FFDE11">
                      Thank you for booking your seat!
                    </Heading>

                    <Heading className="bannerH2">
                      Get Ready for the Marketing Workshop
                    </Heading>
                  </FadeUp>
                </FadeUp>
                <FadeUp>
                  <ButtonGroup gap="4" zIndex="99" mt={"25px"}>
                    {router.pathname !== "/" && (
                      <Button
                        colorScheme="yellow"
                        background={"#FFDE11"}
                        borderRadius="20px"
                        color="#000"
                        onClick={() =>
                          router.push("https://calendly.com/manjeet-0rp5/30min")
                        }
                      >
                        Schedule an Appointment
                      </Button>
                    )}
                    {router.pathname == "/seat-confirmed" && (
                      <Button
                        colorScheme="whiteAlpha"
                        onClick={() => router.push("/")}
                        borderRadius="20px"
                        color="#fff"
                      >
                        &nbsp;&nbsp;Go to home
                      </Button>
                    )}
                  </ButtonGroup>
                </FadeUp>
              </Box>
            </Container>
          </Box>
        </Stack>
        <Box bg={bgColor} py={12}>
          <Container maxWidth="7xl">
            <FadeUp>
              <VStack spacing={8} align="stretch">
                <Text fontSize="xl" fontWeight="medium" textAlign="center">
                  We're thrilled to have you join us! Your seat is confirmed for
                  the upcoming workshop where we'll explore cutting-edge
                  strategies to elevate your restaurant's marketing game.
                </Text>

                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <Heading
                    as="h3"
                    size="lg"
                    mb={6}
                    textAlign="center"
                    // color={accentColor}
                  >
                    WHAT'S NEXT?
                  </Heading>
                  <List spacing={6}>
                    <ListItem>
                      <HStack align="start">
                        <ListIcon
                          as={DownloadIcon}
                          color={accentColor}
                          w={6}
                          h={6}
                          mt={1}
                        />
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="bold">Check Your Email</Text>
                          <Text>
                            We've sent a detailed confirmation to your inbox. It
                            includes important information about the workshop.
                            If you haven't received it, please let us know.
                          </Text>
                        </VStack>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack align="start">
                        <ListIcon
                          as={CalendarIcon}
                          color={accentColor}
                          w={6}
                          h={6}
                          mt={1}
                        />
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="bold">Mark Your Calendar</Text>
                          <Text>
                            Set a reminder for February 05 Wednesday, 2025, from
                            10:00 AM to 1:00 PM. Don't miss out!
                          </Text>
                        </VStack>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack align="start">
                        <ListIcon
                          as={QuestionIcon}
                          color={accentColor}
                          w={6}
                          h={6}
                          mt={1}
                        />
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="bold">Prepare Your Questions</Text>
                          <Text>
                            Jot down any specific questions or challenges you'd
                            like our experts to address during the Q&A session.
                          </Text>
                        </VStack>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack align="start">
                        <ListIcon
                          as={UsersIcon}
                          color={accentColor}
                          w={6}
                          h={6}
                          mt={1}
                        />
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="bold">Get Ready to Network</Text>
                          <Text>
                            Prepare to connect with fellow restaurant owners and
                            industry leaders. Bring your business cards!
                          </Text>
                        </VStack>
                      </HStack>
                    </ListItem>
                  </List>
                </Box>

                <VStack spacing={4}>
                  <Heading as="h4" size="md" textAlign="center">
                    Have questions? Book a free call with us to get started!
                  </Heading>
                  <Button
                    leftIcon={<PhoneCallIcon />}
                    colorScheme="yellow"
                    background={"#FFDE11"}
                    borderRadius="20px"
                    color="#000"
                    onClick={() =>
                      router.push("https://calendly.com/manjeet-0rp5/30min")
                    }
                  >
                    Schedule a Pre Workshop Consultation
                  </Button>
                </VStack>
              </VStack>
            </FadeUp>
          </Container>
        </Box>
      </Stack>
    </Box>
  );
};
export default SeatConfirmed;
