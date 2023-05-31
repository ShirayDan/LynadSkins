import React from "react";
import styles from "./Button.module.css";
export const Button = ({ text, style, onClick }) => {
  let cl = styles.btn;
  if (style) {
    cl += ` ${style}`;
  }
  return (
    <button className={cl} onClick={onClick}>
      {text}
    </button>
  );
};
