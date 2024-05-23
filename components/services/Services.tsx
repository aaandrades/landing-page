import Layout from "../layout/Layout";
import styles from "./Services.module.css";

import ScrollGuide from "../scroll-guide/ScrollGuide";

const Services = () => {
  return (
    <Layout id="services">
      <article className={`article__item ${styles.secondary}`}>
        <h2 className={`subheading ${styles.subheading} `}>Who am I?</h2>
        <p className={styles.paragraph}>
          I&apos;m Andres but everybody calls me Andy, your friendly
          neighborhood software engineer based in Toronto, Canada. With six
          years of code-slinging experience under my belt, I&apos;ve navigated
          through the wilds of frontend, backend, fullstack, and mobile
          development. You could say I&apos;m a bit of a digital Swiss Army
          knife—ready to tackle any tech challenge thrown my way.
        </p>
        <p className={styles.paragraph}>
          When I&apos;m not busy building seamless CI/CD integrations or hunting
          down the latest tech trends, you&apos;ll find me either sweating it
          out on the sports field or glued to my gaming setup. And if you catch
          me offline (rare, I know), I&apos;m probably tinkering away on a
          hands-on project, channeling my inner MacGyver.
        </p>
        <p className={styles.paragraph}>
          Welcome to my corner of the internet, where code meets creativity and
          every bug has its day!
        </p>
      </article>
      <article className={`article__item ${styles.secondary} ${styles.skills}`}>
        <div className={styles.container__item}>
          <h2 className={`subheading ${styles.subheading}`}>6+</h2>
          <p className={styles.description}>Years of experience</p>
        </div>
        <div className={styles.container__item}>
          <h2 className={`subheading ${styles.subheading}`}>Posts</h2>
          <p className={styles.description}>
            Looking for {"  "}
            <a
              className="link"
              href="https://medium.com/@andradesanchezandres"
              target="blank"
            >
              Medium?
            </a>
          </p>
        </div>
        <div className={styles.container__item}>
          <h2 className={`subheading ${styles.subheading}`}>Projects</h2>
          <p className={styles.description}>
            Check out my{"  "}
            <a
              className="link"
              href="https://github.com/aaandrades"
              target="blank"
            >
              Github!
            </a>
          </p>
        </div>
      </article>
      <div className="scroll-guide">
        <ScrollGuide id="about" />
      </div>
    </Layout>
  );
};

export default Services;
