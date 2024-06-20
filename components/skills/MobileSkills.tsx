import React from "react";
import Image from "next/image";
import { BACKEND, DB, FRONTEND, LANGUAGES } from "../../helpers/constants";
import styles from "./Skills.module.css";

const MobileSkills = ({ isInView = false }) => (
  <ul
    className={styles.list}
    style={{
      transform: isInView ? "none" : "translateX(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    }}
  >
    <li>
      <h3 className={`${styles.group__title}`}>Languages</h3>
      <div className={`${styles.group__icons}`}>
        {LANGUAGES.map((logo) => (
          <Image
            className={`${styles.group__item}`}
            key={logo.name}
            src={logo.file}
            height={logo.height}
            width={logo.width}
            alt={logo.name}
            loading="lazy"
          />
        ))}
      </div>
    </li>
    <li>
      <h3 className={`${styles.group__title}`}>Frontend</h3>
      <div className={`${styles.group__icons}`}>
        {FRONTEND.map((logo) => (
          <Image
            className={`${styles.group__item}`}
            key={logo.name}
            src={logo.file}
            height={logo.height}
            width={logo.width}
            alt={logo.name}
            loading="lazy"
          />
        ))}
      </div>
    </li>
    <li>
      <h3 className={`${styles.group__title}`}>Backend</h3>
      <div className={`${styles.group__icons}`}>
        {BACKEND.map((logo) => (
          <Image
            className={`${styles.group__item}`}
            key={logo.name}
            src={logo.file}
            height={logo.height}
            width={logo.width}
            alt={logo.name}
            loading="lazy"
          />
        ))}
      </div>
    </li>
    <li>
      <h3 className={`${styles.group__title}`}>DB</h3>
      <div className={`${styles.group__icons}`}>
        {DB.map((logo) => (
          <Image
            className={`${styles.group__item}`}
            key={logo.name}
            src={logo.file}
            height={logo.height}
            width={logo.width}
            alt={logo.name}
            loading="lazy"
          />
        ))}
      </div>
    </li>
  </ul>
);

export default MobileSkills;
