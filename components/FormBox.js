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
import { useState } from "react";

const FormBox = (props) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);

  const [checkedItems, setCheckedItems] = useState([]);
  const checkedItemsString = checkedItems.join(", ");

  const handleCheckboxChange = (value) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
    console.log(checkedItems);
  };

  const toast = useToast();

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: FirstName,
        lastName: LastName,
        company: company,
        jobTitle: jobTitle,
        email: email,
        contact: contact,
        text: text,
        services: checkedItemsString,
      }),
    };
    fetch("/api/form-submit", requestOptions).then(
      (response) => response.json(),
      setFirstName(""),
      setLastName(""),
      setCompany(""),
      setJobTitle(""),
      setContact(""),
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
  };
  return (
    <Box width={"100%"} mt="50px">
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
      <form onSubmit={formHandler} className="contact-form">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="50px" mb={"50px"}>
          <FormControl isRequired>
            {/* <FormLabel htmlFor="first-name">First Name</FormLabel> */}
            <Input
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              value={FirstName}
              placeholder="First Name"
            />
          </FormControl>
          <FormControl isRequired>
            {/* <FormLabel htmlFor="last-name">Last Name</FormLabel> */}
            <Input
              id="last-name"
              onChange={(e) => setLastName(e.target.value)}
              value={LastName}
              placeholder="Last Name"
            />
          </FormControl>
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
          <FormControl isRequired>
            {/* <FormLabel htmlFor="contact">Contact No</FormLabel> */}
            <NumberInput max={50} min={10} value={contact}>
              <NumberInputField
                id="contact"
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact No"
              />
            </NumberInput>
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
              isChecked={checkedItems.includes("Public Relations")}
              onChange={() => handleCheckboxChange("Public Relations")}
            >
              Public Relations
            </Checkbox>
            <Checkbox
              size="md"
              value="apple"
              isChecked={checkedItems.includes("Web Design / Development")}
              onChange={() => handleCheckboxChange("Web Design / Development")}
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
          {/* <FormLabel htmlFor="email">How Can We Help You?</FormLabel> */}
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="How Can We Help You?"
          />
        </FormControl>
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
    </Box>
  );
};

export default FormBox;
