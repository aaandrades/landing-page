import React from "react";
import styles from "./CardExperience.module.css";
import { ICardExperience } from "../../interfaces/types";
import Image from "next/image";
import { experiences } from "../../helpers/constants";

const CardExperience = () => (
  <ul className={styles.list}>
    {experiences.map((experience: ICardExperience) => (
      <li className={styles.container} key={experience.company}>
        <h3 className={styles.title}>
          {experience.title} at
          <a
            className={styles.company}
            href={experience.href}
            target="blank"
            title={experience.company}
          >
            <Image
              alt={experience.company}
              src={experience.image.src}
              width={experience.image.width}
              height={experience.image.height}
            />
          </a>
        </h3>
        <p className={styles.date}>{experience.date}</p>
        <p className="paragraph">{experience.description}</p>
        <p className={styles.technologies}>Technologies</p>
      </li>
    ))}
  </ul>
);

export default CardExperience;
