import styles from "./NavBar.module.css";
import TalkBtn from "../talk-btn/TalkBtn";
import { useState } from "react";
import ActiveLink from "./ActiveLink";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const onChange = () => {
    setMenu(false);
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.container__list}>
        <ActiveLink onChange={onChange} id="home">
          Home
        </ActiveLink>
        <ActiveLink onChange={onChange} id="about">
          About
        </ActiveLink>
        <ActiveLink onChange={onChange} id="experience">
          Experience
        </ActiveLink>
        <ActiveLink onChange={onChange} id="skills">
          Skills
        </ActiveLink>
        <ActiveLink onChange={onChange} id="contact">
          Contact
        </ActiveLink>
        <li>
          <TalkBtn onChange={() => setMenu(false)} fullScreen />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
