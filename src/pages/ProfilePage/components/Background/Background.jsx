import React from "react";
import styles from "./Background.module.css";
export const Background = ({ children }) => {
  return <div className={styles.bg}>{children}</div>;
};
