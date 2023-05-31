import styles from "./Type.module.css";
import { Typeography } from "../../../../../../ui/Typeography";
import { Container } from "../../../../../../ui/Container";
export const Type = () => {
  const items = [
    "Knives",
    "Gloves",
    "Pistols",
    "SMGs",
    "Assault Rifles",
    "Sniper Rifles",
    "Shotguns",
    "Machine Guns",
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
