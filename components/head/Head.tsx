import Head from "next/head";
import Script from "next/script";

const HeadComponent = () => {
  return (
    <Head>
      <title>Andres Andrade, Fullstack Software Engineer</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="description"
        content="Andres Alexander Andrade Sanchez, Software Engineer"
      />
      <meta property="og:url" content="https://andres-andrade.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Andres Andrade" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Andres Alexander Andrade Sanchez, Fullstack software engineer based in Toronto, Canada"
      />
      <meta
        property="og:image"
        content="https://andres-andrade.dev/preview.jpg"
      />
      <link rel="icon" href="/code.png" />
    </Head>
  );
};

export default HeadComponent;
