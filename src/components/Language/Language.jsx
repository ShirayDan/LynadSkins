import React, { useState } from "react";
import styles from "./Language.module.css";

import { Button } from "../../ui/Button";
import { List } from "../../ui/List";
import { ListItem } from "../../ui/ListItem";
import { Typeography } from "../../ui/Typeography";
export const Language = ({ langFunc }) => {
  const [languageOpen, setlanguageOpen] = useState(false);

  const openModal = (val, setVal) => {
    setVal(!val);
  };
  return (
    <div className={styles["lang-cont"]}>
      <div onClick={() => openModal(languageOpen, setlanguageOpen)}>
        <Typeography color={"white"} hover={true}>{`Language ${
          languageOpen ? "⮝" : "⮟"
        }`}</Typeography>
      </div>
      {languageOpen && (
        <div className={styles.language}>
          <List variant={"ul"}>
            <ListItem
              onClick={() => langFunc.changeLanguage("en")}
              style={styles.item}
            >
              English
            </ListItem>
            <ListItem
              onClick={() => langFunc.changeLanguage("ua")}
              style={styles.item}
            >
              Ukrainian
            </ListItem>
          </List>
        </div>
      )}
    </div>
  );
};
