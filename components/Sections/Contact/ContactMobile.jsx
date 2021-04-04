import SectionContainerMobile from "../../Commons/SectionContainer/SectionContainerMobile";
import InstagramIcon from "../../Commons/Icons/Instagram";
import FacebookIcon from "../../Commons/Icons/Facebook";

import styles from "./ContactDesktop.module.scss";

const ContactMobile = () => (
  <SectionContainerMobile
    id="Contact"
    imgUrl="/images/img-mobile-08.jpg"
    imgDescription="Contact Information"
  >
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
  </SectionContainerMobile>
);

export default ContactMobile;
