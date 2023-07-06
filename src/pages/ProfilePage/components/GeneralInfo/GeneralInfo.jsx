import React from "react";
import styles from "./GeneralInfo.module.css";
import { useTranslation } from "react-i18next";

import { Typeography } from "../../../../ui/Typeography";
import { Input } from "../../../../ui/Input";
import { Button } from "../../../../ui/Button";
import { Container } from "../../../../ui/Container";
import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";
export const GeneralInfo = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Typeography variant={"h2"} fontSize={"24px"} color={"white"}>
        {t("personalPage.general_info")}
      </Typeography>
      <List>
        <ListItem style={styles.item}>
          <Typeography color={"white"}>
            {t("personalPage.trade_link")}
          </Typeography>
          <Input mt={"10px"} mb={"10px"} width={"100%"} type={"url"}></Input>
          <div className={styles["btn-container"]}>
            <Button hover={true} text={t("personalPage.apply")}></Button>
          </div>
        </ListItem>
        <ListItem style={styles.item}>
          <Typeography color={"white"}>{t("personalPage.api_key")}</Typeography>
          <Input mt={"10px"} mb={"10px"} width={"100%"} type={"url"}></Input>
          <div className={styles["btn-container"]}>
            <Button hover={true} text={t("personalPage.apply")}></Button>
          </div>
        </ListItem>
        <ListItem style={styles.item}>
          <div className={styles["links-item"]}>
            <Typeography color={"white"}>
              {t("personalPage.seller_link")}
            </Typeography>
            <Typeography color={"white"}>
              https://lynadskins.money/?seller:
            </Typeography>
          </div>
          <div className={styles["btn-container"]}>
            <Button hover={true} text={t("personalPage.apply")}></Button>
          </div>
        </ListItem>
        <ListItem style={styles.item}>
          <Typeography>
            {" "}
            <span className={styles["links-item"]}>
              <span className={styles.steamID}>Steam ID64:</span>
              <span className={styles.steamID}>76561198308918726</span>
            </span>
          </Typeography>
        </ListItem>
      </List>
    </Container>
  );
};
