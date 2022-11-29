import React from "react";
import { ActiveElement } from "../../interfaces/interfaces";
import Link from "next/link";
import styles from "./NavBar.module.css";

const ActiveCard = ({ onChange, active, children, id }: ActiveElement) => {
  return (
    <div
      className={`${styles.card} ${active === id ? styles.card_active : ""}`}
    >
      <Link
        href={`#${id}`}
        scroll={false}
        onClick={() => onChange(id)}
        title={id}
      >
        {children}
      </Link>
    </div>
  );
};

export default ActiveCard;
