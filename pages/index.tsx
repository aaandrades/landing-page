import styles from "../styles/Home.module.css";
import HeadComponent from "../components/head/Head";
import MainComponent from "../components/main/Main";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andres Andrade</title>
        <meta
          name="description"
          content="Andres Alexander Andrade Sanchez, Fullstack software developer based in Mississauga, Ontario - Canada"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <HeadComponent /> */}
      <main>
        <h1>Page Works</h1>
      </main>
      {/* <MainComponent /> */}
    </div>
  );
}
