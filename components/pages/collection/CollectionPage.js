import CollectionCarousel from "@/components/carousel/collection/CollectionCarousel";
import styles from "./CollectionPage.module.scss";
import { categories } from "@/fakeback/categories";

const CollectionPageContent = ({ collectionId }) => {
  const title = categories[`${collectionId}`].title;

  const description = categories[`${collectionId}`].description ? (
    <p
      dangerouslySetInnerHTML={{
        __html: categories[`${collectionId}`].description,
      }}
    ></p>
  ) : (
    <p>{title}</p>
  );
  const OPTIONS = { dragFree: true, loop: true };

  return (
    <>
      <header className={styles.header}>
        <CollectionCarousel
          collection={collectionId}
          options={OPTIONS}
          autoplay={false}
        />
      </header>
      <div className={styles.infos}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </>
  );
};

export default CollectionPageContent;
