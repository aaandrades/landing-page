import Link from "next/link";
import React from "react";
import styles from "./TalkBtn.module.css";

interface IProps {
  onChange(value: boolean): void;
  fullScreen?: boolean;
}

const TalkBtn = ({ onChange, fullScreen = false }: IProps) => {
  return (
    <Link href="#contact" scroll={false}>
      <button
        type="button"
        title="Send a message!"
        className={`${styles.container} ${
          fullScreen ? styles.container__fullscreen : ""
        }`}
        onClick={() => onChange(false)}
      >
        Let&apos;s talk
      </button>
    </Link>
  );
};

export default TalkBtn;
