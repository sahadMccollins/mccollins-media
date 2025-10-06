
import CaseStudyBox from "../../components/caseStudyBox";
import clientPromise from "../../lib/mongodb";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import BrandingCaseStudies from "../../components/Landing-page-components/BrandingCaseStudies";
import BannerBox from "../../components/BanneBox";

function CaseStudyPage({ metaTags }) {
  return (
    <>
      <Head>
        {metaTags.length > 0 &&
          metaTags[0].content &&
          ReactHtmlParser(metaTags[0].content)}
      </Head>
      <CaseStudyBox
        h2="Doors"
        bgcolor="#936321"
      />
      <div className="MxWidth1200">
        <BannerBox
        Banner="/cases/door1.jpg"
        MobileBanner="/cases/mdoor1.jpg"
      />
      <BannerBox
        Banner="/cases/door2.jpg"
        MobileBanner="/cases/mdoor2.jpg"
      />
      <BannerBox
        Banner="/cases/door3.jpg"
        MobileBanner="/cases/mdoor3.jpg"
      />
      </div>
      <BrandingCaseStudies />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const client = await clientPromise;

  const db = client.db("MccollinsMedia");

  let metaTags = await db.collection("meta").find({ name: req.url }).toArray();
  metaTags = JSON.parse(JSON.stringify(metaTags));
  console.log(metaTags);

  return {
    props: { metaTags },
  };
}

export default CaseStudyPage;
