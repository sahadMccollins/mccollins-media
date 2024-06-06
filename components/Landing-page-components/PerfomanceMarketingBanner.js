import React from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useMediaQuery } from "@chakra-ui/react";

import Form2 from "./Form2";

const PerfomanceBannerMarketing = () => {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
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
          poster="/lp/lp1main.jpg"
        >
          <source src="/social.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="image-title SEOTitleBox" id="contactnow">
        <div className="widthFull">
          <div className="icontainer">
            <div className="irow">
              <div className="icol-md-9">
                <div className="T1">
                  performance
                  <br />
                  marketing
                </div>
                <div className="T2">
                  McCollins is the conversion - first agency that helps Global
                  <br />
                  brands attract and convert more customers From Google search.
                </div>
                {!isSmallerThan1000 && (
                  <div className="BtnWrap1">
                    <a href="#" className="BtnSt1">
                      Get Your Free Proposals
                    </a>
                  </div>
                )}
                <div className="FtrBx1Wrp">
                  <div className="FtrBx1">
                    <div className="FtrBx1Item color1">
                      <div>
                        <div className="FtrBx1ItemT1">$2B</div>
                        <div className="FtrBx1ItemT2">
                          Billion revenue For our clients
                        </div>
                      </div>
                    </div>
                    <div className="FtrBx1Item color2">
                      <div>
                        <div className="FtrBx1ItemT1">30</div>
                        <div className="FtrBx1ItemT2">
                          Published Client wins
                        </div>
                      </div>
                    </div>
                    <div className="FtrBx1Item color3">
                      <div>
                        <div className="FtrBx1ItemT1">150+</div>
                        <div className="FtrBx1ItemT2">
                          5 - Star client Reviews{" "}
                        </div>
                      </div>
                    </div>
                    <div className="FtrBx1Item color4">
                      <div>
                        <div className="FtrBx1ItemT1">4</div>
                        <div className="FtrBx1ItemT2">
                          Agency of the Year awards
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icol-md-3 pd-top-20">
                <Form2/>
              </div>
              {/* <div className="icol-md-3">
                <div className="HeaderForm" id="contactus">
                  <div className="FormElements">
                    <div className="FormItem">
                      <div className="FormLabel">Full Name</div>
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="FormItem">
                      <div className="FormLabel">Email</div>
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="FormItem">
                      <div className="FormLabel">Phone Number</div>
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
                        <option value="" selected="">
                          Industry
                        </option>
                        <option value="Fashion and Apparel">
                          Fashion and Apparel
                        </option>
                        <option value="Beauty and Cosmetics">
                          Beauty and Cosmetics
                        </option>
                        <option value="Food and Beverage">
                          Food and Beverage
                        </option>
                        <option value="Hospitality and Travel">
                          Hospitality and Travel
                        </option>
                        <option value="Real Estate and Architecture">
                          Real Estate and Architecture
                        </option>
                        <option value="Automotive and Transportation">
                          Automotive and Transportation
                        </option>
                        <option value="Technology and Electronics">
                          Technology and Electronics
                        </option>
                        <option value="Health and Fitness">
                          Health and Fitness
                        </option>
                        <option value="Education and Training">
                          Education and Training
                        </option>
                        <option value="Music and Entertainment">
                          Music and Entertainment
                        </option>
                        <option value="Sports and Fitness">
                          Sports and Fitness
                        </option>
                        <option value="Corporate and Business">
                          Corporate and Business
                        </option>
                        <option value="Non-profit and Social Causes">
                          Non-profit and Social Causes
                        </option>
                        <option value="Art and Culture">Art and Culture</option>
                        <option value="Wedding and Events">
                          Wedding and Events
                        </option>
                        <option value="E-commerce and Retail">
                          E-commerce and Retail
                        </option>
                        <option value="Film and Television">
                          Film and Television
                        </option>
                        <option value="Advertising and Marketing">
                          Advertising and Marketing
                        </option>
                        <option value="Health Care and Pharmaceuticals">
                          Health Care and Pharmaceuticals
                        </option>
                        <option value="Financial Services and Banking">
                          Financial Services and Banking
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <button className="SubmitBtn1">Request A Callback</button>
                  </div>
                </div>
              </div> */}

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfomanceBannerMarketing;
