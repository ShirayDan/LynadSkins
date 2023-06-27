import React from "react";
import styles from "./Knife.module.css";
export const Knife = ({ name, img, textStyle, lineStyle, imgStyles }) => {
  return (
    <div>
      <div className={styles[lineStyle]}>
        <div className={styles.bullet}></div>
        <p className={styles[textStyle]}>{name}</p>
      </div>
      <img src={img} alt={name} className={imgStyles} />
    </div>
  );
};
