/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/web-design-and-development",
        destination: "/services/web-design-and-development",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/social-media-agency-dubai",
        destination: "/services/social-media-agency-dubai",
        permanent: true,
      },
      {
        source: "/digital-marketing-services",
        destination: "/services//google-ads",
        permanent: true,
      },
      {
        source: "/content-production",
        destination: "/services/film",
        permanent: true,
      },
      {
        source: "/branding",
        destination: "/services/brand-development",
        permanent: true,
      },
      {
        source: "/magento-website-development",
        destination: "/services/web-design-and-development",
        permanent: true,
      },
      {
        source: "/seo-and-analytics",
        destination: "/services/search-engine-optimization",
        permanent: true,
      },
      {
        source: "/woocommerce-website-development",
        destination:
          "/services/web-design-and-development/wordpress-website-development",
        permanent: true,
      },
      {
        source: "/shopify-website-development",
        destination:
          "/services/web-design-and-development/shopify-website-development",
        permanent: true,
      },
      {
        source: "/corporate-marketing-services",
        destination: "/industry/corporate-marketing-services",
        permanent: true,
      },
      {
        source: "/food-and-beverage-marketing-services",
        destination: "/industry/food-and-beverage-marketing-services",
        permanent: true,
      },
      {
        source: "/healthcare-marketing-services",
        destination: "/industry/healthcare-marketing-services",
        permanent: true,
      },
      {
        source: "/luxury-marketing-services",
        destination: "/industry/luxury-marketing-services",
        permanent: true,
      },
      {
        source: "/technology-marketing-services",
        destination: "/industry/technology-marketing-services",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/",
        permanent: true,
      },
      {
        source: "/find-the-best-web-development-company",
        destination: "/blog/find-the-best-web-development-company",
        permanent: true,
      },
      {
        source: "/web-design-trends-for-2022",
        destination: "/blog/web-design-trends-for-2022",
        permanent: true,
      },
      {
        source: "/5-Trends-that-will-fuel-e-commerce-businesses-in-2022",
        destination:
          "/blog/5-Trends-that-will-fuel-e-commerce-businesses-in-2022",
        permanent: true,
      },
      {
        source: "/How-to-plan-your-Digital-Marketing-Budget-for-2022",
        destination: "/blog/How-to-plan-your-Digital-Marketing-Budget-for-2022",
        permanent: true,
      },
      {
        source: "/5-Questions-you-must-ask-your-customer",
        destination: "/blog/5-Questions-you-must-ask-your-customer",
        permanent: true,
      },
      {
        source: "/Social-Media-Trends-in-2022---What-the-next-year-looks-like",
        destination:
          "/blog/Social-Media-Trends-in-2022---What-the-next-year-looks-like",
        permanent: true,
      },
      {
        source: "/The-Shift-in-Customer-Engagement-Strategy-in-the-Future",
        destination:
          "/blog/The-Shift-in-Customer-Engagement-Strategy-in-the-Future",
        permanent: true,
      },
      {
        source: "/BACK-TO-SCHOOL---THE-NEW-MARKETING-NORMAL",
        destination: "/blog/BACK-TO-SCHOOL---THE-NEW-MARKETING-NORMAL",
        permanent: true,
      },
      {
        source: "/4-Things-You-Wouldn---t-Want-to-Miss-at-Expo-2020",
        destination: "/blog/4-Things-You-Wouldn---t-Want-to-Miss-at-Expo-2020",
        permanent: true,
      },
      {
        source: "/COVID-19-and-the-race-to-go-ONLINE",
        destination: "/blog/COVID-19-and-the-race-to-go-ONLINE",
        permanent: true,
      },
      {
        source: "/---Content-Shift----from-Manicured-Content-to-UGC",
        destination: "/blog/---Content-Shift----from-Manicured-Content-to-UGC",
        permanent: true,
      },
      {
        source: "/Why-are-my-Facebook-ads-not-Delivering--",
        destination: "/blog/Why-are-my-Facebook-ads-not-Delivering--",
        permanent: true,
      },
      {
        source: "/Maximizing-sales-through-Website-Conversion-Funnels-",
        destination:
          "/blog/Maximizing-sales-through-Website-Conversion-Funnels-",
        permanent: true,
      },
      {
        source: "/Social-media-marketing-funnel-that-converts-",
        destination: "/blog/Social-media-marketing-funnel-that-converts-",
        permanent: true,
      },
      {
        source: "/On-Content-vs-Audience-and-the-Top-3-Misconceptions-on-SEO",
        destination:
          "/blog/On-Content-vs-Audience-and-the-Top-3-Misconceptions-on-SEO",
        permanent: true,
      },
      {
        source: "/10-Reasons-Why-You-Should-Start-Using-Shopify",
        destination: "/blog/10-Reasons-Why-You-Should-Start-Using-Shopify",
        permanent: true,
      },
      {
        source: "/Why-brands-should-invest-in-Content-Marketing-",
        destination: "/blog/Why-brands-should-invest-in-Content-Marketing-",
        permanent: true,
      },
      {
        source: "/Top-10-Advantages-of-Social-Media-for-Business",
        destination: "/blog/Top-10-Advantages-of-Social-Media-for-Business",
        permanent: true,
      },
      {
        source: "/The-Rise-of-Social-Audio-and-How-it-Benefits-your-Brand",
        destination:
          "/blog/The-Rise-of-Social-Audio-and-How-it-Benefits-your-Brand",
        permanent: true,
      },
      {
        source: "/How-My-Internship-Landed-Me-a-Job-at-McCollins-Media",
        destination:
          "/blog/How-My-Internship-Landed-Me-a-Job-at-McCollins-Media",
        permanent: true,
      },
      {
        source: "/4-Ways-to-Create-Buzz-on-Social-Media",
        destination: "/blog/4-Ways-to-Create-Buzz-on-Social-Media",
        permanent: true,
      },
      {
        source: "/5-Ways-to-Engage-your-Audience-for-Mother---s-Day",
        destination: "/blog/5-Ways-to-Engage-your-Audience-for-Mother---s-Day",
        permanent: true,
      },
      {
        source: "/3-Steps-to-Make-Your-Business-Go-Viral-on-TikTok",
        destination: "/blog/3-Steps-to-Make-Your-Business-Go-Viral-on-TikTok",
        permanent: true,
      },
      {
        source: "/4-Retail-Strategies-to-follow-in-2021",
        destination: "/blog/4-Retail-Strategies-to-follow-in-2021",
        permanent: true,
      },
      {
        source: "/Social-Media-For-Restaurants",
        destination: "/blog/Social-Media-For-Restaurants",
        permanent: true,
      },
      {
        source:
          "/Turning-the-spotlight-on-the-latest-social-media-trends-of-2020-",
        destination:
          "/blog/Turning-the-spotlight-on-the-latest-social-media-trends-of-2020-",
        permanent: true,
      },
      {
        source: "/Trending-Digital-Content-for-2020",
        destination: "/blog/Trending-Digital-Content-for-2020",
        permanent: true,
      },
      {
        source: "/Social-Media-Success--Dissected",
        destination: "/blog/Social-Media-Success--Dissected",
        permanent: true,
      },
      {
        source: "/Instagram-in-2020--All-that-you-need-to-know-",
        destination: "/blog/Instagram-in-2020--All-that-you-need-to-know-",
        permanent: true,
      },
      {
        source:
          "/The-Disruption-of-Mobile-Video-Trend-with-Facebook-Live-and-SnapChat-taking-lead",
        destination:
          "/blog/The-Disruption-of-Mobile-Video-Trend-with-Facebook-Live-and-SnapChat-taking-lead",
        permanent: true,
      },
      {
        source: "/11-Social-Media-Trends-for-Brands-to-Engage",
        destination: "/blog/11-Social-Media-Trends-for-Brands-to-Engage",
        permanent: true,
      },
      {
        source: "/Retail-Space-for-Pop-Ups-is-a-great-way-to-test-the-Market",
        destination:
          "/blog/Retail-Space-for-Pop-Ups-is-a-great-way-to-test-the-Market",
        permanent: true,
      },
      {
        source:
          "/Google---New-York-Times-to-Distribute-1-Million-VR-Cardboard-Headsets",
        destination:
          "/blog/Google---New-York-Times-to-Distribute-1-Million-VR-Cardboard-Headsets",
        permanent: true,
      },
      {
        source: "/7-Benefits-of-Social-Media-Marketing-for-your-business",
        destination:
          "/blog/7-Benefits-of-Social-Media-Marketing-for-your-business",
        permanent: true,
      },
      {
        source: "/Is-your-Customer-Service-ready-for-a-new-World-of-Openness-",
        destination:
          "/blog/Is-your-Customer-Service-ready-for-a-new-World-of-Openness-",
        permanent: true,
      },
      {
        source: "/3-Lessons-In-Marketing-From-Usain-Bolt",
        destination: "/blog/3-Lessons-In-Marketing-From-Usain-Bolt",
        permanent: true,
      },
      {
        source: "/5-Digital-Marketing-Tips-for-your-Restaurant",
        destination: "/blog/5-Digital-Marketing-Tips-for-your-Restaurant",
        permanent: true,
      },
      {
        source: "/Benefits-of-Social-Media-for-Healthcare-Industry",
        destination: "/blog/Benefits-of-Social-Media-for-Healthcare-Industry",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
