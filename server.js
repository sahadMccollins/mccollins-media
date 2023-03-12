const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const redirects = {
  "/web-design-and-development": "/services/web-design-and-development",
  "/social-media-agency-dubai": "/services/social-media-agency-dubai",
  "/digital-marketing-services": "/services//google-ads",
  "/content-production": "/services/film",
  "/branding": "/services/brand-development",
  "/magento-website-development": "/services/web-design-and-development",
  "/seo-and-analytics": "/services/search-engine-optimization",
  "/woocommerce-website-development":
    "/services/web-design-and-development/wordpress-website-development",
  "/shopify-website-development":
    "/services/web-design-and-development/shopify-website-development",
  "/corporate-marketing-services": "/industry/corporate-marketing-services",
  "/food-and-beverage-marketing-services":
    "/industry/food-and-beverage-marketing-services",
  "/healthcare-marketing-services": "/industry/healthcare-marketing-services",
  "/luxury-marketing-services": "/industry/luxury-marketing-services",
  "/technology-marketing-services": "/industry/technology-marketing-services",
  "/portfolio": "/",
  "/team": "/",
  "/faq": "/",
};

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (redirects[pathname]) {
      res.writeHead(301, { Location: redirects[pathname] });
      res.end();
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(80, () => {
    console.log("Server is listening 80");
  });
});
