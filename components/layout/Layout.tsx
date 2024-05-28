import styles from "./Layout.module.css";
import { ILayout } from "../../interfaces/types";

const Layout = ({ children, id, reverse = false, invert = false }: ILayout) => (
  <section
    className={`${styles.background} ${
      reverse ? styles.background__reverse : ""
    } ${invert ? styles.background__invert : ""}`}
    id={id}
  >
    {children}
  </section>
);

export default Layout;
