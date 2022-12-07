import styles from "./NavBar.module.css";
import TalkBtn from "../talk-btn/TalkBtn";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import ActiveCard from "./ActiveCard";

type THash = "home" | "services" | "about" | "contact";

const NavBar = () => {
  const { asPath } = useRouter();
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const hash: THash = asPath.split("#")[1] as THash;
    setActive(hash);
  }, [asPath]);

  const onChange = (value: string) => {
    setActive(value);
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
          <ActiveCard onChange={onChange} active={active} id="home">
            Home
          </ActiveCard>
          <ActiveCard onChange={onChange} active={active} id="services">
            Services
          </ActiveCard>
          <ActiveCard onChange={onChange} active={active} id="about">
            About
          </ActiveCard>
          <ActiveCard onChange={onChange} active={active} id="contact">
            Contact
          </ActiveCard>
          <TalkBtn onChange={(value) => setMenu(value)} />
        </div>
      </aside>

      <ul className={styles.container__list}>
        <ActiveLink onChange={onChange} active={active} id="home">
          Home
        </ActiveLink>
        <ActiveLink onChange={onChange} active={active} id="services">
          Services
        </ActiveLink>
        <ActiveLink onChange={onChange} active={active} id="about">
          About
        </ActiveLink>
        <ActiveLink onChange={onChange} active={active} id="contact">
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
