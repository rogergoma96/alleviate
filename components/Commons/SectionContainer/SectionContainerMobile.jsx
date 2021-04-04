import Image from "next/image";

import styles from "./SectionContainerMobile.module.scss";

const SectionContainerMobile = ({ children, imgUrl, imgDescription, id }) => (
  <section className={styles.container} id={id}>
    <div className={styles.image}>
      <Image
        src={imgUrl}
        alt={imgDescription}
        layout="fill"
        objectFit="contain"
        quality={100}
      />
      <h2 className={`text-title-m ${styles.title}`}>{imgDescription}</h2>
    </div>
    <div className={styles.texts}>{children}</div>
  </section>
);

export default SectionContainerMobile;
