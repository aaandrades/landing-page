import React from "react";
import styles from "./Skills.module.css";
import { animated, useTrail } from "@react-spring/web";

import { NestJs, AngularIcon, ReactIcon, SpringIcon } from "../icons";

const DesktopSkills = () => {
  const [trails] = useTrail(1, {
    config: { mass: 100, tension: 1000, friction: 400 },
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 220 },
  });

  return (
    <animated.div
      className={`${styles.skills}`}
      key={trails.opacity.id}
      style={trails}
    >
      <ReactIcon />
      <NestJs />
      <AngularIcon />
      <SpringIcon />
      <p style={{ top: 50, left: "90%", fontSize: 23 }}>Angular</p>
      <p style={{ top: 0, left: 0, fontSize: 25 }}>Spring</p>
      <p style={{ top: 200, left: 0, fontSize: 14 }}>NodeJs</p>
      <p style={{ top: "10%", left: "35%", fontSize: 18 }}>figma</p>
      <p style={{ top: 40, left: "75%", fontSize: 12 }}>Microservices</p>
      <p style={{ top: 380, left: "85%", fontSize: 18 }}>MongoDB</p>
      <p style={{ top: 320, left: "65%", fontSize: 18 }}>Express</p>
      <p style={{ top: "80%", left: "25%", fontSize: 20 }}>React Native</p>
      <p style={{ top: "70%", left: "45%", fontSize: 15 }}>Kubernetes</p>
      <p style={{ top: 360, left: "10%", fontSize: 20 }}>AWS</p>
      <p style={{ top: 120, left: "60%", fontSize: 20 }}>Ionic</p>
      <p style={{ top: 220, left: "45%", fontSize: 12 }}>Android</p>
      <p style={{ top: 170, left: "80%", fontSize: 12 }}>UI/UX</p>
      <p style={{ top: 120, left: "22%", fontSize: 15 }}>Docker</p>
    </animated.div>
  );
};

export default DesktopSkills;
