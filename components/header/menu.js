import NavLink from "./nav-link";
import styles from "./menu.module.scss";

const Menu = ({ handleClose }) => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink href={"/#histoire"} toggleActive={false}>
          De fil en aiguille...
        </NavLink>
      </li>
      <li>
        <NavLink href={"/collections"} closeBurger={handleClose}>
          Collections
        </NavLink>
      </li>
      <li>
        <NavLink href={"/sur-mesure"} closeBurger={handleClose}>
          {" "}
          Sur mesure
        </NavLink>
      </li>
      <li>
        <NavLink href={"/contact"} closeBurger={handleClose}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
