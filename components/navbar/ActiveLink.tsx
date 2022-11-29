import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";
import { ActiveElement } from "../../interfaces/interfaces";

const ActiveLink = ({ onChange, active, children, id }: ActiveElement) => (
  <li className={active === id ? styles.container__item_active : ""}>
    <Link
      href={`#${id}`}
      scroll={false}
      onClick={() => onChange(id)}
      title={id}
    >
      {children}
    </Link>
  </li>
);

export default ActiveLink;
