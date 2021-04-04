import CloseIcon from "../../../Commons/Icons/Close";
import styles from "./Confirmation.module.scss";

const Confirmation = ({ data, onClose }) => {
  return (
    <>
      <div className={styles.veil} role="button" onClick={onClose} />
      <div className={styles.container}>
        <button className={styles.close} onClick={onClose}>
          <CloseIcon />
        </button>
        <p className="text-title-s">
          Thank you! Your appointment has been submitted.
        </p>
        <p className="text-caption">
          YOUR APPOINTMENT IS NOT CONFIRMED UNTIL A REPRESENTATIVE SENDS YOU A
          CONFIRMATION EMAIL.
        </p>
        <p className="text-body">
          If you have any questions call TBD or email
          alleviatecleaningservice@gmail.com
        </p>
      </div>
    </>
  );
};

export default Confirmation;
