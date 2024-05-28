import styles from "./NavBar.module.css";
import TalkBtn from "../talk-btn/TalkBtn";
import { useState } from "react";
import ActiveLink from "./ActiveLink";
import ActiveCard from "./ActiveCard";

type THash = "home" | "services" | "about" | "contact";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const onChange = () => {
    setMenu(false);
  };

  return (
    <nav className={styles.container}>
      <button
        className={`${styles.burger_btn} ${menu ? styles.show_btn : ""}`}
        title="Open/Close menu"
        onClick={() => setMenu(!menu)}
        type="button"
      >
        <div className={styles.burger_btn_line}></div>
        <div className={styles.burger_btn_line}></div>
        <div className={styles.burger_btn_line}></div>
      </button>

      <aside
        className={`${styles.aside} ${
          menu ? styles.show_bar : styles.hide_bar
        }`}
      >
        <div className={styles.aside_content}>
          <ActiveCard onChange={onChange} id="home">
            Home
          </ActiveCard>
          <ActiveCard onChange={onChange} id="about">
            About
          </ActiveCard>
          <ActiveCard onChange={onChange} id="experience">
            Experience
          </ActiveCard>
          <ActiveCard onChange={onChange} id="skills">
            Skills
          </ActiveCard>
          <ActiveCard onChange={onChange} id="contact">
            Contact
          </ActiveCard>
          <TalkBtn onChange={(value) => setMenu(value)} />
        </div>
      </aside>

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
