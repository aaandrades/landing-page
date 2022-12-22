import HeadComponent from "../components/head/Head";
import MainComponent from "../components/main/Main";
import { Open_Sans } from "@next/font/google";
import Script from "next/script";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={openSans.className}>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TDV4QDD');`,
        }}
      />
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FGT0TW2V90"
      /> */}
      {/* <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());        
          gtag('config', 'G-FGT0TW2V90');;`,
        }}
      /> */}
      <HeadComponent />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TDV4QDD"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <MainComponent />
    </div>
  );
}
