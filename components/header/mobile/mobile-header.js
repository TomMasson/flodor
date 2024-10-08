"use client";

import { useState } from "react";
import Menu from "../menu";
import Hamburger from "./hamburger";
import styles from "./mobile-header.module.scss";
import Logo from "../../UI/Logo";

const MobileHeader = () => {
  const [isActive, setIsActive] = useState(0);
  const [initAnim, setInitAnim] = useState(1);

  const handleAnim = () => {
    setIsActive(!isActive);
    setInitAnim(0);
  };

  const closeBurger = () => {
    setIsActive(false);
  };
  return (
    <nav className={`${styles.mobileHeader} ${isActive ? styles.active : ""}`}>
      <Menu handleClose={closeBurger} />
      <div className={styles.navbar}>
        <Hamburger
          isOpen={isActive}
          isInit={initAnim}
          handleClick={() => handleAnim()}
        />
        <div className={styles.title}>
          <h1>fil ETNIC</h1>
        </div>
        <div className={styles.logo}>
          <Logo size={80} isLink={true} isJPG={true} />
        </div>
      </div>
    </nav>
  );
};

export default MobileHeader;
