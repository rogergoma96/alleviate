import styles from './Header.module.scss';

const Header = () => (
  <>
    <div className={styles.day}>Sunday</div>
    <div className={styles.day}>Monday</div>
    <div className={styles.day}>Tuesday</div>
    <div className={styles.day}>Wednesday</div>
    <div className={styles.day}>Thursday</div>
    <div className={styles.day}>Friday</div>
    <div className={styles.day}>Saturday</div>
  </>
);

export default Header;
