import React from "react";
import styles from "./Modal.module.css";

import { Button } from "./../../ui/Button";
import { Cross } from "../Cross";
export const Modal = ({ children, handleClick, guns }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={() => handleClick()}></div>
      <div
        className={`${styles["modal-content"]} ${guns && styles["modal-guns"]}`}
      >
        {children}
        <Cross cl={styles["close-modal"]} onClick={() => handleClick()} />
      </div>
    </div>
  );
};
