import React from "react";
import EmptyLayout from "../components/Layout/EmptyLayout";

const FilmProduction = () => {
  return (
    <>
      <iframe
        src="https://film.mccollinsmedia.com"
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
