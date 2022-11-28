import React from "react";
import styles from "./Card.module.css";

interface IProps {
  children: React.ReactNode;
}

const Card = ({ children }: IProps) => {
  return <div className={styles.card_container}>{children}</div>;
};

export default Card;
