import styles from "./Layout.module.css";

const Layout = ({ children, id }: IProps) => {
  return (
    <section className={styles.background} id={id}>
      {children}
    </section>
  );
};

interface IProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default Layout;
