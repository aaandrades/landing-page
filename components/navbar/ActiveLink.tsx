import { Link as ScrollLink } from "react-scroll";
import React from "react";
import styles from "./NavBar.module.css";
import { ActiveElement } from "../../interfaces/types";

const ActiveLink = ({ children, id }: ActiveElement) => (
  <li>
    <ScrollLink
      className={`${styles.card_link}`}
      activeClass={styles.card_active}
      href={`#${id}`}
      spy
      to={id}
      duration={300}
    >
      {children}
    </ScrollLink>
  </li>
);

export default ActiveLink;
