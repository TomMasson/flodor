import { categories } from "@/fakeback/categories";
import Logo from "../UI/Logo";
import HomeCarousel from "@/components/carousel/home/HomeCarousel";
import styles from "./home-header.module.scss";

const HomeHeader = () => {
  const OPTIONS = { dragFree: true, loop: true };
  const nbSlides = categories.home.nbPhotos;
  const slides = Array.from(Array(nbSlides).keys());

  return (
    <header className={styles.homeHeader}>
      <div className={styles.logo}>
        <Logo size={200} isLink={false} />
      </div>
      <HomeCarousel slides={slides} options={OPTIONS} />
    </header>
  );
};

export default HomeHeader;
