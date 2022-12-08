import { Link as ScrollLink } from "react-scroll";
import React from "react";
import styles from "./NavBar.module.css";
import { ActiveElement } from "../../interfaces/interfaces";

const ActiveLink = ({ children, id }: ActiveElement) => (
  <li>
    <ScrollLink
      href={`#${id}`}
      activeClass={styles.card_active}
      smooth
      spy
      to={id}
      duration={300}
      hashSpy
    >
      {children}
    </ScrollLink>
  </li>
);

export default ActiveLink;
