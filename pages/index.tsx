import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andres Andrade</title>
        <meta
          name="description"
          content="Andres Alexander Andrade Sanchez, Fullstack software developer based in Mississauga, Ontario - Canada"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Page in progress
          <br></br>
          <a href="https://github.com/aaandrades"> Visit my GitHub</a>
        </h1>
      </main>
    </div>
  );
}
