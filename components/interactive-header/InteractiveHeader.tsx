import React from "react";
import { animated, useTrail } from "@react-spring/web";
import MainActions from "../main-actions/MainActions";
import styles from "../landing/Landing.module.css";

const InteractiveHeader = () => {
  const [trails] = useTrail(1, {
    config: { mass: 100, tension: 2000, friction: 400 },
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 220 },
  });

  return (
    <animated.div key={trails.opacity.id} style={trails}>
      <h1 className={styles.title}>
        <span>Hi!</span>
        <br></br>I am
        <span className={styles.title__name}> Andrés Andrade</span>
      </h1>
      <p className={styles.landing_paragraph}>
        Software Engineer based in Toronto, Canada
      </p>
      <MainActions />
    </animated.div>
  );
};

export default InteractiveHeader;
