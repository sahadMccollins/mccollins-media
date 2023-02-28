import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Image as Chakraimage,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "../node_modules/react-modal-video/css/modal-video.min.css";
import FadeUp from "./Motion/FadeUp";
import ZoomOut from "./Motion/ZoomOut";

const HeroBanner = (props) => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Stack marginTop={"-85px"} position="relative">
      <Box>
        <ZoomOut>
          <Chakraimage
            src={props.img}
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
              {props.breadcrumb ? (
                <Heading
                  fontSize={isLargerThan780 ? "60px" : "40px"}
                  color="#FFDE11"
                >
                  {props.breadcrumb}
                </Heading>
              ) : (
                ""
              )}

              <Heading fontSize={isLargerThan780 ? "60px" : "40px"}>
                {props.h2}
              </Heading>
              {props.content ? (
                <Text mt={"15px"} fontSize={isLargerThan780 ? "25px" : "16px"}>
                  {props.content}
                </Text>
              ) : (
                ""
              )}
            </FadeUp>
            <FadeUp>
              <ButtonGroup gap="4" zIndex="99" mt={"25px"}>
                <Button
                  colorScheme="yellow"
                  background={"#FFDE11"}
                  borderRadius="20px"
                  color="#000"
                  onClick={() => router.push("/contact")}
                >
                  <Image
                    src="/assets/image/icons/call.svg"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;&nbsp;contact us
                </Button>
                <Button
                  colorScheme="whiteAlpha"
                  onClick={() => setOpen(true)}
                  borderRadius="20px"
                  color="#fff"
                >
                  <Image
                    src="/assets/image/icons/play.svg"
                    width="25px"
                    height="25px"
                    priority={true}
                  />
                  &nbsp;&nbsp;watch now
                </Button>
              </ButtonGroup>
            </FadeUp>
          </Box>
        </Container>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="Pj6P8kQvpZw"
          onClose={() => setOpen(false)}
        />
      </Box>
    </Stack>
  );
};

export default HeroBanner;
