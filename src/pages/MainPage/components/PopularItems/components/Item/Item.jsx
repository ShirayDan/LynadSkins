import React from "react";
import styles from "./Item.module.css";
import { useNavigate } from "react-router-dom";
import { Typeography } from "../../../../../../ui/Typeography";
import { Button } from "../../../../../../ui/Button";

export const Item = ({ img, exterior, price, width }) => {
  const nav = useNavigate();
  return (
    <div className={styles.item} style={{ width: width }}>
      <img src={img} alt="" className={styles.photo} />
      <div className={styles.description}>
        <Typeography variant={"h4"} color={"white"}>
          {exterior}
        </Typeography>
        <Typeography color={"white"}>
          {" "}
          From
          <Typeography variant={"span"} color={"white"}>
            {" "}
            {price}
          </Typeography>
        </Typeography>
      </div>
      <div className={styles.bottom}>
        <Button
          text={"Store"}
          hover={true}
          onClick={() => nav("/market")}
        ></Button>
      </div>
    </div>
  );
};
