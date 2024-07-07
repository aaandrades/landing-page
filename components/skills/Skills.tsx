import Layout from "../layout/Layout";
import styles from "./Skills.module.css";
import DesktopSkills from "./DesktopSkills";
import MobileSkills from "./MobileSkills";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Skills = () => {
  const [openView, setOpenView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) setOpenView(true);
  }, [inView]);

  return (
    <Layout id="skills">
      <article className={`article__full-width ${styles.container} `} ref={ref}>
        <h2 className={`subheading ${styles.heading}`}>Technical skills</h2>
        <p className={styles.paragraph}>
          &quot;Once you stop learning, you start dying.&quot; — Albert
          Einstein, 1955
        </p>

        {openView && <DesktopSkills />}
        <MobileSkills />
      </article>
    </Layout>
  );
};

export default Skills;
