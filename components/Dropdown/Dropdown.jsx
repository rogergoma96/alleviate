import { useState } from "react";
import Arrow from "../Icons/Arrow";

import styles from "./Dropdown.module.scss";

const Dropdown = ({ children, label }) => {
  const [unfolded, setUnfolded] = useState(false);

  return (
    <>
      <button
        className={`text-action ${styles.dropdown} ${
          unfolded ? styles["dropdown--selected"] : ""
        }`}
        type="button"
        onClick={() => setUnfolded(!unfolded)}
      >
        {label}
        <Arrow />
      </button>
      {unfolded && children}
    </>
  );
};

export default Dropdown;
