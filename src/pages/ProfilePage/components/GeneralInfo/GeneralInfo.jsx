import React from "react";
import styles from "./GeneralInfo.module.css";

import { Typeography } from "../../../../ui/Typeography";
import { Input } from "../../../../ui/Input";
import { Button } from "../../../../ui/Button";
import { Container } from "../../../../ui/Container";
import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";
export const GeneralInfo = () => {
  return (
    <Container>
      <Typeography variant={"h2"} fontSize={"24px"} color={"white"}>
        General information
      </Typeography>
      <List>
        <ListItem style={styles.item}>
          <Typeography color={"white"}>Trade link:</Typeography>
          <Input mt={"10px"} mb={"10px"} width={"100%"} type={"url"}></Input>
          <div className={styles["btn-container"]}>
            <Button hover={true} text={"Apply"}></Button>
          </div>
        </ListItem>
        <ListItem style={styles.item}>
          <Typeography color={"white"}>API-key:</Typeography>
          <Input mt={"10px"} mb={"10px"} width={"100%"} type={"url"}></Input>
          <div className={styles["btn-container"]}>
            <Button hover={true} text={"Apply"}></Button>
          </div>
        </ListItem>
        <ListItem style={styles.item}>
          <div className={styles["links-item"]}>
            <Typeography color={"white"}>Seller link:</Typeography>
            <Typeography color={"white"}>
              https://lynadskins.money/?seller:
            </Typeography>
          </div>
          <div className={styles["btn-container"]}>
            <Button hover={true} text={"Apply"}></Button>
          </div>
        </ListItem>
        <ListItem style={styles.item}>
          <Typeography>
            {" "}
            <div className={styles["links-item"]}>
              <Typeography color={"white"}>Steam ID64:</Typeography>
              <Typeography color={"white"}>76561198308918726</Typeography>
            </div>
          </Typeography>
        </ListItem>
      </List>
    </Container>
  );
};
