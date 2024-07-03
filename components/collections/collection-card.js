import Button from "../UI/Button";
import styles from "./collection-card.module.scss";
import Link from "next/link";

const CollectionCard = ({ collection }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={`/images/collection/${collection.path}/0.jpg`}
        alt={`Photo d'accueil de la collection ${collection.path}`}
      />
      <div className={styles.container}>
        <h2 className={styles.titre}>
          Collection <br />
          {collection.title}
        </h2>
        <Link
          href={`/collections/${collection.path}`}
          className={styles.decouvrir}
        >
          <Button>Découvrir</Button>
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
