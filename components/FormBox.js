import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  SimpleGrid,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import FadeUp from "./Motion/FadeUp";
const axios = require("axios");
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const FormBox = (props) => {
  const [FirstName, setFirstName] = useState("");
  // const [LastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [contactMain, setContactMain] = useState();
  const [contactStatus, setContactStatus] = useState();
  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);

  const [checkedItems, setCheckedItems] = useState([]);
  const checkedItemsString = checkedItems.join(", ");

  const [hiddenInputValue, setHiddenInputValue] = useState("");
  const hiddenInputRef = useRef();

  useEffect(() => {
    // Initialize the hidden input value when the component mounts
    setHiddenInputValue(hiddenInputRef.current?.value);
  }, []);

  const handleHiddenInputChange = () => {
    // Update the state with the current hidden input value
    setHiddenInputValue(hiddenInputRef.current?.value);
  };
  const handleCheckboxChange = (value) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
    console.log(checkedItems);
  };

  const toast = useToast();

  const handlePhoneChange = (status, number, countryData) => {
    setContact(number);
    setContactMain(`+${countryData.dialCode} ${number}`);
    setContactStatus(status);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    if (contactStatus === true) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: FirstName,
          // lastName: LastName,
          company: company,
          jobTitle: jobTitle,
          email: email,
          contact: contact,
          text: text,
          services: checkedItemsString,
          page: props.page,
          date: new Date(),
        }),
      };
      fetch("/api/form-submit", requestOptions).then(
        (response) => response.json(),
        setFirstName(""),
        setCompany(""),
        setJobTitle(""),
        setContact(""),
        setContactMain(""),
        setContactStatus(false),
        setEmail(""),
        setText(""),
        setCheckedItems([]),
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
      formData.append("Firstname", FirstName);
      formData.append("Email", email);
      formData.append("Phone", contactMain);
      formData.append("Company", company);
      formData.append("Services", checkedItemsString);
      formData.append("jobTitle", jobTitle);
      formData.append("Message", text);
      if (props.page) {
        formData.append("page", props.page);
      }

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

      const refreshUrl =
        "https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.b08cb054df8f248fb6d6bf12739d82f6.b03dc43f54c99a2aed5b16093e950261&client_id=1000.BAQO3P3DTMRBTPEP99PKP9VRX9V9SM&client_secret=6a93c8818b92a1b381a6e4de999ef7e9a0c987620c&grant_type=refresh_token";

      const data = {
        Company: company,
        FirstName: FirstName,
        Email: email,
        Page: props.page,
        Phone: contactMain,
        SelectedServices: checkedItemsString,
        Message: text,
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

    setLoading(false);
  };

  return (
    <Box width={"100%"} mt="50px">
      <FadeUp>
        {props.heading ? (
          <Heading className="main-h2">{props.heading}</Heading>
        ) : (
          <Heading
            style={{
              background:
                "linear-gradient(to bottom,#fff 49%,#ffde11 50%,#ffde11 70%,#fff 71%,#fff 100%)",
              width: "fit-content",
              padding: "0 15px",
            }}
            fontSize={{ base: "20px", md: "35px" }}
          >
            Ready to get started?
          </Heading>
        )}

        <Text
          className="main-p"
          fontWeight={"500"}
          color="#707070"
          mt={5}
          mb={10}
        >
          Your email address will not be published. Required fields are marked *
        </Text>
      </FadeUp>
      <FadeUp threshold={0.1}>
        <form onSubmit={formHandler} className="contact-form">
          <FormControl isRequired mb={10}>
            {/* <FormLabel htmlFor="first-name">First Name</FormLabel> */}
            <Input
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              value={FirstName}
              placeholder="Full Name"
            />
          </FormControl>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="50px" mb={"50px"}>
            {/* <FormControl isRequired>
              <Input
                id="last-name"
                onChange={(e) => setLastName(e.target.value)}
                value={LastName}
                placeholder="Last Name"
              />
            </FormControl> */}
            <FormControl isRequired>
              {/* <FormLabel htmlFor="company">Company</FormLabel> */}
              <Input
                id="company"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                placeholder="Company"
              />
            </FormControl>
            <FormControl isRequired>
              {/* <FormLabel htmlFor="jobTitle">Job Title</FormLabel> */}
              <Input
                id="jobTitle"
                onChange={(e) => setJobTitle(e.target.value)}
                value={jobTitle}
                placeholder="Job Title"
              />
            </FormControl>
            <FormControl
              isRequired
              style={{ alignSelf: "end" }}
              className="int-grp"
            >
              {/* <FormLabel htmlFor="contact">Contact No</FormLabel> */}
              {/* <NumberInput max={50} min={10} value={contact}>
                <NumberInputField
                  id="contact"
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Contact No"
                />
              </NumberInput> */}
              <IntlTelInput
                style={{ width: "100%" }}
                defaultCountry="ae"
                containerClassName="intl-tel-input"
                inputClassName="form-control"
                value={contact}
                onPhoneNumberChange={handlePhoneChange}
              />
            </FormControl>
            <FormControl isRequired>
              {/* <FormLabel htmlFor="email">Email Address</FormLabel> */}
              <Input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email Address"
              />
            </FormControl>
          </SimpleGrid>
          <FormControl mt="5" className="cnt-rs" mb={"50px"}>
            {/* <FormLabel htmlFor="services">Select Services</FormLabel> */}
            <Input
              id="services"
              value={checkedItemsString}
              placeholder="Select Services"
              readOnly
            />
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing="20px" mt={5}>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Advertising")}
                onChange={() => handleCheckboxChange("Advertising")}
              >
                Advertising
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Film Production")}
                onChange={() => handleCheckboxChange("Film Production")}
              >
                Film Production
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Social Media")}
                onChange={() => handleCheckboxChange("Social Media")}
              >
                Social Media
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Branding")}
                onChange={() => handleCheckboxChange("Branding")}
              >
                Branding
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Media Buying")}
                onChange={() => handleCheckboxChange("Media Buying")}
              >
                Media Buying
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Strategy")}
                onChange={() => handleCheckboxChange("Strategy")}
              >
                Strategy
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Design Services")}
                onChange={() => handleCheckboxChange("Design Services")}
              >
                Design Services
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Web Design / Development")}
                onChange={() =>
                  handleCheckboxChange("Web Design / Development")
                }
              >
                Web Design / Development
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Digital Marketing")}
                onChange={() => handleCheckboxChange("Digital Marketing")}
              >
                Digital Marketing
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Search Engine Optimization")}
                onChange={() =>
                  handleCheckboxChange("Search Engine Optimization")
                }
              >
                Search Engine Optimization
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Event Marketing")}
                onChange={() => handleCheckboxChange("Event Marketing")}
              >
                Event Marketing
              </Checkbox>
              <Checkbox
                size="md"
                value="apple"
                isChecked={checkedItems.includes("Sitecore")}
                onChange={() => handleCheckboxChange("Sitecore")}
              >
                Sitecore
              </Checkbox>
            </SimpleGrid>
          </FormControl>
          <FormControl mt={5}>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="How Can We Help You?"
            />
          </FormControl>
          {/* ZC_GAD hidden input */}
          <input
            type="hidden"
            id="zc_gad"
            name="zc_gad"
            defaultValue={hiddenInputValue}
            ref={hiddenInputRef}
            onChange={handleHiddenInputChange}
          />
          <Button
            mt={5}
            colorScheme="yellow"
            background={"#FFDE11"}
            type="submit"
            fontSize={"18px"}
            fontWeight="bold"
            isLoading={loading}
          >
            Submit Inquiry
          </Button>
        </form>
      </FadeUp>
    </Box>
  );
};

export default FormBox;
