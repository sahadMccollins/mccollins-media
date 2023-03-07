import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image as ChakraImg,
  Center,
  SimpleGrid,
  OrderedList,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import InnerLayout from "../../components/Layout/InnerLayout";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ClientsLogo from "../../components/ClientsLogo";
import VideoBanner from "../../components/VideoBanner";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "../../node_modules/react-modal-video/css/modal-video.min.css";
import ServicePoint from "../../components/ServicePoint";

const Film = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  const [videoURL, setvideoURL] = useState("");

  const cpPointRef = useRef(null);

  const scrollFun = () => {
    cpPointRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const videoHandler = (url) => {
    setvideoURL(url);
    setOpen(true);
  };

  return (
    <Stack position={"relative"}>
      <VideoBanner
        heading={`film`}
        video="https://res.cloudinary.com/mccollins-media/video/upload/v1657219369/Mccollins%20Video/Content_Creation_m3dsap.mp4"
        content="From Photo & Video content creation to website redesign & development, and Social Media Branding, we engage with your audience by telling your brand's story!"
        poster="/assets/image/servicePage/contentProduction.jpg"
      />

      <Box position="relative">
        <Container maxWidth={"7xl"} my="10">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            mt={10}
          >
            <Box width={{ base: "100%", md: "50%" }} mr={{ base: 0, md: 10 }}>
              <Box display={"flex"}>
                <Heading>
                  CONTENT <br />
                  PRODUCTION
                </Heading>
                <Box
                  width={"100px"}
                  height={"7px"}
                  background="#000"
                  alignSelf={"end"}
                  marginBottom="10px"
                  marginLeft={"20px"}
                ></Box>
              </Box>
              <Text mt={5}>
                How do you get your brand to stand out of the clutter ? Create
                content which resonates with your audience, which is sharable
                and which tells a story. We can help you with just that. As a
                Content Creation Agency in Dubai, we specialize in Film
                Production for Digital Platforms and more. We also have an
                in-house team of content creators in Dubai for Photography and
                Videography. At this time, CGI Videos are very much in demand ,
                and this is something we enjoy exploring.
              </Text>
            </Box>

            <Box width={{ base: "100%", md: "50%" }} mt={{ base: 10, md: 0 }}>
              <Image
                src="/assets/image/servicePage/film/amazone2.jpg"
                width="700px"
                height="650px"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={"2px"}>
        <Box
          overflow={"hidden"}
          width={"100%"}
          height={{ base: "250px", md: "350px" }}
          position={"relative"}
        >
          <ChakraImg
            src="/assets/image/servicePage/film/11.jpg"
            objectFit={"cover"}
            backgroundRepeat="no-repeat"
            bgPosition={"center"}
            transition="transform 0.5s ease-in"
            _hover={{ transform: "scale(1.2)" }}
            width={"100%"}
            layout={"fill"}
            height="350px"
          />
          <Box className="filmImg" pointerEvents={"none"}>
            <Center display={"flex"} flexDir="column">
              <Heading as={"h3"}>66%</Heading>
              <Text
                textAlign={"center"}
                style={{ fontSize: "13px !important" }}
              >
                brands use short-form video
              </Text>
            </Center>
          </Box>
        </Box>
        <Box
          overflow={"hidden"}
          width={"100%"}
          height={{ base: "250px", md: "350px" }}
          position={"relative"}
        >
          <ChakraImg
            src="/assets/image/servicePage/film/12.jpg"
            objectFit={"cover"}
            backgroundRepeat="no-repeat"
            bgPosition={"center"}
            transition="transform 0.5s ease-in"
            _hover={{ transform: "scale(1.2)" }}
            width={"100%"}
            layout={"fill"}
            height="350px"
          />
          <Box className="filmImg" pointerEvents={"none"}>
            <Center display={"flex"} flexDir="column">
              <Heading as={"h3"}>88%</Heading>
              <Text
                textAlign={"center"}
                style={{ fontSize: "13px !important" }}
              >
                are satisfied with Video ROI
              </Text>
            </Center>
          </Box>
        </Box>
        <Box
          overflow={"hidden"}
          width={"100%"}
          height={{ base: "250px", md: "350px" }}
          position={"relative"}
        >
          <ChakraImg
            src="/assets/image/servicePage/film/13.jpg"
            objectFit={"cover"}
            backgroundRepeat="no-repeat"
            bgPosition={"center"}
            transition="transform 0.5s ease-in"
            _hover={{ transform: "scale(1.2)" }}
            width={"100%"}
            layout={"fill"}
            height="350px"
          />
          <Box className="filmImg" pointerEvents={"none"}>
            <Center display={"flex"} flexDir="column">
              <Heading as={"h3"}>75%</Heading>
              <Text
                textAlign={"center"}
                style={{ fontSize: "13px !important" }}
              >
                of videos are viewed on Mobile Devices
              </Text>
            </Center>
          </Box>
        </Box>
        <Box
          overflow={"hidden"}
          width={"100%"}
          height={{ base: "250px", md: "350px" }}
          position={"relative"}
        >
          <ChakraImg
            src="/assets/image/servicePage/film/14.jpg"
            objectFit={"cover"}
            backgroundRepeat="no-repeat"
            bgPosition={"center"}
            transition="transform 0.5s ease-in"
            _hover={{ transform: "scale(1.2)" }}
            width={"100%"}
            layout={"fill"}
            height="350px"
          />
          <Box className="filmImg" pointerEvents={"none"}>
            <Center display={"flex"} flexDir="column">
              <Heading as={"h3"}>300%</Heading>
              <Text
                textAlign={"center"}
                style={{ fontSize: "13px !important" }}
              >
                higher CTR with Videos
              </Text>
            </Center>
          </Box>
        </Box>
      </SimpleGrid>
      <Box>
        <video
          title="Film Production Company Dubai"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          alt="McCollins Media Production"
          style={{ width: "100%", marginTop: "-10px", marginBottom: "-10px" }}
        >
          <source
            src="https://res.cloudinary.com/mccollins-media/video/upload/v1678182417/Mccollins%20Video/Toshiba-Arabicversion-Youngman2_bvjmwq.mp4"
            type="video/mp4"
            media="screen"
          />
          Your browser does not support HTML5 video.
        </video>
      </Box>
      <Heading
        textAlign={"center"}
        bg={"#F7F7F7"}
        style={{ marginBottom: "-35px", paddingTop: "30px", zIndex: 9 }}
      >
        Key Services{" "}
      </Heading>
      <ServicePoint
        // heading="Key Services "
        points={
          "Film Production  \n Reels / TikTok  \n CGI Videos  \n Stop Motions \n Corporate Videos  \n Event Live Coverage  \n How To Videos  \n  Social Media Videos \n Product Photography \n Event Photography \n Lifestyle Photography "
        }
      />
      <Container maxWidth={"6xl"} style={{ margin: "auto" }}>
        <Box>
          <Heading mt={10} textAlign={"center"}>
            Creating Content that tells a story
          </Heading>
          <Text mt={5} mb={{ base: 0, md: 10 }} textAlign={"justify"}>
            The services offered by our video production agency in Dubai may
            vary depending on their clients' needs, but we typically include
            pre-production planning, production (filming), post-production
            (editing), and distribution. Once your video is produced, we can
            also support it with services such as social media marketing, search
            engine optimization (SEO), and video analytics. Video Chatbots are
            trending in 2023, and we are working on developing and launching
            Video Chatbots in UAE and the GCC. We can created content in
            English, Arabic, Russian, Chinese and more, depending on your target
            audience.
            <br />
            <br />
            Social media videos are short-form videos that are created
            specifically for social media platforms such as Facebook, Instagram,
            Twitter, and TikTok. These videos are designed to be engaging,
            shareable, and easy to consume on mobile devices.
            <br />
            <br />
          </Text>
        </Box>
      </Container>

      <Box>
        <SimpleGrid columns={{ base: 3, md: 6 }} spacing={"5px"}>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672984433/mccollins-media/BBQ_Party_Video_-_POST_audkzz.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid1.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672984054/mccollins-media/Armoured_Vehicles_-_Interior_-_Exterior_Video_cvqcvv.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid2.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672987639/mccollins-media/Braised_Cabbage_Video_bbpwre.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid3.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672987911/mccollins-media/Breakfast_Set_kg0pop.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid4.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672987689/mccollins-media/Cryo_Red_Light_Therapy_ixcnv5.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid5.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672987787/mccollins-media/Doors_Valentines_Day_2022_Video_-_YOUTUBE_p7shnb.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid6.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672988500/mccollins-media/Dr._Babor_Female_Version_-_YOUTUBE_mhl5xn.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid7.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672987730/mccollins-media/Family_Video_-_POST_zzjsdt.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid8.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672987738/mccollins-media/HR-CineBTS-Final-01112021-1min-26102021_tnpxp9.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid9.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672987704/mccollins-media/Mapei-LoadingVideo_thrg6q.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid10.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672988446/mccollins-media/Midea-Frier-VDO-Instapost-Portrait_idpg2n.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid11.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/dhhtgppki/video/upload/v1672987991/mccollins-media/Prato_Branding_Video_liuj6j.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid12.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "200px", md: "350px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
        </SimpleGrid>
      </Box>

      <Box position="relative">
        <Container maxWidth={"7xl"} my="10">
          <Heading
            as={"h5"}
            className="main-h5"
            maxWidth="800px"
            textAlign={"center"}
            margin={"auto"}
          >
            The types of social media videos that brands may create can vary
            widely, depending on their goals and target audience. Some of the
            videos we work on are :
          </Heading>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            mt={{ base: 0, md: 10 }}
            className="sub-service"
          >
            <Box width={{ base: "100%", md: "50%" }} mr={{ base: 0, md: 10 }}>
              <OrderedList my={"6"}>
                <li>
                  <Text className="main-p">
                    <b>Explainer videos:</b> These videos are used to explain a
                    product, service, or concept to an audience in an engaging
                    way.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>WordPress customization: </b> WordPress provides a
                    variety of out-of-the-box features and plugins, but
                    customizing these features is often necessary to meet the
                    specific requirements of a project. WordPress customization
                    involves creating custom themes, plugins, and widgets.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>Product demos:</b> These videos showcase a product or
                    service in action, highlighting its features and benefits.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>Behind-the-scenes videos:</b> These videos give viewers a
                    behind-the-scenes look at a business or individual, giving
                    them a glimpse into the creative process.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>Customer testimonials:</b> These videos feature satisfied
                    customers talking about their experiences with a product or
                    service.
                  </Text>
                </li>
                <li>
                  <Text mt="5" className="main-p">
                    <b>How-to videos:</b> These videos provide step-by-step
                    instructions on how to do something, such as cooking a
                    recipe or completing a DIY project.
                  </Text>
                </li>
              </OrderedList>
              <Text className="main-p" ml={7}>
                When creating social media videos, it's important to keep in
                mind the platform's specific requirements and best practices,
                such as aspect ratio, video length, and captions. It's also
                important to create content that is visually engaging,
                informative, and shareable, in order to attract and retain
                viewers on social media.
              </Text>
            </Box>

            <Box
              width={{ base: "100%", md: "50%" }}
              position="relative"
              className="filmBox"
              onClick={() => setOpen1(true)}
              cursor="pointer"
            >
              <Image
                src="/assets/image/servicePage/film/amazone1.jpg"
                width="700px"
                height="650px"
                objectFit="cover"
              />
              <a className="button is-play">
                <div className="button-outer-circle has-scale-animation"></div>
                <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                <div className="button-icon is-play">
                  <svg height="100%" width="100%" fill="#f857a6">
                    <polygon
                      className="triangle"
                      points="5,0 30,15 5,30"
                      viewBox="0 0 30 15"
                    ></polygon>
                    <path
                      className="path"
                      d="M5,0 L30,15 L5,30z"
                      fill="none"
                      stroke="#f857a6"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
              </a>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={"10px"}>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://mccollinsmediaweb.github.io/mccollins-media-landing-page-assetes/video-landing/main-banner-2.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid13.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "350px", md: "500px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box position={"relative"} className="filmBox">
            <ChakraImg
              src="/assets/image/servicePage/film/vid14.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "350px", md: "500px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box position={"relative"} className="filmBox">
            <ChakraImg
              src="/assets/image/servicePage/film/vid15.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "350px", md: "500px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
          <Box
            position={"relative"}
            className="filmBox"
            onClick={() =>
              videoHandler(
                "https://res.cloudinary.com/mccollins-media/video/upload/v1678182417/Mccollins%20Video/Toshiba-Arabicversion-Youngman2_bvjmwq.mp4"
              )
            }
          >
            <ChakraImg
              src="/assets/image/servicePage/film/vid16.jpg"
              backgroundSize={"cover"}
              backgroundRepeat="no-repeat"
              bgPosition={"center"}
              width={"100%"}
              height={{ base: "350px", md: "500px" }}
            />
            <a className="button is-play">
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  ></polygon>
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </a>
            <Box className="bgHover"></Box>
          </Box>
        </SimpleGrid>
      </Box>

      <ClientsLogo />

      <ModalVideo
        channel="custom"
        url={videoURL}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
      <ModalVideo
        channel="youtube"
        videoId="eK6SzU776KY"
        isOpen={isOpen1}
        onClose={() => setOpen1(false)}
      />
    </Stack>
  );
};

Film.getLayout = function getLayout(Film) {
  return <InnerLayout color="yellow">{Film}</InnerLayout>;
};
export default Film;
