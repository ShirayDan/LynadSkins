import React from "react";
import styles from "./Button.module.css";
import { motion } from "framer-motion";

export const Button = ({ text, style, onClick, disabled, hover }) => {
  let cl = styles.btn;
  if (style) {
    cl += ` ${style}`;
  }
  if (hover == true) {
    cl += ` ${styles["btn-hover"]}`;
  }
  return (
    <motion.button
      whileTap={!disabled && { scale: 0.8 }}
      disabled={disabled}
      className={cl}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
