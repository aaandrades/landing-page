import React from "react";
import { ActiveElement } from "../../interfaces/types";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";

const ActiveCard = ({ onChange, children, id }: ActiveElement) => (
  <div className={styles.card}>
    <Link
      activeClass={styles.card_active}
      href={`#${id}`}
      smooth
      spy
      to={id}
      duration={300}
      onClick={() => (onChange ? onChange(id) : null)}
    >
      {children}
    </Link>
  </div>
);

export default ActiveCard;
