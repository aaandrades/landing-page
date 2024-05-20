import React from "react";
import TalkBtn from "../talk-btn/TalkBtn";
import styles from "./main-actions.module.css";
import { GithubIcon, MailIcon, LinkedInIcon } from "../icons";
interface IMainActionsProps {
  social?: boolean;
}

const MainActions = ({ social = false }: IMainActionsProps) => {
  return (
    <>
      <div className={styles.container_mobile}>
        <TalkBtn fullScreen className={styles.action_btn} />
      </div>
      <div className={styles.container}>
        {!social && (
          <>
            <TalkBtn
              text="Meet me here!"
              fullScreen
              className={styles.action_btn}
            />
            <span className={styles.helper}>or</span>
          </>
        )}
        <a
          href="https://www.linkedin.com/in/andr%C3%A9s-andrade-51962b105/"
          title="LinkedIn"
          target="blank"
          role="button"
        >
          <LinkedInIcon width="40px" className={styles.icon} />
        </a>
        <a
          href="https://github.com/aaandrades"
          title="Github page"
          target="blank"
          role="button"
        >
          <GithubIcon width="40px" className={styles.icon} />
        </a>
        <a
          href="mailto: aaandrades@outlook.com"
          title="Email me!"
          target="blank"
          role="button"
        >
          <MailIcon width="45px" className={styles.icon} />
        </a>
      </div>
    </>
  );
};

export default MainActions;
