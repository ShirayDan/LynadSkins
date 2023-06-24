import React from "react";
import styles from "./BuyBtn.module.css";
import { Typeography } from "../../../../ui/Typeography";
export const BuyBtn = () => {
  return (
    <div className={styles.btn}>
      <div className={styles.inventory}>
        <Typeography color={"white"} fontSize={"20px"}>
          $ 0
        </Typeography>
        <Typeography color={"white"}>You offer</Typeography>
      </div>
      <div className={styles.icon}></div>
      <div className={styles["trade-place"]}>
        {" "}
        <Typeography color={"white"} fontSize={"20px"}>
          $ 0
        </Typeography>
        <Typeography color={"white"}>You will get</Typeography>
      </div>
    </div>
  );
};
