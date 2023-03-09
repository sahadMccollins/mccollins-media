import {
  Box,
  Container,
  Flex,
  Heading,
  OrderedList,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import CaseStudy from "../../../components/CaseStudy";
import FavWork from "../../../components/FavWork";
import InnerBannerTwo from "../../../components/InnerBannerTwo";
import InnerLayout from "../../../components/Layout/InnerLayout";
import ServicePoint from "../../../components/ServicePoint";
import TextBox from "../../../components/TextBox";

const ARExperiences = () => {
  const favWorkData = [
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
    {
      name: "DAFZA",
      img: "/assets/image/caseStudy/caseStudy1.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Costa Coffee",
      img: "/assets/image/caseStudy/caseStudy2.jpg",
      type: "Web Devlopment",
    },
    {
      name: "Fujifilm",
      img: "/assets/image/caseStudy/caseStudy3.jpg",
      type: "Web Devlopment",
    },
  ];
  return (
    <Stack position={"relative"} className="sub-service">
      <InnerBannerTwo h1="AR Experiences" />
      <Box>
        <Container maxWidth={"4xl"} mt={10}>
          <Text mt={{ base: 5, md: 0 }} className="main-p" textAlign="center">
            Augmented Reality (AR) brand experiences involve the use of
            technology to enhance the customer's interaction with a brand. AR
            technology allows customers to engage with a brand in a more
            immersive and interactive way, creating a memorable experience that
            can lead to increased brand awareness, customer loyalty, and sales.
            Being an Augmented Reality Development Agency in Dubai, we design
            and develop AR Experiences which work for your brand. Our skilled
            in-house AR Developers in UAE can work on the latest technologies
            and deliver an unforgettable experience.
          </Text>
        </Container>
        <Container maxWidth={"7xl"} py={"10"}>
          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-around"
            gap={5}
          >
            <Image
              alt="McCollins Media"
              src={"/assets/image/servicePage/subPage/AR Experiences-01.jpg"}
              width="585px"
              height={"500px"}
              objectFit="cover"
            />

            <Image
              alt="McCollins Media"
              src={"/assets/image/servicePage/subPage/AR Experiences-04.jpg"}
              width="585px"
              height={"500px"}
              objectFit="cover"
            />
          </Box>
          <Box mt={10}>
            <Heading as={"h3"} className={"main-h3"} mt={{ base: 5, md: 0 }}>
              How can your brand develop an AR Experience with McCollins :
            </Heading>
            <OrderedList my={"6"}>
              <li>
                <Text fontSize={"20px"} className="main-p">
                  <b>Product visualization:</b> AR can be used to create
                  interactive 3D models of products, allowing customers to see
                  how they would look in their own environment or interact with
                  them in a virtual space.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Gamification:</b> Brands can use AR to create interactive
                  games and challenges that engage customers and encourage them
                  to explore the brand's products and services.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Virtual try-ons:</b> AR can be used to create virtual
                  try-on experiences for products such as clothing, makeup, and
                  eyewear, allowing customers to see how they would look before
                  making a purchase.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Interactive displays:</b> Brands can use AR to create
                  interactive displays in physical retail locations or at
                  events, allowing customers to engage with the brand in a more
                  immersive and memorable way.
                </Text>
              </li>
              <li>
                <Text fontSize={"20px"} mt="5" className="main-p">
                  <b>Storytelling:</b> AR can be used to create immersive and
                  interactive storytelling experiences that showcase the brand's
                  values and messaging, helping to create an emotional
                  connection with customers.
                </Text>
              </li>
            </OrderedList>
          </Box>
          <Flex direction={{ base: "column-reverse", md: "row" }} mt={10}>
            <Box
              width={{ base: "100%", md: "50%" }}
              mr={{ base: 0, md: 10 }}
              position="relative"
              display={"flex"}
              flexDir={"column"}
              justifyContent="space-around"
            >
              <Image
                alt="McCollins Media"
                src={"/assets/image/servicePage/subPage/AR Experiences-02.jpg"}
                width="585px"
                height={"800px"}
                objectFit="cover"
              />
            </Box>
            <Box
              width={{ base: "100%", md: "50%" }}
              alignSelf="center"
              mt={{ base: 5, md: 0 }}
            >
              <Heading
                as={"h4"}
                fontSize={{ base: "18px", md: "22px" }}
                fontWeight={"600"}
              >
                There are several AR tools available that brands can use to
                create engaging and immersive AR experiences for their
                customers. Here are some of the most popular AR tools:
              </Heading>
              <OrderedList my={"6"}>
                <li>
                  <Text fontSize={"20px"} className="main-p">
                    <b>ARKit:</b> ARKit is a framework developed by Apple for
                    building AR experiences on iOS devices. It provides
                    developers with tools and resources to create immersive AR
                    experiences, including 3D object recognition and tracking,
                    face tracking, and realistic rendering.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>ARCore:</b> ARCore is a platform developed by Google for
                    building AR experiences on Android devices. It provides
                    developers with tools and resources to create AR experiences
                    that can detect surfaces, track objects, and interact with
                    the physical environment.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Vuforia:</b> Vuforia is an AR platform that provides
                    developers with tools and resources to create AR experiences
                    across multiple platforms, including iOS, Android, and
                    Unity. It includes features such as image recognition,
                    object recognition, and cloud recognition.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Unity:</b> Unity is a game development engine that can be
                    used to create AR experiences. It provides developers with
                    tools and resources to create 3D models, animations, and
                    interactive experiences, and supports AR platforms such as
                    ARKit and ARCore.
                  </Text>
                </li>
                <li>
                  <Text fontSize={"20px"} mt="5" className="main-p">
                    <b>Spark AR:</b> Spark AR is a platform developed by
                    Facebook for creating AR experiences for the Facebook and
                    Instagram platforms. It includes features such as face
                    tracking, 3D object recognition, and animations, and allows
                    developers to create AR experiences that can be shared on
                    social media. This is one of our most used platforms to
                    develop augmented reality experiences in the UAE.
                  </Text>
                </li>
              </OrderedList>
            </Box>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} mt={10}>
            <Box mr={{ base: 0, md: 10 }} alignSelf="center" className="main-p">
              <Text className="main-p">
                Overall, these AR tools provide brands with the resources and
                tools needed to create engaging and immersive AR experiences
                that can help to increase brand awareness, customer engagement,
                and sales. It requires a focus on creating experiences that
                align with the brand's values and messaging and that resonate
                with its target audience. Overall, AR brand experiences offer a
                unique opportunity for brands to create memorable and engaging
                experiences that can help to increase brand awareness, customer
                engagement, and sales. It requires a focus on creating immersive
                and interactive experiences that align with the brand's values
                and messaging and that resonate with its target audience.
              </Text>
            </Box>
          </Flex>
        </Container>
        {/* <CaseStudy data={favWorkData} /> */}
      </Box>
    </Stack>
  );
};

ARExperiences.getLayout = function getLayout(ARExperiences) {
  return <InnerLayout>{ARExperiences}</InnerLayout>;
};

export default ARExperiences;
