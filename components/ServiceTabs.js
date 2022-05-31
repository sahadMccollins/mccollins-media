import {
  Container,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ServiceTabsDetails from "./ServiceTabsDetails";

const ServiceTabs = () => {
  return (
    <Stack position={"relative"} zIndex="2" className="serviceTab">
      <Container maxWidth={"7xl"} py="30">
        <Tabs>
          <TabList
            justifyContent={"space-between"}
            overflow={{ base: "scroll", md: "visible" }}
            height={"75px"}
            overflowY={"hidden"}
          >
            <Tab>Web Development</Tab>
            <Tab>App Development</Tab>
            <Tab>Performance Marketing</Tab>
            <Tab>Content Creation</Tab>
            <Tab>Social Media Marketing</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ServiceTabsDetails />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <hr />
    </Stack>
  );
};

export default ServiceTabs;
