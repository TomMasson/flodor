import { categories } from "@/fakeback/categories";
import styles from "./collection-grid.module.scss";
import CollectionCard from "./collection-card";

const CollectionGrid = () => {
  const categoryList = Object.keys(categories);
  const collections = categoryList
    .filter((catId) => catId !== "home")
    .map((catId) => {
      return { title: categories[`${catId}`].title, path: catId };
    });

  return (
    <>
      <div className={styles.grid}>
        {collections.map((item) => (
          <CollectionCard key={item.path} collection={item}>
            {item}
          </CollectionCard>
        ))}
      </div>
    </>
  );
};

export default CollectionGrid;
