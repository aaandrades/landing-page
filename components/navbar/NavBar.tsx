import styles from "./NavBar.module.css";
import TalkBtn from "../talk-btn/TalkBtn";
import ActiveLink from "./ActiveLink";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.container__list}>
        <ActiveLink id="home">Home</ActiveLink>
        <ActiveLink id="about">About</ActiveLink>
        <ActiveLink id="experience">Experience</ActiveLink>
        <ActiveLink id="skills">Skills</ActiveLink>
        <ActiveLink id="contact">Contact</ActiveLink>
        <li>
          <TalkBtn fullScreen />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
