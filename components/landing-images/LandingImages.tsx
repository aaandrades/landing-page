import Image from "next/image";
import React from "react";
import styles from "./LandingImages.module.css";

import FunkoPhoto from "../../public/profile_funko.png";
import IronManPhoto from "../../public/ironman.png";
import SuitPhoto from "../../public/suit.png";
import PixarPhoto from "../../public/pixarprofile.png";

const LandingImages = () => {
  return (
    <>
      <Image
        src={FunkoPhoto}
        className={`${styles.blob_container__profile} ${styles.ia} ${styles.funko}`}
        width="500"
        alt="Profile"
        priority
      />
      <Image
        src={IronManPhoto}
        className={`${styles.blob_container__profile} ${styles.ia} ${styles.ironman}`}
        width="500"
        alt="Profile"
        priority
      />
      <Image
        src={SuitPhoto}
        className={`${styles.blob_container__profile} ${styles.ia} ${styles.suit}`}
        width="500"
        alt="Profile AI"
        priority
      />
      <Image
        src={PixarPhoto}
        className={`${styles.blob_container__profile} ${styles.pixar}`}
        width="500"
        alt="Profile AI"
        priority
      />
      <span
        id="images-ia"
        className={styles.blob_container__text}
        data-tooltip-content="hello world"
      >
        What is this?
      </span>
      <span className={styles.tooltip}>
        These images are created using Artificial Intelligence with Stable
        Diffusion and trained with my face. More info
        <a
          className={styles.tooltip_link}
          href="https://www.youtube.com/watch?v=RGBNdD3Wn-g&ab_channel=What%27sAIbyLouisBouchard"
          target="blank"
        >
          {" "}
          here
        </a>
        .
      </span>
    </>
  );
};

export default LandingImages;
