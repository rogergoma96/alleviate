import { useRef } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";

import styles from "./DaysAndTime.module.scss";

const DaysAndTime = () => {
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
    <SectionContainer imgUrl="/images/img_06.jpg" imgDescription="">
      <h2 className={`text-title-l ${styles.title}`}>Where we service</h2>
      <ul className={styles.regions}>
        {regions.current.map((region) => (
          <li key={region} className={`text-subtitle ${styles.region}`}>
            {region}
          </li>
        ))}
      </ul>
      <h2 className={`text-title-l ${styles.title}`}>Days & Time</h2>
      <div className={styles.row}>
        <p className="text-subtitle">FROM MONDAY TO SATURDAY</p>
        <p className="text-body">8:00am - 6:00pm</p>
      </div>
      <div className={styles.row}>
        <p className="text-subtitle">SUNDAY</p>
        <p className="text-body">Closed</p>
      </div>
    </SectionContainer>
  );
};

export default DaysAndTime;
