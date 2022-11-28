import Layout from "../layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styles from "./About.module.css";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import DownloadBtn from "../common/download-btn/DownloadBtn";

const About = () => {
  return (
    <Layout id="about">
      <article className="article__item">
        <h2 className="subheading">Let me introduce myself</h2>
        <p className={styles.paragraph}>
          My name is Andrés Andrade, I live in Mississauga, Ontario - Canada.
          I&apos;m a Fullstack Software developer, specialized in Frontend
          development. I have more than 5 years of experience creating amazing
          products and enjoying the journey.
          <Link
            href="#contact"
            scroll={false}
            title="Let's talk"
            className="link"
          >
            {" "}
            Let&apos;s talk!
          </Link>
        </p>
        <div>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            slidesPerView={3}
            modules={[Pagination, Autoplay]}
            className="swiper"
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </article>
      <article className="article__item">
        SVG
        <DownloadBtn />
      </article>
    </Layout>
  );
};

export default About;
