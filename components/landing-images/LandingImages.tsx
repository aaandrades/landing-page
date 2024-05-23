import Image from "next/image";
import React from "react";
import styles from "./LandingImages.module.css";

import FunkoPhoto from "../../public/profile_funko.png";

const LandingImages = () => (
  <>
    <Image
      src={FunkoPhoto}
      className={`${styles.blob_container__profile} ${styles.ia} funko`}
      width="500"
      alt="Profile"
      priority
    />
    <span className={styles.blob_container__text}>What is this?</span>
    <span className={styles.tooltip}>
      This image was created using Artificial Intelligence with Stable Diffusion
      and trained with my face. More info{" "}
      <a
        className={styles.tooltip_link}
        href="https://www.youtube.com/watch?v=RGBNdD3Wn-g&ab_channel=What%27sAIbyLouisBouchard"
        target="blank"
      >
        Youtube video
      </a>
      .
    </span>
  </>
);

export default LandingImages;
