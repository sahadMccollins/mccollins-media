import React from "react";
import EmptyLayout from "../components/Layout/EmptyLayout";

const ThankYou = () => {
  return (
    <>
      <iframe
        src="https://film.mccollinsmedia.com/thankyou/"
        title="Film Production"
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
    </>
  );
};

ThankYou.getLayout = function getLayout(ThankYou) {
  return <EmptyLayout>{ThankYou}</EmptyLayout>;
};

export default ThankYou;
