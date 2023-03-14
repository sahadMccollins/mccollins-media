import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  const metaData = {
    "/": {
      title:
        "Web Development Company in Dubai | Web Design Company Dubai-Mccollins",
      description:
        "Are you looking for a web development company to build your website and brand in Dubai? Mccollins is the leading web development and design agency providing web solutions cost-effectively. Reach out to us for responsive custom web development services.",
    },
    "/about": {
      title:
        "Best Digital Marketing Company In Dubai | Web Development Dubai - Mccollins Media",
      description:
        "One of the young passionate team working as a digital marketing agency in Dubai, UAE & Abu Dhabi. We create brands with proven expertise strategies over years. Need assistance for web development, Seo, Digital marketing and Branding promotions in Dubai, reach-Mccollins media",
    },
    "/contact": {
      title:
        "Dubai Based Web Design Company | Digital Marketing Agency Dubai | Contact - Mccollins Media",
      description:
        "Need a web development team to start your website development or are you looking for a digital marketing agency in Dubai to build your brand? Yes, Mccollins media will help you to kick start your project with all digital solutions in cost-effective.Contact us now to know more-info@mccollinsmedia.com",
    },
    "/services": {
      title:
        "Digital Marketing Services Dubai | Web Design And Development Company Dubai - Our Services",
      description:
        "Get to know our services which are provided for our clients in Dubai, Abudhabi and UAE with the best price and extreme quality services. Mccollins do innovative digital projects with immense experience in web design, digital marketing, Branding, SMM, content promotion, Social media so on. Need any help with your digital projects come let's start together?",
    },
    "/industry": {
      title: "",
      description: "",
    },
    "/blog": {
      title:
        "Web Development Dubai | Digital Marketing Agency Dubai | Blogs -Mccollins",
      description:
        "Searching for new updates and trending news in tech innovations and web development? our blog section helps you to get all new concepts and opinions well explained by the Mccollins team.",
    },
    "/services/social-media-agency-dubai": {
      title:
        "Social Media Agency in Dubai, UAE | Social Media Marketing In Abu Dubai -Mccollins",
      description:
        "Mccollins is the award-winning social media agency in Dubai providing quality services to clients over years around UAE and Abu Dhabi. Join our team of experts in SEO, content generation, lead generation, Ad management offering the best in the price? Let's start together to make a digital web revolution.",
    },
    "/services/web-design-and-development": {
      title:
        "Web Development Company in Dubai | Web Design Company Dubai-Mccollins",
      description:
        "Are you looking for a web development company to build your website and brand in Dubai? Mccollins is the leading web development and design agency providing web solutions cost-effectively. Reach out to us for responsive custom web development services.",
    },
    "/services/brand-development": {
      title:
        "Branding Company in Dubai | Branding Agency in Abu Dhabi - Mccollins Media",
      description:
        "Mccolllins media is a reputed award-winning branding & Design agency working in Dubai UAE. We help our clients to build brands more innovative and profitable. Contact now for making your branding solutions, logo design, brand guideline development etc in the best way.",
    },
    "/services/film": {
      title:
        "Content Marketing Company in Dubai | Creative Content Creation Agency UAE - Mccollins",
      description:
        "Our team helps clients by customizing content management and by communicating your brand story with creative ideas and words. contact us to know more about our content creation services in Dubai which promote your business through better content development and deliverance.",
    },
    "/services/google-ads": {
      title:
        "Digital Marketing Company in UAE | Performance Marketing Agency Dubai - Mccollins Media",
      description:
        "Digital Marketing Company in UAE | Performance Marketing Agency Dubai - Mccollins Media",
    },
    "/services/search-engine-optimization": {
      title:
        "Best SEO Company in UAE, Dubai | SEO Agency In Dubai | SEO Services Dubai - Mccolilins",
      description:
        "Mccollins offer the best range of SEO services in Dubai, Abu Dhabi and across the globe at affordable price. Our team works for your website traffic, ranking and visibility with the best strategies.Get the seo services in UAE by calling- +971 4 445 6848",
    },
    "/industry/corporate-marketing-services": {
      title:
        "Digital Marketing Agency In UAE | Corporate Marketing Services in Dubai - Mccollins",
      description:
        "Looking for a dedicated corporate marketing agency in Dubai? Mccollins offers a full-service result-oriented marketing and advertising agency that helps your business to step high. Talk with our experts for your corporate marketing promotions now.",
    },
    "/industry/food-and-beverage-marketing-services": {
      title:
        "Social Media Agency in Dubai | Food and Beverage Branding Agency-UAE- Mccollins",
      description:
        "Do you have a food and beverage brand with expertise in marketing in UAE, Dubai?. We are the best marketing agency specialised in the food and beverage industry with years of experience and 20+ clients. Reach out for more details.",
    },
    "/industry/healthcare-marketing-services": {
      title:
        "Top Advertising Agencies in Dubai | Digital Marketing Agency for Healthcare Services UAE",
      description:
        "Wanted a full expertise team for your Healthcare marketing service.in Dubai, Abudhabi? choose the top digital marketing agency like Mccollins who can make your health care agency to the next level with outstanding performance and results.",
    },
    "/industry/luxury-marketing-services": {
      title:
        "Best Branding Company UAE | Luxury Brand and Design Agency Dubai - Mccollins",
      description:
        "Needed a luxury branding service company for your business? Mccolllins has experience in working with many luxury brands and website development for niche their customers for clients perfectly. we provide you with the finest luxury marketing services and branding impulsively.",
    },
    "/industry/technology-marketing-services": {
      title:
        "Top Digital Marketing Companies in Dubai | Marketing Agency for Technology Services Dubai - Mccollins",
      description:
        "What kind of technology marketing services are you looking for? Mccollins provide you with the best internet and digital marketing technology-related service in Dubai, UAE. We are prominent in all kinds of technology solutions which is a going trend in industries. Reach us to get the best offer for your technology marketing service.",
    },
    "/services/web-design-and-development/magento-website-development": {
      title:
        "Magento Website Development Dubai | Magento Ecommerce Development in Abu Dhabi",
      description:
        "We offer Magento eCommerce web development and another eCommerce service in Dubai & Abu Dhabi at the best price and quality. Let's start your Magento custom website development service with Mccollins who have well-experienced Magento developers in the team.",
    },
    "/services/web-design-and-development/shopify-website-development": {
      title:
        "Shopify Development Company in Dubai | Shopify Ecommerce Development UAE",
      description:
        "Develop your Shopify eCommerce website now with our excellent team in Dubai, Abu Dhabi. We are pioneers in web development especially eCommerce website design services for clients' businesses over years.",
    },
    "/services/web-design-and-development/sitecore": {
      title: "",
      description: "",
    },
    "/services/web-design-and-development/wordpress-website-development": {
      title:
        "Woocommerce Development Dubai | Woocommerce Website Design UAE - Mccollins",
      description:
        "Get cost-effective woocommerce website development services in Dubai with Mccollins.We help to deliver your ecoomerce website with best web design and development in industry.",
    },
  };
  const { title, description } = metaData[router.pathname.toString()] || {};

  useEffect(() => {
    setTimeout(() => {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.defer = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-KK6CH2S");
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      TagManager.initialize({ gtmId: "GTM-KK6CH2S" });
      router.events.on("routeChangeComplete", (url) => {
        TagManager.dataLayer({
          dataLayer: {
            pagePath: url,
          },
          dataLayerName: "PageDataLayer",
        });
      });
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        {isHomePage ? (
          <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Mccollins Media" />
            <meta
              name="copyright"
              content="© 2021 All Rights Reserved McCollins Media"
            />
            <meta name="geo.region" content="AE-DU" />
            <meta name="geo.placename" content="Media City, Dubai, UAE" />
            <meta name="geo.position" content="25.022;55.188" />
            <meta name="ICBM" content="25.022, 55.188" />
            <meta name="Language" content="English" />
            <meta name="Publisher" content="Mccollins Media" />
            <meta name="Revisit-After" content="Daily" />
            <meta name="distribution" content="LOCAL" />
            <meta name="Robots" content="INDEX, FOLLOW" />
            <meta
              name="page-topic"
              content="Get in touch with us We will get back to you within a day."
            />
            <meta name="YahooSeeker" content="INDEX, FOLLOW" />
            <meta name="msnbot" content="INDEX, FOLLOW" />
            <meta name="googlebot" content="INDEX, FOLLOW" />
            <meta name="Rating" content="General" />
            <meta name="allow-search" content="yes" />
            <meta name="expires" content="never" />
            <link rel="canonical" href="https://www.mccollinsmedia.com/" />
          </>
        ) : (
          <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Mccollins Media" />
            <meta name="geo.region" content="AE-DU" />
            <meta name="geo.placename" content="Media City, Dubai, UAE" />
            <meta name="geo.position" content="25.022;55.188" />
            <meta name="ICBM" content="25.022, 55.188" />
            <meta name="Language" content="English" />
            <meta name="Publisher" content="Mccollins Media" />
            <meta name="Revisit-After" content="Daily" />
            <meta name="distribution" content="LOCAL" />
            <meta name="Robots" content="INDEX, FOLLOW" />
            <meta
              name="page-topic"
              content="Get in touch with us We will get back to you within a day."
            />
            <meta name="YahooSeeker" content="INDEX, FOLLOW" />
            <meta name="msnbot" content="INDEX, FOLLOW" />
            <meta name="googlebot" content="INDEX, FOLLOW" />
            <meta name="Rating" content="General" />
            <meta name="allow-search" content="yes" />
            <meta name="expires" content="never" />
            <link
              rel="canonical"
              href={`https://www.mccollinsmedia.com${router.pathname}`}
            />
          </>
        )}
      </Head>
      <SessionProvider session={session}>
        <ChakraProvider>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
