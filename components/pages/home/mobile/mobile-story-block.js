import Image from "next/image";
import styles from "./mobile-story-block.module.scss";

const MobileStoryBlock = () => {
  return (
    <>
      <div className={styles.histoire}>
        <div className={styles.txt}>
          <p>
            C’est en Bolivie, aux côtés des femmes Quechua, que mon goût pour la
            couture est né. Les paysannes Quechua, en marge de leurs activités
            d’agricultrices, tissent depuis des générations, sur des métiers à
            tisser qu’elles fabriquent elles-mêmes. Elles créent ainsi les
            étoffes nécessaires à leur vie quotidienne : couvertures, vêtements,
            porte charge dans le dos.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            className={styles.image}
            src="/images/histoire/bolivie1.jpg"
            alt="Photo de la Bolivie 1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.txt}>
          <p>
            J’ai été impressionnée par la qualité de leurs tissages, leur
            dextérité et en même temps touchée par les difficultés économiques
            auxquelles elles sont confrontées: les récoltes soumises aux aléas
            climatiques ne permettent pas de faire vivre les familles; j’ai
            cherché donc, avec elles, le moyen de valoriser ce savoir-faire
            traditionnel et d’en tirer profit pour les faire participer à
            l’économie familiale.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            className={styles.image}
            src="/images/histoire/bolivie2.jpg"
            alt="Photo de la Bolivie 2"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.txt}>
          <p>
            J’ai accompagné pendant plus de 5 ans, un groupe de femmes - «
            l’étoile du matin » - qui s’est constitué autour des activités de
            tissage et de formations en couture pour transformer leurs textiles
            traditionnels en accessoires de qualité adaptés à nos vies
            européennes: sacs, trousses, pochettes de toutes tailles… Le groupe
            s’est affilié à une coopérative bolivienne d’artisans COMART.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            className={styles.image}
            src="/images/histoire/bolivie3.jpg"
            alt="Photo de la Bolivie 3"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.txt}>
          <p>
            En 2005, installée à St Louis du Sénégal je découvre les bandes de
            tissu tissées main, qui constituent les grands pagnes qui permettent
            aux femmes africaines de porter leur enfant dans le dos.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            className={styles.image}
            src="/images/histoire/senegal1.jpg"
            alt="Photo du Sénégal 1"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.txt}>
          <p>
            Charmée par ces textiles, leurs motifs, je cherche à nouveau le
            moyen de les transformer pour les adapter à notre vie moderne
            européenne. De retour en France, je décide de créer mes propres
            modèles de sacs, trousses en tout genre, pochettes, housses,
            tuniques… en combinant ces textiles africains et andins avec des
            tissus unis.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            className={styles.image}
            src="/images/histoire/senegal2.jpg"
            alt="Photo du Sénégal 2"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.txt}>
          <p>
            Ainsi est né fil ETNIC, une marque d’accessoires et de vêtements,
            destinée à colorer et à agrémenter votre quotidien, à créer des
            passerelles entre les savoir-faire des pays de sud et nos besoins
            des pays du nord.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            className={styles.image}
            src="/images/histoire/avec le groupe de tisseuses letoile du matin.jpeg"
            alt="Photo de fin"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.signature}>Florence Ville-Allaman</div>
      </div>
    </>
  );
};

export default MobileStoryBlock;
