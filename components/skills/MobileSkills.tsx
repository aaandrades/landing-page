import React from "react";
import styles from "./Skills.module.css";
import {
  JavascriptMinIcon,
  ReactMinIcon,
  AngularMinIcon,
  IonicMinIcon,
  AndroidMinIcon,
  NodeMinIcon,
  SpringMinIcon,
  NestMinIcon,
  ExpressMinIcon,
  MongodbMinIcon,
  PostgreMinIcon,
  JavaMinIcon,
  TypescriptMinIcon,
} from "../min-icons";

const MobileSkills = () => (
  <ul className={styles.list}>
    <li>
      <h3 className={`${styles.group__title}`}>Languages</h3>
      <JavascriptMinIcon />
      <JavaMinIcon />
      <TypescriptMinIcon />
    </li>
    <li>
      <h3 className={`${styles.group__title}`}>Frontend</h3>
      <ReactMinIcon />
      <AngularMinIcon />
      <IonicMinIcon />
      <AndroidMinIcon />
    </li>
    <li>
      <h3 className={`${styles.group__title}`}>Backend</h3>
      <NodeMinIcon />
      <SpringMinIcon />
      <NestMinIcon />
      <ExpressMinIcon />
    </li>
    <li>
      <h3 className={`${styles.group__title}`}>Databases</h3>
      <MongodbMinIcon />
      <PostgreMinIcon />
    </li>
  </ul>
);

export default MobileSkills;
