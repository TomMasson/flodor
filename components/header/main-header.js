import Logo from "../UI/Logo";
import styles from "./main-header.module.scss";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <nav className={styles.headerContent}>
      <Logo className={styles.logo} size={150} isLink={true} />

      <ul className={styles.list}>
        <li>
          <NavLink href={"/#histoire"} toggleActive={false}>
            De fil en aiguille...
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink href={"/collections"}>Collections</NavLink>
        </li>
        <li>
          <NavLink href={"/sur-mesure"}> Sur mesure</NavLink>
        </li>
        <li>
          <NavLink href={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainHeader;
