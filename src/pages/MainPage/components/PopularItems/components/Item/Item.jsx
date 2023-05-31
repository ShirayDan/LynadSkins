import React from "react";
import styles from "./Item.module.css";
import { Typeography } from "../../../../../../ui/Typeography";
export const Item = ({ img, exterior, price, width }) => {
  return (
    <div className={styles.item} style={{ width: width }}>
      <img src={img} alt="" className={styles.photo} />
      <div className={styles.description}>
        <Typeography variant={"h4"} color={"white"}>
          {exterior}
        </Typeography>
        <Typeography>
          {" "}
          From
          <Typeography variant={"span"} color={"white"}>
            {" "}
            {price}
          </Typeography>
        </Typeography>
      </div>
    </div>
  );
};
