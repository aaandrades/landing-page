import React from "react";
import styles from "./DownloadBtn.module.css";

const DownloadBtn = () => {
  return (
    <a
      role="button"
      download
      href="cv_andres_andrade.pdf"
      className={styles.download}
    >
      Download CV
    </a>
  );
};

export default DownloadBtn;
