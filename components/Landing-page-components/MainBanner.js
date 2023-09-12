import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const MainBanner1 = () => {
  const [phrase, setPhrase] = useState("");
  const [i, setI] = useState(0);
  const phraseRef = useRef(null);

  const phrases = [
    "Custom",
    "Wordpress",
    "React",
    "E-Commerce",
    "Shopify",
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
      phraseRef.current.style.opacity = 1;
    }, 1000);
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
                  Developing{" "}
                  <span
                    id="Transform"
                    className=" TransfomText random-word"
                    ref={phraseRef}
                  >
                    {phrase}
                  </span>{" "}
                  Websites
                  <br />
                  To grow and establish your online presence
                </div>
                <div className="T2">
                  Elevate Your Online Presence with Our Web Development
                  Services, Crafting Contemporary, Responsive, and User-Centric
                  Websites that Fuel Business Growth and Spotlight Your Brand
                </div>
                <div className="PartnerBoxWrap">
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
                </div>
              </div>
              <div className="icol-md-3">
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
