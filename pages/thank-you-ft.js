import {
    Stack
  } from "@chakra-ui/react";
  import Head from "next/head";
  import ReactHtmlParser from "react-html-parser";
  import ThankYouBox1 from "../components/Thankyou-component";
  
  const Contact = ({ metaTags }) => {
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
  