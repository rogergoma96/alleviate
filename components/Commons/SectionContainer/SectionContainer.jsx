import Image from "next/image";

import styles from "./SectionContainer.module.scss";

const SectionContainer = ({ children, imgUrl, imgDescription, id }) => (
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

export default SectionContainer;
