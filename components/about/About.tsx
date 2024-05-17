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
import ReactImg from "../../public/react.png";
import AngularImg from "../../public/angular.png";
import NestJsImg from "../../public/nest.png";
import NodeImg from "../../public/node.png";
import SpringImg from "../../public/springboot.png";
import TypescriptImg from "../../public/typescript.png";
import AwsImg from "../../public/aws.png";
import GitImg from "../../public/git.png";
import JenkinsImg from "../../public/jenkins.png";
import MongoDbImg from "../../public/mongodb.png";
import PostgresqlImg from "../../public/postgresql.png";
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
        <Swiper
          pagination={true}
          slidesPerView={3}
          modules={[Pagination, Autoplay]}
          className={styles.swiper}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={ReactImg} alt="React" width="80" height="70" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={AngularImg} alt="Angular" width="70" height="70" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={NestJsImg} alt="NestJs" width="75" height="75" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={NodeImg} alt="NodeJs" width="100" height="60" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={SpringImg} alt="Springboot" width="100" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={AwsImg} alt="AWS" width="90" height="60" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image
              src={TypescriptImg}
              alt="Typescript/Javascript"
              width="80"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={GitImg} alt="Git/Github" width="80" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={JenkinsImg} alt="Jenkins" width="70" height="85" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={MongoDbImg} alt="MongoDB" width="80" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <Image src={PostgresqlImg} alt="Postgresql" width="70" />
          </SwiperSlide>
        </Swiper>
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
