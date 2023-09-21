import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
const InstaBox = () => {
  useEffect(() => {
    document.body.className = 'LandingPage';
  });
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.taggbox.com/embed-lite.min.js";
    script.defer = false;
    script.async = false;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);
  return (
    <div className="pd-common InstaBoxWrap">
        <div className="icontainer">
        <div class="rowBox1 Ar1 fullWidthRow">
          <div class="rowBox1L">
            <div className="St12">Follow us On instagram</div>
            <div class="T3">#behindTheScene</div>
          </div>
          <div class="rowBox1R">
            <div class="T4">
              From driving footfall to your location, to your website or
              tracking conversions, our team works towards making numbers
              matter. Be it Digital Media Buying - Social Media Ads or PPC
              Campaigns, we work in alignment with your KPIs.
            </div>
          </div>
        </div>
      <Box>
        <div
          className="taggbox"
          style={{ width: "100%", height: "100%" }}
          data-widget-id="124868"
          data-tags="false"
        ></div>
      </Box>
        </div>
      </div>
  );
};
export default InstaBox;


