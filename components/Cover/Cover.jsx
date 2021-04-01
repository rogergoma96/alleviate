import Image from "next/image";
import { useEffect } from "react";

import styles from "./cover.module.scss";

const Cover = () => {
  return (
    <section id="AboutUs" className={styles.container}>
      <div className={styles.texts}>
        <p className={`text-title-xxl ${styles.brand}`}>alleviate</p>
        <h1 className={`text-title-m ${styles.subtitle}`}>cleaning services</h1>
        <p className={`text-body ${styles.text}`}>
          A home is where you feel safe and sound, where family and friends
          gather. At Alleviate Cleaning Service, we create a refreshing
          environment for you to create lifelong memories.
        </p>
        <p className={`text-body ${styles.text}`}>
          We understand that life gets in the way, so let us handle the
          cleaning. We offer services from AirBnB turnover to regular house
          cleaning. We pride ourselves in our attention to detail and ability to
          transform any house into a home.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/cover.jpg"
          alt="Hanger with cleaning products"
          layout="fill"
          priority={true}
          quality={100}
          objectFit="cover"
          objectPosition="top"
        />
      </div>
    </section>
  );
};

export default Cover;
