import Head from "next/head";

const HeadComponent = () => {
  return (
    <Head>
      <title>Andres Andrade</title>
      <meta
        name="description"
        content="Andres Alexander Andrade Sanchez, Fullstack software developer based in Mississauga, Ontario - Canada"
      />
      <meta property="og:url" content="your url" />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="your fb app id" />
      <meta property="og:title" content="Social Media Preview Working?" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Hurray!! Yes Social Media Preview is Working"
      />
      <meta property="og:image" content={"url of image"} />
      <link rel="icon" href="/code.svg" />
    </Head>
  );
};

export default HeadComponent;
