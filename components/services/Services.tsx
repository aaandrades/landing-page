import Layout from "../layout/Layout";
import styles from "./Services.module.css";
import Card from "../common/card/Card";
import Image from "next/image";

import Web from "../../public/web.png";
import Mobile from "../../public/mobile.png";
import Custom from "../../public/custom.png";
import ScrollGuide from "../scroll-guide/ScrollGuide";

const Services = () => {
  return (
    <Layout id="services">
      <article className={`article__item ${styles.secondary}`}>
        <h2 className={`subheading ${styles.subheading} `}>
          Do you have something
          <span className={styles.title__secondary}> in mind</span>?
        </h2>
        <p className={styles.paragraph__secondary}>I can help you</p>
        <div className={styles.cards}>
          <Card>
            <Image
              src={Mobile}
              width="200"
              alt="Custom"
              className={styles.image}
            />
            <span className={styles.description}>
              Mobile Design & Development
            </span>
          </Card>
          <Card>
            <Image
              src={Web}
              width="200"
              alt="Custom"
              className={styles.image}
            />
            <span lang="en" className={styles.description}>
              Web Design & Development
            </span>
          </Card>
          <Card>
            <Image
              src={Custom}
              width="200"
              alt="Custom"
              className={styles.image}
            />
            <span className={styles.description}>Customized services</span>
          </Card>
        </div>
      </article>
      <article className={`article__item ${styles.secondary} ${styles.skills}`}>
        <div className={styles.container__item}>
          <h2 className={`subheading ${styles.subheading}`}>5+</h2>
          <p className={styles.paragraph}>Years of experience</p>
        </div>
        <div className={styles.container__item}>
          <h2 className={`subheading ${styles.subheading}`}>10+</h2>
          <p className={styles.paragraph}>Big freelance jobs done</p>
        </div>
        <div className={styles.container__item}>
          <h2 className={`subheading ${styles.subheading}`}>Projects</h2>
          <p className={styles.paragraph}>
            Check out my
            <span>
              {" "}
              <a
                className="link"
                href="https://github.com/aaandrades"
                target="blank"
              >
                Github!
              </a>
            </span>
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
