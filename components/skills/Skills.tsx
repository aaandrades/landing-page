import Layout from "../layout/Layout";
import styles from "./Skills.module.css";

import { BACKEND, DB, FRONTEND, LANGUAGES } from "../../helpers/constants";
import Image from "next/image";

const Skills = () => (
  <Layout id="skills">
    <article className={`article__full-width ${styles.container} `}>
      <h2 className={`subheading ${styles.heading}`}>Technical skills</h2>
      <p className={styles.paragraph}>
        &quot;Once you stop learning, you start dying.&quot; — Albert Einstein,
        1955
      </p>
      <ul className={styles.list}>
        <li>
          <h3 className={`${styles.group__title}`}>Languages</h3>
          <div className={`${styles.group__icons}`}>
            {LANGUAGES.map((logo) => (
              <Image
                className={`${styles.group__item}`}
                key={logo.name}
                src={logo.file}
                height={logo.height}
                width={logo.width}
                alt={logo.name}
                loading="lazy"
              />
            ))}
          </div>
        </li>
        <li>
          <h3 className={`${styles.group__title}`}>Frontend</h3>
          <div className={`${styles.group__icons}`}>
            {FRONTEND.map((logo) => (
              <Image
                className={`${styles.group__item}`}
                key={logo.name}
                src={logo.file}
                height={logo.height}
                width={logo.width}
                alt={logo.name}
                loading="lazy"
              />
            ))}
          </div>
        </li>
        <li>
          <h3 className={`${styles.group__title}`}>Backend</h3>
          <div className={`${styles.group__icons}`}>
            {BACKEND.map((logo) => (
              <Image
                className={`${styles.group__item}`}
                key={logo.name}
                src={logo.file}
                height={logo.height}
                width={logo.width}
                alt={logo.name}
                loading="lazy"
              />
            ))}
          </div>
        </li>
        <li>
          <h3 className={`${styles.group__title}`}>DB</h3>
          <div className={`${styles.group__icons}`}>
            {DB.map((logo) => (
              <Image
                className={`${styles.group__item}`}
                key={logo.name}
                src={logo.file}
                height={logo.height}
                width={logo.width}
                alt={logo.name}
                loading="lazy"
              />
            ))}
          </div>
        </li>
      </ul>
    </article>
  </Layout>
);

export default Skills;
