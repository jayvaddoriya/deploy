import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }) {
  const router = useRouter();
 
  useEffect(() => {
    fbq.pageview();

    const handleRouteChange = (url, { shallow }) => {
      window.scrollTo(0, 0);
      fbq.pageview();
      gtag.pageview(url);
    };
 
    router.events.on('routeChangeComplete', handleRouteChange);
 
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
          <meta content='width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5' name='viewport'/> 
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" /> */}
          <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon_package_v0.16/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon_package_v0.16/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon_package_v0.16/favicon-16x16.png" />
          <link rel="manifest" href="/static/img/favicon_package_v0.16/site.webmanifest" />
          <link rel="mask-icon" href="/static/img/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        id="google-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
