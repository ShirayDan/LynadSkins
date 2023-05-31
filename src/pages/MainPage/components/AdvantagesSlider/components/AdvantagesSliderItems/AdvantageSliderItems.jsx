import React from "react";
import styles from "./AdvantageSliderItems.module.css";
import { Typeography } from "../../../../../../ui/Typeography/Typeography";
import { List } from "../../../../../../ui/List";
import { ListItem } from "../../../../../../ui/ListItem";
export const AdvantageSliderItems = ({ content }) => {
  return (
    <div className={styles.item}>
      <div className={styles.subcont}>
        <Typeography mt={"10px"} color={"purple"} variant={"h3"}>
          {content.title}
        </Typeography>
      </div>
      <Typeography color={"white"} mt={"10px"}>
        {content.text}
      </Typeography>

      <List mt={"10px"} variant={"ul"}>
        {content.advantages.map((item, i) => {
          return <ListItem style={styles.listItems}>{item}</ListItem>;
        })}
      </List>
    </div>
  );
};
