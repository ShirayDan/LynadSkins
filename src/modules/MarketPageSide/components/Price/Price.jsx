import styles from "./Price.module.css";
import { Typeography } from "../../../../ui/Typeography";
import { motion } from "framer-motion";

export const Price = () => {
  return (
    <motion.div
      className={styles.accordion}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <input type="text" placeholder="0.00" className={styles.priceInput} />
      <Typeography color={"white"} m={"0 15px"}>
        -
      </Typeography>
      <input type="text" placeholder="∞" className={styles.priceInput} />
    </motion.div>
  );
};
