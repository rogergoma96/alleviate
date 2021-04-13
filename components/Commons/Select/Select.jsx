import { useState } from 'react';
import ArrowIcon from '../Icons/Arrow';
import styles from './Select.module.scss';

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
    if (typeof onChange === 'function' && !out) {
      onChange(e);
    }

    setUnfolded(!unfolded);
  };

  return (
    <>
      <div className={styles.select}>
        <div
          role="button"
          tabIndex="0"
          className={styles.selected}
          onClick={(e) => changeState(e, false)}
          onKeyPress={(e) => changeState(e, false)}
        >
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
            <p className={styles['input-text']}>{placeholder}</p>
            <label htmlFor={`${name}-placeholder`} className={styles.label}>
              {placeholder}
            </label>
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
              <p className={styles['input-text']}>{option}</p>
              <label htmlFor={`${name}-${index}`} className={styles.label}>
                {option}
              </label>
            </div>
          ))}
          <span
            className={`${styles.icon} ${
              unfolded ? styles['icon--rotate'] : ''
            }`}
            aria-hidden="true"
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
                  aria-hidden
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      {unfolded && (
        <div
          role="button"
          tabIndex="0"
          className={styles.veil}
          onClick={(e) => changeState(e, true)}
          onKeyPress={(e) => changeState(e, true)}
          aria-label="Close"
        />
      )}
    </>
  );
};

export default Select;
