import styles from "./Layout.module.css";

const Layout = ({ children, id, reverse = false }: IProps) => {
  return (
    <section
      className={`${styles.background} ${
        reverse ? styles.background__reverse : ""
      }`}
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
}

export default Layout;
