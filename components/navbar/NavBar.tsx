import styles from "./NavBar.module.css";
import TalkBtn from "../talk-btn/TalkBtn";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type THash = "home" | "services" | "about" | "contact";

const NavBar = () => {
  const { asPath } = useRouter();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const hash: THash = asPath.split("#")[1] as THash;
    setActive(hash);
  }, [asPath]);

  return (
    <nav className={styles.container}>
      <ul className={styles.container__list}>
        <li className={active === "home" ? styles.container__item_active : ""}>
          <Link href="#home" scroll={false} onClick={() => setActive("home")}>
            Home
          </Link>
        </li>
        <li
          className={active === "services" ? styles.container__item_active : ""}
        >
          <Link
            href="#services"
            scroll={false}
            onClick={() => setActive("services")}
          >
            Services
          </Link>
        </li>
        <li className={active === "about" ? styles.container__item_active : ""}>
          <Link href="#about" scroll={false} onClick={() => setActive("about")}>
            About
          </Link>
        </li>
        <li
          className={active === "contact" ? styles.container__item_active : ""}
        >
          <Link
            href="#contact"
            scroll={false}
            onClick={() => setActive("contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <TalkBtn />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
