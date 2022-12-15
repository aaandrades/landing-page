import React from "react";
import ReactDOM from "react-dom";

import styles from "./Loader.module.css";

interface IProps {
  show: boolean;
}

// Laoder using react portal
const Loader = ({ show }: IProps) => {
  const content = () => (
    <div className={styles.body}>
      <div className={styles.mexican_wave}></div>
    </div>
  );

  return show
    ? ReactDOM.createPortal(
        content(),
        document.getElementById("modal-root") as Element
      )
    : null;
};

export default Loader;
