"use client";

import Image from "next/image";
import styles from "./StoryBlock.module.scss";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const StoryBlock = () => {
  const parent = useRef(null);
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);
  const container5 = useRef(null);
  const container6 = useRef(null);

  const { scrollYProgress: scrollYProgressParent } = useScroll({
    target: parent,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container1,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: container3,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: container4,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: container5,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress6 } = useScroll({
    target: container6,
    offset: ["start end", "start start"],
  });

  const img2 = useTransform(scrollYProgressParent, [0, 1], [0, -200]);
  const img3 = useTransform(scrollYProgressParent, [0, 1], [0, -550]);
  const img4 = useTransform(scrollYProgressParent, [0, 1], [-700, 0]);
  const img5 = useTransform(scrollYProgressParent, [0, 1], [-900, 100]);

  const txt1 = useTransform(scrollYProgress1, [0, 1], [0, -800]);
  const txt2 = useTransform(scrollYProgress2, [0, 1], [0, -800]);
  const txt3 = useTransform(scrollYProgress3, [0, 1], [0, -800]);
  const txt4 = useTransform(scrollYProgress4, [0, 1], [0, -800]);
  const txt5 = useTransform(scrollYProgress5, [0, 1], [0, -800]);

  return (
    <>
      <motion.h1 id="histoire" className={styles.title}>
        De fil en aiguille...
      </motion.h1>
      <div ref={parent} className={styles.histoire}>
        <div ref={container1} id="histoire2" className={styles.histoire}>
          <motion.div className={styles.img1}>
            <Image
              className={styles.image}
              src="/images/histoire/bolivie1.jpg"
              width={1120}
              height={759.5}
              alt="Photo de la Bolivie 1"
            />
          </motion.div>
          <motion.div style={{ y: txt1 }} className={styles.txt1}>
            <p>
              C’est en Bolivie, aux côtés des femmes Quechua, que mon goût pour
              la couture est né. Les paysannes Quechua, en marge de leurs
              activités d’agricultrices, tissent depuis des générations, sur des
              métiers à tisser qu’elles fabriquent elles-mêmes. Elles créent
              ainsi les étoffes nécessaires à leur vie quotidienne :
              couvertures, vêtements, porte charge dans le dos.
            </p>
          </motion.div>
        </div>
        <div ref={container2} id="histoire2" className={styles.histoire}>
          <motion.div style={{ y: img2 }} className={styles.img2}>
            <Image
              className={styles.image}
              src="/images/histoire/bolivie2.jpg"
              width={1120}
              height={759.5}
              alt="Photo de la Bolivie 2"
            />
          </motion.div>
          <motion.div style={{ y: txt2 }} className={styles.txt2}>
            <p>
              J’ai été impressionnée par la qualité de leurs tissages, leur
              dextérité et en même temps touchée par les difficultés économiques
              auxquelles elles sont confrontées: les récoltes soumises aux aléas
              climatiques ne permettent pas de faire vivre les familles; j’ai
              cherché donc, avec elles, le moyen de valoriser ce savoir-faire
              traditionnel et d’en tirer profit pour les faire participer à
              l’économie familiale.
            </p>
          </motion.div>
        </div>
        <div ref={container3} id="histoire3" className={styles.histoire}>
          <motion.div className={styles.img3} style={{ y: img3 }}>
            <Image
              className={styles.image}
              src="/images/histoire/bolivie3.jpg"
              width={1120}
              height={759.5}
              alt="Photo de la Bolivie 3"
            />
          </motion.div>
          <motion.div style={{ y: txt3 }} className={styles.txt3}>
            <p>
              J’ai accompagné pendant plus de 5 ans, un groupe de femmes - «
              l’étoile du matin » - qui s’est constitué autour des activités de
              tissage et de formations en couture pour transformer leurs
              textiles traditionnels en accessoires de qualité adaptés à nos
              vies européennes: sacs, trousses, pochettes de toutes tailles… Le
              groupe s’est affilié à une coopérative bolivienne d’artisans
              COMART.
            </p>
          </motion.div>
        </div>

        <div ref={container4} id="histoire4" className={styles.histoire}>
          <motion.div
            className={styles.img4}
            style={{ opacity: scrollYProgress3, y: img4 }}
          >
            <Image
              className={styles.image}
              src="/images/histoire/senegal1.jpg"
              width={1024}
              height={768}
              alt="Photo du Sénégal 1"
            />
          </motion.div>
          <motion.div style={{ y: txt4 }} className={styles.txt4}>
            <p>
              En 2005, installée à St Louis du Sénégal je découvre les bandes de
              tissu tissées main, qui constituent les grands pagnes qui
              permettent aux femmes africaines de porter leur enfant dans le
              dos.
            </p>
          </motion.div>
        </div>
        <div ref={container5} id="histoire5" className={styles.histoire}>
          <motion.div className={styles.img5} style={{ y: img5 }}>
            <Image
              className={styles.image}
              src="/images/histoire/senegal2.jpg"
              width={1024}
              height={768}
              alt="Photo du Sénégal 2"
            />
          </motion.div>
          <motion.div style={{ y: txt5 }} className={styles.txt5}>
            <p>
              Charmée par ces textiles, leurs motifs, je cherche à nouveau le
              moyen de les transformer pour les adapter à notre vie moderne
              européenne. De retour en France, je décide de créer mes propres
              modèles de sacs, trousses en tout genre, pochettes, housses,
              tuniques… en combinant ces textiles africains et andins avec des
              tissus unis.
            </p>
          </motion.div>
        </div>

        <div ref={container6} id="histoire6" className={styles.histoire}>
          <motion.div className={styles.lastContainer} style={{ y: 0 }}>
            <Image
              className={styles.image}
              src="/images/histoire/avec le groupe de tisseuses letoile du matin.jpeg"
              width={1314}
              height={837}
              alt="Photo de fin"
            />
            <div className={styles.signature}>Florence Ville-Allaman</div>
          </motion.div>
          <motion.div
            style={{ opacity: scrollYProgress6 }}
            className={styles.txt6}
          >
            <p>
              Ainsi est né fil ETNIC, une marque d’accessoires et de vêtements,
              destinée à colorer et à agrémenter votre quotidien, à créer des
              passerelles entre les savoir-faire des pays de sud et nos besoins
              des pays du nord.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StoryBlock;
