import Link from "next/link";
import React from "react";
import styles from "./TalkBtn.module.css";

interface IProps {
  onChange?(value: boolean): void;
  fullScreen?: boolean;
  text?: string;
  className?: string;
}

const TalkBtn = ({
  onChange = () => undefined,
  fullScreen = false,
  text = "Let's talk",
  className = "",
}: IProps) => {
  return (
    <Link href="#contact" scroll={false}>
      <button
        type="button"
        title="Send a message!"
        className={`${styles.container} ${
          fullScreen ? styles.container__fullscreen : ""
        } ${className}`}
        onClick={() => onChange(false)}
      >
        {text}
      </button>
    </Link>
  );
};

export default TalkBtn;
