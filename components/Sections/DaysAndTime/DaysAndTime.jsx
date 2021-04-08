import { useRef } from "react";
import Image from "next/image";
import SectionContainer from "../../Commons/SectionContainer/SectionContainer";

import styles from "./DaysAndTime.module.scss";

const DaysAndTime = ({ isMobile }) => {
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

  const renderDaysAvailability = () => (
    <>
      <h2 className={`text-title-l ${styles.title}`}>Days & Time</h2>
      <div className={styles.row}>
        <p className="text-subtitle">FROM MONDAY TO SATURDAY</p>
        <p className="text-body">8:00am - 6:00pm</p>
      </div>
      <div className={styles.row}>
        <p className="text-subtitle">SUNDAY</p>
        <p className="text-body">Closed</p>
      </div>
    </>
  );

  const renderRegionsAvailability = () => (
    <>
      <h2 className={`text-title-l ${styles.title}`}>Where we service</h2>
      <ul className={styles.regions}>
        {regions.current.map((region) => (
          <li key={region} className={`text-subtitle ${styles.region}`}>
            {region}
          </li>
        ))}
      </ul>
    </>
  );

  if (isMobile) {
    return (
      <section className={styles.section} id="DaysAndTime">
        {renderRegionsAvailability()}
        <div className={styles.image}>
          <Image
            src="/images/img-mobile-06.jpg"
            alt="Map"
            layout="fill"
            objectFit="contain"
            quality={70}
          />
        </div>
        {renderDaysAvailability()}
      </section>
    );
  }

  return (
    <SectionContainer
      isMobile={isMobile}
      id="DaysAndTime"
      imgUrl="/images/img-desktop-06.jpg"
      imgDescription="Map"
    >
      {renderRegionsAvailability()}
      {renderDaysAvailability()}
    </SectionContainer>
  );
};

export default DaysAndTime;
