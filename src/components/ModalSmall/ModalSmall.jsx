import React from "react";
import styles from "./ModalSmall.module.css";

import { Cross } from "../Cross";
export const ModalSmall = ({ children, handleClick }) => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        {children}
        <Cross cl={styles["close-modal"]} onClick={() => handleClick()} />
      </div>
    </div>
  );
};
