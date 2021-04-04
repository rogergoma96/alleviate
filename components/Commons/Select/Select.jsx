import { useState } from "react";
import ArrowIcon from "../Icons/Arrow";
import styles from "./Select.module.scss";

const Select = ({
  placeholder,
  options,
  name,
  onChange = null,
  register,
  required,
}) => {
  const [unfolded, setUnfolded] = useState(false);

  const changeState = (e, out) => {
    if (typeof onChange === "function" && !out) {
      onChange(e);
    }

    setUnfolded(!unfolded);
  };

  return (
    <>
      <div className={styles.select}>
        <div className={styles.selected} onClick={(e) => changeState(e, false)}>
          <div className={styles.placeholder}>
            <input
              className={styles.input}
              type="radio"
              id={`${name}-placeholder`}
              value={placeholder}
              name={name}
              defaultChecked="checked"
              tabIndex={0}
            />
            <p className={styles["input-text"]}>{placeholder}</p>
          </div>
          {options.map((option, index) => (
            <div className={styles.value} key={option}>
              <input
                className={styles.input}
                type="radio"
                id={`${name}-${index}`}
                value={option}
                name={name}
                tabIndex={0}
                ref={register({ required })}
              />
              <p className={styles["input-text"]}>{option}</p>
            </div>
          ))}
          <span
            className={`${styles.icon} ${
              unfolded ? styles["icon--rotate"] : ""
            }`}
          >
            <ArrowIcon />
          </span>
        </div>
        {unfolded && (
          <ul className={styles.list}>
            {options.map((option, index) => (
              <li key={option}>
                <label
                  className={styles.option}
                  htmlFor={`${name}-${index}`}
                  aria-hidden="aria-hidden"
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      {unfolded && (
        <div className={styles.veil} onClick={(e) => changeState(e, true)} />
      )}
    </>
  );
};

export default Select;
