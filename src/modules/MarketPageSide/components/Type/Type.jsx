import styles from "./Type.module.css";
import { useTranslation } from "react-i18next";

import { Container } from "../../../../ui/Container";
import { List } from "../../../../ui/List";
import { Item } from "../../../../components/Item";

export const Type = () => {
  const { t, i18n } = useTranslation();
  const items = [
    { text: t("knives"), value: "knives" },
    { text: t("gloves"), value: "gloves" },
    { text: t("pistols"), value: "pistols" },
    { text: t("smgs"), value: "smgs" },
    { text: t("assault_rifles"), value: "assault_rifles" },
    { text: t("sniper_rifles"), value: "sniper_rifles" },
    { text: t("shotguns"), value: "shotguns" },
    { text: t("machine_guns"), value: "machine_guns" },
  ];
  return (
    <Container styles={styles.typeContainer}>
      <List>
        {items.map((item, i) => {
          return <Item text={item.text} value={item.value} />;
        })}
      </List>
    </Container>
  );
};
