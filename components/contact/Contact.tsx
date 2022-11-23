import Layout from "../layout/Layout";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Layout id="contact">
      <h2>Get in touch!</h2>
      <p>Email</p>
      <p>Phone</p>
      <p>Mississauga, Ontario, Canada</p>
      <footer className={styles.footer__container}>
        Made with ❤️ by Andres Andrade ©
      </footer>
    </Layout>
  );
};

export default Contact;
