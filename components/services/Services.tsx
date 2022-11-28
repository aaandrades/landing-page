import Layout from "../layout/Layout";
import styles from "./Services.module.css";
import Card from "../common/card/Card";

const Services = () => {
  return (
    <Layout id="services">
      <article className="article__item">
        <div className={styles.container__item}>
          <h2 className="subheading">5+</h2>
          <p className={styles.paragraph}>Years of experience</p>
        </div>
        <div className={styles.container__item}>
          <h2 className="subheading">10+</h2>
          <p className={styles.paragraph}>Big freelance jobs done</p>
        </div>
        <div className={styles.container__item}>
          <h2 className="subheading">Projects</h2>
          <p className={styles.paragraph}>Check out my Github!</p>
        </div>
      </article>
      <article className="article__item">
        <h2 className="subheading">
          Do you have something
          <span className={styles.title__secondary}> in mind</span>?
        </h2>
        <p className={styles.paragraph__secondary}>I can help you</p>
        <div>
          <Card>Mobile Design & Development</Card>
          <Card>Web Design & Development</Card>
          <Card>Customized services</Card>
        </div>
      </article>
    </Layout>
  );
};

export default Services;
