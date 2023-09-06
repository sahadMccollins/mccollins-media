import React from "react";
import Image from "next/image";
const FooterNav = () => {
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
              <div class="text">Reserve</div>
            </a>
          </li>
          <li>
            <a
              href="#contactus"
            >
              <div class="icon">
                <div class="FtrIconH email">&nbsp;</div>
              </div>
              <div class="text">Email Us</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="icon">
                <div class="FtrIconH whatsapp">&nbsp;</div>
              </div>
              <div class="text">WhatsApp</div>
            </a>
          </li>
          <li>
            <a href="#">
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
