"use client";

import styles from "./HomeCarousel.module.scss";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const HomeCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((index) => (
            <div className={styles.emblaSlide} key={index}>
              <Link href={`/collections/home/${index}/b`}>
                <img
                  className={styles.emblaImage}
                  src={`/images/collection/home/${index}.jpg`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.emblaControls}>
        <div className={styles.emblaButtons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;
