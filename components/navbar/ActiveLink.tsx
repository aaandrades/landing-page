import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";

interface IProps {
  onChange(type: string): void;
  active: string;
  id: string;
  children: React.ReactNode;
}

const ActiveLink = ({ onChange, active, children, id }: IProps) => (
  <li className={active === id ? styles.container__item_active : ""}>
    <Link href={`#${id}`} scroll={false} onClick={() => onChange(id)}>
      {children}
    </Link>
  </li>
);

export default ActiveLink;
