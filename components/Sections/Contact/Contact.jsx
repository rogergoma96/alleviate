import SectionContainer from '../../Commons/SectionContainer/SectionContainer';
import InstagramIcon from '../../Commons/Icons/Instagram';
import FacebookIcon from '../../Commons/Icons/Facebook';
import LinkedinIcon from '../../Commons/Icons/Linkedin';

import styles from './Contact.module.scss';

const Contact = ({ isMobile }) => (
  <SectionContainer
    isMobile={isMobile}
    id="Contact"
    imgUrl={`/images/${isMobile ? 'img-mobile-08.jpg' : 'img-desktop-07.jpg'}`}
    imgDescription="Contact Information"
  >
    {!isMobile && (
      <h2 className={`text-title-l ${styles.title}`}>Contact Information</h2>
    )}
    <p className={`text-title-s ${styles.subtitle}`}>
      If you have any questions, comments, or concerns contact us at any time!
    </p>
    <p className={`text-subtitle ${styles.contact}`}>
      CALL OR TEXT: 678-530-5963
    </p>
    <p className={`text-subtitle ${styles.contact}`}>
      Alleviatecleaningservice@gmail.com
    </p>
    <p className={`text-subtitle ${styles.contact}`}>FOLLOW US ON</p>
    <div className={styles.icons}>
      <a
        href="https://www.instagram.com/alleviatecleaningservice/?igshid=d7kl7ryeqj3n"
        target="_blank"
        className={styles.icon}
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.facebook.com/Alleviate-Cleaning-Service-109135237891483/"
        target="_blank"
        className={styles.icon}
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.linkedin.com/company/alleviate-cleaning-service"
        target="_blank"
        className={styles.icon}
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
      </a>
    </div>
  </SectionContainer>
);

export default Contact;
