import NavLink from "./nav-link";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink href={"/#histoire"} toggleActive={false}>
          De fil en aiguille...
        </NavLink>
      </li>
      <li>
        <NavLink href={"/collections"}>Collections</NavLink>
      </li>
      <li>
        <NavLink href={"/sur-mesure"}> Sur mesure</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
