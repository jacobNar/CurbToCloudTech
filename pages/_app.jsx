import '@/styles/globals.scss';
import Layout from '@/components/Layout';
import Script from 'next/script';
import Head from 'next/head';
import { Space_Grotesk, Inter } from 'next/font/google';
import { useEffect } from 'react';
import AnalyticsService from '@/lib/AnalyticsService';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const tracker = new AnalyticsService();
      tracker.init();
      return () => {
        tracker.destroy();
      };
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          --font-headline: ${spaceGrotesk.style.fontFamily}, sans-serif;
          --font-body: ${inter.style.fontFamily}, sans-serif;
        }
      `}</style>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TWV5HWSV');
            `}
          </Script>
        </>
      )}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
