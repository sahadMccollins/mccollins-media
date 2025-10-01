import React, { useEffect } from "react";
import MainBanner1 from "../../components/Landing-page-components/MainBanner";
import ClientPortFolio from "../../components/Landing-page-components/ClientPortfolio";
import TrustedLogos from "../../components/Landing-page-components/TrustLogos";
import LpGrid from "../../components/Landing-page-components/lpGrid";
import WebPortfolio from "../../components/Landing-page-components/portfolio";
import WorkTogether from "../../components/Landing-page-components/workTogether";
import FooterNav from "../../components/Landing-page-components/FooterNav";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import BannerBox from "../../components/BanneBox";
import FAQ1 from "../../components/Landing-page-components/FAQ1";
const LandingPage1 = () => {
  const faqsData = [
  {
    question: "What is the difference between a website and a web application?",
    answer:
      "A website provides information and content, while a web application allows user interaction and performs specific functions.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on complexity, but most business websites take 4–8 weeks to design and develop.",
  },
  {
    question: "Do I need to know coding to maintain my website?",
    answer:
      "Not necessarily. We can integrate CMS platforms like WordPress, making it easy to update content without coding.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, all modern websites are built responsive to ensure they look great on mobile, tablet, and desktop devices.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use HTML, CSS, JavaScript, React, Next.js, Node.js, and other modern frameworks based on your project’s needs.",
  },
  {
    question: "How much does it cost to build a website?",
    answer:
      "Costs vary depending on design, features, and complexity. A basic site may cost less, while custom solutions cost more.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Yes, we implement SEO best practices like clean code, meta tags, and optimized performance to improve search ranking.",
  },
  {
    question: "Do you provide website hosting and domain services?",
    answer:
      "Yes, we can guide you in purchasing domains and hosting or manage them for you as part of our service.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can modernize your website’s design, improve speed, and enhance usability while keeping your content intact.",
  },
  {
    question: "Do you provide ongoing support after the website launch?",
    answer:
      "Yes, we offer maintenance packages that include updates, backups, security checks, and technical support.",
  },
];
  useEffect(() => {
    document.body.className = "LandingPage";
  });

  useEffect(() => {
    // Create the script element and append it to the head
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-3505417.js?sv=6`;
    document.head.appendChild(script);

    // Define a cleanup function to remove the script element
    const cleanup = () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };

    // Add the Hotjar script element
    script.onload = () => {
      // Initialize Hotjar when the script has loaded
      window.hj =
        window.hj ||
        function () {
          (window.hj.q = window.hj.q || []).push(arguments);
        };
      window._hjSettings = { hjid: 3505417, hjsv: 6 };
    };

    // Attach the cleanup function to the component unmount event
    return cleanup;
  }, []);

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
    <Box marginTop={"-85px"} position="relative">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <MainBanner1 label="qssOCPGu1uIYEKLcvZ8o" />
      <ClientPortFolio />

      <TrustedLogos />
      <BannerBox
          Banner="/services/web/McC_WDev_Web_2-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_2-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_4-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_3-min.jpg"
        />
        {/* <BannerBox
          Banner="/services/web/McC_WDev_Web_5-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_5-min.jpg"
        /> */}
        <BannerBox
          Banner="/services/web/McC_WDev_Web_6-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_6-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_7-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_7-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_8-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_8-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_9-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_9-min.jpg"
        />
        <BannerBox
          Banner="/services/web/McC_WDev_Web_10-min.jpg"
          MobileBanner="/services/web/McC_WDev_Mob_10-min.jpg"
        />
        <FAQ1 faqs={faqsData} />
      <LpGrid />
      
      <WebPortfolio />

      <WorkTogether />
      
      <FooterNav phone={true} />
    </Box>
  );
};
export default LandingPage1;
