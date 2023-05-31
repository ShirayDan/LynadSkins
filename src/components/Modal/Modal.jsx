import React from "react";
import styles from "./Modal.module.css";
import { Button } from "./../../ui/Button";
export const Modal = ({ children, handleClick }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={() => handleClick()}></div>
      <div className={styles["modal-content"]}>
        {children}
        <Button
          text={"CLOSE"}
          style={styles["close-modal"]}
          onClick={() => handleClick()}
        ></Button>
      </div>
    </div>
  );
};
