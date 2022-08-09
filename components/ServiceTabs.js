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
      <Container maxWidth={"7xl"} py="0">
        <Tabs>
          <TabList
            justifyContent={"space-between"}
            overflow={{ base: "scroll", md: "visible" }}
            height={"75px"}
            overflowY={"hidden"}
          >
            <Tab>Web Development</Tab>
            <Tab>Social Media Marketing</Tab>
            <Tab>Digital Marketing & SEO</Tab>
            <Tab>Content Production</Tab>
            <Tab>Brand Development</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ServiceTabsDetails
                img="/assets/image/ServiceTabs/WebDevelopment.png"
                heading={"Web \n Development"}
                subHeading={"creating content that tells a story"}
                desc={
                  "Creating a digital outlet for your brand and driving leads via the website. Focus on Mobile Websites is key. We develop Bilingual websites for the GCC Market."
                }
                points={
                  "Corporate Website \n  E-commerce Website \n  Microsites \n  Annual Maintenance \n  SEO & SEM Support \n  Lead Generation Landing Pages"
                }
              />
            </TabPanel>
            <TabPanel>
              <ServiceTabsDetails
                img="/assets/image/ServiceTabs/Social-Media-Marketing.gif"
                heading={"Social Media \n Marketing"}
                subHeading={"creating content that tells a story"}
                desc={
                  "Storytellers for your brand ! Be it creating the strategy to content development or engaging with your brands audience, our team of Social Media Experts represent your brand"
                }
                points={
                  "Content Development \n Content Management \n Comment Moderation \n Digital Ad Management \n Blogger Outreach Program \n Digital Strategy Development"
                }
              />
            </TabPanel>
            <TabPanel>
              <ServiceTabsDetails
                img="/assets/image/ServiceTabs/DigitalMarketing&SEO.png"
                heading={"Digital \n Marketing & SEO"}
                subHeading={"creating content that tells a story"}
                desc={
                  "From driving footfall to your location, to your website or tracking conversions, our team works towards making numbers matter. Be it Digital Media Buying - Social Media Ads or PPC Campaigns, we work in alignment with your KPIs. "
                }
                points={
                  "Social Media Management \n Performance Marketing \n Search Engine Optimization \n Google Ads - PPC \n Content Production \n AR/VR \n Design and Branding \n Website Development"
                }
              />
            </TabPanel>
            <TabPanel>
              <ServiceTabsDetails
                img="/assets/image/ServiceTabs/IphoneReels.png"
                heading={"Content \n Production"}
                subHeading={"creating content that tells a story"}
                desc={
                  "Creating multimedia content that works for your brand. Our team of in-house content producers work on Photography, Videography and Motion Graphics "
                }
                points={
                  "Photography \n Food Photography \n Mobile First Content \n Videography \n 360 Images and Videos \n Cinemagraphs \n Stop Motion Videos \n Brand Montage Videos \n Corporate Videos \n Product Videos"
                }
              />
            </TabPanel>
            <TabPanel>
              <ServiceTabsDetails
                img="/assets/image/ServiceTabs/Design&Brand.png"
                heading={"Design & \n Brand Dev"}
                subHeading={"creating content that tells a story"}
                desc={
                  "Be it creating a brand from inception or building on well established brand, our in-house team of Designers and Copywriters,"
                }
                points={
                  "Logo Development \n Copywriting \n Translation \n Printing Guidelines \n Brand Asset Development \n Brand Guideline Development"
                }
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <hr />
    </Stack>
  );
};

export default ServiceTabs;
