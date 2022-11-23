import Head from "next/head";

const HeadComponent = () => {
  return (
    <Head>
      <title>Andres Andrade</title>
      <meta
        name="description"
        content="Andres Alexander Andrade Sanchez, Fullstack software developer based in Mississauga, Ontario - Canada"
      />
      <meta property="og:url" content="https://andres-andrade.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Andres Andrade" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Andres Alexander Andrade Sanchez, Fullstack software developer based in Mississauga, Ontario - Canada"
      />
      <meta property="og:image" content="/preview.jpg" />
      <link rel="icon" href="/code.png" />
    </Head>
  );
};

export default HeadComponent;
