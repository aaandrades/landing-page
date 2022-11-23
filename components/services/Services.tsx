import Layout from "../layout/Layout";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <Layout id="services">
      <div className={styles.container}>
        <section className={styles.container__section}>
          <div className={styles.container__item}>
            <h2 className={styles.title}>5+</h2>
            <p className={styles.paragraph}>Years of experience</p>
          </div>
          <div className={styles.container__item}>
            <h2 className={styles.title}>10+</h2>
            <p className={styles.paragraph}>Big freelance jobs done</p>
          </div>
          <div className={styles.container__item}>
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.paragraph}>Check out my Github!</p>
          </div>
        </section>
        <section className={styles.container__section}>
          <h2 className={styles.title}>
            Do you have something
            <span className={styles.title__secondary}> in mind</span>?
          </h2>
          <p className={styles.paragraph__secondary}>I can help you</p>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
