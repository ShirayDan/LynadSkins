import styles from "./Other.module.css";
import { Container } from "../../../../ui/Container";
import { List } from "../../../../ui/List";
import { Item } from "../../../../components/Item";
export const Other = () => {
  const items = [
    { text: "StatTrack", value: "StatTrack" },
    { text: "Souvenir", value: "Souvenir" },
  ];
  return (
    <Container styles={styles.typeContainer}>
      <List variant={"ul"}>
        {items.map((item, i) => {
          return <Item text={item.text} value={item.value} />;
        })}
      </List>
    </Container>
  );
};
