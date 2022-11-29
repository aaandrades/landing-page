import React from "react";
import styles from "./TalkBtn.module.css";

const TalkBtn = () => {
  return (
    <button type="button" title="Send a message!" className={styles.container}>
      Let&apos;s talk
    </button>
  );
};

export default TalkBtn;
