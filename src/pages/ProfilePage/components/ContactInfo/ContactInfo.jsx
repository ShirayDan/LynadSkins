import React from "react";
import styles from "./ContactInfo.module.css";
import { Typeography } from "../../../../ui/Typeography";
import { Input } from "../../../../ui/Input";
import { Button } from "../../../../ui/Button";
import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";

export const ContactInfo = () => {
  return (
    <div>
      <Typeography
        variant={"h2"}
        fontSize={"24px"}
        color={"white"}
        m={"0 0 10px 0"}
      >
        Contact information
      </Typeography>
      <List variant={"ul"} mt={"15px"} mb={"15px"}>
        <ListItem style={styles.item}>
          <div className={styles["item-top"]}>
            <Typeography color={"white"}>E-mail:</Typeography>
            <div className={styles.icons}>
              <div className={styles.iconred}></div>
              <div className={styles.icon}></div>
            </div>
          </div>
          <Typeography color={"grey"}>Not installed</Typeography>
        </ListItem>
        <ListItem style={styles.item}>
          <div className={styles["item-top"]}>
            <Typeography color={"white"}>Telegram:</Typeography>
            <div className={styles.icons}>
              <div className={styles.iconred}></div>
              <div className={styles.icon}></div>
            </div>
          </div>
          <Typeography color={"grey"}>Not installed</Typeography>
        </ListItem>
      </List>
    </div>
  );
};
