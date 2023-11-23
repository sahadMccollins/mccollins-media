import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import ThankYouBox1 from "../components/Thankyou-component";
import { useEffect } from "react";

const Contact = ({ metaTags }) => {
  useEffect(() => {
    // Add the Google Tag Manager script to this page
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-10803441186";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-10803441186");
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <>
      <Stack>
        <ThankYouBox1
          img="/assets/image/banner/about-banner.webp"
          breadcrumb="contact us"
          h2="ready to do something big?"
        />
      </Stack>
    </>
  );
};

export default Contact;
