import React, { useEffect, useRef, useState } from "react";
import EmptyLayout from "../../components/Layout/EmptyLayout";
import Head from "next/head";

// import OwlCarousel from "react-owl-carousel2";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import IntlTelInput from "react-intl-tel-input";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

const FilmProduction = () => {
  const [fullName, setFullName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [contact, setContact] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [industry, setIndustry] = useState("");
  const [contactStatus, setContactStatus] = useState();
  const [vsdfvsdf, setVsdfvsdf] = useState();

  const [loading, setLoading] = useState(false);

  const [hiddenInputValue, setHiddenInputValue] = useState("");
  const hiddenInputRef = useRef();

  useEffect(() => {
    setHiddenInputValue(hiddenInputRef.current?.value);
  }, []);

  const handleHiddenInputChange = () => {
    setHiddenInputValue(hiddenInputRef.current?.value);
  };

  const toast = useToast();

  const router = useRouter();
  const currentURL = router.asPath;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (contactStatus === true) {
      const data = {
        Company: industry,
        FirstName: fullName,
        Email: clientEmail,
        Page: currentURL,
        Phone: customerPhone,
        SelectedServices: lookingFor,
        Message: "",
        gclid: hiddenInputValue,
      };

      axios
        .post("/api/zoho/refresh-token", data)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          // Handle errors in obtaining the new access token
          console.error(error);
        });

      let formData = new FormData();
      formData.append("Firstname", fullName);
      formData.append("email", clientEmail);
      formData.append("Phone", customerPhone);
      formData.append("Company", industry);
      formData.append("Services", lookingFor);
      formData.append("URL", currentURL);

      fetch(
        "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      router.push("/Thank-you-for-contacting-us");

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fullName,
          email: clientEmail,
          contact: customerPhone,
          company: industry,
          services: lookingFor,
          date: new Date(),
        }),
      };
      fetch("/api/form-submit", requestOptions).then(
        (response) => response.json(),
        setFullName(""),
        setCustomerPhone(""),
        setClientEmail(""),
        setIndustry(""),
        setLookingFor(""),
        setLoading(false),
        toast({
          title: "Form Submited",
          description: "Thank you for getting in touch!",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
        // router.push(`/film-production/thank-you`)
      );
    } else {
      toast({
        title: "Phone field is not valid",
        description: "Please check the phone field",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleRouteChange = () => {
      AOS.refresh(); // 👈 refresh AOS when route changes
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const options = {
    center: true,
    items: 1,
    dots: true,
    loop: true,
    autoHeight: true,
    margin: 10,
    responsive: {
      600: {
        items: 2,
      },
    },
  };
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

  const handlePhoneChange = (status, number, countryData) => {
    setContact(number);
    setCustomerPhone(`+${countryData.dialCode} ${number}`);
    setContactStatus(status);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     const images = document.querySelectorAll(".ImageSwitcher");
  //     const windowWidth = window.innerWidth;

  //     images.forEach((image) => {
  //       const defaultSrc = image.getAttribute("src");
  //       const alternateSrc = image.getAttribute("data-src");

  //       if (windowWidth < 1000) {
  //         image.src = alternateSrc;
  //       } else {
  //         image.src = defaultSrc;
  //       }
  //     });
  //   };

  //   handleResize(); // Initial call
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#E22D46" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#E22D46" />
        <meta name="msapplication-navbutton-color" content="#E22D46" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="https://mccollinsmediaweb.github.io/mcc-video-production/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://mccollinsmediaweb.github.io/mcc-video-production/css/master.css"
        />
        <link
          href="https://mccollinsmediaweb.github.io/mcc-video-production/css/jquery.fancybox.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://mccollinsmediaweb.github.io/mcc-video-production/css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://mccollinsmediaweb.github.io/mcc-video-production/css/owl.theme.default.min.css"
        />
        <link
          rel="stylesheet"
          href="https://mccollinsmediaweb.github.io/mcc-video-production/css/style.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <title>McCollins Media Production</title>
      </Head>
      <div className="film-prd">
        <header>
          <div className="container">
            <div>
              <div className="HeaderRow">
                <div className="HeaderLeft ">
                  <img
                    src="https://mccollinsmediaweb.github.io/mcc-video-production/images/logo.png"
                    className="LogoImg"
                  />
                </div>
                <div className="HeaderRight">
                  <ul>
                    <li>
                      <a href="#home" data-go="home" className="GoLink active">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#ourservice"
                        data-go="ourservice"
                        className="GoLink"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#ourclients"
                        data-go="ourclients"
                        className="GoLink"
                      >
                        Our Clients
                      </a>
                    </li>
                    <li>
                      <a href="#timeline" data-go="timeline" className="GoLink">
                        Our Timeline
                      </a>
                    </li>
                    {/* <li>
                      <a href="#ourworks" data-go="ourworks" className="GoLink">
                        Portfolio
                      </a>
                    </li> */}
                    <li>
                      <a href="#whatsee" data-go="whatsee" className="GoLink">
                        What sets us apart
                      </a>
                    </li>
                    <li>
                      <a href="#footer" data-go="footer" className="GoLink">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="MobileOnly">
                  <div className="MenuClick">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0,0,256,256"
                      style={{ fill: "#ffffff" }}
                    >
                      <g
                        fill="#ffffff"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="HeroSection" id="home">
            <div className="main-video">
              <div className="image-background"></div>
              <div className="image-title filmBnr">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9">
                      <div
                        className="T1"
                        data-aos="fade-up"
                        data-aos-duration="700"
                      >
                        VIDEO STORYTELLING FOR TECH MARKETING
                      </div>
                      <div
                        className="T2"
                        data-aos="fade-left"
                        data-aos-duration="700"
                      >
                        Tell better stories
                      </div>
                      <div
                        className="T3"
                        data-aos="fade-right"
                        data-aos-duration="700"
                      >
                        In a world of repetitive and dull B2B tech content, be
                        the marketer
                        <br />
                        that tells stories your audience actually cares about.
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="HeaderForm" style={{ display: "block" }}>
                        <div className="Hicon1">&nbsp;</div>
                        <div className="Hicon2">&nbsp;</div>
                        <div className="Hicon3">&nbsp;</div>
                        <div className="Hicon4">&nbsp;</div>
                        {/* <?php echo do_shortcode('[contact-form-7 id="14" title="Header-Form"]'); ?> */}
                        <form onSubmit={handleSubmit}>
                          <div className="formElements">
                            <input
                              type="text"
                              placeholder="Name"
                              value={fullName}
                              required
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>
                          <div className="formElements">
                            <input
                              type="email"
                              placeholder="Email"
                              value={clientEmail}
                              required
                              onChange={(e) => setClientEmail(e.target.value)}
                            />
                          </div>
                          <div className="formElements">
                            {/* <input
                              type="tel"
                              placeholder="Phone Number"
                              value={customerPhone}
                              required
                              onChange={(e) => setCustomerPhone(e.target.value)}
                            /> */}
                            <IntlTelInput
                              style={{ width: "100%", paddingLeft: "50px" }}
                              defaultCountry="ae"
                              containerClassName="intl-tel-input"
                              inputClassName="form-control"
                              value={contact}
                              onPhoneNumberChange={handlePhoneChange}
                            />
                          </div>
                          <div className="formElements">
                            <select
                              value={lookingFor}
                              required
                              onChange={(e) => setLookingFor(e.target.value)}
                            >
                              {/* Map over the options */}
                              <option value="">Looking for ?</option>
                              <option value="Photoshoot">Photoshoot</option>
                              <option value="Videoshoot">Videoshoot</option>
                              <option value="Photography services">
                                Photography services
                              </option>
                              <option value="Videography services">
                                Videography services
                              </option>
                              <option value="Corporate photoshoot">
                                Corporate photoshoot
                              </option>
                              <option value="Commercial videoshoot">
                                Commercial videoshoot
                              </option>
                              <option value="Fashion photoshoot">
                                Fashion photoshoot
                              </option>
                              <option value="Product photography">
                                Product photography
                              </option>
                              <option value="Wedding photography">
                                Wedding photography
                              </option>
                              <option value="Event videography">
                                Event videography
                              </option>
                              <option value="Portrait photography">
                                Portrait photography
                              </option>
                              <option value="Documentary filmmaking">
                                Documentary filmmaking
                              </option>
                              <option value="Music video production">
                                Music video production
                              </option>
                              <option value="Drone videography">
                                Drone videography
                              </option>
                              <option value="Food photography">
                                Food photography
                              </option>
                              <option value="Real estate videography">
                                Real estate videography
                              </option>
                              <option value="Lifestyle photoshoot">
                                Lifestyle photoshoot
                              </option>
                              <option value="Sports photography">
                                Sports photography
                              </option>
                              <option value="Editorial photoshoot">
                                Editorial photoshoot
                              </option>
                              <option value="Branding videoshoot">
                                Branding videoshoot
                              </option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="formElements">
                            <select
                              value={industry}
                              required
                              onChange={(e) => setIndustry(e.target.value)}
                            >
                              {/* Map over the options */}
                              <option value="">Industry</option>
                              <option value="Fashion and Apparel">
                                Fashion and Apparel
                              </option>
                              <option value="Beauty and Cosmetics">
                                Beauty and Cosmetics
                              </option>
                              <option value="Food and Beverage">
                                Food and Beverage
                              </option>
                              <option value="Hospitality and Travel">
                                Hospitality and Travel
                              </option>
                              <option value="Real Estate and Architecture">
                                Real Estate and Architecture
                              </option>
                              <option value="Automotive and Transportation">
                                Automotive and Transportation
                              </option>
                              <option value="Technology and Electronics">
                                Technology and Electronics
                              </option>
                              <option value="Health and Fitness">
                                Health and Fitness
                              </option>
                              <option value="Education and Training">
                                Education and Training
                              </option>
                              <option value="Music and Entertainment">
                                Music and Entertainment
                              </option>
                              <option value="Sports and Fitness">
                                Sports and Fitness
                              </option>
                              <option value="Corporate and Business">
                                Corporate and Business
                              </option>
                              <option value="Non-profit and Social Causes">
                                Non-profit and Social Causes
                              </option>
                              <option value="Art and Culture">
                                Art and Culture
                              </option>
                              <option value="Wedding and Events">
                                Wedding and Events
                              </option>
                              <option value="E-commerce and Retail">
                                E-commerce and Retail
                              </option>
                              <option value="Film and Television">
                                Film and Television
                              </option>
                              <option value="Advertising and Marketing">
                                Advertising and Marketing
                              </option>
                              <option value="Health Care and Pharmaceuticals">
                                Health Care and Pharmaceuticals
                              </option>
                              <option value="Financial Services and Banking">
                                Financial Services and Banking
                              </option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          <input
                            type="hidden"
                            id="zc_gad"
                            name="zc_gad"
                            defaultValue={hiddenInputValue}
                            ref={hiddenInputRef}
                            onChange={handleHiddenInputChange}
                          />
                          <div className="formElements">
                            <button type="submit" className="filmSubmit">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video-background">
                <video autoPlay muted loop id="myVideo" playsInline>
                  <source
                    src="https://mccollinsmediaweb.github.io/mcc-video-production/images/mccollins-media-video-compressed.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </section>
          <section className="OurClients" id="ourclients">
            <div className="container">
              <div className="Clt2">
                <div
                  className="Ct1"
                  data-aos="fade-left"
                  data-aos-duration="700"
                >
                  Our Clients
                </div>
                <div className="clients">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/1.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/2.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/3.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/4.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/5.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-up"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/6.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-left"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/7.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-left"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/8.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-left"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/9.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-left"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/10.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-left"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/11.png"
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        data-aos="fade-left"
                        data-aos-duration="700"
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/clients/12.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="serviceSection" id="ourservice">
            <div className="container">
              <div className="text-center">
                <div className="T4" data-aos="fade-up" data-aos-duration="700">
                  Our Services
                </div>
                <div className="T5" data-aos="fade-up" data-aos-duration="700">
                  We deliver anything and everything that has to
                  <br />
                  do with video productions, photography, animations, and
                  beyond.
                </div>
                <div>
                  <div
                    className="T6 popup2-trigger"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    Corporate Video
                  </div>
                  <span className="d-none">
                    Our talented team of professionals is dedicated to bringing
                    your vision to life through captivating storytelling and
                    visually stunning videos. We have a proven track record of
                    delivering high-quality videos that engage and resonate with
                    audiences. Whether it's a corporate promotional video, Event
                    coverage, conceptual commercials, lifestyle video, we
                    meticulously plan, shoot, and edit each project to ensure
                    its success. We pride ourselves on our collaborative
                    approach, working closely with our clients to understand
                    their goals and deliver a final product that exceeds their
                    expectations
                  </span>
                </div>
                <div>
                  <div
                    className="T6 popup2-trigger"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    Social Media Videos
                  </div>
                  <span className="d-none">
                    Our talented team of professionals is dedicated to bringing
                    your vision to life through captivating storytelling and
                    visually stunning videos. We have a proven track record of
                    delivering high-quality videos that engage and resonate with
                    audiences. Whether it's a corporate promotional video, Event
                    coverage, conceptual commercials, lifestyle video, we
                    meticulously plan, shoot, and edit each project to ensure
                    its success. We pride ourselves on our collaborative
                    approach, working closely with our clients to understand
                    their goals and deliver a final product that exceeds their
                    expectations
                  </span>
                </div>
                <div>
                  <div
                    className="T6 popup2-trigger"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    CGI Video
                  </div>
                  <span className="d-none">
                    Our talented team of professionals is dedicated to bringing
                    your vision to life through captivating storytelling and
                    visually stunning videos. We have a proven track record of
                    delivering high-quality videos that engage and resonate with
                    audiences. Whether it's a corporate promotional video, Event
                    coverage, conceptual commercials, lifestyle video, we
                    meticulously plan, shoot, and edit each project to ensure
                    its success. We pride ourselves on our collaborative
                    approach, working closely with our clients to understand
                    their goals and deliver a final product that exceeds their
                    expectations
                  </span>
                </div>
                <div>
                  <div
                    className="T6 popup2-trigger"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    How to Video
                  </div>
                  <span className="d-none">
                    Our talented team of professionals is dedicated to bringing
                    your vision to life through captivating storytelling and
                    visually stunning videos. We have a proven track record of
                    delivering high-quality videos that engage and resonate with
                    audiences. Whether it's a corporate promotional video, Event
                    coverage, conceptual commercials, lifestyle video, we
                    meticulously plan, shoot, and edit each project to ensure
                    its success. We pride ourselves on our collaborative
                    approach, working closely with our clients to understand
                    their goals and deliver a final product that exceeds their
                    expectations
                  </span>
                </div>
                <div>
                  <div
                    className="T6 popup2-trigger"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    Explainer Video
                  </div>
                  <span className="d-none">
                    Our talented team of professionals is dedicated to bringing
                    your vision to life through captivating storytelling and
                    visually stunning videos. We have a proven track record of
                    delivering high-quality videos that engage and resonate with
                    audiences. Whether it's a corporate promotional video, Event
                    coverage, conceptual commercials, lifestyle video, we
                    meticulously plan, shoot, and edit each project to ensure
                    its success. We pride ourselves on our collaborative
                    approach, working closely with our clients to understand
                    their goals and deliver a final product that exceeds their
                    expectations
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="BookNowBox">
            <div className="container">
              <div className="BkContentWrap">
                <div
                  className="BkNw1"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Schedule Your Shoot
                </div>
                <a
                  href="#footer"
                  className="BkNw2"
                  data-aos="fade-left"
                  data-aos-duration="700"
                >
                  Book Now
                </a>
              </div>
            </div>
          </section>
          <section className="TimeLine" id="timeline">
            <div className="container">
              <div
                className="TimeLine11"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Our Timeline
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="GridBx1"
                    data-aos="fade-left"
                    data-aos-duration="700"
                  >
                    <div className="GridBx1T1">1.Start</div>
                    <div className="GridBx1T2 timeline1">Pre Production</div>
                    <div className="GridBx1T3">
                      Once you submit the brief and confirm the project with us,
                      our team of account directors will do the rest. Plan,
                      strategize, set deadlines, and moderate every task from
                      script to finish.
                    </div>
                    <div className="GridBx1T4">Timeline : 2-3 Days</div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <div className="GridBx1">
                    <div className="GridBx1T1">2.Collab</div>
                    <div className="GridBx1T2 timeline2">Production</div>
                    <div className="GridBx1T3">
                      Once we finish the pre-production stage according to the
                      approved plan, we proceed to shoot. Our crew will make
                      sure that we have a seamless journey throughout the shoot
                      days.
                    </div>
                    <div className="GridBx1T4">Timeline : 1-2 Days</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="GridBx1"
                    data-aos="fade-right"
                    data-aos-duration="700"
                  >
                    <div className="GridBx1T1">3.Approve</div>
                    <div className="GridBx1T2 timeline3">Post - Production</div>
                    <div className="GridBx1T3">
                      Share your feedback using our technology, which allows you
                      to add comments directly on the video with real-time
                      playback along with your colleagues anywhere in the world,
                      creating faster approvals.
                    </div>
                    <div className="GridBx1T4">Timeline : 3-5 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="ourWorks" id="ourworks">
            <div className="container">
              <div className="WrkT1">Our portfolio</div>
              <div className="PortFolioBlock">
                <OwlCarousel options={options}>
                  <div className="item">
                    <div
                      className="PrBlock"
                      data-aos="fade-up"
                      data-aos-duration="700"
                    >
                      <img
                        className=""
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/work1.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">Film Production</div>
                          <a href="javascript:void(0)" className="PrT2 Port1">
                            Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      className="PrBlock"
                      data-aos="fade-up"
                      data-aos-duration="700"
                    >
                      <img
                        className=""
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/work2.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">Lifestyle Photography</div>
                          <a href="javascript:void(0)" className="PrT2 Port1">
                            Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      className="PrBlock"
                      data-aos="fade-up"
                      data-aos-duration="700"
                    >
                      <img
                        className=""
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/work3.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">Food Photography</div>
                          <a href="javascript:void(0)" className="PrT2 Port1">
                            Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      className="PrBlock"
                      data-aos="fade-up"
                      data-aos-duration="700"
                    >
                      <img
                        className=""
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/work4.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">Corporate Videos</div>
                          <a href="javascript:void(0)" className="PrT2 Port1">
                            Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </section> */}
          <section className="Whatsee" id="whatsee">
            <div className="container">
              <div className="WrkT1">What sets us apart</div>
              <div className="PortFolioBlock">
                <div className="row">
                  <div className="col-md-6">
                    <div className="PrBlock">
                      <img
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/s1.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">Exceptional Creativity</div>
                          <a
                            href="javascript:void(0)"
                            className="PrT2 popup2-trigger-1"
                          >
                            Read More
                          </a>
                          <span className="d-none">
                            We pride ourselves on our ability to think outside
                            the box and deliver innovative concepts tailored to
                            your brand. Our creative team excels in crafting
                            unique and captivating visual narratives that
                            captivate audiences and deliver your message
                            effectively.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="PrBlock">
                      <img
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/s2.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">
                            Professionalism &<br />
                            Reliability
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="PrT2 popup2-trigger-1"
                          >
                            Read More
                          </a>
                          <span className="d-none">
                            We take professionalism seriously. From our initial
                            consultation to the final delivery, we maintain
                            clear communication, meet deadlines, and work
                            closely with you to ensure your vision is brought to
                            life seamlessly. You can trust us to deliver
                            high-quality videos that exceed your expectations.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="PrBlock">
                      <img
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/s3.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">
                            State-of-the-Art&nbsp;
                            <br />
                            Equipment
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="PrT2 popup2-trigger-1"
                          >
                            Read More
                          </a>
                          <span className="d-none">
                            To produce outstanding visuals, we invest in
                            top-of-the-line equipment and stay up-to-date with
                            the latest industry trends. Our cutting-edge
                            cameras, lighting, and sound equipment ensure that
                            your videos are visually stunning and of the highest
                            quality.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="PrBlock">
                      <img
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/s4.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">
                            Full-Service&nbsp;
                            <br />
                            Solutions
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="PrT2 popup2-trigger-1"
                          >
                            Read More
                          </a>
                          <span className="d-none">
                            We offer a comprehensive range of video production
                            services to fulfill all your needs. Whether you
                            require corporate videos, commercials, promotional
                            content, event coverage, or animation, we have the
                            expertise to deliver exceptional results across
                            various industries and sectors.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="PrBlock">
                      <img
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/s5.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">
                            Tailored&nbsp;
                            <br />
                            Approach
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="PrT2 popup2-trigger-1"
                          >
                            Read More
                          </a>
                          <span className="d-none">
                            We understand that each project is unique, and we
                            take the time to understand your objectives, target
                            audience, and brand identity. By collaborating
                            closely with you, we create customized video
                            solutions that perfectly align with your goals and
                            resonate with your viewers.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="PrBlock">
                      <img
                        className="ImageSwitcher"
                        // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                        src="https://mccollinsmediaweb.github.io/mcc-video-production/images/s6.jpg"
                      />
                      <div className="PrBlockContent">
                        <div>
                          <div className="PrT1">
                            Client&nbsp;
                            <br />
                            Satisfaction
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="PrT2 popup2-trigger-1"
                          >
                            Read More
                          </a>
                          <span className="d-none">
                            Client Satisfaction: Your satisfaction is our
                            ultimate priority. We strive to build long-term
                            relationships with our clients based on trust,
                            transparency, and exceptional results. Our dedicated
                            team is committed to ensuring that you are delighted
                            with the final product.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="d-none">
          <div className="portfolio1">
            <a
              href="https://mccv.mcmedia.space/wp-content/themes/mccv/protfolio-videos/12.mp4"
              data-fancybox="portfolio1"
              title="Client Name"
            >
              <img
                // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                src="https://mccollinsmediaweb.github.io/mcc-video-production/images/video-thumb/12.jpg"
                className="ImageSwitcher"
              />
            </a>
            <a
              href="https://mccv.mcmedia.space/wp-content/themes/mccv/protfolio-videos/all-location.mp4"
              data-fancybox="portfolio1"
              title="Client Name"
            >
              <img
                // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                src="https://mccollinsmediaweb.github.io/mcc-video-production/images/video-thumb/alllocation.jpg"
                className="ImageSwitcher"
              />
            </a>
            <a
              href="https://mccv.mcmedia.space/wp-content/themes/mccv/protfolio-videos/arms.mp4"
              data-fancybox="portfolio1"
              title="Client Name"
            >
              <img
                // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                src="https://mccollinsmediaweb.github.io/mcc-video-production/images/video-thumb/arms.jpg"
                className="ImageSwitcher"
              />
            </a>
            <a
              href="https://mccv.mcmedia.space/wp-content/themes/mccv/protfolio-videos/biz.mp4"
              data-fancybox="portfolio1"
              title="Client Name"
            >
              <img
                // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                src="https://mccollinsmediaweb.github.io/mcc-video-production/images/video-thumb/biz.jpg"
                className="ImageSwitcher"
              />
            </a>
            <a
              href="https://mccv.mcmedia.space/wp-content/themes/mccv/protfolio-videos/Doors.mp4"
              data-fancybox="portfolio1"
              title="Client Name"
            >
              <img
                // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                src="https://mccollinsmediaweb.github.io/mcc-video-production/images/video-thumb/doors.jpg"
                className="ImageSwitcher"
              />
            </a>
            <a
              href="https://mccv.mcmedia.space/wp-content/themes/mccv/protfolio-videos/mapei.mp4"
              data-fancybox="portfolio1"
              title="Client Name"
            >
              <img
                // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                src="https://mccollinsmediaweb.github.io/mcc-video-production/images/video-thumb/mapei.jpg"
                className="ImageSwitcher"
              />
            </a>
            <a
              href="https://mccv.mcmedia.space/wp-content/themes/mccv/protfolio-videos/toshiba.mp4"
              data-fancybox="portfolio1"
              title="Client Name"
            >
              <img
                // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                src="https://mccollinsmediaweb.github.io/mcc-video-production/images/video-thumb/thoshib.jpg"
                className="ImageSwitcher"
              />
            </a>
            <a
              href="https://mccv.mcmedia.space/wp-content/themes/mccv/protfolio-videos/Tips_and_Toes_bteolm.mp4"
              data-fancybox="portfolio1"
              title="Client Name"
            >
              <img
                // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                src="https://mccollinsmediaweb.github.io/mcc-video-production/images/video-thumb/tips.jpg"
                className="ImageSwitcher"
              />
            </a>
          </div>
        </div>

        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="ft1">READY TO DO THIS</div>
                <div className="ft2">
                  Let’s get&nbsp;
                  <br />
                  to work
                </div>
                <div className="ft3">
                  <span>Our Address</span> G04, Loft Office 2,
                  <br /> Entrance C, Dubai Media City
                </div>
                <div className="ft4">
                  <a href="tel:+971 55 956 4135">
                    <span>Phone&nbsp;:</span>&nbsp;+971 55 956 4135
                  </a>
                  <br />
                  <div>&nbsp;</div>
                  <a href="mailto:info@mccollinsmedia.com">
                    <span>Email&nbsp;:</span>&nbsp; info@mccollinsmedia.com
                  </a>
                </div>
                <img
                  // src="https://mccollinsmediaweb.github.io/mcc-video-production/images/lazy.png"
                  src="https://mccollinsmediaweb.github.io/mcc-video-production/images/footerlogo.png"
                  className="FtrLogo ImageSwitcher"
                />
              </div>
              <div className="col-md-6">
                <div className="contactForm">
                  {/* <?php echo do_shortcode('[contact-form-7 id="13" title="Footer-Form"]'); ?> */}
                  <form onSubmit={handleSubmit}>
                    <div className="formElements">
                      <input
                        type="text"
                        placeholder="Name"
                        value={fullName}
                        required
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="formElements">
                      <input
                        type="email"
                        placeholder="Email"
                        value={clientEmail}
                        required
                        onChange={(e) => setClientEmail(e.target.value)}
                      />
                    </div>
                    <div className="formElements">
                      {/* <input
                        type="tel"
                        placeholder="Phone Number"
                        value={customerPhone}
                        required
                        onChange={(e) => setCustomerPhone(e.target.value)}
                      /> */}
                      <IntlTelInput
                        style={{ width: "100%" }}
                        defaultCountry="ae"
                        containerClassName="intl-tel-input"
                        inputClassName="form-control"
                        value={contact}
                        onPhoneNumberChange={handlePhoneChange}
                      />
                    </div>
                    <div className="formElements">
                      <select
                        value={lookingFor}
                        required
                        onChange={(e) => setLookingFor(e.target.value)}
                      >
                        {/* Map over the options */}
                        <option value="">Looking for ?</option>
                        <option value="Photoshoot">Photoshoot</option>
                        <option value="Videoshoot">Videoshoot</option>
                        <option value="Photography services">
                          Photography services
                        </option>
                        <option value="Videography services">
                          Videography services
                        </option>
                        <option value="Corporate photoshoot">
                          Corporate photoshoot
                        </option>
                        <option value="Commercial videoshoot">
                          Commercial videoshoot
                        </option>
                        <option value="Fashion photoshoot">
                          Fashion photoshoot
                        </option>
                        <option value="Product photography">
                          Product photography
                        </option>
                        <option value="Wedding photography">
                          Wedding photography
                        </option>
                        <option value="Event videography">
                          Event videography
                        </option>
                        <option value="Portrait photography">
                          Portrait photography
                        </option>
                        <option value="Documentary filmmaking">
                          Documentary filmmaking
                        </option>
                        <option value="Music video production">
                          Music video production
                        </option>
                        <option value="Drone videography">
                          Drone videography
                        </option>
                        <option value="Food photography">
                          Food photography
                        </option>
                        <option value="Real estate videography">
                          Real estate videography
                        </option>
                        <option value="Lifestyle photoshoot">
                          Lifestyle photoshoot
                        </option>
                        <option value="Sports photography">
                          Sports photography
                        </option>
                        <option value="Editorial photoshoot">
                          Editorial photoshoot
                        </option>
                        <option value="Branding videoshoot">
                          Branding videoshoot
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="formElements">
                      <select
                        value={industry}
                        required
                        onChange={(e) => setIndustry(e.target.value)}
                      >
                        {/* Map over the options */}
                        <option value="">Industry</option>
                        <option value="Fashion and Apparel">
                          Fashion and Apparel
                        </option>
                        <option value="Beauty and Cosmetics">
                          Beauty and Cosmetics
                        </option>
                        <option value="Food and Beverage">
                          Food and Beverage
                        </option>
                        <option value="Hospitality and Travel">
                          Hospitality and Travel
                        </option>
                        <option value="Real Estate and Architecture">
                          Real Estate and Architecture
                        </option>
                        <option value="Automotive and Transportation">
                          Automotive and Transportation
                        </option>
                        <option value="Technology and Electronics">
                          Technology and Electronics
                        </option>
                        <option value="Health and Fitness">
                          Health and Fitness
                        </option>
                        <option value="Education and Training">
                          Education and Training
                        </option>
                        <option value="Music and Entertainment">
                          Music and Entertainment
                        </option>
                        <option value="Sports and Fitness">
                          Sports and Fitness
                        </option>
                        <option value="Corporate and Business">
                          Corporate and Business
                        </option>
                        <option value="Non-profit and Social Causes">
                          Non-profit and Social Causes
                        </option>
                        <option value="Art and Culture">Art and Culture</option>
                        <option value="Wedding and Events">
                          Wedding and Events
                        </option>
                        <option value="E-commerce and Retail">
                          E-commerce and Retail
                        </option>
                        <option value="Film and Television">
                          Film and Television
                        </option>
                        <option value="Advertising and Marketing">
                          Advertising and Marketing
                        </option>
                        <option value="Health Care and Pharmaceuticals">
                          Health Care and Pharmaceuticals
                        </option>
                        <option value="Financial Services and Banking">
                          Financial Services and Banking
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <input
                      type="hidden"
                      id="zc_gad"
                      name="zc_gad"
                      defaultValue={hiddenInputValue}
                      ref={hiddenInputRef}
                      onChange={handleHiddenInputChange}
                    />
                    <div className="formElements">
                      <button type="submit" className="filmSubmit2">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="menudrop MenuClick">&nbsp;</div>
        <div className="SideNav">
          <div className="SideNavContent">
            <span className="CloseClick">
              <span className="CloseBtn1 MenuClick">&nbsp;</span>
            </span>
            <div className="NavBox">
              <a href="#home" data-go="home" className="GoLink1">
                Home
              </a>
              <a href="#ourservice" data-go="ourservice" className="GoLink1">
                Our Services
              </a>
              <a href="#ourclients" data-go="ourclients" className="GoLink1">
                Our Clients
              </a>
              <a href="#timeline" data-go="timeline" className="GoLink1">
                Our Timeline
              </a>
              {/* <a href="#ourworks" data-go="ourworks" className="GoLink1">
                Portfolio
              </a> */}
              <a href="#whatsee" data-go="whatsee" className="GoLink1">
                What sets us apart
              </a>
              <a href="#footer" data-go="footer" className="GoLink1">
                Contact
              </a>
            </div>
            <div>
              <div className="SocialMedia">
                <a
                  href="https://www.instagram.com/mccollinsmedia/?hl=en"
                  target="_blank"
                >
                  <img src="https://mccollinsmediaweb.github.io/mcc-video-production/images/instagram.png" />
                </a>
                <a
                  href="https://www.facebook.com/mccollinsmedia/"
                  target="_blank"
                >
                  <img src="https://mccollinsmediaweb.github.io/mcc-video-production/images/facebook.png" />
                </a>
                <a
                  href="https://www.linkedin.com/company/mccollins-media/"
                  target="_blank"
                >
                  <img src="https://mccollinsmediaweb.github.io/mcc-video-production/images/linkedin.png" />
                </a>
                <a
                  href="https://twitter.com/mccollinsmedia?lang=en"
                  target="_blank"
                >
                  <img src="https://mccollinsmediaweb.github.io/mcc-video-production/images/twitter.png" />
                </a>
                {/* <a
                  href="https://api.whatsapp.com/send?phone=971559564135&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media"
                  target="_blank"
                >
                  <img
                    src="https://film.mccollinsmedia.com/wp-content/uploads/2023/08/whatsapp.png"
                    width="27px"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="stickyBtmBtn">
          <a href="#footer">
            <div className="SBBtn">
              <img src="/assets/image/icons/call.svg" width="18px" />
              &nbsp; Request A Call Back
            </div>
          </a>
          <a href="tel:+971 55 956 4135" target="_blank">
            <div className="SBBtn">
              <img src="/assets/image/icons/call.svg" width="18px" />
              &nbsp; Call Us On : +971 55 956 4135
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=971559564135&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media"
            target="_blank"
          >
            <div className="SBWhatsapp">WhatsApp us</div>
          </a>
        </div>

        <div className="FooterMediaIcons">
          <div>
            <div className="mediaFlex">
              <a href="#footer" className="mediaFlex1">
                Get a quote
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=971559564135&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media"
                className="mediaFlex2"
                target="_blank"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
        <div className="OverLay2">&nbsp;</div>
        <div className="Popup2">
          <div className="PopModal2">
            <div className="p2HeadText">Please Select any Services</div>
            <div className="p2mainContent">Services Descriptions</div>
            <a className="cta1" href="javascript:void(0)">
              Contact Now
            </a>
          </div>
        </div>

        {/* <script src="https://mccollinsmediaweb.github.io/mcc-video-production/js/jquery.js"></script>
        <script src="https://mccollinsmediaweb.github.io/mcc-video-production/js/jquery.fancybox.min.js"></script>
        <script src="https://mccollinsmediaweb.github.io/mcc-video-production/js/owl.carousel.min.js"></script>
        <script src="https://mccollinsmediaweb.github.io/mcc-video-production/js/main.js"></script>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}

        <Script src="https://mccollinsmediaweb.github.io/mcc-video-production/js/jquery.js" strategy="beforeInteractive" />
        <Script src="https://mccollinsmediaweb.github.io/mcc-video-production/js/jquery.fancybox.min.js" strategy="afterInteractive" />
        <Script src="https://mccollinsmediaweb.github.io/mcc-video-production/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="https://mccollinsmediaweb.github.io/mcc-video-production/js/main.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
      </div>
    </>
  );
};

FilmProduction.getLayout = function getLayout(FilmProduction) {
  return <EmptyLayout>{FilmProduction}</EmptyLayout>;
};

export default FilmProduction;
