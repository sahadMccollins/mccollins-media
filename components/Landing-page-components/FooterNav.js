import React from "react";
import Image from "next/image";
const FooterNav = (props) => {
  return (
    <div class="halo-sticky-toolbar-mobile mobile-only">
      <div class="bottom-bar">
        <ul class="bottom-bar--list">
          <li class="activeLink">
            <a href="#">
              <div class="icon">
                <div class="FtrIconH home">&nbsp;</div>
              </div>
              <div class="text">Home</div>
            </a>
          </li>
          <li class="">
            <a href="#contactus">
              <div class="icon">
                <div class="FtrIconH reserve">&nbsp;</div>
              </div>
              <div class="text">Get a Quote</div>
            </a>
          </li>
          <li>
            <a href="mailto:info@mccollinsmedia.com">
              <div class="icon">
                <div class="FtrIconH email">&nbsp;</div>
              </div>
              <div class="text">Email Us</div>
            </a>
          </li>
          <li>
            <a
              href={
                props.phone
                  ? "https://api.whatsapp.com/send?phone=+971 055 956 4135&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media"
                  : "https://api.whatsapp.com/send?phone=+971 055 956 4135&text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media"
              }
            >
              <div class="icon">
                <div class="FtrIconH whatsapp">&nbsp;</div>
              </div>
              <div class="text">WhatsApp</div>
            </a>
          </li>
          <li>
            <a
              href={
                props.phone ? "tel:+971 055 956 4135" : "tel:+971 055 956 4135"
              }
            >
              <div class="icon">
                <div class="FtrIconH call">&nbsp;</div>
              </div>
              <div class="text">Call Us</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FooterNav;
