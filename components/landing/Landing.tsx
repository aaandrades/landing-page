import React from "react";

import Layout from "../layout/Layout";
import styles from "./Landing.module.css";

import ScrollGuide from "../scroll-guide/ScrollGuide";
import InteractiveHeader from "../interactive-header/InteractiveHeader";
import InteractiveBlob from "../interactive-blob/InteractiveBlob";

const Landing = () => (
  <>
    <Layout id="home" reverse>
      <article className={`article__item ${styles.landing__bottom}`}>
        <InteractiveHeader />
      </article>
      <article className={`article__item ${styles.landing__top}`}>
        <InteractiveBlob />
      </article>
    </Layout>
    <ScrollGuide id="about" />
  </>
);

export default Landing;
