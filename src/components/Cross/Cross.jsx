import React from "react";
import styles from "./Cross.module.css";
export const Cross = ({ onClick, cl }) => {
  return (
    <div className={cl}>
      <div className={`${styles["burger-btn"]}`} onClick={onClick}>
        <span className={styles["burger-span-top"]}></span>
        <span className={styles["burger-span-bottom"]}></span>
      </div>
    </div>
  );
};
