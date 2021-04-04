import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "../../Commons/Select/Select";
import styles from "./Booking.module.scss";
import Confirmation from "./Confirmation/Confirmation";
import { sendBookingEmail } from "../../../services";

const Booking = ({ isMobile }) => {
  const [frequency, setFrequency] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const processForm = async (data, e) => {
    e.preventDefault();
    setLoading(true);
    const dataPromise = sendBookingEmail(data);
    const response = await dataPromise;

    if (response) {
      e.target.reset();
      setConfirmation(true);
      setLoading(false);
    }
  };

  const checkFrequency = (e) => {
    if (e.target.value === "Upkeep home & apartment" && !frequency) {
      setFrequency(true);
    } else if (e.target.value && frequency) {
      setFrequency(false);
    }
  };

  return (
    <>
      <section id="Booking" className={styles.container}>
        <div className={styles.texts}>
          <h2 className={`text-title-l ${styles.title}`}>Booking services</h2>
          <p className={`text-title-s ${styles.description}`}>
            Fill this form and we will get in contact with you …
          </p>
          {!isMobile && (
            <div className={styles.bubbles}>
              <Image
                src="/images/img-desktop-bubbles.jpg"
                alt="Bubbles"
                quality={70}
                height="446"
                width="840"
              />
            </div>
          )}
        </div>
        <form className={styles.form} onSubmit={handleSubmit(processForm)}>
          <label className={styles.label} htmlFor="name">
            First name
          </label>
          <input
            type="text"
            placeholder="First name *"
            className={`input ${styles.input}`}
            name="name"
            id="name"
            ref={register({ required: true })}
          />
          {!errors.name && <span className={styles.separator} />}
          {errors.name && (
            <p className={`text-body ${styles.error}`}>
              This is a required field.
            </p>
          )}
          <label className={styles.label} htmlFor="lastName">
            Last name
          </label>
          <input
            type="text"
            placeholder="Last name *"
            className={`input ${styles.input}`}
            name="lastName"
            id="lastName"
            ref={register({ required: true })}
          />
          {!errors.lastName && <span className={styles.separator} />}
          {errors.lastName && (
            <p className={`text-body ${styles.error}`}>
              This is a required field.
            </p>
          )}
          <label className={styles.label} htmlFor="email">
            Last name
          </label>
          <input
            type="email"
            placeholder="Email *"
            className={`input ${styles.input}`}
            name="email"
            id="email"
            ref={register({ required: true })}
          />
          {!errors.email && <span className={styles.separator} />}
          {errors.email && (
            <p className={`text-body ${styles.error}`}>
              This is a required field.
            </p>
          )}
          <label className={styles.label} htmlFor="phone">
            Phone number
          </label>
          <input
            type="tel"
            placeholder="Phone number *"
            className={`input ${styles.input}`}
            name="phone"
            id="phone"
            ref={register({ required: true })}
          />
          {!errors.phone && <span className={styles.separator} />}
          {errors.phone && (
            <p className={`text-body ${styles.error}`}>
              This is a required field.
            </p>
          )}
          <label className={styles.label} htmlFor="address">
            Address
          </label>
          <input
            type="text"
            placeholder="Address *"
            className={`input ${styles.input}`}
            name="address"
            id="address"
            ref={register({ required: true })}
          />
          {!errors.address && <span className={styles.separator} />}
          {errors.address && (
            <p className={`text-body ${styles.error}`}>
              This is a required field.
            </p>
          )}
          <Select
            placeholder="Select a cleaning service *"
            options={[
              "Upkeep home & apartment",
              "Deep home & apartment",
              "Post construction & remodeling",
              "AirBnB turn over",
              "Move-In & Move Out",
            ]}
            name="cleaningService"
            onChange={(e) => checkFrequency(e)}
            register={register}
            required
          />
          {errors.cleaningService && (
            <p className={`text-body ${styles.error}`}>
              This is a required field.
            </p>
          )}
          <p className={`text-body ${styles.info}`}>
            For AirBnB turnover and Mov-In & Move Out a representative will call
            them for an accurate quote.
          </p>
          <Select
            placeholder="Add-Ons *"
            options={[
              "Clean inside the oven",
              "Clean inside the fridge",
              "Clean baseboards",
              "Interior window cleaning",
            ]}
            name="addOns"
            register={register}
            required
          />
          {!errors.addOns && <span className={styles.separator} />}
          {errors.addOns && (
            <p className={`text-body ${styles.error}`}>
              This is a required field.
            </p>
          )}
          {frequency && (
            <>
              <Select
                placeholder="Frequency *"
                options={[
                  "One-time",
                  "Weekly (3 months)",
                  "Weekly (6 months)",
                  "Weekly (12 months)",
                  "Biweekly (3 months)",
                  "Biweekly (6 months)",
                  "Biweekly (12 months)",
                  "Monthly (3 months)",
                  "Monthly (6 months)",
                  "Monthly (12 months)",
                ]}
                name="frequency"
                register={register}
                required
              />
              {!errors.frequency && <span className={styles.separator} />}
              {errors.frequency && (
                <p className={`text-body ${styles.error}`}>
                  This is a required field.
                </p>
              )}
            </>
          )}
          <label className={styles.label} htmlFor="date">
            Date
          </label>
          <input
            type="text"
            placeholder="Date  ( mm / dd / yyyy ) *"
            className={`input ${styles.input}`}
            name="date"
            id="date"
            ref={register({ required: true })}
          />
          {!errors.date && <span className={styles.separator} />}
          {errors.date && (
            <p className={`text-body ${styles.error}`}>
              This is a required field.
            </p>
          )}
          <p className={`text-body ${styles.text}`}>
            Are there any special requests, accommodations?
          </p>
          <label className={styles.label} htmlFor="specialRequests">
            Are there any special requests, accommodations?
          </label>
          <textarea
            className={styles["special-requests"]}
            name="specialRequests"
            rows="15"
            id="specialRequests"
            ref={register({ required: false })}
          />
          <button className="btn-primary" type="submit" disabled={loading}>
            {!loading ? (
              "Send your booking request"
            ) : (
              <div className={styles.spinner} aria-label="Loading" />
            )}
          </button>
        </form>
      </section>
      {confirmation && (
        <Confirmation
          data={confirmation}
          onClose={() => setConfirmation(null)}
        />
      )}
    </>
  );
};

export default Booking;
