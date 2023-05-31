import styles from "./Exterior.module.css";
import { Container } from "../../../../../../ui/Container";
import { Typeography } from "../../../../../../ui/Typeography";
export const Exterior = () => {
  const items = [
    "Factory New",
    "Minimal Wear",
    "Field-Tested",
    "Well-Worn",
    "Battle-Scarred",
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
