import Logo from "../UI/Logo";
import styles from "./main-header.module.scss";
import Menu from "./menu";

const MainHeader = () => {
  return (
    <nav className={styles.headerContent}>
      <Logo className={styles.logo} size={150} isLink={true} />
      <Menu />
    </nav>
  );
};

export default MainHeader;
