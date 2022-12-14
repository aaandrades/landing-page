import styles from "./Layout.module.css";

const Layout = ({ children, id, reverse = false, invert = false }: IProps) => {
  return (
    <section
      className={`${styles.background} ${
        reverse ? styles.background__reverse : ""
      } ${invert ? styles.background__invert : ""}`}
      id={id}
    >
      {children}
    </section>
  );
};

interface IProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  reverse?: boolean;
  invert?: boolean;
}

export default Layout;
