import React from "react";
import styles from "./Button.module.css";
export const Button = ({ text, style, onClick, disabled, hover }) => {
  let cl = styles.btn;
  if (style) {
    cl += ` ${style}`;
  }
  if (hover == true) {
    cl += ` ${styles["btn-hover"]}`;
  }
  return (
    <button disabled={disabled} className={cl} onClick={onClick}>
      {text}
    </button>
  );
};
