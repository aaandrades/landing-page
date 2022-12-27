import { Link } from "react-scroll";
import React from "react";
import styles from "./ScrollGuide.module.css";

interface IProps {
  id: string;
  top?: boolean;
}

const ScrollGuide = ({ id, top = false }: IProps) => {
  return (
    <Link smooth href={`#${id}`} to={id} duration={300} hashSpy>
      <div className={styles.scroll_container}>
        <div className={styles.scroll_container__field}>
          <div className={styles.scroll_container__mouse}></div>
        </div>
        <span className={styles.scroll_container__text}>
          {top ? "Scroll Top" : "Scroll down"}
        </span>
      </div>
    </Link>
  );
};

export default ScrollGuide;
