import { useState, useRef, useCallback } from "react";
import Layout from "../layout/Layout";
import styles from "./Contact.module.css";
import Input from "../common/input/Input";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

const Contact = () => {
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);
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
          onClick={(e) => {
            e.preventDefault();
            fire();
          }}
        >
          Send!
          <ReactCanvasConfetti
            refConfetti={getInstance}
            style={canvasStyles as any}
          />
        </button>
      </article>
      <footer className={styles.footer__container}>
        Made with ❤️ by Andres Andrade ©
      </footer>
    </Layout>
  );
};

export default Contact;
