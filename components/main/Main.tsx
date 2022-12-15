import React from "react";
import NavBar from "../navbar/NavBar";
import Landing from "../landing/Landing";
import Services from "../services/Services";
import About from "../about/About";
import Contact from "../contact/Contact";
import styles from "./Main.module.css";
import Loader from "../common/loader/Loader";

const MainComponent = () => {
  return (
    <main className={styles.container}>
      <NavBar />
      <Landing />
      <Services />
      <About />
      <Contact />
      <div id="modal-root"></div>
    </main>
  );
};

export default MainComponent;
