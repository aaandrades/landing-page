import Layout from "../layout/Layout";
import styles from "./Skills.module.css";
import DesktopSkills from "./DesktopSkills";
import MobileSkills from "./MobileSkills";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Layout id="skills">
      <article className={`article__full-width ${styles.container} `} ref={ref}>
        <h2 className={`subheading ${styles.heading}`} ref={ref}>
          Technical skills
        </h2>
        <p
          className={styles.paragraph}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          &quot;Once you stop learning, you start dying.&quot; — Albert
          Einstein, 1955
        </p>

        <DesktopSkills isInView={isInView} />
        <MobileSkills isInView={isInView} />
      </article>
    </Layout>
  );
};

export default Skills;
