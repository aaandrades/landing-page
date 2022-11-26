import Layout from "../layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

const About = () => {
  return (
    <Layout id="about">
      <h2>Contenido</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Layout>
  );
};

export default About;
