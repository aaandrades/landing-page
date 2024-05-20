import Layout from "../layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styles from "./About.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Link from "next/link";
import DownloadBtn from "../common/download-btn/DownloadBtn";
import Image from "next/image";

import Profile from "../../public/profile4.jpg";
import ScrollGuide from "../scroll-guide/ScrollGuide";

const About = () => {
  return (
    <Layout id="about">
      <article className="article__item">
        <h2 className={`subheading ${styles.heading}`}>
          Let me introduce myself
        </h2>
        <p className={styles.paragraph}>
          My name is Andrés Alexander Andrade Sanchez, I live in Toronto,
          Ontario - Canada. I&apos;m a Fullstack Software engineer, specialized
          in Frontend development. I have more than 5 years of experience
          creating amazing products and enjoying the journey.{" "}
          <Link
            href="#contact"
            scroll={false}
            title="Let's talk"
            className="link"
          >
            Let&apos;s talk!
          </Link>
        </p>
      </article>
      <article
        className={`article__item ${styles.profile} ${styles.perspective_right}`}
      >
        <Image src={Profile} width="500" alt="MercadoLibreLogo" />
        <DownloadBtn />
      </article>
      <div className="scroll-guide">
        <ScrollGuide id="contact" />
      </div>
    </Layout>
  );
};

export default About;
