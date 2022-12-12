import Layout from "../layout/Layout";
import styles from "./Services.module.css";
import Card from "../common/card/Card";
import Image from "next/image";

import WebIcon from "../../public/web_development.png";
import MobileIcon from "../../public/mobile_development.png";
import DefaultIcon from "../../public/default_application.png";

const Services = () => {
  return (
    <Layout id="services">
      <article className="article__item">
        <div className={styles.container__item}>
          <h2 className="subheading">5+</h2>
          <p className={styles.paragraph}>Years of experience</p>
        </div>
        <div className={styles.container__item}>
          <h2 className="subheading">10+</h2>
          <p className={styles.paragraph}>Big freelance jobs done</p>
        </div>
        <div className={styles.container__item}>
          <h2 className="subheading">Projects</h2>
          <p className={styles.paragraph}>Check out my Github!</p>
        </div>
      </article>
      <article className="article__item">
        <h2 className="subheading">
          Do you have something
          <span className={styles.title__secondary}> in mind</span>?
        </h2>
        <p className={styles.paragraph__secondary}>I can help you</p>
        <div className={styles.cards}>
          <Card>
            <Image
              src={MobileIcon}
              width={71}
              height={71}
              alt="Mobile design and web development"
            />
            Mobile Design & Development
          </Card>
          <Card>
            <Image
              src={WebIcon}
              width={71}
              height={71}
              alt="Web design and web development"
            />
            Web Design & Development
          </Card>
          <Card>
            <Image
              src={DefaultIcon}
              width={71}
              height={71}
              alt="Web design and web development"
            />
            Customized services
          </Card>
        </div>
      </article>
    </Layout>
  );
};

export default Services;
