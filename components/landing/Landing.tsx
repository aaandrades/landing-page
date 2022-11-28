import Layout from "../layout/Layout";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <Layout id="home">
      <article className="article__item">
        <h1 className={styles.title}>
          Hi!
          <br></br>I am
          <span className={styles.title__name}> Andrés Andrade</span>
        </h1>
        <p className={styles.landing_paragraph}>
          A Fullstack Software Developer based in Mississauga, Ontario - Canada
        </p>
        <a href="https://github.com/aaandrades" className="link">
          Visit my GitHub
        </a>
      </article>
      <article className="article__item">SVG</article>
    </Layout>
  );
};

export default Landing;
