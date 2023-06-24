import styles from "./Rarity.module.css";
import { useTranslation } from "react-i18next";

import { List } from "../../../../ui/List";
import { Container } from "../../../../ui/Container";
import { Item } from "../../../../components/Item";

export const Rarity = () => {
  const { t, i18n } = useTranslation();
  const items = [
    { text: t("consumer_grade"), value: "consumer_grade" },
    { text: t("industrial_grade"), value: "industrial_grade" },
    { text: t("milSpec_grade"), value: "milSpec_grade" },
    { text: t("restricted"), value: "restricted" },
    { text: t("classified"), value: "classified" },
    { text: t("covert"), value: "covert" },
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
