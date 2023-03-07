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
        {/* <Box
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "0px",
          }}
          width={{ base: "150px", md: "unset" }}
        >
          <Image
            src={"/assets/image/design/10.png"}
            width="241px"
            height={"228px"}
          />
        </Box> */}
        <Container maxWidth={"7xl"} my="10">
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            mt={20}
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
                Bring a Digital Brand Activation Agency, the process of content
                production is the very core of our set up. From developing
                exclusive content for Social Media Marketing to Web Development,
                our in-house team of content creators follow global trends,
                consumer insights and curate content that is relatable to each
                of our brands.
                <br />
                <br />
                Content without Analysis is futile. So from A/B Testing of
                Digital Content, Marketing in the metaverse, Video Marketing,
                Podcasts, Launch of Shoppable Links and more.
                <br />
                <br />
                Leveraging Data-based insights, we work with brands to enhance
                their digital ecosystem.
                <br />
                Leading with empathy and value-driven content , this is just the
                start.
              </Text>
              <Button
                colorScheme="black"
                background={"#000"}
                borderRadius="20px"
                color="#fff"
                my={7}
                fontWeight="bold"
                onClick={scrollFun}
              >
                view more
                <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
              </Button>
            </Box>

            <Box width={{ base: "100%", md: "50%" }}>
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
              <Heading as={"h3"}>112</Heading>
              <Text textAlign={"center"}>what is lorem ipsum</Text>
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
              <Heading as={"h3"}>112</Heading>
              <Text textAlign={"center"}>what is lorem ipsum</Text>
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
              <Heading as={"h3"}>112</Heading>
              <Text textAlign={"center"}>what is lorem ipsum</Text>
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
              <Heading as={"h3"}>112</Heading>
              <Text textAlign={"center"}>what is lorem ipsum</Text>
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
            src="https://mccollinsmediaweb.github.io/mccollins-media-landing-page-assetes/video-landing/main-banner-2.mp4"
            type="video/mp4"
            media="screen"
          />
          Your browser does not support HTML5 video.
        </video>
      </Box>
      <Container maxWidth={"6xl"} style={{ margin: "auto" }}>
        <Box>
          <Heading mt={10} textAlign={"center"}>
            Creating Content that tells a story
          </Heading>
          <Text mt={5} mb={10} textAlign={"justify"}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur
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
                Bring a Digital Brand Activation Agency, the process of content
                production is the very core of our set up. From developing
                exclusive content for Social Media Marketing to Web Development,
                our in-house team of content creators follow global trends,
                consumer insights and curate content that is relatable to each
                of our brands.
                <br />
                <br />
                Content without Analysis is futile. So from A/B Testing of
                Digital Content, Marketing in the metaverse, Video Marketing,
                Podcasts, Launch of Shoppable Links and more.
                <br />
                <br />
                Leveraging Data-based insights, we work with brands to enhance
                their digital ecosystem.
                <br />
                Leading with empathy and value-driven content , this is just the
                start.
              </Text>
              <Button
                colorScheme="black"
                background={"#000"}
                borderRadius="20px"
                color="#fff"
                my={7}
                fontWeight="bold"
                onClick={scrollFun}
              >
                view more{" "}
                <ChevronRightIcon mt="2px" width="1.3em" height="1.3em" />
              </Button>
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
          <Box position={"relative"} className="filmBox">
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
          <Box position={"relative"} className="filmBox">
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

      <Container maxWidth={"6xl"} style={{ margin: "auto" }}>
        <Box>
          <Heading mt={10} textAlign={"center"}>
            Creating Content that tells a story
          </Heading>
          <Text mt={5} mb={10} textAlign={"justify"}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur
          </Text>
        </Box>
      </Container>
      {/* 
      <div ref={cpPointRef}></div>
      <ServicePoint
        heading="Content Marketing"
        subHeading="For your Brand"
        contentHeading={"Creating Content that tells a story"}
        content="Creating exclusive brand content is a great way to communicate a story about your brand. In the digital space, this is a content process of CREATING"
        points={
          "Photography \n Food Photography \n Mobile First Content \n Videography \n 360 Images and Videos \n Cinemagraphs \n Stop Motion Videos \n  Brand Montage Videos \n Corporate Videos "
        }
      /> */}

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
