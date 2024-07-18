import CollectionGrid from "@/components/collections/collection-grid";
import StoryBlock from "./StoryBlock";
import styles from "./HomePage.module.scss";
import HomeHeader from "@/components/header/home-header";
import MobileHeader from "@/components/header/mobile/mobile-header";
import MobileStoryBlock from "./mobile/mobile-story-block";

export default function HomePage() {
  return (
    <>
      <MobileHeader />
      <HomeHeader />
      <main className={styles.main}>
        <h1>Ma Galerie</h1>
        <CollectionGrid />
        <StoryBlock />
        <MobileStoryBlock />
      </main>
    </>
  );
}
