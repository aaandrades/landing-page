import React from "react";
import NavBar from "../navbar/NavBar";
import Landing from "../landing/Landing";
import Services from "../services/Services";
import About from "../about/About";
import Contact from "../contact/Contact";

import styles from "./Main.module.css";

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
