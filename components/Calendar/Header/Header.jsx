import styles from "./Header.module.scss";

const Header = () => (
  <>
    <div className={`text-title-m ${styles.day}`}>Sunday</div>
    <div className={`text-title-m ${styles.day}`}>Monday</div>
    <div className={`text-title-m ${styles.day}`}>Tuesday</div>
    <div className={`text-title-m ${styles.day}`}>Wednesday</div>
    <div className={`text-title-m ${styles.day}`}>Thursday</div>
    <div className={`text-title-m ${styles.day}`}>Friday</div>
    <div className={`text-title-m ${styles.day}`}>Saturday</div>
  </>
);

export default Header;
