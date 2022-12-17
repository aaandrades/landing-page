import Layout from "../layout/Layout";
import styles from "./Services.module.css";
import Card from "../common/card/Card";
import { Player } from "@lottiefiles/react-lottie-player";

import {
  MobileDevelopmentIcon,
  WebDevelopmentIcon,
  DefaultServicesIcon,
} from "../icons";
import Image from "next/image";

const Services = () => {
  return (
    <Layout id="services" invert>
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
      <article className={`article__item ${styles.secondary}`}>
        <h2 className={`subheading ${styles.subheading} `}>
          Do you have something
          <span className={styles.title__secondary}> in mind</span>?
        </h2>
        <p className={styles.paragraph__secondary}>I can help you</p>
        <div className={styles.cards}>
          <Card>
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_8dbkv90i.json"
              className={styles.lottie_success}
            />
            {/* <WebDevelopmentIcon /> */}
            {/* <Image src={Custom} width="90" height="90" alt="Custom" /> */}
            <span>Mobile Design & Development</span>
          </Card>
          <Card>
            {/* <MobileDevelopmentIcon /> */}
            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_rvkzuvrm.json"
              className={styles.lottie_success}
            />
            <span>Web Design & Development</span>
          </Card>
          <Card>
            {/* <DefaultServicesIcon /> */}
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_efoipkq9.json"
              className={styles.lottie_success}
            />
            <span>Customized services</span>
          </Card>
        </div>
      </article>
    </Layout>
  );
};

export default Services;
