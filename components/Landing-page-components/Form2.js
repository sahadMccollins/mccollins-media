import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import TagManager from "react-gtm-module";

const Form2 = () => {
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
            "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec",
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
            .then((data) => {
              TagManager.dataLayer({
                dataLayer: {
                  event: "conversion",
                  send_to: "AW-10803441186/fOI8CPypnfkYEKLcvZ8o",
                  page: window.location.href,
                },
              });
            })
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
    <form onSubmit={formHandler}>
      <div className="FormItem">
        <div className="FormLabel">Full Name</div>
        <input type="text" onChange={(e) => setName(e.target.value)} required />
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
        <select required onChange={(e) => setLookingFor(e.target.value)}>
          <option value="" selected="">
            Looking for ?
          </option>
          <option value={"Website Development"}>Website Development</option>
          <option value={"Performance Marketing"}>Performance Marketing</option>
          <option value={"Social Media Marketing"}>
            Social Media Marketing
          </option>
          <option value={"SEO"}>SEO</option>
          <option value={"Google Ads Management"}>Google Ads Management</option>

          <option value="Content Production">Content Production</option>
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
      <div className="FormItem ">
        <div className="FormLabel">reCAPTCHA</div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LdE4h0pAAAAABEHT4MMZt-FKotSZC7ajadfuqs3"
          onChange={(value) => console.log("reCAPTCHA value:", value)}
        />
      </div>
      <button className="SubmitBtn1" type="submit">
        Get A Quote
      </button>
    </form>
  );
};

export default Form2;
