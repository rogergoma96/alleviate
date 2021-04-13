import Image from 'next/image';
import Logo from '../../Commons/Icons/Logo';

import styles from './Cover.module.scss';

const Cover = ({ isMobile }) => (
  <section id="AboutUs" className={styles.container}>
    <div className={styles.texts}>
      <span className={styles.logo}>
        <Logo />
      </span>
      <p className={`text-body ${styles.text}`}>
        A home is where you feel safe and sound, where family and friends
        gather. At Alleviate Cleaning Service, we create a refreshing
        environment for you to create lifelong memories.
      </p>
      <p className={`text-body ${styles.text}`}>
        We understand that life gets in the way, so let us handle the cleaning!
        We offer services from AirBnB turnover to regular house cleaning. We
        pride ourselves in our attention to detail and ability to transform any
        house into a home.
      </p>
    </div>
    <div className={styles.image}>
      <Image
        src={`/images/${isMobile ? 'img-mobile-01.jpg' : 'cover.jpg'}`}
        alt="Hanger with cleaning products"
        layout="fill"
        priority
        quality={70}
        objectFit="cover"
        objectPosition={isMobile ? 'center' : 'top'}
      />
    </div>
  </section>
);

export default Cover;
