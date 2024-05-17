import React from "react";
import { ActiveElement } from "../../interfaces/interfaces";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";

const ActiveCard = ({ onChange, children, id }: ActiveElement) => {
  return (
    <div className={styles.card}>
      <Link
        className="{styles.card_link}"
        activeClass={styles.card_active}
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
};

export default ActiveCard;
