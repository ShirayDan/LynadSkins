import React from "react";
import styles from "./ContactInfo.module.css";
import { useTranslation } from "react-i18next";

import { Typeography } from "../../../../ui/Typeography";
import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typeography
        variant={"h2"}
        fontSize={"24px"}
        color={"white"}
        m={"0 0 10px 0"}
      >
        {t("personalPage.contact_info")}
      </Typeography>
      <List variant={"ul"} mt={"15px"} mb={"15px"}>
        <ListItem style={styles.item}>
          <div className={styles["item-top"]}>
            <Typeography color={"white"}>E-mail:</Typeography>
            <div className={styles.icons}>
              <FaPen
                fill="var(--text-primary)"
                className={styles["icon-hover"]}
              />
              <span className={styles.icon}>
                {" "}
                <FaTrash
                  fill="var(--text-primary)"
                  className={styles["icon-hover"]}
                />
              </span>
            </div>
          </div>
          <Typeography color={"grey"}>
            {t("personalPage.not_installed")}
          </Typeography>
        </ListItem>
        <ListItem style={styles.item}>
          <div className={styles["item-top"]}>
            <Typeography color={"white"}>Telegram:</Typeography>
            <div className={styles.icons}>
              <FaPen
                fill="var(--text-primary)"
                className={styles["icon-hover"]}
              />
              <span className={styles.icon}>
                {" "}
                <FaTrash
                  fill="var(--text-primary)"
                  className={styles["icon-hover"]}
                />
              </span>
            </div>
          </div>
          <Typeography color={"grey"}>
            {t("personalPage.not_installed")}
          </Typeography>
        </ListItem>
      </List>
    </div>
  );
};
