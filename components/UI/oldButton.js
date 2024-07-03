import styles from "./OldButton.module.scss";

const Button = ({ children }) => {
  return <div className={styles.button}>{children}</div>;
};

export default Button;
