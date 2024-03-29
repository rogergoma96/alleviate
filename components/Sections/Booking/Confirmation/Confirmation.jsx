import CloseIcon from '../../../Commons/Icons/Close';
import styles from './Confirmation.module.scss';

const Confirmation = ({ onClose }) => (
  <>
    <div
      className={styles.veil}
      tabIndex="0"
      role="button"
      onClick={onClose}
      onKeyPress={onClose}
      aria-label="Close modal"
    />
    <div className={styles.container}>
      <button
        className={styles.close}
        onClick={onClose}
        aria-label="Close modal"
        type="button"
      >
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
        If you have any questions call 678-530-5963 or email
        alleviatecleaningservice@gmail.com
      </p>
    </div>
  </>
);

export default Confirmation;
