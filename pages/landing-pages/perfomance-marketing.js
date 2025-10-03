import React, { useEffect, useRef } from "react";
import FooterNav from "../../components/Landing-page-components/FooterNav";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import ClientPortFolio from "../../components/Landing-page-components/ClientPortfolio";
import PerfomanceBannerMarketing from "../../components/Landing-page-components/PerfomanceMarketingBanner";
import PerfomanceSevices from "../../components/Landing-page-components/PeromanceSevices";
import InstaBox from "../../components/Landing-page-components/InstaBox";
import ClientPerfomance from "../../components/Landing-page-components/ClientPerfomance";
import CleantTestimonials from "../../components/Landing-page-components/ClientTestimonials";
import FAQ1 from "../../components/Landing-page-components/FAQ1";
const PerfomanceMarketing = () => {
  useEffect(() => {
    document.body.className = "LandingPage PerfomancePage";
  });
   const faqsData = [
  {
    question: "What is performance marketing and how is it different from traditional marketing?",
    answer:
      "Performance marketing is ROI-driven. Unlike traditional campaigns, every ad spend is measurable — you pay for results like clicks, leads, or sales.",
  },
  {
    question: "What platforms do you run performance campaigns on?",
    answer:
      "We manage campaigns across Meta (Facebook & Instagram), Google Ads, TikTok, Snapchat, YouTube, LinkedIn, and programmatic ad networks.",
  },
  {
    question: "How do you measure success in performance marketing?",
    answer:
      " We track KPIs such as cost per lead (CPL), cost per acquisition (CPA), return on ad spend (ROAS), and lifetime value (LTV) to ensure campaigns deliver.",
  },
  {
    question: "Do you handle both lead generation and e-commerce sales campaigns?",
    answer:
      "Yes. Whether you want more sign-ups, qualified leads, or direct online sales, we tailor campaigns to your business objectives.",
  },
  {
    question: "Can you manage small budgets or only large-scale campaigns?",
    answer:
      "We work with both. Whether you’re a startup testing the waters or an established brand scaling globally, we optimize your budget for maximum results.",
  },
  {
    question: "Do you provide strategy as well as campaign execution?",
    answer:
      " Absolutely. From audience research, funnel building, and creative strategy to campaign execution and optimization — we manage it end-to-end.",
  },
  {
    question: "How quickly can I expect results?",
    answer:
      " Early insights usually show within the first week, while optimized, scalable results take 4–6 weeks as campaigns are fine-tuned.",
  },
  {
    question: "Do you create ad creatives as well?",
    answer:
      "Yes. Our in-house content production team creates scroll-stopping visuals, videos, and copy tailored for performance.",
  },
  {
    question: "How do you ensure the ads reach the right audience?",
    answer:
      " Through precise targeting, custom audiences, lookalike modeling, and continuous A/B testing, we make sure your ads hit the right people at the right time.",
  },
  {
    question: "Do you provide reports and transparency on results?",
    answer:
      "Yes. You’ll receive clear, data-backed performance reports and insights, so you always know where your money is going.",
  },
  {
    question: "Can you integrate campaigns with CRM and automation tools?",
    answer:
      " Definitely. We integrate campaigns with platforms like Zoho, HubSpot, Pipedrive, and email automation for seamless lead nurturing.",
  },
   {
    question: "What industries do you specialize in?",
    answer:
      " We’ve delivered performance marketing success for F&B, retail, real estate, e-commerce, automotive, and lifestyle brands across the GCC.",
  },
   {
    question: "How do you handle underperforming campaigns?",
    answer:
      " We constantly test, analyze, and optimize. If something doesn’t work, we pivot quickly — ensuring your budget drives results, not wasted clicks.",
  },
];
  return (
    <Box marginTop={"-85px"} position="relative">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <PerfomanceBannerMarketing />
      <ClientPortFolio />
      <PerfomanceSevices />
      {/* <ClientPerfomance/> */}
      <CleantTestimonials />
       <FAQ1 faqs={faqsData} />
      <InstaBox />
      <FooterNav />
    </Box>
  );
};
export default PerfomanceMarketing;
