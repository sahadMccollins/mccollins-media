import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useToast } from "@chakra-ui/react";

const MainBanner1 = () => {
  const [phrase, setPhrase] = useState("");
  const [i, setI] = useState(0);
  const phraseRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [lookingFor, setLookingFor] = useState("");

  const [loading, setLoading] = useState(false);

  const phrases = [
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
  ];

  const randomNum = (num, max) => {
    let j = Math.floor(Math.random() * max);

    while (num === j) {
      j = Math.floor(Math.random() * max);
    }
    return j;
  };

  const updatePhrase = () => {
    const newIndex = randomNum(i, phrases.length);
    setI(newIndex);
    const newPhrase = phrases[newIndex];
    phraseRef.current.style.opacity = 0;
    setTimeout(() => {
      setPhrase(newPhrase);
      phraseRef.current.style.opacity = 1;
    }, 500);
  };

  useEffect(() => {
    updatePhrase();
  }, []);

  useEffect(() => {
    const animationTime = getAnimationTime();
    const interval = setInterval(updatePhrase, animationTime);
    return () => clearInterval(interval);
  }, []);

  const getAnimationTime = () => {
    const compStyles = window.getComputedStyle(phraseRef.current);
    let animation = compStyles.getPropertyValue("animation");
    animation =
      animation || compStyles.getPropertyValue("-moz-animation-duration");
    animation =
      animation || compStyles.getPropertyValue("-webkit-animation-duration");
    const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
    return animationTime;
  };

  const toast = useToast();

  const handlePhoneChange = (status, number, country) => {
    setContact(number);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: name,
        email: email,
        contact: contact,
        services: lookingFor,
        date: new Date(),
        page: "Web development Landing Page",
      }),
    };
    fetch("/api/form-submit", requestOptions).then(
      (response) => response.json(),
      setName(""),
      setContact(""),
      setEmail(""),
      setLookingFor(""),
      setLoading(false),
      toast({
        title: "Form Submited",
        description: "Thank you for getting in touch!",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    );
    let formData = new FormData();
    formData.append("Firstname", name);
    formData.append("Email", email);
    formData.append("Phone", contact);
    formData.append("Services", lookingFor);
    formData.append("date", new Date());
    formData.append("Page", "Web development Landing Page");

    fetch(
      "https://script.google.com/macros/s/AKfycbws5l_t6j39UZQ_unevk0qqn_IfYCbfKT7jI4UP6zb8mjX8QzNR/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setLoading(false);
  };

  return (
    <div className="VideoBanner">
      <div className="image-background">&nbsp;</div>
      <div className="video-background">
        <video
          playsInline
          autoPlay
          loop
          muted
          width="100%"
          className="LpMainVideo"
          poster="/assets/cloudinaryBackup/home-banner_bwes6c.webp"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="image-title">
        <div className="widthFull">
          <div className="icontainer">
            <div className="irow">
              <div className="icol-md-9">
                <div className="T1">
                  Developing{" "}
                  <span
                    id="Transform"
                    className=" TransfomText random-word"
                    ref={phraseRef}
                  >
                    {phrase}
                  </span>{" "}
                  Websites
                  <br />
                  To grow and establish your online presence
                </div>
                <div className="T2">
                  Elevate Your Online Presence with Our Web Development
                  Services, Crafting Contemporary, Responsive, and User-Centric
                  Websites that Fuel Business Growth and Spotlight Your Brand
                </div>
                <div className="PartnerBoxWrap">
                  <div className="PartnerBox">
                    <div className="PartnerItem">
                      <div className="TechBox">
                        <Image
                          src="/lp/react1.png"
                          layout="responsive"
                          width={"200"}
                          height={"200"}
                          priority={true}
                          className="PartnerItemImg"
                        />
                        <div className="TechName">React Js</div>
                      </div>
                    </div>
                    <div className="PartnerItem">
                      <div className="TechBox">
                        <Image
                          src="/lp/wordpressnew.png"
                          layout="responsive"
                          width={"200"}
                          height={"200"}
                          priority={true}
                          className="PartnerItemImg"
                        />
                        <div className="TechName">Wordpress</div>
                      </div>
                    </div>
                    <div className="PartnerItem">
                      <div className="TechBox">
                        <Image
                          src="/lp/vue.png"
                          layout="responsive"
                          width={"200"}
                          height={"200"}
                          priority={true}
                          className="PartnerItemImg"
                        />
                        <div className="TechName">Vue Js</div>
                      </div>
                    </div>
                    <div className="PartnerItem">
                      <div className="TechBox">
                        <Image
                          src="/lp/angular.png"
                          layout="responsive"
                          width={"200"}
                          height={"200"}
                          priority={true}
                          className="PartnerItemImg"
                        />
                        <div className="TechName">Angular Js</div>
                      </div>
                    </div>
                    <div className="PartnerItem">
                      <div className="TechBox">
                        <Image
                          src="/lp/nodejs.png"
                          layout="responsive"
                          width={"200"}
                          height={"200"}
                          priority={true}
                          className="PartnerItemImg"
                        />
                        <div className="TechName">Node Js</div>
                      </div>
                    </div>
                    <div className="PartnerItem">
                      <div className="TechBox">
                        <Image
                          src="/lp/shopify1.png"
                          layout="responsive"
                          width={"200"}
                          height={"200"}
                          priority={true}
                          className="PartnerItemImg"
                        />
                        <div className="TechName">Shopify</div>
                      </div>
                    </div>
                    <div className="PartnerItem">
                      <div className="TechBox">
                        <Image
                          src="/lp/php1.png"
                          layout="responsive"
                          width={"200"}
                          height={"200"}
                          priority={true}
                          className="PartnerItemImg"
                        />
                        <div className="TechName">Php</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icol-md-3">
                <div className="HeaderForm" id="contactus">
                  <div className="FormElements">
                    <form>
                      <div className="FormItem">
                        <div className="FormLabel">Full Name</div>
                        <input
                          type="text"
                          placeholder="Full Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="FormItem">
                        <div className="FormLabel">Email</div>
                        <input
                          type="text"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="FormItem">
                        <div className="FormLabel">Phone Number</div>
                        <IntlTelInput
                          defaultCountry="ae"
                          containerClassName="intl-tel-input"
                          inputClassName="form-control"
                          value={contact}
                          onPhoneNumberChange={handlePhoneChange}
                        />
                      </div>
                      <div className="FormItem">
                        <div className="FormLabel">Looking For</div>
                        <select
                          required
                          onChange={(e) => setLookingFor(e.target.value)}
                        >
                          <option value="" selected="">
                            Looking for ?
                          </option>
                          <option value="" selected="">
                            Looking for ?
                          </option>
                          <option value={"Corporate Website"}>
                            Corporate Website
                          </option>
                          <option value={"E-commerce Website"}>
                            E-commerce Website
                          </option>
                          <option value={"Landing Pages"}>Landing Pages</option>
                          <option value={"Real Estate Website"}>
                            Real Estate Website
                          </option>
                          <option value={"Restaurant and Food Service Site"}>
                            Restaurant and Food Service Site
                          </option>
                          <option value={"Travel and Tourism Website"}>
                            Travel and Tourism Website
                          </option>
                          <option value={"Healthcare and Medical Website"}>
                            Healthcare and Medical Website
                          </option>
                          <option value={"Fitness and Wellness Website"}>
                            Fitness and Wellness Website
                          </option>
                          <option value={"Technology Website"}>
                            Technology Website
                          </option>
                          <option value={"Government and Municipal Website"}>
                            Government and Municipal Website
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <input
                        style={{ display: "none" }}
                        type="text"
                        value={"Web Development Landing Page"}
                        name="page"
                      />
                      <button
                        className="SubmitBtn1"
                        type="submit"
                        onClick={formHandler}
                      >
                        Get A Quote
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainBanner1;
