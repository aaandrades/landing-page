import styles from "./Layout.module.css";

const Layout = ({ children }: IProps) => {
  return <article className={styles.background}>{children}</article>;
};

interface IProps {
  children: React.ReactNode;
}

export default Layout;
