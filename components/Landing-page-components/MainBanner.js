import React from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
const MainBanner1 = () => {
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
          <source
            src="/mccollins-media-video-compressed.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="image-title">
        <div className="widthFull">
          <div className="icontainer">
            <div className="irow">
              <div className="icol-md-9">
                <div className="T1">
                  web design &<br /> development
                  
                </div>
                <div className="T2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </div>
                <div className="PartnerBoxWrap">
                  <div className="PartnerBox">
                    <div className="PartnerItem">
                      <Image
                        src="/lp/react.png"
                        layout="responsive"
                        width={"186"}
                        height={"101"}
                        priority={true}
                        className="PartnerItemImg"
                      />
                    </div>
                    <div className="PartnerItem">
                      <Image
                        src="/lp/wordpress1.png"
                        layout="responsive"
                        width={"186"}
                        height={"101"}
                        priority={true}
                        className="PartnerItemImg"
                      />
                    </div>
                    <div className="PartnerItem">
                      <Image
                        src="/lp/shopify.png"
                        layout="responsive"
                        width={"186"}
                        height={"101"}
                        priority={true}
                        className="PartnerItemImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="icol-md-3">
                <div className="HeaderForm">
                  <div className="FormElements">
                    <div className="FormItem">
                      <div className="FormLabel">Full Name</div>
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="FormItem">
                      <div className="FormLabel">Email</div>
                      <input type="text" placeholder="Your Email" />
                    </div>
                    <div className="FormItem">
                      <div className="FormLabel">Name</div>
                      <IntlTelInput
                        defaultCountry="ae"
                        containerClassName="intl-tel-input"
                        inputClassName="form-control"
                      />
                    </div>
                    <div className="FormItem">
                      <div className="FormLabel">Looking For</div>
                      <select required="">
                        <option value="" selected="">
                          Looking for ?
                        </option>
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
                    <div className="FormItem">
                      <div className="FormLabel">Industry</div>
                      <select required="">
                        <option value="" selected="">Industry</option>
                      <option value="Fashion and Apparel">Fashion and Apparel</option>
                      <option value="Beauty and Cosmetics">Beauty and Cosmetics</option>
                      <option value="Food and Beverage">Food and Beverage</option>
                      <option value="Hospitality and Travel">Hospitality and Travel</option>
                      <option value="Real Estate and Architecture">Real Estate and Architecture</option>
                      <option value="Automotive and Transportation">Automotive and Transportation</option>
                      <option value="Technology and Electronics">Technology and Electronics</option>
                      <option value="Health and Fitness">Health and Fitness</option>
                      <option value="Education and Training">Education and Training</option>
                      <option value="Music and Entertainment">Music and Entertainment</option>
                      <option value="Sports and Fitness">Sports and Fitness</option>
                      <option value="Corporate and Business">Corporate and Business</option>
                      <option value="Non-profit and Social Causes">Non-profit and Social Causes</option>
                      <option value="Art and Culture">Art and Culture</option>
                      <option value="Wedding and Events">Wedding and Events</option>
                      <option value="E-commerce and Retail">E-commerce and Retail</option>
                      <option value="Film and Television">Film and Television</option>
                      <option value="Advertising and Marketing">Advertising and Marketing</option>
                      <option value="Health Care and Pharmaceuticals">Health Care and Pharmaceuticals</option>
                      <option value="Financial Services and Banking">Financial Services and Banking</option>
                      <option value="Other">Other</option></select>
                    </div>
                    <button className="SubmitBtn1">Get A Quote</button>
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
