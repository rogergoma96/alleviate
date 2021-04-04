import SectionContainer from "../../Commons/SectionContainer/SectionContainer";
import InstagramIcon from "../../Commons/Icons/Instagram";
import FacebookIcon from "../../Commons/Icons/Facebook";

import styles from "./ContactDesktop.module.scss";

const ContactDesktop = () => (
  <SectionContainer id="Contact" imgUrl="/images/img_07.jpg" imgDescription="">
    <h2 className={`text-title-l ${styles.title}`}>Contact Information</h2>
    <p className={`text-title-s ${styles.subtitle}`}>
      If you have any questions, comments, or concerns contact us at any time!
    </p>
    <p className={`text-subtitle ${styles.contact}`}>
      CALL OR TEXT: XXX XXX XXX
    </p>
    <p className={`text-subtitle ${styles.contact}`}>
      Alleviatecleaningservice@gmail.com
    </p>
    <p className={`text-subtitle ${styles.contact}`}>FOLLOW US ON</p>
    <div className={styles.icons}>
      <a href="" target="_blank" className={styles.icon}>
        <InstagramIcon />
      </a>
      <a href="" target="_blank" className={styles.icon}>
        <FacebookIcon />
      </a>
    </div>
  </SectionContainer>
);

export default ContactDesktop;
