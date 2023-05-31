import styles from "./Other.module.css";
import { Container } from "../../../../../../ui/Container";
import { Typeography } from "../../../../../../ui/Typeography";
export const Other = () => {
  const items = ["StatTrack", "Souvenir"];
  return (
    <Container styles={styles.typeContainer}>
      {items.map((item, i) => {
        return (
          <div className={styles.chechBoxItem}>
            <div className={styles.chechBox}></div>
            <Typeography color={"white"}>{item}</Typeography>
          </div>
        );
      })}
    </Container>
  );
};
