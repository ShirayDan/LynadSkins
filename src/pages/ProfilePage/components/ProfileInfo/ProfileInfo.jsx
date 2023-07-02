import React from "react";
import styles from "./ProfileInfo.module.css";
import { useTranslation } from "react-i18next";

import { Container } from "../../../../ui/Container";
import { Typeography } from "../../../../ui/Typeography";
import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";

export const ProfileInfo = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Typeography fontSize={"24px"} variant={"h2"} color={"white"}>
        {t("personalPage.profile")}
      </Typeography>
      <div className={styles["profile-info"]}>
        <img src="" alt="" />
        <Typeography variant={"h3"} color={"white"}>
          {t("personalPage.profile_name")}
        </Typeography>
      </div>
      <List>
        <ListItem
          display={"flex"}
          justifyContent={"space-between"}
          style={styles.item}
        >
          <Typeography color={"grey"}>
            {t("personalPage.commission")}
          </Typeography>
          <Typeography color={"white"}>7%</Typeography>
        </ListItem>
        <ListItem
          display={"flex"}
          justifyContent={"space-between"}
          style={styles.item}
        >
          <Typeography color={"grey"}>
            {t("personalPage.registration")}
          </Typeography>
          <Typeography color={"white"}>20.01.2020</Typeography>
        </ListItem>
        <ListItem
          display={"flex"}
          justifyContent={"space-between"}
          style={styles.item}
        >
          <Typeography color={"grey"}>{t("personalPage.trades")}</Typeography>
          <Typeography color={"white"}>0</Typeography>
        </ListItem>
      </List>
    </Container>
  );
};
