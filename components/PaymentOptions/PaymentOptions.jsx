import SectionContainer from "../SectionContainer/SectionContainer";

import styles from "./PaymentOptions.module.scss";

const PaymentOptions = () => (
  <SectionContainer imgUrl="/images/img-desktop-07.jpg" imgDescription="">
    <h3 className={`text-title-l ${styles.title}`}>Payment Options</h3>
    <h2 className={`text-title-s ${styles.section}`}>Cash & Checks</h2>
    <p className={`text-body ${styles.description}`}>
      Please hand cash and checks to cleaners in an envelope with your name,
      address, and date on it. Checks should be made out to Alleviate Cleaning
      Service. If you are not home you may leave the payment on the kitchen
      counter.
    </p>
    <h2 className={`text-title-s ${styles.section}`}>Mobile Payment</h2>
    <p className={`text-body ${styles.description}`}>
      We offer payment through mobile payment services: Venmo, Cashapp, and
      Zelle. When sending payment please include your first and last name as
      well as the date in the note/description.
    </p>
    <div className={styles.methods}>
      <p className="text-subtitle">VENMO: TBD</p>
      <p className="text-subtitle">CASHAPP: TBD</p>
      <p className="text-subtitle">ZELLE: TBD</p>
    </div>
    <h2 className={`text-title-s ${styles.section}`}>Card Payment</h2>
    <p className={`text-body ${styles.description}`}>
      If you would like to pay using a card, we will send you a quote via email.
      This email will include a link “Square” to safely add your card
      information into a secure source.
    </p>
  </SectionContainer>
);

export default PaymentOptions;
