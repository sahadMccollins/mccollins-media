import React from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
const TrustedLogos = () => {
  return (
    <div className="TrustLogosBox pd-common">
      <div className="icontainer">
        <div className="rowBox1">
          <div className="rowBox1L">
            <div className="T3">
              Trusted by largest brands for website development
            </div>
          </div>
          <div className="rowBox1R">
            <div className="T4">
              Every brand in today’s time must have a website to showcase itself
              to its audience. Having a mobile friendly website is even more
              important. Our team of in-house developers specialize in various
              backends be it Wordpress, WooCommerce, Magento, React or Shopify
              to name a few. Our agency is Partners with several leading
              platforms
            </div>
          </div>
        </div>
        <div className="StepBoxWrp">
          <div className="StepBox">
            <div className="StepBoxItem">
              <div className="imgbox">
                <Image
                  src="/lp/s1.png"
                  layout="responsive"
                  width={"90"}
                  height={"88"}
                  priority={true}
                />
              </div>

              <div className="S1">Expert TEAM</div>
              <div className="S2">
                Get your website designed and developed by a team of experts who
                will ensure that your site is perfect for your brand.
              </div>
            </div>
            <div className="StepBoxItem">
              <div className="imgbox">
                <Image
                  src="/lp/s2.png"
                  layout="responsive"
                  width={"90"}
                  height={"88"}
                  priority={true}
                />
              </div>

              <div className="S1">Unique Features</div>
              <div className="S2">
              Choose from a wide range of customizable website features that will make your site unique.
              </div>
            </div>
            <div className="StepBoxItem">
              <div className="imgbox">
                <Image
                  src="/lp/s3.png"
                  layout="responsive"
                  width={"90"}
                  height={"88"}
                  priority={true}
                />
              </div>

              <div className="S1">Smooth
Maintenance</div>
              <div className="S2">
              Enjoy hassle-free website maintenance that will keep your site running smoothly.
              </div>
            </div>
            <div className="StepBoxItem">
              <div className="imgbox">
                <Image
                  src="/lp/s4.png"
                  layout="responsive"
                  width={"90"}
                  height={"88"}
                  priority={true}
                />
              </div>

              <div className="S1">SEO Techniques</div>
              <div className="S2">
              Optimize your website for better search engine ranking with our cutting-edge SEO techniques.
              </div>
            </div>
            <div className="StepBoxItem desktop-only">
              <div className="imgbox">
                <Image
                  src="/lp/s5.png"
                  layout="responsive"
                  width={"90"}
                  height={"88"}
                  priority={true}
                />
              </div>

              <div className="S1">Safe And Secure</div>
              <div className="S2">
              Keep your data safe and secure with our state-of-the-art security measures
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrustedLogos;
