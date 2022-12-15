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
      <article className={`article__item ${styles.height}`}>
        <h2 className={`subheading ${styles.heading}`}>Get in touch!</h2>
        <p className={styles.info}>Email: aaandrades@outlook.com</p>
        <p className={styles.info}>Phone: +1 905-783-5816</p>
        <p className={styles.info}>Mississauga, Ontario, Canada</p>
      </article>
      <article className={`article__item ${styles.form} ${styles.height}`}>
        <Input
          className={styles.form__input}
          label="Your name"
          value={form.name}
          name="name"
          onChange={(target) => handleChange(target)}
          placeholder="Ej: John Doe"
          title="Your name"
        />
        <Input
          className={styles.form__input}
          label="Your email"
          value={form.email}
          name="email"
          onChange={(target) => handleChange(target)}
          placeholder="Ej: John@doe.com"
          title="Your email"
        />
        <Input
          className={styles.form__input}
          label="Your message"
          value={form.message}
          name="message"
          onChange={(target) => handleChange(target)}
          placeholder="Ej: Hello! I want to hire you"
          title="Your message"
        />
        <button
          type="submit"
          className={styles.submit_button}
          onClick={(e) => e.preventDefault()}
        >
          Send!
        </button>
      </article>
      <footer className={styles.footer__container}>
        Made with ❤️ by Andres Andrade ©
      </footer>
    </Layout>
  );
};

export default Contact;
