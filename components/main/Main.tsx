import React from "react";
import NavBar from "../navbar/NavBar";
import Landing from "../landing/Landing";
import About from "../about/About";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";

import styles from "./Main.module.css";
import Experience from "../experience/Experience";

const MainComponent = () => (
  <main className={styles.container}>
    <NavBar />
    <Landing />
    <About />
    <Experience />
    <Skills />
    <Contact />
    <div id="modal-root"></div>
  </main>
);

export default MainComponent;
