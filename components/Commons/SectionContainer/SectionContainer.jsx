import Image from "next/image";

import styles from "./SectionContainer.module.scss";

const SectionContainer = ({
  children,
  imgUrl,
  imgDescription,
  id,
  isMobile,
}) => {
  if (!isMobile) {
    return (
      <section className={styles.container} id={id}>
        <div className={styles.texts}>{children}</div>
        <div className={styles.image}>
          <Image
            src={imgUrl}
            alt={imgDescription}
            layout="fill"
            objectFit="contain"
            quality={70}
          />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.container} id={id}>
      <div className={styles.image}>
        <Image
          src={imgUrl}
          alt={imgDescription}
          layout="fill"
          objectFit="contain"
          quality={70}
        />
        <h2 className={`text-title-m ${styles.title}`}>{imgDescription}</h2>
      </div>
      <div className={styles.texts}>{children}</div>
    </section>
  );
};

export default SectionContainer;
