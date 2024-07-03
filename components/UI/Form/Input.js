import styles from "./Input.module.scss";

const Input = ({ type, name, required }) => {
  /**TODO: juste la 1ere lettre en uppercase */
  return (
    <>
      <input
        type={type}
        placeholder={name.toUpperCase()}
        className={styles.input}
        id={name}
        name={name}
        required={required}
      />
    </>
  );
};

export default Input;
