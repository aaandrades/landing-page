import { useState, useRef, useCallback } from "react";
import Layout from "../layout/Layout";
import styles from "./Contact.module.css";
import Input from "../common/input/Input";
import ReactCanvasConfetti from "react-canvas-confetti";
import Loader from "../common/loader/Loader";
import { Player } from "@lottiefiles/react-lottie-player";
import "animate.css";
import { HttpClient } from "../../helpers/Http.client";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const handleChange = (target: any) => {
    setForm((prevForm) => ({
      ...prevForm,
      [target.name]: target.value,
    }));
  };

  const handleEmail = async () => {
    try {
      setLoading(true);
      const httpClient = new HttpClient("/api/form");
      const { name, email, message } = form;
      const body = { email, name, message };
      await httpClient.post(body);
      setSent(true);
      fire();
    } catch (error) {
      console.error("Error sending message");
      console.error(error);
      setSent(true);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    handleEmail();
  };

  const resetForm = () => {
    setSent(false);
    setError(false);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Layout id="contact">
      <article className={`article__item ${styles.height}`}>
        <h2 className={`subheading ${styles.heading}`}>Get in touch!</h2>
        <p className={styles.info}>Email: aaandrades@outlook.com</p>
        <p className={styles.info}>Phone: +1 905-783-5816</p>
        <p className={styles.info}>Mississauga, Ontario, Canada</p>
      </article>
      {sent ? (
        <article
          className={`article__item ${styles.form} ${styles.height} animate__animated animate__fadeIn`}
        >
          {error ? (
            <>
              <span className={styles.response_header}>
                There was an error sending the information, please try again :(
              </span>
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_bdnjxekx.json"
                className={styles.lottie_success}
              />
              <button
                type="button"
                className={styles.submit_button}
                onClick={() => resetForm()}
              >
                Try again
              </button>
            </>
          ) : (
            <>
              <span className={styles.response_header}>
                Thanks for submit your information, we will be in touch soon!
              </span>
              <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_s2lryxtd.json"
                className={styles.lottie_success}
              />
            </>
          )}
        </article>
      ) : (
        <form
          className={`article__item ${styles.form} ${styles.height}`}
          onSubmit={onSubmit}
        >
          <Input
            className={styles.form__input}
            label="Your name *"
            value={form.name}
            name="name"
            type="text"
            onChange={(target) => handleChange(target)}
            placeholder="Ej: John Doe"
            title="Your name"
            required
          />
          <Input
            className={styles.form__input}
            label="Your email *"
            value={form.email}
            name="email"
            onChange={(target) => handleChange(target)}
            placeholder="Ej: John@doe.com"
            title="Your email"
            type="email"
            required
          />
          <Input
            className={styles.form__input}
            label="Your message *"
            value={form.message}
            name="message"
            type="text"
            onChange={(target) => handleChange(target)}
            placeholder="Ej: Hello! I want to hire you"
            title="Your message"
            required
          />
          <button
            type="submit"
            disabled={!form.email || !form.message || !form.name}
            className={styles.submit_button}
          >
            Send!
          </button>
        </form>
      )}
      <Loader show={loading} />
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={canvasStyles as any}
      />
      <footer className={styles.footer__container}>
        Made with ❤️ by Andres Andrade ©
      </footer>
    </Layout>
  );
};

export default Contact;
