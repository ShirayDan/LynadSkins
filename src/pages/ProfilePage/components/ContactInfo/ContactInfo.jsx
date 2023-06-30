import React from "react";
import styles from "./ContactInfo.module.css";

import { Typeography } from "../../../../ui/Typeography";
import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

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
              <FaPen />
              <span className={styles.icon}>
                {" "}
                <FaTrash />
              </span>
            </div>
          </div>
          <Typeography color={"grey"}>Not installed</Typeography>
        </ListItem>
        <ListItem style={styles.item}>
          <div className={styles["item-top"]}>
            <Typeography color={"white"}>Telegram:</Typeography>
            <div className={styles.icons}>
              <FaPen />
              <span className={styles.icon}>
                {" "}
                <FaTrash />
              </span>
            </div>
          </div>
          <Typeography color={"grey"}>Not installed</Typeography>
        </ListItem>
      </List>
    </div>
  );
};
