import React from "react";
import Layout from "../layout/Layout";
import CardExperience from "../card-experience/CardExperience";
import Image from "next/image";
import styles from "./Experience.module.css";
import { otherCompanies } from "../../helpers/constants";

const Experience = () => (
  <Layout id="experience">
    <article className="article__full-width">
      <h2 className={`subheading `}>Recent experience</h2>
      <CardExperience />
      <h3 className={styles.subTitle}>Additional experience</h3>
      <div>
        {otherCompanies.map((experience) => (
          <a
            key={experience.company}
            href={experience.href}
            target="blank"
            title={experience.company}
          >
            <Image
              className={styles.image}
              key={experience.company}
              src={experience.src}
              width={experience.width}
              height={experience.height}
              alt={experience.company}
            />
          </a>
        ))}
      </div>
    </article>
  </Layout>
);

export default Experience;
