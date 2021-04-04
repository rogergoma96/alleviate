import { useState } from "react";
import Arrow from "../Icons/Arrow";

import styles from "./Dropdown.module.scss";

const Dropdown = ({ children, label, className }) => {
  const [unfolded, setUnfolded] = useState(false);

  return (
    <>
      <button
        className={`${className ? className : "text-action"} ${
          styles.dropdown
        } ${unfolded ? styles["dropdown--selected"] : ""}`}
        type="button"
        onClick={() => setUnfolded(!unfolded)}
      >
        {label}
        <span className={styles.icon}>
          <Arrow />
        </span>
      </button>
      {unfolded && children}
    </>
  );
};

export default Dropdown;
