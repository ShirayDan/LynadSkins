import { useState } from "react";
import styles from "./Float.module.css";

export const Float = () => {
  const [value, setValue] = useState(1);
  return (
    <div className={styles.accordion}>
      <div className={styles["show-container"]}>
        <div className={styles["show-val"]}>0</div>
        <div className={styles["show-val"]}>{value}</div>
      </div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.001"
        value={value}
        className={styles["float-input"]}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
