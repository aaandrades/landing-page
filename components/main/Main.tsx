import React, { useEffect } from "react";
import NavBar from "../navbar/NavBar";
import Landing from "../landing/Landing";
import Services from "../services/Services";
import About from "../about/About";
import Contact from "../contact/Contact";

import styles from "./Main.module.css";

const MainComponent = () => {
  useEffect(() => {
    // window.addEventListener(
    //   "scroll",
    //   () => {
    //     document.body.style.setProperty(
    //       "--scroll",
    //       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    //     );
    //   },
    //   false
    // );
  }, []);
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
