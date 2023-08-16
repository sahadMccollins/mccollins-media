import React, { useEffect } from "react";
import EmptyLayout from "../components/Layout/EmptyLayout";

const FilmProduction = () => {
  useEffect(() => {
    // Add the Google Tag Manager script to this page
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-10803441186";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-10803441186");
    };

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <embed
        src="https://film.mccollinsmedia.com/"
        title="Film Production"
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
    </>
  );
};

FilmProduction.getLayout = function getLayout(FilmProduction) {
  return <EmptyLayout>{FilmProduction}</EmptyLayout>;
};

export default FilmProduction;
