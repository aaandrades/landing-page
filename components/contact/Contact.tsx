import { useState } from "react";
import Layout from "../layout/Layout";
import styles from "./Contact.module.css";
import Input from "../common/input/Input";
import ReactCanvasConfetti from "react-canvas-confetti";
import Loader from "../common/loader/Loader";
import { Player } from "@lottiefiles/react-lottie-player";
import { HttpClient } from "../../helpers/Http.client";
import ScrollGuide from "../scroll-guide/ScrollGuide";
import MainActions from "../main-actions/MainActions";
import { useFire } from "../../helpers/hooks/useFire";
import { INITIAL_STATE, canvasStyles } from "../../helpers/constants";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(INITIAL_STATE);

  const { fire, getInstance } = useFire();

  const handleChange = (target: any) => {
    setForm((prevForm) => ({ ...prevForm, [target.name]: target.value }));
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
      console.error("Error sending message", error);
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
    setForm(INITIAL_STATE);
  };

  return (
    <Layout id="contact">
      <article className="article__item">
        <h2 className={`subheading ${styles.subheading} `}>
          Do you have something
          <span className={styles.title__secondary}> in mind</span>?
        </h2>
        <MainActions social />
      </article>
      {sent ? (
        <article className={`article__item ${styles.form}`}>
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
                Thanks for sending your information, we will get in touch soon!
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
            placeholder="Some cool message"
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
      {/* <div className="scroll-guide">
        <ScrollGuide id="home" top />
      </div> */}
    </Layout>
  );
};

export default Contact;
