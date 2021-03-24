import { useState } from "react";
import MenuIcon from "../Icons/Menu";
import CloseIcon from "../Icons/Close";

import styles from "./Menu.module.scss";
import Dropdown from "../DropDown/DropDown";

const Menu = () => {
  const [unfolded, setUnfolded] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className={styles.header}>
      <button
        className={styles.hamburger}
        onClick={() => setUnfolded(!unfolded)}
      >
        <MenuIcon />
      </button>
      <ul
        className={`${styles.container} ${
          unfolded ? styles.unfolded : styles.folded
        }`}
      >
        <button
          className={styles.close}
          type="button"
          onClick={() => setUnfolded(false)}
        >
          <CloseIcon />
        </button>
        <li className={`text-action ${styles.section}`}>About us</li>
        <li
          className={`text-action ${styles.section}`}
          onClick={() => setDropdown(!dropdown)}
        >
          <Dropdown label="Services">
            <ul
              className={`${styles.subsections} ${
                dropdown ? styles.visible : styles.hidden
              }`}
            >
              <li className={`text-body ${styles.subsection}`}>
                Home & Apartment
              </li>
              <li className={`text-body ${styles.subsection}`}>
                Post Construction & Remodeling
              </li>
              <li className={`text-body ${styles.subsection}`}>
                AirBnB Turnover
              </li>
              <li className={`text-body ${styles.subsection}`}>
                Move-In & Move-Out
              </li>
            </ul>
          </Dropdown>
        </li>
        <li className={`text-action ${styles.section}`}>Where we service</li>
        <li className={`text-action ${styles.section}`}>Days & Time</li>
        <li className={`text-action ${styles.section}`}>Booking</li>
        <li className={`text-action ${styles.section}`}>Contact</li>
        <li className={`text-action ${styles.section}`}>FAQ</li>
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
