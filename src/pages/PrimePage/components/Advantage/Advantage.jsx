import React from "react";
import styles from "./Advantage.module.css";
import { Typeography } from "../../../../ui/Typeography";
export const Advantage = ({ title, description, img }) => {
  return (
    <div className={styles["advantages-item"]}>
      <div className={styles.subcontainer}>
        <div className={styles["img-container"]}>
          <img src={img} alt="" className={styles.img} />
        </div>
        <Typeography
          color={"white"}
          variant={"h3"}
          fontSize={"24px"}
          m={"10px 0"}
        >
          {title}
        </Typeography>
        <Typeography
          color={"grey"}
          p={"0 0 10px 0"}
          className={styles["advantages-text"]}
        >
          {description}
        </Typeography>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};
