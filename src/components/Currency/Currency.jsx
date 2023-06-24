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
      <div onClick={() => openModal(currencyOpen, setCurrencyOpen)}>
        <Typeography color={"white"} hover={true}>{`Currency ${
          currencyOpen ? "⮝" : "⮟"
        }`}</Typeography>
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
