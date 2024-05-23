import Layout from "../layout/Layout";
import styles from "./About.module.css";

import ScrollGuide from "../scroll-guide/ScrollGuide";
import { BACKEND, DB, FRONTEND, LANGUAGES } from "../../helpers/constants";
import Image from "next/image";

const About = () => {
  return (
    <Layout id="about">
      <article className={`article__item ${styles.container} `}>
        <h2 className={`subheading ${styles.heading}`}>About technologies</h2>
        <p className={styles.paragraph}>
          &quot;Once you stop learning, you start dying.&quot; — Albert
          Einstein, 1955
        </p>
        <div className={`${styles.group}`}>
          <h3 className={`${styles.group__title}`}>Languages</h3>
          {LANGUAGES.map((logo) => (
            <Image
              className={`${styles.group__item}`}
              key={logo.name}
              src={logo.file}
              height={logo.height * 1.2}
              width={logo.width * 1.2}
              alt={logo.name}
            />
          ))}
        </div>
        <div className={`${styles.group}`}>
          <h3 className={`${styles.group__title}`}>Frontend</h3>
          {FRONTEND.map((logo) => (
            <Image
              className={`${styles.group__item}`}
              key={logo.name}
              src={logo.file}
              height={logo.height * 1.2}
              width={logo.width * 1.2}
              alt={logo.name}
            />
          ))}
        </div>
        <div className={`${styles.group}`}>
          <h3 className={`${styles.group__title}`}>Backend</h3>
          {BACKEND.map((logo) => (
            <Image
              className={`${styles.group__item}`}
              key={logo.name}
              src={logo.file}
              height={logo.height * 1.2}
              width={logo.width * 1.2}
              alt={logo.name}
            />
          ))}
        </div>
        <div className={`${styles.group}`}>
          <h3 className={`${styles.group__title}`}>DB</h3>
          {DB.map((logo) => (
            <Image
              className={`${styles.group__item}`}
              key={logo.name}
              src={logo.file}
              height={logo.height * 1.2}
              width={logo.width * 1.2}
              alt={logo.name}
            />
          ))}
        </div>
      </article>
      <div className="scroll-guide">
        <ScrollGuide id="contact" />
      </div>
    </Layout>
  );
};

export default About;
