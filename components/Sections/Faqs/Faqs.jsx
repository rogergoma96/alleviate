import Dropdown from "../../Commons/DropDown/DropDown";

import styles from "./Faqs.module.scss";

const Faqs = () => (
  <section id="FAQs" className={styles.container}>
    <h2 className="text-title-l">FAQ's</h2>
    <Dropdown
      label="Why should I choose Alleviate Cleaning Service?"
      className="text-title-s"
    >
      <p className={`text-body ${styles.answer}`}>
        At Alleviate we pride ourselves in our passion for giving each of our
        clients top quality. Every home is different and we handle each home
        respectfully and with grace. We hire trustworthy cleaners who are great
        at communication. If a client is unsatisfied, there is a 24 hour
        guaranteed money back.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown label="Who will be cleaning my home?" className="text-title-s">
      <p className={`text-body ${styles.answer}`}>
        We understand that allowing someone into your home is very personal, but
        we assure you that we employ trustworthy cleaners. These cleaners are
        highly trained for quality cleaning with an emphasis on safety. For
        integrity, each cleaner undergoes a rigorous screening process with an
        extensive background check.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown
      label="What should I do before Alleviate Cleaners arrive?"
      className="text-title-s"
    >
      <p className={`text-body ${styles.answer}`}>
        As much as we love animals, please put all pets in a safe place so that
        our cleaners work comfortably. In addition, please wash all dishes in
        the sink. These requests will guarantee an efficient cleaning.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown label="How do I pay?" className="text-title-s">
      <p className={`text-body ${styles.answer}`}>
        We have various payment options. You can give the cleaners cash or a
        check with your name and address on the envelope. You can also pay
        through Zelle, CashApp, and Venmo with the money amount with your name
        and address.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown
      label="Do I have to be home during the cleaning?"
      className="text-title-s"
    >
      <p className={`text-body ${styles.answer}`}>
        No, we recognise that our hours are during the work day. The majority of
        our clients are not home while we clean. Our professional cleaners are
        provided either a spare key or garage code.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown
      label="What time will the cleaners arrive?"
      className="text-title-s"
    >
      <p className={`text-body ${styles.answer}`}>
        Our hours of service is from 8:00am - 6:00pm. We will inform you of a
        window of time 24 hours before the service day. We are more than willing
        to work around your schedule; if there is a specific time that you would
        like for us to arrive or finish by please contact us.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown
      label="How do I provide special instructions?"
      className="text-title-s"
    >
      <p className={`text-body ${styles.answer}`}>
        We are happy to hear any special instructions or accommodations. You can
        call or email us anytime before your appointment and we will follow your
        instructions.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown
      label="What if something is damaged during the cleaning?"
      className="text-title-s"
    >
      <p className={`text-body ${styles.answer}`}>
        We respect every home we enter. If we damage or break something, we will
        do the right thing and try to fix or replace the object.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown label="What do you not clean?" className="text-title-s">
      <p className={`text-body ${styles.answer}`}>We do not:</p>
      <p className="text-body">Do laundry</p>
      <p className="text-body">Wash dishes</p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown
      label="Can I share my experience with Alleviate Cleaning Service?"
      className="text-title-s"
    >
      <p className={`text-body ${styles.answer}`}>
        Of course! We highly encourage our customers to share their experience
        through google reviews and by tagging us on social media.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown
      label="Do I need to provide any cleaning products or equipment?"
      className="text-title-s"
    >
      <p className={`text-body ${styles.answer}`}>
        Not at all. We want you to be worry free; we handle the cleaning and
        everything used to do it.
      </p>
    </Dropdown>
    <div className={styles.separator} />
    <Dropdown label="What products do you use?" className="text-title-s">
      <p className={`text-body ${styles.answer}`}>
        At Alleviate Cleaning Service, we are very passionate about green
        cleaning so products are safe for the environment. In addition, our
        eco-friendly products are safe for everyone including children, pets,
        and the elderly.
      </p>
    </Dropdown>
    <div className={styles.separator} />
  </section>
);

export default Faqs;
