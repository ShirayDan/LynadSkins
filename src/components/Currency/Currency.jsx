import React, { useState } from "react";
import styles from "./Currency.module.css";

import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { Typeography } from "../../ui/Typeography";

export const Currency = () => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const openModal = (val, setVal) => {
    setVal(!val);
  };
  return (
    <div className={styles["curr-cont"]}>
      <div
        className={styles.text}
        onClick={() => openModal(currencyOpen, setCurrencyOpen)}
      >
        <Typeography color={"white"} hover={true} icon={true}>
          Currency
          <div
            className={
              currencyOpen
                ? `${styles.icon} ${styles["icon-opened"]}`
                : styles.icon
            }
          >
            <svg height="24" viewBox="0 0 24 24" width="24">
              <path d="M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z" />
            </svg>
          </div>
        </Typeography>
      </div>
      {currencyOpen && (
        <div className={styles.currency}>
          <List variant={"ul"}>
            <ListItem style={styles.item}>USD</ListItem>
            <ListItem style={styles.item}>UAH</ListItem>
          </List>
        </div>
      )}
    </div>
  );
};
