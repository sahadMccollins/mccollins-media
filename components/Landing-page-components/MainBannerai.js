import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const MainBanner1ai = () => {
  const [phrase, setPhrase] = useState("");
  const [i, setI] = useState(0);
  const phraseRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [contactMain, setContactMain] = useState();
  const [contactStatus, setContactStatus] = useState();
  const [lookingFor, setLookingFor] = useState("");
  const [company, setCompany] = useState("");

  const [loading, setLoading] = useState(false);

  const [hiddenInputValue, setHiddenInputValue] = useState("");
  const hiddenInputRef = useRef();

  const recaptchaRef = useRef();

  useEffect(() => {
    // Initialize the hidden input value when the component mounts
    setHiddenInputValue(hiddenInputRef.current?.value);
  }, []);

  const handleHiddenInputChange = () => {
    // Update the state with the current hidden input value
    setHiddenInputValue(hiddenInputRef.current?.value);
  };

  const router = useRouter();

  const phrases = [
    "AI AR & VR",
    "AI AR & VR",
    "AI AR & VR",
    "AI AR & VR",
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
      if (phraseRef.current.style.opacity) {
        phraseRef.current.style.opacity = 1;
      }
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

  const handlePhoneChange = (status, number, countryData) => {
    setContact(number);
    setContactMain(`+${countryData.dialCode} ${number}`);
    setContactStatus(status);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Verify reCAPTCHA
    const recaptchaValue = recaptchaRef.current.getValue();

    if (recaptchaValue) {
      if (name !== "" && lookingFor !== "" && email !== "" && company !== "") {
        if (contactStatus === true) {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: name,
              email: email,
              contact: contactMain,
              services: lookingFor,
              company: company,
              date: new Date(),
              page: "Web development Landing Page",
            }),
          };
          fetch("/api/form-submit", requestOptions).then(
            (response) => response.json(),

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
          formData.append("Phone", contactMain);
          formData.append("Company", company);
          formData.append("Services", lookingFor);
          formData.append("page", "Web development Landing Page");
          formData.append("full Url", router.asPath);

          fetch(
            "https://script.google.com/macros/s/AKfycbws5l_t6j39UZQ_unevk0qqn_IfYCbfKT7jI4UP6zb8mjX8QzNR/exec",
            {
              method: "POST",
              body: formData,
            }
          )
            .then(
              (response) => response.json(),
              setName(""),
              setContact(""),
              setContactMain(""),
              setContactStatus(false),
              setEmail(""),
              setCompany(""),
              setLookingFor("")
            )
            .then((data) => router.push("/Thank-you-for-contacting-us"))
            .catch((error) => console.error(error));

          const data = {
            Company: company,
            FirstName: name,
            Email: email,
            Page: router.asPath,
            Phone: contact,
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
        } else {
          toast({
            title: "Phone field is not valid",
            description: "Please check the phone field",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Please fill all the required field",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);
      }
      setLoading(false);
    } else {
      // Show an error message or handle invalid reCAPTCHA
      toast({
        title: "reCAPTCHA verification failed",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <div className="VideoBanner">
      <div className="image-background">&nbsp;</div>
      <div className="video-background">
        <Image src={"/cgi/ar.jpg"} height={"1145"} width={"1920"} />
      </div>
      <div className="image-title" id="contactus">
        <div className="widthFull">
          <div className="icontainer">
            <div className="irow">
              <div className="icol-md-9">
                <div className="T1">
                Our{" "}
                  <span
                    id="Transform"
                    className=" TransfomText random-word"
                    ref={phraseRef}
                  >
                    {phrase}
                  </span>{" "}
                  Services
                  <br />
                   are revolutionizing the real estate sector
                </div>
                <div className="T2">
                Offering cutting-edge solutions to enhance your property experience . From virtual property tours to AI-powered data analysis, we are here to elevate your business to new heights. Explore the possibilities with us today
                </div>
                {/* <div className="PartnerBoxWrap">
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
                </div> */}
              </div>
              <div className="icol-md-3">
                <div className="HeaderForm">
                  <div className="FormElements">
                    <form onSubmit={formHandler}>
                      <div className="FormItem">
                        <div className="FormLabel">Full Name</div>
                        <input
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="FormItem">
                        <div className="FormLabel">Email</div>
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
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
                        <div className="FormLabel">Company</div>
                        <input
                          type="text"
                          onChange={(e) => setCompany(e.target.value)}
                          required
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
                      <input
                        type="hidden"
                        id="zc_gad"
                        name="zc_gad"
                        defaultValue={hiddenInputValue}
                        ref={hiddenInputRef}
                        onChange={handleHiddenInputChange}
                      />
                      <div className="FormItem">
                        <div className="FormLabel">reCAPTCHA</div>
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey="6LdE4h0pAAAAABEHT4MMZt-FKotSZC7ajadfuqs3"
                          onChange={(value) =>
                            console.log("reCAPTCHA value:", value)
                          }
                        />
                      </div>
                      <button className="SubmitBtn1" type="submit">
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
export default MainBanner1ai;
