import styles from "./Rarity.module.css";
import { Typeography } from "../../../../../../ui/Typeography";
import { Container } from "../../../../../../ui/Container";
export const Rarity = () => {
  const items = [
    "Consumer Grade",
    "Industrial Grade",
    "Mil-Spec Grade",
    "Restricted",
    "Classified",
    "Covert",
  ];
  return (
    <Container styles={styles.typeContainer}>
      {items.map((item, i) => {
        return (
          <div className={styles.checkBoxItem}>
            <div className={styles.checkBox}></div>
            <Typeography color={"white"}>{item}</Typeography>
          </div>
        );
      })}
    </Container>
  );
};
