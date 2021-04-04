import { useState } from "react";
import Link from "next/link";
import MenuIcon from "../Commons/Icons/Menu";
import CloseIcon from "../Commons/Icons/Close";

import styles from "./Menu.module.scss";
import Dropdown from "../Commons/Dropdown/Dropdown";

const Menu = () => {
  const [unfolded, setUnfolded] = useState(false);

  const handleClickSection = () => {
    window.scrollTo(0, 0);
    setUnfolded(!unfolded);
  };

  return (
    <header className={styles.header}>
      <button
        className={styles.hamburger}
        onClick={() => setUnfolded(!unfolded)}
        aria-label="Menu"
      >
        <MenuIcon />
      </button>
      <ul
        className={`${styles.container} ${
          unfolded ? styles.unfolded : styles.folded
        }`}
      >
        <li>
          <button
            className={styles.close}
            type="button"
            onClick={() => setUnfolded(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </li>
        <li
          className={`text-action ${styles.section}`}
          onClick={() => handleClickSection("AboutUs")}
        >
          About us
        </li>
        <li className={`text-action ${styles.section}`}>
          <Dropdown label="Services">
            <ul className={`${styles.subsections}`}>
              <Link href="/#HomeAndApartment">
                <li
                  className={`text-body ${styles.subsection}`}
                  onClick={() => setUnfolded(false)}
                >
                  Home & Apartment
                </li>
              </Link>
              <Link href="/#PostConstruction">
                <li
                  className={`text-body ${styles.subsection}`}
                  onClick={() => setUnfolded(false)}
                >
                  Post Construction & Remodeling
                </li>
              </Link>
              <Link href="/#AirBnB">
                <li
                  className={`text-body ${styles.subsection}`}
                  onClick={() => setUnfolded(false)}
                >
                  AirBnB Turnover
                </li>
              </Link>
              <Link href="/#Moving">
                <li
                  className={`text-body ${styles.subsection}`}
                  onClick={() => setUnfolded(false)}
                >
                  Move-In & Move-Out
                </li>
              </Link>
            </ul>
          </Dropdown>
        </li>
        <Link href="/#DaysAndTime">
          <li
            className={`text-action ${styles.section}`}
            onClick={() => setUnfolded(false)}
          >
            Where we service
          </li>
        </Link>
        <Link href="/#DaysAndTime">
          <li
            className={`text-action ${styles.section}`}
            onClick={() => setUnfolded(false)}
          >
            Days & Time
          </li>
        </Link>
        <Link href="/#Booking">
          <li
            className={`text-action ${styles.section}`}
            onClick={() => setUnfolded(false)}
          >
            Booking
          </li>
        </Link>
        <Link href="/#PaymentOptions">
          <li
            className={`text-action ${styles.section}`}
            onClick={() => setUnfolded(false)}
          >
            Payment options
          </li>
        </Link>
        <Link href="/#Contact">
          <li
            className={`text-action ${styles.section}`}
            onClick={() => setUnfolded(false)}
          >
            Contact
          </li>
        </Link>
        <Link href="/#Testimonials">
          <li
            className={`text-action ${styles.section}`}
            onClick={() => setUnfolded(false)}
          >
            Testimonials
          </li>
        </Link>
        <Link href="/#FAQs">
          <li
            className={`text-action ${styles.section}`}
            onClick={() => setUnfolded(false)}
          >
            FAQ
          </li>
        </Link>
      </ul>
      {unfolded && (
        <div
          role="button"
          className={styles.wrapper}
          tabIndex="-1"
          onClick={() => setUnfolded(false)}
        />
      )}
    </header>
  );
};

export default Menu;
