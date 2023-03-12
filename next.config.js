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
  redirects: [
    {
      source: "/web-design-and-development",
      destination: "/services/web-design-and-development",
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
  ],
};

module.exports = nextConfig;
