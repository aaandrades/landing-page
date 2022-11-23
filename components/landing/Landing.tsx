import Layout from "../layout/Layout";
import NavBar from "../navbar/NavBar";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <Layout id="home">
      <h1 className={styles.title}>
        Hi!
        <br></br>I am <span className={styles.title__name}>Andrés Andrade</span>
      </h1>
      <p className={styles.paragraph}>
        A Fullstack Software Developer based in Mississauga, Ontario - Canada
      </p>
      <a href="https://github.com/aaandrades" className={styles.link}>
        Visit my GitHub
      </a>
    </Layout>
  );
};

export default Landing;
