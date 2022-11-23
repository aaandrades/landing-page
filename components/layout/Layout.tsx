import styles from "./Layout.module.css";

const Layout = ({ children, id }: IProps) => {
  return (
    <article className={styles.background} id={id}>
      {children}
    </article>
  );
};

interface IProps {
  children: React.ReactNode;
  id: string;
}

export default Layout;
