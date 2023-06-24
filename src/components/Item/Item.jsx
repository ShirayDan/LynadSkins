import React from "react";
import styles from "./Item.module.css";

import { ListItem } from "../../ui/ListItem";
import { Typeography } from "../../ui/Typeography";
export const Item = ({ value, text }) => {
  return (
    <ListItem style={styles.item}>
      <input
        type="checkbox"
        className={styles.input}
        value={value}
        id={value}
      />
      <label className={styles.label} htmlFor={value}>
        <Typeography color={"white"}>{text}</Typeography>
      </label>
    </ListItem>
  );
};
