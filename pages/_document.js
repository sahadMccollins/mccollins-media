import { Html, Head, Main, NextScript } from "next/document";
import DeferNextScript from "../components/Layout/DeferNextScript";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="msvalidate.01" content="AF2100A2AEBECD20B09A1D8458E73DAD" />

        <meta
          property="og:url"
          content="https://www.mccollinsmedia.com/favicon/apple-icon.png"
        />
        <meta property="og:title" content="McCollins Meida" />
        <meta
          property="og:image"
          content="https://www.mccollinsmedia.com/favicon/apple-icon.png"
        />

        <script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LdRaB0pAAAAADkho8kQ1qjUhjQaHafEUtWeLhsO"
          async
          defer
          strategy="lazyOnload"
        ></script>

        {/* Google Tag Manager */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KK6CH2S');
              `,
          }}
        /> */}
        {/* End Google Tag Manager */}

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <meta name="theme-color" content="#fdce1a" />
      </Head>
      <body>
        {/* ZOHO Script */}
        <script
          type="text/javascript"
          src="https://crm.zoho.com/crm/javascript/zcga.js"
          strategy="lazyOnload"
        ></script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KK6CH2S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <DeferNextScript />
      </body>
    </Html>
  );
}
