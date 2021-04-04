import { useRef } from "react";
import Image from "next/image";

import styles from "./DaysAndTimeDesktop.module.scss";

const DaysAndTimeMobile = () => {
  const regions = useRef([
    "Gwinnett",
    "Barrow",
    "Walton",
    "Dekalb",
    "Hall",
    "Forsyth",
    "Fulton",
    "Rockdale",
  ]);

  return (
    <section className={styles.section} id="DaysAndTime">
      <h2 className={`text-title-l ${styles.title}`}>Where we service</h2>
      <ul className={styles.regions}>
        {regions.current.map((region) => (
          <li key={region} className={`text-subtitle ${styles.region}`}>
            {region}
          </li>
        ))}
      </ul>
      <div className={styles.image}>
        <Image
          src="/images/img-mobile-06.jpg"
          alt="Map"
          layout="fill"
          objectFit="contain"
          quality={70}
        />
      </div>
      <h2 className={`text-title-l ${styles.title}`}>Days & Time</h2>
      <div className={styles.row}>
        <p className="text-subtitle">FROM MONDAY TO SATURDAY</p>
        <p className="text-body">8:00am - 6:00pm</p>
      </div>
      <div className={styles.row}>
        <p className="text-subtitle">SUNDAY</p>
        <p className="text-body">Closed</p>
      </div>
    </section>
  );
};

export default DaysAndTimeMobile;
