import React from "react";
import styles from "./Skills.module.css";
import { NestJs, JavascriptIcon, ReactIcon, SpringIcon } from "../icons";

const DesktopSkills = ({ isInView = false }) => (
  <div
    className={`${styles.skills}`}
    style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    }}
  >
    <ReactIcon />
    <NestJs />
    <JavascriptIcon />
    <SpringIcon />
    <p style={{ top: 50, left: "90%", fontSize: 23 }}>Angular</p>
    <p style={{ top: 0, left: 0, fontSize: 25 }}>Spring</p>
    <p style={{ top: 200, left: 0, fontSize: 14 }}>NodeJs</p>
    <p style={{ top: "10%", left: "35%", fontSize: 18 }}>figma</p>
    <p style={{ top: 40, left: "75%", fontSize: 12 }}>Microservices</p>
    <p style={{ top: 380, left: "85%", fontSize: 18 }}>MongoDB</p>
    <p style={{ top: 320, left: "65%", fontSize: 18 }}>Express</p>
    <p style={{ top: 350, left: "25%", fontSize: 20 }}>React Native</p>
    <p style={{ top: 120, left: "60%", fontSize: 20 }}>Ionic</p>
    <p style={{ top: 220, left: "45%", fontSize: 12 }}>Android</p>
    <p style={{ top: 170, left: "80%", fontSize: 12 }}>UI/UX</p>
    <p style={{ top: 120, left: "22%", fontSize: 15 }}>Docker</p>
  </div>
);

export default DesktopSkills;
