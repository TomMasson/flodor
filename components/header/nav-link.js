"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.scss";

const NavLink = ({ href, toggleActive = true, children }) => {
  const path = usePathname();
  const cssClass = toggleActive
    ? styles.link + (path.startsWith(href) ? ` ${styles.active}` : "")
    : styles.link;
  return (
    <Link className={cssClass} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
