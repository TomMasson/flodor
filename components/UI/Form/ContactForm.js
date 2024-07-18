import Button from "../Button";
import styles from "./ContactForm.module.scss";
import Input from "./Input";

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <p>
        <Input type="text" name="nom" required={true} />
      </p>
      <p>
        <Input type="email" name="email" required={true} />
      </p>
      <p>
        <Input type="text" name="titre" required={true} />
      </p>
      <p>
        <textarea
          id="explications"
          name="explications"
          className={styles.textarea}
          rows="20"
          placeholder="Explications"
          required
        ></textarea>
      </p>
      <div className={styles.actions}>
        <Button>Envoyer</Button>
      </div>
    </form>
  );
};

export default ContactForm;
