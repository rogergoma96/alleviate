import SectionContainer from "../SectionContainer/SectionContainer";

import styles from "./Contact.module.scss";

const Contact = () => (
  <SectionContainer imgUrl="/images/img_07.jpg" imgDescription="">
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
  </SectionContainer>
);

export default Contact;
