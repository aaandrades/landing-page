import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainBackground from "../components/background/Background";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andres Andrade</title>
        <meta
          name="description"
          content="Andres Alexander Andrade Sanchez, Fullstack software developer based in Mississauga, Ontario - Canada"
        />
        <link rel="icon" href="/code.svg" />
      </Head>

      <body>
        <MainBackground></MainBackground>
        <h1 className={styles.title}>
          Page in progress
          <br></br>
          <a href="https://github.com/aaandrades"> Visit my GitHub</a>
        </h1>
      </body>
    </div>
  );
}
