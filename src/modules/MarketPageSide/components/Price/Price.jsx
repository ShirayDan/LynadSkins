import styles from "./Price.module.css";
import { Typeography } from "../../../../ui/Typeography";
export const Price = () => {
  return (
    <div className={styles.accordion}>
      <input type="text" placeholder="0.00" className={styles.priceInput} />
      <Typeography color={"white"} m={"0 15px"}>
        -
      </Typeography>
      <input type="text" placeholder="∞" className={styles.priceInput} />
    </div>
  );
};
