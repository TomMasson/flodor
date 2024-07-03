import CollectionGrid from "@/components/collections/collection-grid";
import styles from "./page.module.scss";

const CollectionsPage = () => {
  return (
    <>
      <div className={styles.container}>
        <CollectionGrid />
      </div>
    </>
  );
};

export default CollectionsPage;
