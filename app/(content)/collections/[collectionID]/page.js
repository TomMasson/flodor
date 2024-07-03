import CollectionPageContent from "@/components/pages/collection/CollectionPage";
import { categories } from "@/fakeback/categories";
import { notFound } from "next/navigation";

const CollectionPage = ({ params }) => {
  const collectionId = params.collectionID;

  if (!Object.keys(categories).includes(collectionId)) {
    notFound();
  }

  return <CollectionPageContent collectionId={collectionId} />;
};

export default CollectionPage;
