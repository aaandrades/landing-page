import styles from "./NavBar.module.css";
import TalkBtn from "../talk-btn/TalkBtn";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";

type THash = "home" | "services" | "about" | "contact";

const NavBar = () => {
  const { asPath } = useRouter();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const hash: THash = asPath.split("#")[1] as THash;
    setActive(hash);
  }, [asPath]);

  const onChange = (value: string) => {
    setActive(value);
  };

  return (
    <nav className={styles.container}>
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
          <TalkBtn />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
