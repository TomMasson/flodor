import Button from "../UI/oldButton";
import styles from "./old-collection-card.module.scss";
import Link from "next/link";

const CollectionCard = ({ collection }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.titre}>
        Collection <br />
        {collection.title}
      </h2>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={`/images/collection/${collection.path}/0.jpg`}
        />
      </div>
      <div className={styles["button-container"]}>
        <Link href={`/collections/${collection.path}`} className={styles.link}>
          <Button className={styles.button}>Découvrir</Button>
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
