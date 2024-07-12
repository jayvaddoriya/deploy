import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from "../lib/fpixel";

function addCompanyPageJsonLd() {
  return {
    __html: `
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "The Debt Relief Company",
      "alternateName": "The Debt Relief Co",
      "url": "https://www.thedebtreliefcompany.com",
      "logo": "https://www.thedebtreliefcompany.com/static/img/logo-debt-relief-1-1@2x.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "888-344-0214",
        "contactType": "customer service",
        "email": "cs@thedebtreliefcompany.com",
        "contactOption": "TollFree",
        "areaServed": "US",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.facebook.com/Thedebtreliefcompany/",
        "https://twitter.com/debtreliefco",
        "https://www.instagram.com/debtreliefcompany",
        "https://www.youtube.com/channel/UCPFWaIMPqgxs-W36rBOddXg",
        "https://www.linkedin.com/company/thedebtreliefcompany/",
        "https://www.pinterest.com/TheDebtReliefCompany/"
      ]
    }
  `,
  };
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={`en-us`}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://connect.facebook.net" />
          <link rel="dns-prefetch" href="https://connect.facebook.net" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt={"Facebook Pixel Code"}
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addCompanyPageJsonLd()}
          key="company-ld"
          async
        />
      </Html>
    );
  }
}
