import React from "react";
import Image from "next/image";
import styles from "../../styles/landingPage.module.scss";

const ClientResults = () => {
  return (
    <div className="ClientResults bg-3 pd-common">
      <div className="icontainer">
        <div className="HdStyle1">
          <div className="Hd1">Our Clients Results</div>
          <div className="Hd2">We work together across the global</div>
          <div className="Hd3">
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
      <div style={{ display: "none" }} className={styles.container}></div>
    </div>
  );
};
export default ClientResults;
