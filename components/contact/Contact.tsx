import Layout from "../layout/Layout";
import styles from "./Contact.module.css";
import Input from "../common/input/Input";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (target: any) => {
    setForm((prevForm) => ({
      ...prevForm,
      [target.name]: target.value,
    }));
  };

  return (
    <Layout id="contact">
      <article className="article__item">
        <h2 className="subheading">Get in touch!</h2>
        <p className={styles.info}>Email</p>
        <p className={styles.info}>Phone</p>
        <p className={styles.info}>Mississauga, Ontario, Canada</p>
      </article>
      <article className="article__item">
        <Input
          label="Your name"
          value={form.name}
          name="name"
          onChange={(target) => handleChange(target)}
          placeholder="Ej: John Doe"
          title="Your name"
        />
        <Input
          label="Your email"
          value={form.email}
          name="email"
          onChange={(target) => handleChange(target)}
          placeholder="Ej: john@doe.com"
          title="Your email"
        />
        <Input
          label="Your message"
          value={form.message}
          name="message"
          onChange={(target) => handleChange(target)}
          placeholder="Ej: Hello! I want to hire you!"
          title="Your message"
        />
      </article>
      <footer className={styles.footer__container}>
        Made with ❤️ by Andres Andrade ©
      </footer>
    </Layout>
  );
};

export default Contact;
