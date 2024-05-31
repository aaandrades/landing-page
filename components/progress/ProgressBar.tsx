import React from "react";
import styles from "./ProgressBar.module.css";
import { useEffect } from "react";

const ProgressBar = () => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          `${
            window.pageYOffset /
            (document.body.offsetHeight - window.innerHeight)
          }`
        );
      },
      false
    );
  }, []);

  return <div className="progress"></div>;
};

export default ProgressBar;
