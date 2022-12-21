import HeadComponent from "../components/head/Head";
import MainComponent from "../components/main/Main";
import { Open_Sans } from "@next/font/google";
import Script from "next/script";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={openSans.className}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FGT0TW2V90"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());        
          gtag('config', 'G-FGT0TW2V90');;`,
        }}
      />
      <HeadComponent />
      <MainComponent />
    </div>
  );
}
