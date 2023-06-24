import React from "react";
import styles from "./TabPc.module.css";
import { useTranslation } from "react-i18next";

import { List } from "../../../../ui/List";
import { ListItem } from "../../../../ui/ListItem";
import { Button } from "../../../../ui/Button";
export const TabPc = ({ info }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <List variant={"ul"}>
        {info.map((item, i) => {
          return (
            <ListItem style={i == 0 ? styles.subitemTop : styles.item}>
              <List
                variant={"ul"}
                display={"grid"}
                columns={"300px 1fr 1fr 1fr"}
              >
                <ListItem style={i == 1 ? styles.small : styles.subitemParam}>
                  {item.param}
                </ListItem>
                <ListItem style={i == 1 ? styles.small : styles.subitem}>
                  {item.standart}
                </ListItem>
                <ListItem style={i == 1 ? styles.small : styles.subitem}>
                  {item.prime}
                </ListItem>
                <ListItem style={i == 1 ? styles.small : styles.subitem}>
                  {item.trader}
                </ListItem>
              </List>
            </ListItem>
          );
        })}
        <ListItem>
          <List variant={"ul"} display={"grid"} columns={"300px 1fr 1fr 1fr"}>
            <ListItem></ListItem>
            <ListItem style={styles.subItemLast}>
              {t("prime_page.table.two.price")}
            </ListItem>
            <ListItem style={styles.subItemLast}>
              {t("prime_page.table.three.price")}
            </ListItem>
            <ListItem style={styles.subItemLast}>
              {t("prime_page.table.four.price")}
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List variant={"ul"} display={"grid"} columns={"300px 1fr 1fr 1fr"}>
            <ListItem></ListItem>
            <ListItem style={styles.subItemCurr}>
              {t("prime_page.current_plan")}
            </ListItem>
            <ListItem style={styles.subitem}>
              <Button
                hover={true}
                text={t("prime_page.try_free")}
                style={styles.btn}
              ></Button>
            </ListItem>
            <ListItem style={styles.subitem}>
              <Button
                disabled={true}
                text={t("prime_page.buy_now")}
                style={styles.btnDisabled}
              ></Button>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </div>
  );
};
