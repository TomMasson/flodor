import styles from "./hamburger.module.scss";

const Hamburger = ({ isOpen, isInit, handleClick }) => {
  return (
    <div className={`${styles.mobileBar} ${isOpen ? styles.active : ""}`}>
      <div className={styles.frame}>
        <div className={styles.hamburger} onClick={handleClick}>
          <div
            className={`${styles.bar1} ${isInit ? styles.isInit : ""}`}
          ></div>
          <div
            className={`${styles.bar2} ${isInit ? styles.isInit : ""}`}
          ></div>
          <div
            className={`${styles.bar3} ${isInit ? styles.isInit : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
