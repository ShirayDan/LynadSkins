import React from "react";
import styles from "./TabContent.module.css";
import { List } from "./../../../../ui/List";
import { ListItem } from "./../../../../ui/ListItem";
import { Button } from "../../../../ui/Button";
import { Typeography } from "../../../../ui/Typeography";
export const TabContent = ({ info, val }) => {
  return (
    <div className={styles.container}>
      <List>
        {info[0].map((item, i) => {
          return (
            <ListItem style={styles.item}>
              <Typeography color={"grey"}>{item.option}</Typeography>
              <Typeography p={"0 0 0 15px"}>{item.status}</Typeography>
            </ListItem>
          );
        })}
      </List>
      <div className={styles.bottom}>
        <Typeography
          color={"white"}
          fontSize={"32px"}
          m={"0 0 15px 0"}
          textAlign={"center"}
        >
          {info[1]}
        </Typeography>
        <Button
          disabled={val == 3 && true}
          style={val == 3 ? styles["btn-disabled"] : styles.btn}
          text={"Choose this plan"}
        ></Button>
      </div>
    </div>
  );
};
