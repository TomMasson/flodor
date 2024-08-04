"use client";

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useSelectedSnapDisplay } from "./SelectedSnapDisplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./ArrowButtonsCarousel";
import styles from "./CollectionCarousel.module.scss";
import { categories } from "@/fakeback/categories";

const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel = ({ collection, options }) => {
  const path = collection;
  const nbSlides = categories[`${collection}`].nbPhotos;
  const slides = Array.from(Array(nbSlides).keys());

  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap } = useSelectedSnapDisplay(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector("#parallax-layer");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax);
  }, [emblaApi, tweenParallax]);

  //@TODO Opti et gérer la boucle de photos
  const getOpacity = (index) => {
    if (selectedSnap == index) {
      return "1";
    }
    if (selectedSnap + 1 == index || selectedSnap - 1 == index) {
      return "0.75";
    } else {
      return "0";
    }
  };

  return (
    <div className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((index) => (
            <div className={styles.slide} key={index}>
              <div className={styles.parallax}>
                <div
                  id="parallax-layer"
                  className={styles.layer}
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    opacity: getOpacity(index),
                    filter: selectedSnap === index ? "none" : "blur(10px)",
                  }}
                >
                  <img
                    className={styles.image}
                    src={`/images/collection/${path}/${index + 1}.jpg`}
                    alt={`Image du carousel categorie ${path} numéro ${index}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className={`${styles.button} ${styles.prev}`}
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className={`${styles.button} ${styles.next}`}
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
